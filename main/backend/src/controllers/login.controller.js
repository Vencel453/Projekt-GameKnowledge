import jwtHandler from "../jwt/jwtHandler.js";
import bcryptMethods from "../bcrypt-methods/bcrypt.methods.js";
import models from "../models/index.js";

export default {
    // A bejelentkezés kezelő metódus
    LoginPutController: async (req, res) => {
        // Mivel ezeknek az értéke nem változik, konstansként mentjük el hogy tovább dolgozzunk vele
        const {username: loginUsername, password: loginPassword} = req.body;

        // Ha bármelyik mező üres, akkor az ahhoz megfelelő hiba kódot és üzenetet
        if (loginUsername === undefined || loginPassword === undefined) {
            res.status(400).json({
                error: "true",
                message: "Not every field is filed!"
            });
            return;
        }

        // Try catch párban írjuk a következő részeket ahol az adatbázist el kell érnünk
        try {
            // Konstansként elmentjük azt a felhasználót az adatbázisból amelyik neve megegyezik a megadottal
            const correctUser = await models.User.findOne({where: {username: loginUsername}});
            // Itt ellenőrizzük hogy a felhasználó titkosított jelszava visszafejtve megegyezik-e a felhasználóval megadott jelszóval
            const correctPassword = bcryptMethods.Comparing(loginPassword, correctUser.password);

            // Ha a felhasználónév és a jelszó is helyesen van megadva akkor a felhasználóhoz készül egy token és beengedi az oldalra
            // Más esetben hiba üzenetet küld, hogy a felhasználónév vagy a jelszó helytelen
            if (correctUser && correctPassword) {
                const token = await jwtHandler.CreatingToken(correctUser.username);

                res.status(200).json({
                    error: "false",
                    message: "Succefull login",
                    isAdmin: correctUser.admin,
                    token: token
                });
                return;
            } 
            else {
                res.status(400).json({
                    error: "true",
                    message: "The username or password is incorrect"
                });
                return;
            }
            
        }
        // Ha bármi nem tervezett hiba történik a futás során akkor a hibát írja a konzolra és küldje vissza, hogy valami hiba történt
        catch (error) {
            console.log(error);
            res.status(500).json({
                error: "true",
                message: "Something went wrong during the login!"
            });
            return;
        }
    },
}