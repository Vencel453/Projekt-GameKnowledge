import { jwtDecrypt, SignJWT } from "jose";
import { jwtVerify } from "jose";
import models from "../models/index.js";
import { Op } from "sequelize";
import { error } from "console";

// A token létrehozásához használt kulcs, ezt a végső programban érdemes egy helyi változóban tárolni, de jelenleg egy konstansként
// tároljuk a hordozhatóság érdekében
const key = "GameKnowledgeSuperSecretDecoder58739";

// Ezeket a metódusokat külön fájlba hozzuk létre majd exportáljuk őket, így a kód átláthatóbb, és a token hítelesítés esetén így csak
// egyszerkell megírni a kódot
export default {
    // Ez a metódus a tokent hítelesíti, kedzve azzal hogy a headers-ből lekéri és eltárolja a tokent
    Authenticating: async (req, res, next) => {
        const newToken = req.headers['authorization']?.split(' ')[1];

        // Ha nincs token, akkor írja ki ezt a hiba üzenetet
        if (!newToken) {
            res.status(403).json({
                error: "true",
                message: "A valid token is required!"
            });
            return;
        }

        try {
            const invalidToken = await models.Blacklistedtoken.findOne({where: {token: newToken}});

            if (invalidToken) {
                res.status(403).json({
                    error: "true",
                    message: "The token is invalid or expired!"
                });
                return;
            }

            const { payload } = await jwtVerify(newToken, new TextEncoder().encode(key));

            req.user = payload;
            next();
        } 
        catch (error) {
            console.log(error);
            res.status(401).json({
                error: "true",
                message: "The token is invalid or expired!"
            });
            return;
        }
    },

    CreatingToken: async (loginUsername, isAdmin) => {
        const payload = {
            username: loginUsername,
            admin: isAdmin,
        };

        const token = await new SignJWT(payload)
            .setIssuedAt()
            .setExpirationTime("1h")
            .setProtectedHeader({ alg: "HS256"})
            .sign(new TextEncoder().encode(key));

        return token;
    },

    ExntendingToken: async (req, res, next) => {
        const currentToken = req.headers['authorization']?.split(' ')[1];

        const decodedToken = jwtDecrypt(currentToken, key, (error) => {
            if (error) {
                console.log("An erroc occured: " + error)
                return;
            }
        });

        const expire = (await decodedToken).payload.exp * 1000;
        const currentDate = new Date();

        const timeLeft = currentDate - expire;

        if (timeLeft < 1200000) {
            
        }
        
        
    },

    LoggingOut: (req) => {
        const logOutToken = req.headers['authorization']?.split(' ')[1];
        const currentDate = new Date();
        models.Blacklistedtoken.create({
            token: logOutToken,
            date: currentDate
        });

        const datecheck = new Date(Date.now() - 1000 * 60 * 60)
        models.Blacklistedtoken.destroy({
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
    }
}