import jweMethods from "../utilities/jwe.methods.js";
import User from "../models/user.js";
import validationMethods from "../utilities/validation.methods.js";
import bcryptMethods from "../utilities/bcrypt.methods.js";

export default {
    MyprofileGetController: async(req, res) => {
        try {
            // Lekérjük a bejelentkezett felhasználó azonosítóját, ha nincs, akkor hiba üzenetet küldünk
            const userId = await jweMethods.GetUserId(req);
            if (userId === undefined) {
                res.status(401).json({
                    error: true,
                    message: "The token is missing or faulty!"
                });
                return;
            }

            // Az azonosító alapján megkeressük a felhasználót
            const user = await User.findOne({
                attributes: ["username", "email", "admin", "creation"],
                where: {
                    id: userId
                }
            });

            // Végül a válaszban visszaadjuk a felhasználó adatait
            res.status(200).json({
                error: false,
                message: "The user's data are successfully fetched!",
                user: user
            });
            return;

            
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                error: true,
                message: "Something went wrong fetching the user's data!"
            });
            return;
        }
    },

    MyprofilePostController: async(req, res) => {
        try {
            // Lekérjük a bejelentkezett felhasználó azonosítóját, ha nincs, akkor hiba üzenetet küldünk
            const userId = await jweMethods.GetUserId(req);
            if (userId === undefined) {
                res.status(401).json({
                    error: true,
                    message: "The token is missing or faulty!"
                });
                return;
            }

            // Konstansként lementjük a req.body-ban lévő értékékeket, illetve létrehozunk egy objektumot, amely leköveti hogy
            // a felhasználó milyen adatokat változtat és hogy mire
            const {username, email, password, passwordAgain} = req.body;
            const changes = new Object();

            // Egy változóban llenőrizzük hogy történik-e változtatás
            let empty = true;
            // A lekért azonosító alapján lekérjük a felhasználó adatait
            const user = await User.findOne({where: {id: userId}, attributes: ["username", "password", "email"]});

            // A felhasználó nevet ellenőrizzük hogy meglett-e adva, ha nem, akkor megyünk a következő adatra
            if (username) {
                // Ha a megadott felhasználó név ugyanaz mint az eredeti, akkor hiba üzenetet küldünk
                if (username === user.username) {
                    res.status(409).json({
                        error: "true",
                        message: "The username is the same as the original!"
                    });
                    return;
                }

                // Ha a megadott névvel már létezik felhasználó, akkor hiba üzenetet küldünk
                const conflictingUsername = await User.findOne({where: {username: username}});
                if (conflictingUsername) {
                    res.status(409).json({
                        error: "true",
                        message: "There's already an user with this username!"
                    });
                    return;
                }
                else {
                    // Megnézzük hogy a felhasználónév formátuma helyes, ha nem akkor hiba üzenetet küldünk
                    if (validationMethods.CheckUsername(username) === false) {
                        res.status(400).json({
                            error: "true",
                            message: "The username is not in the correct length or contains space!"
                        });
                        return;
                    }
                    // Megnézzük hogy a felhasználónév tartalmaz-e káromkodást, ha igen, akkor hiba üzenetet küldünk
                    if (validationMethods.CheckProfanity(username) === true) {
                        res.status(400).json({
                            error: "true",
                            message: "The username contains profanity!"
                        });
                        return;
                    }
                }
                // Ha minden ellenőrzésen átment, akkor megadjuk hogy a változtatás történt, szóval nem lesz üres kérés, illetve
                // elmentjük a változtatást
                empty = false;
                changes.username = username;
            };

            // Ha az email cím meg van adva akkor ellenőrizzük az adatot, ha nincs, akkor tovább haladunk a következő adatra
            if (email) {
                // Ellenőrizzük hogy az megadott új email nem-e egyezik a régivel, ha igen, erre hiba üzenetet küldünk
                if (email === user.email) {
                    res.status(409).json({
                        error: true,
                        message: "The email is the same as the original!"
                    });
                    return;
                }

                // Megnézzük hogy az új email cím nem-e egyezik már egy adatbázisban lévő email címmel,
                // ha igen, erre hibaüzenetet küldünk
                const conflictingEmail = await User.findOne({where: {email: email}});
                if (conflictingEmail) {
                    res.status(409).json({
                        error: "true",
                        message: "There's already an user with this email address!"
                    });
                    return;
                }
                // Ha minden ellenőrzésen átment, akkor megadjuk hogy a változtatás történt, szóval nem lesz üres kérés, illetve
                // elmentjük a változtatást
                empty = false;
                changes.email = email;
            };

            // Megnézzük hogy a jelszó mezőbe kaptunk-e eredményt, ha nem, akkor tovább haladunk
            if (password) {
                // Ha hiányzik a jelszó megerősítés, akkor hiba üzenetet küldünk
                if (!passwordAgain) {
                    res.status(400).json({
                        error: "true",
                        message: "The password confirmation is empty!"
                    });
                    return;
                }
                else {
                    // Megnézzük hogy a jelszó megegyezik-e a megerősítéssel, ha nem erre hiba üzenetet küldünk
                    if (password === passwordAgain) {
                        // Megnézzük hogy a jelszó a megfelelő formátumban van, ha nem akkor hiba üzenetet küldünk 
                        if (validationMethods.CheckPassword(password) === true) {
                            // Megnézzük hogy a új jelszó megegyezik-e a régi jelszóval, ha igen, akkor erre egy hibát küldünk
                            if (bcryptMethods.Comparing(password, user.password) === true) {
                                res.status(400).json({
                                    error: "true",
                                    message: "The password is the same as the original!"
                                });
                                return;
                            }
                            // Ha minden ellenőrzésen átment, akkor megadjuk hogy a változtatás történt, szóval nem lesz üres kérés, illetve
                            // elmentjük a változtatást
                            else {
                                empty = false;
                                changes.password = bcryptMethods.Hashing(password);
                            }
                        } 
                        else {
                            res.status(400).json({
                                error: "true",
                                message: "The password is in incorrect form!"
                            });
                            return;
                        }
                    }
                    else {
                        res.status(400).json({
                            error: "true",
                            message: "The passwords don't match!"
                        });
                        return;
                    }
                }
            }
            else {
                // Ha a jelszó mező üres, de a megerősítésnek van tartalma akkor erre hibát adunk
                if (passwordAgain) {
                    res.status(400).json({
                        error: "true",
                        message: "The password field is empty!"
                    });
                    return;
                }
            }

            // Ha végül metódus úgy fut let hogy semmilyen változtatás sem történik, vagyis minden mező üres, akkor hibát küldünk rá
            if (empty) {
                res.status(400).json({
                    error: true,
                    message: "Every field is empty!"
                });
                return;
            }

            // Ha minden ellenőrzésen átment, akkor a felhasználó azonosítója alapján megváltoztatjuk a felhasználó adatait
            await User.update(changes, {where: {id: userId}});
            console.log(changes);

            // Végül vissza küldjük hogy a metódus sikeresen lefutott
            res.status(201).json({
                error: false,
                message: "Datas has been updated!"
            });
            return;
        }
        catch (error) {
            // Az email cím ellenőrzéséhez a Sequelize modelben definiált validációt használjuk, ha ezt a hiba üzenetet kapjuk, akkor
            // tudjuk hogy az email cím formátumával van a gond, erre hiba üzenetet küldünk
            if (error.name === "SequelizeValidationError") {
                res.status(400).json({
                    error: "true",
                    message: "The email is in incorrect form!"
                });
                return;
            }

            console.log(error);
            res.status(500).json({
                error: true,
                message: "Something went wrong fetching the user's data!"
            });
            return;
        }
    },

    MyprofileDeleteController: async(req, res) => {
        // Lekérjük a bejelentkezett felhasználó azonosítóját, ha nincs, akkor hiba üzenetet küldünk
        const userId = await jweMethods.GetUserId(req);
        if (userId === undefined) {
            res.status(401).json({
                error: true,
                message: "The token is missing or faulty!"
            });
            return;
        }

        // Ha a felhasználó már törölte fiókját, de a token-t tudja használni, akkor lehetséges hogy metódust sikeresen lefutassa,
        // ezért ellenőrizzük hogy a felhasználó benne van-e az adatbázisban még, ha nem, akkor hiba üzenetet küldünk 
        const isUserStillExist = await User.findOne({
            where: {
                id: userId
            }
        });

        if (!isUserStillExist) {
            res.status(404).json({
                error: true,
                message: "This user doesn't exist!"
            });
            return;
        }

        // Ha az ellenőrzéseken sikeresen átment, akkor a töröljük a felhasználót, majd vissza küldjük a megerősító választ,
        // hogy sikerült a törlés
        await User.destroy({
            where: {
                id: userId
            }
        });

        res.status(200).json({
            error: false,
            message: "The user profile has been deleted!"
        });
        return;
    }
}