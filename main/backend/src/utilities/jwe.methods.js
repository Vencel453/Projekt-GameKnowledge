import { compactDecrypt, EncryptJWT} from "jose";
import models from "../models/index.js";
import { Op } from "sequelize";
import crypto from "crypto";

// A token titkosításához használt kulcs egy random szám, Uint8Array típusú, mert a titkosításhoz ilyen típusú objektum kell
// Ez a kulcs minden szerver indításnál új, amely tovább növeli a bztonságot
const securekey = new Uint8Array(32);
crypto.randomFillSync(securekey);

// Ezeket a metódusokat külön fájlba hozzuk létre majd exportáljuk őket, így a kód átláthatóbb és a token hítelesítés esetén így csak
// egyszerkell megírni a kódot
export default {
    // Ez a metódus a tokent hítelesíti, 
    Authenticating: async (req, res, next) => {
        // Kedzve azzal hogy a headers-ből lekéri és eltárolja a tokent,
        // ha nincs token, akkor írja ki a megfelelő hiba üzenetet és http kódot
        const newToken = req.headers['authorization']?.split(' ')[1];
        if (!newToken) {
            res.status(403).json({
                error: "true",
                message: "A valid token is required!"
            });
            return;
        }

        // Ha van token akkor a kód egy try catch párban folytatódik hogy kezelni tudjuk az előforduló nem számított hibábákat
        try {
            // Ha olyan token-t kapunk amely benne van a fekete listában, akkor ne gátoljuk a tovább jutást
            const invalidToken = await models.Blacklistedtoken.findOne({where: {token: newToken}});
            if (invalidToken) {
                res.status(403).json({
                    error: "true",
                    message: "The token is invalid or expired!"
                });
                return;
            }

            // Ha a token-t visszatudjuk fejteni sikeresen az azt jelenti hogy működik és mehetünk a következő middleware-re
            // más esetben visszaküldük a megfelelő http kódot és üzenetet
            await compactDecrypt(newToken, securekey)
                .then(() => {
                    this.ExntendingToken(req, res, next);
                    next();
                })
                .catch((error) => {
                    console.log(error);
                    res.status(401).json({
                        error: "true",
                        message: "The token is invalid or expired!"
                    });
                    return;
                });
        } 
        catch (error) {
            console.log(error);
            res.status(500).json({
                error: "true",
                message: "Something went wrong during the authenticating!"
            });
            return;
        }
    },

    // Ez a metődus a token-t hozza létre a felhasználónév és email alapján
    CreatingToken: async (loginId, loginUsername, loginEmail) => {
        const payload = {
            id: loginId,
            username: loginUsername,
            email: loginEmail,
        };

        // Itt jön létre a token, a payload a felhasználó adatokat használja, 1 óráig érvényes a token, titkosított fejléce van,
        // a titkosítás a fájl elején létrehozott kulccsal történik
        // Végül vissza adja a token-t
        const token = await new EncryptJWT(payload)
            .setExpirationTime("1 hour")
            .setProtectedHeader({ alg: "dir", enc: "A256GCM"})
            .encrypt(securekey)
        return token;
    },

    // Ez a metódus egy middleware-ként szolgál, amely a felhasználó token-ét cseréli le egy újra, ha a felhasználó még mindig aktív
    ExntendingToken: async (req, res, next) => {
        // A tokent lekérdezzük, majd visszafejtjük és lemenetjük a nyers adatokat
        const currentToken = req.headers['authorization']?.split(' ')[1];
        const decodedToken = await compactDecrypt(currentToken, securekey);
        const currentPayload = JSON.parse(decodedToken.plaintext.toString("utf8"));

        // A token lejárati idejét és a jelenlegi dátumut lementjük egy azonos formátumban, majd kiszámoljuk hogy mennyi idő van hátra
        // a token élettartalmából
        const expire = decodedToken.exp * 1000;
        const currentDate = new Date();
        const timeLeft = currentDate - expire;

        // A következő sorok a biztonság kedvéért try catch párban vannak írva hogy a felmerülő hibákat kezelni tudjuk
        try {
            // Ha a maradék idő kevesebb mint 20 perc akkor a felhasználónak adunk egy új token-t  és a régi tokent fekete listázzuk
            // majd tovább lépünk, más esetben vissza küldjük hogy még nincs szükség új tokenre
            if (timeLeft < 1200000) {
                this.Blacklisting(req);
                const newToken = await this.CreatingToken(currentPayload.id, currentPayload.username, currentPayload.email);
                res.status(201).json({
                    error: "false",
                    message: "The token was about to expire, so a new one was created",
                    token: newToken,
                });
                next();
            }
            else {
                res.status(200).json({
                    error: "false",
                    message: "The token is still viable for a while"
                });
                return;
            }
        } 
        catch (error) {
            console.log(error);
            res.status(500).json({
                error: true,
                message: "Something went wrong when checking the validity of the token!",
            });
            return;
        }
    },

    // Ez a metódus a fekete listázásért felel
    Blacklisting: async (req) => {
        // Visszafejtjük a token-t hogy kinyerjük a szükséges adatokat
        const logOutToken = req.headers['authorization']?.split(' ')[1];
        const decodedToken = await compactDecrypt(logOutToken, securekey);
        const currentPayload = JSON.parse(decodedToken.plaintext.toString("utf8"));

        // Lementjük a jelenlegi dátumot és megkeressük a felhasználót a neve alapján
        const currentDate = new Date();
        const logOutUser = await models.User.findOne({where: {username: currentPayload.username}})

        // Az adatbázisban lementjük a szükséges adatokat a tokenről
        await models.Blacklistedtoken.create({
            userId: logOutUser.id,
            token: logOutToken,
            date: currentDate,
        });

        // Megnézzük hogy az adatbázisban van-e már olyan token ami 1 óránál régebbi, ha igen akkor töröljük, mert a token lejárt
        // és felesleges feketelistán tárolni, mert már amúgy se használható
        const datecheck = new Date(Date.now() - 3600000)
        await models.Blacklistedtoken.destroy({
            where: {
                date: {
                    [Op.lt]: datecheck
                }
            }
        }).then(
            console.log("Old tokens succesfully deleted")
        )
        .catch(error => {
            console.log("There was an error: " + error);
        })
        return;
    },

    GetUserId: async (req) => {
        const token = req.headers['authorization']?.split(' ')[1];
        console.log(token);
        const decodedToken = await compactDecrypt(token, securekey)
            .catch((error) => {
                console.log(error);
            })
        const currentPayload = JSON.parse(decodedToken.plaintext.toString("utf8"));
        console.log(decodedToken.plaintext);
        console.log(currentPayload);
        const returnValue = currentPayload.id;
        console.log(currentPayload.id);
        return currentPayload.id;
        
    }
}