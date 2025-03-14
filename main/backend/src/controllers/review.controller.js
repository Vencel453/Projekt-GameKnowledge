import Game from "../models/game.js";
import Rating from "../models/rating.js";
import Review from "../models/review.js";
import User from "../models/user.js";
import jweMethods from "../utilities/jwe.methods.js";
import validationMethods from "../utilities/validation.methods.js";

export default {
    ReviewPutController: async (req, res) => {
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

            // Az URL-ben szereplő játék azonosított lementjük a megfelelő formátumban
            const gameId = Number(req.params.gameId?.trim());
            
            // Ha a játék azonosító hiányzik vagy nem egy szám, akkor egy hiba üzenetet küldünk vissza
            if (!gameId || isFinite(gameId) === false) {
                res.status(400).json({
                    error: true,
                    message: "There's no game id!"
                });
                return;
            }

            // Ellenőrizzük hogy az URL-ben megadott számhoz ténylegesen tartozik egy játék, ha nem akkor egy hiba üzenetet küldünk
            const game = await Game.findOne({
                attributes: ["id"],
                where: {
                    id: gameId
                }
            });

            if (!game) {
                res.status(404).json({
                    error: true,
                    message: "There's no game with this id!"
                });
                return;
            }

            // Ellenőrizzük hogy a felhasználó írt-e már egy kritikát a játékról, ha igen, akkor hiba üzenetet küldünk
            const reviewExist = await Review.findOne({
                attributes: ["id"],
                where: {
                    UserId: userId,
                    GameId: gameId
                }
            });

            if (reviewExist) {
                res.status(409).json({
                    error: true,
                    message: "The user already wrote a review!"
                });
                return;
            }

            // Ellenőrizzük hogy a felhasználó értékelte-e a játékot már, ha nem, akkor hiba üzenetet küldünk
            const userRated = await Rating.findOne({
                where: {
                    UserId: userId,
                    GameId: gameId
                }
            });

            if (!userRated) {
                res.status(400).json({
                    error: true,
                    message: "The user didn't rate the game before!"
                });
                return;
            }

            // Konstansként lementjük a kritika címét és törzs szövegét
            const { title, content } = req.body;

            // Ha hiányzik a cím, akkor hiba üzenetet küldünk
            if (!title) {
                res.status(400).json({
                    error: true,
                    message: "Title is missing!"
                });
                return;
            }

            // Ha a cím kevesebb mint 5 karakter, akkor hiba üzenetet küldünk
            if (title.length < 5) {
                res.status(400).json({
                    error: true,
                    message: "Title is less than 5 character!"
                });
                return;
            }

            // Ha a cím több mint 100 karakter, akkor hiba üzenetet küldünk
            if (title.length > 100) {
                res.status(400).json({
                    error: true,
                    message: "Title is more than 100 character!"
                });
                return;
            }

            // Ha a törzs szöveg hiányzik, akkor hiba üzenetet küldünk
            if (!content) {
                res.status(400).json({
                    error: true,
                    message: "Content is missing!"
                });
                return;
            }

            // Ha a törzs szöveg tartalma kevesebb mint 50 karakter, akkor hiba üzenetet küldünk
            if (content.length < 50) {
                res.status(400).json({
                    error: true,
                    message: "Content is less than 50 character!"
                });
                return;
            }

            // Ha a törzs szöveg tartalma több mint 5000 karakter, akkor hiba üzenetet küldünk
            if (content.length > 5000) {
                res.status(400).json({
                    error: true,
                    message: "Content is more than 5000 character!"
                });
                return;
            }

            // Ha a cím vagy a törzs szöveg káromkodást tartalmaz, akkor hiba üzenetet küldünk
            if ((validationMethods.CheckProfanity(title) === true) || validationMethods.CheckProfanity(content) === true) {
                res.status(400).json({
                    error: true,
                    message: "The review contains profanity!"
                });
                return;
            }

            // Lementjük a jelenlegi dátumot, hogy felhasználjuk a kritika mentésére
            const currentDate = new Date();

            // Ha minden ellenőrzésen átment, akkor létrehozza a kritikát a megadott értékekkel
            await Review.create({
                title: title,
                content: content,
                date: currentDate,
                GameId: gameId,
                UserId: userId
            });

            // Vissza küldjük hogy a metódus sikeresen lefutott
            res.status(201).json({
                error: false,
                message: "Review has been shared!"
            });
            return;
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                error: "true",
                message: "Something went wrong when creating a review!",
            });
            return;
        }
    },
    ReviewDeleteController: async (req, res) => {
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

        // Egy változóban elmentjük hogy a felhasználónak van-e jogosultsága törölni a kritikát, ez alapvetően hamis,
        // a további ellenőrzések változtathatják az értékét
        let isUserAuthorized = false;

        // Megnézzük hogy a felhasználó létezik-e az adatbázisban
        const isUserAdmin = await User.findOne({
            where: {
                id: userId
            }
        });

        // Ha a felhasználó létezik, akkor megnézzük hogy van-e admin státusza, ha igen akkor jogosult a kritika törlésére
        if (isUserAdmin.admin === true) {
            isUserAuthorized = true
        }

        // A játék azonosított mentjük az URL-ből amegfelelő formátumra
        const gameId = Number(req.params.gameId?.trim());
        
        // Elelnőrizzük hogy ténylegesen megkaptuk a játék azonosított és hogy az szám-e
        if (!gameId || isFinite(gameId) === false) {
            res.status(400).json({
                error: true,
                message: "There's no game id!"
            });
            return;
        }

        // Az URL-ben lévő szám alapján megkeressük a játékot, ha nincs ehhez a számhoz tartozó játék, akkor hiba üzenetet küldünk
        const game = await Game.findOne({
            attributes: ["id"],
            where: {
                id: gameId
            }
        });

        if (!game) {
            res.status(404).json({
                error: true,
                message: "There's no game with this id!"
            });
            return;
        }

        // Lementjük az értékelés azonosítóját amit a body-ban kellene megkapnunk
        const reviewId = req.body.reviewId;

        // Ha nem kaptuk meg az értékelés azonosítóját akkor hiba üzenetet adunk
        if (!reviewId || isFinite(reviewId) === false) {
            res.status(400).json({
                error: true,
                message: "Review id is missing!"
            });
            return;
        }

        // Ellenőrizzük hogy a megadott azonosítóhoz ténylgesen tartozik-e egy kritika, ha nem akkor hiba üzenetet dobunk
        const reviewExist = await Review.findOne({
            where: {
                id: reviewId
            }
        });

        if (!reviewExist) {
            res.status(404).json({
                error: true,
                message: "There's no review with this id!"
            });
            return;
        }

        // Megnézzük hogy a kritika írója megegyezik-e a törlést kezdeményező felhasználóval, ha igen akkor jogosult a törlésre
        if (reviewExist.UserId === userId) {
            isUserAuthorized = true;
        }

        // Ha a felhasználó jogosult a törlésre akkor kitöröljük a kritikát és egy megerősítő válasz adunk, ha nem jogosult rá,
        // akkor egy hiba üzenetet adunk rá
        if (isUserAuthorized === true) {
            await Review.destroy({
                where: {
                    id: reviewId
                }
            });
    
            res.status(200).json({
                error: false,
                message: "The review has been deleted!"
            });
            return;
        }
        else {
            res.status(401).json({
                error: true,
                message: "You are not authorized to do this!"
            });
            return;
        }
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                error: "true",
                message: "Something went wrong when deleting a review!",
            });
            return;
        }
    },
}