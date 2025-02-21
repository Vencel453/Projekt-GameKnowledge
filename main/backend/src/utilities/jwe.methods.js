import { compactDecrypt, EncryptJWT} from "jose";
import { Op } from "sequelize";
import crypto from "crypto";
import Blacklistedtoken from "../models/blacklistedtoken.js";

// A token titkosításához használt kulcs egy random szám, Uint8Array típusú, mert a titkosításhoz ilyen típusú objektum kell
// Ez a kulcs minden szerver indításnál új, amely tovább növeli a bztonságot
const securekey = new Uint8Array(32);
crypto.randomFillSync(securekey);

// Ezeket a metódusokat külön fájlba hozzuk létre majd exportáljuk őket, így a kód átláthatóbb és a token hítelesítés esetén így csak
// egyszerkell megírni a kódot
export default {
    // Ez a metődus a token-t hozza létre a felhasználónév és email alapján
    CreatingToken: async (loginId, loginUsername, loginEmail) => {
        const payload = {
            id: loginId,
            username: loginUsername,
            email: loginEmail,
        };
        console.log(payload);

        // Megnézzük hogy az adatbázisban van-e már olyan token ami 1 óránál régebbi, ha igen akkor töröljük, mert a token lejárt
        // és felesleges feketelistán tárolni, mert már amúgy se használható
        const datecheck = new Date(Date.now() - 3600000);

        await Blacklistedtoken.destroy({
            where: {
                date: {
                    [Op.lt]: datecheck
                }
            }
        }).then(
            console.log("Old tokens succesfully deleted!")
        )
        .catch(error => {
            console.log("There was an error: " + error);
        });

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

        if (!currentToken) {
            res.status(200).json({
                error: "false",
                message: "There's no token, continue"
            });
            next();
        }
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
                await this.Blacklisting(req);
                const newToken = await new EncryptJWT(currentPayload)
                    .setExpirationTime("1 hour")
                    .setProtectedHeader({ alg: "dir", enc: "A256GCM"})
                    .encrypt(securekey)

                res.status(201).json({
                    error: "false",
                    message: "The token was about to expire, so a new one was created!",
                    token: newToken,
                });
                next();
            }
            else {
                res.status(200).json({
                    error: "false",
                    message: "The token is still viable for a while!"
                });
                next();
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

        if (logOutToken === undefined) {
            return false;
        }

        const userId = null;

        await compactDecrypt(logOutToken, securekey)
            .then((decodedToken) => {
                const currentPayload = JSON.parse(decodedToken.plaintext.toString("utf8"));
                userId = currentPayload.id;
            })
            .catch((error) => {
                console.log(error);
                return true;
            });

        // Lementjük a jelenlegi dátumot és megkeressük a felhasználót a neve alapján
        const currentDate = new Date();

        // Az adatbázisban lementjük a szükséges adatokat a tokenről
        await Blacklistedtoken.create({
            userId: userId,
            token: logOutToken,
            date: currentDate,
        });
    },

    // Ez a metódus a token-ből kinyeri a felhasználó azonosítóját
    GetUserId: async (req) => {
        // A token lekérjük, de utána ellenőrizzük hogy van e tényleges token, ha nincs akkor vissza küldünk egy undefined
        // eredményt, amit a fő program majd kezel 
        const token = req.headers['authorization']?.split(' ')[1];
        
        if (!token) {
            return undefined;
        }

        let id = 0;
        // Dekódoljuk a token-t majd az abból szükszéges adatot, vagyis az azonosítót visszaküldjük
        await compactDecrypt(token, securekey)
            .then((decodedToken) => {
                const currentPayload = JSON.parse(decodedToken.plaintext.toString("utf8"));
                id = currentPayload.id;
            })
            .catch((error) => {
                console.log(error);
            });
        
        if (id === 0) {
            return undefined;
        }
        else {
            return id;
        }
    }
}