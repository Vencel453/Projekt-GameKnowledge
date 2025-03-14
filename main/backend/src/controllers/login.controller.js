import jwtHandler from "../utilities/jwe.methods.js";
import bcryptMethods from "../utilities/bcrypt.methods.js";
import User from "../models/user.js";

export default {
    // A bejelentkezést kezelő metódus
    LoginPostController: async (req, res) => {
        try {
            // Mivel ezeknek az értéke nem változik, konstansként mentjük el hogy tovább dolgozzunk vele
            const {username: loginUsername, password: loginPassword} = req.body;

        // Ha bármelyik mező üres, akkor az ahhoz megfelelő hiba kódot és üzenetet küldük
            if (!loginUsername || !loginPassword) {
                res.status(400).json({
                    error: true,
                    message: "Not every field was filled!"
                });
                return;
            }

            // Konstansként elmentjük azt a felhasználót az adatbázisból amelyik neve megegyezik a megadottal
            const correctUser = await User.findOne({
                where: {username: loginUsername}
            });

            // Ha nincs teljes egyezés, akkor hiba üzenetet küldünk
            if (!correctUser) {
                res.status(400).json({
                    error: true,
                    message: "The username or password is incorrect!"
                });
                return;
            }
            // Itt ellenőrizzük hogy a felhasználó titkosított jelszava visszafejtve megegyezik-e a felhasználóval megadott jelszóva
            const correctPassword = bcryptMethods.Comparing(loginPassword, correctUser.password);

            // Ha a jelszó helyesen van megadva akkor a felhasználóhoz készül egy token és beengedi az oldalra
            // Más esetben hiba üzenetet küld, hogy a felhasználónév vagy a jelszó helytelen
            if (correctPassword === true) {
                const token = await jwtHandler.CreatingToken(correctUser.id, correctUser.username, correctUser.email);

                res.setHeader("Authorization", `Bearer ${token}`);
                res.status(200).json({
                    error: false,
                    message: "Succefull login",
                    isAdmin: correctUser.admin,
                    token: token
                });
                return;
            } 
            else {
                res.status(400).json({
                    error: true,
                    message: "The username or password is incorrect!"
                });
                return;
            }
            
        }
        // Ha bármi nem tervezett hiba történik a futás során akkor a hibát írja a konzolra és küldje vissza, hogy valami hiba történt
        catch (error) {
            console.log(error);
            res.status(500).json({
                error: true,
                message: "Something went wrong during the login!"
            });
            return;
        }
    }
}