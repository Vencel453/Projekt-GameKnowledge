import models from '../models/index.js';
import { Op } from 'sequelize';
import bcryptMethods from '../utilities/bcrypt.methods.js';
import validationMethods from '../utilities/validation.methods.js';

export default {
    RegistPostController: async (req, res) => {
        // Konstansként elmentjük azokat az adatokat amelyeket bekérünk a felhasználótól, mert ezek nem változnak
        const { username: registUsername, password: registPassword, passwordAgain: registPasswordAgain, email: registEmail} = req.body;
        console.log(req.body);

        // Ha a valamelyik mező nincs kitöltve akkor akkor 400-as hibával visszaküldi, hogy hiba történt, 
        // mert nem volt minden mező kitöltve és ezeket kötelező kitölteni
        if ((registUsername === undefined || registPassword === undefined ||
            registEmail === undefined || registPasswordAgain === undefined) || 
            (registUsername == "" || registPassword == "" ||
            registEmail == "" || registPasswordAgain == ""))
             {
            res.status(400).json({
                error: "true",
                message: "Not every field was filled!"
            });
            return;
        }
        
        // Try catch párban vannak írva a következő kódok hogy az esetleges adatbázis csatlakozási hibákat kezelni tudjuk
        try {
            // Ellenőrzi hogy a bekért adatoknál van-e már egyező az adatbázisban
            const conflictingDatas = await models.User.findOne({
                where: {[Op.or]:
                    [
                        {email: registEmail},
                        {username: registUsername},
                    ]
                }
            });
            
            // Ha van egyező akkor küldjön vissza egy 409 http kódot és egy üzenetet, hogy valamelyik már létezik
            // Csak a felhasználónév és az email cím egyedi oszlop, ezért csak ezeket ellenőrizzük
            if (conflictingDatas) {
                res.status(409).json({
                    error: "true",
                    message: "There's already an user with this username or email address!"
                });
                return;
            }

            // A bekért adatokat a backend-en validáljuk

            // Először a felhasználónév helyes méretét ellenőrizzük, majd hiba üzenetet ad ha nem megfelelő tartományban van.
            // Mivel a bekért adat hiába karakterláncként értelmezi alapvetően,
            // de típuskényszerítéssel biztosabban elérhető hogy a szükséges String metódusok eléhetőek legyenek
            if (!validationMethods.CheckUsername(registUsername)) {
                res.status(400).json({
                    error: "true",
                    message: "The username is not in the correct length!"
                });
                return;
            }

            // Ha a jelszó megerősítés sikertelen a felhasználótól akkor hiba üzenetet küldd az esetre
            if (!(registPassword === registPasswordAgain)) {
                res.status(400).json({
                    error: "true",
                    message: "The passwords don't match!"
                });
                return;
            }

            // Itt a jelszó helyes formátumát ellenőrzi, miszerint legalább 10 karakter, maximum 30 lehet, tartalmazzon legalább
            // egy nagy betűt és legalább egy számot.
            // Mivel az ellenőrzések mind a jelszó formátumára vonatkozik, ezért a hiba üznenet mindegyikre ugyan az
            if (!validationMethods.CheckPassword(registPassword)) {
                res.status(400).json({
                    error: "true",
                    message: "The password is in incorrect form!"
                });
                return;
            }

            // Ha minden ellenőrzésen átment akkor azt jelenti, hogy a felhasználót készek vagyunk elmenteni az adatbázisban

            // Magát a jelszót nem mentjük el egyenesen, hanem előtte a bcrypt segítségével titkosítjuk, az egyszerűség kedvéért a
            // bcrypt-methods.js fájlban megvan írva egy nyílvános metódus a titkosításhoz
            const hashedPassword = bcryptMethods.Hashing(registPassword);

            // A jelenlegi dátumot mentjük el, ezt egyenesen el lehet menteni a sequelize model DATEONLY típusába
            const date = new Date();

            // A felhasznéló létrehozása és az adatbázisban elmentése egyben a megfelelő adatokkal, 
            // majd a 201-es http kóddal megerősítjük, hogy sikeres volt a regisztráció
            const newUser = await models.User.create({
                username: registUsername,
                password: hashedPassword,
                email: registEmail,
                creation: date,
            });

            res.status(201).json({
                error: "false",
                message: "User succesfully created!",
                data: newUser,
            });
            return;
        }
        catch (error) {
            // Az egyetlen validáció ami nem kézzel írtunk meg az az email ellenőrzése, és ugyanakkor csak az email címnél használunk 
            // sequelize validációt, ezért ha a hiba a sequelize validációhoz kötődik, biztos hogy az email címmel volt probláma, ekkor
            // vissza küldjük a megfelelő hibakódot és választ
            if (error.name === "SequelizeValidationError") {
                res.status(400).json({
                    error: "true",
                    message: "The email is in incorrect form!"
                });
                return;
            }

            // Minden más hiba nem szándékos vagy előre tervezett így ebben az esetben egy tág értelmezésű
            // szerver hibát írunk ki és a teljes hiba üzenetet a konzolra
            else {
            console.log(error);
            res.status(500).json({
                error: "true",
                message: "Something went wrong creating an user!",
            });
            return;
            }
        }
    },
}