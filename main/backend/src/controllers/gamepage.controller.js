import Game from "../models/game.js";
import Gamepicture from "../models/gamepicture.js";
import Studio from "../models/studio.js";
import Studiosgame from "../models/studiosgame.js";
import Rating from "../models/rating.js";
import Agerating from "../models/agerating.js";
import Tag from "../models/tag.js";
import Gamestag from "../models/gamestag.js";
import Gamesaward from "../models/gamesaward.js";
import Award from "../models/award.js";
import Gameslanguage from "../models/gameslanguage.js";
import Language from "../models/language.js";
import Gamesplatform from "../models/gamesplatform.js";
import Platform from "../models/platform.js";
import Acting from "../models/acting.js";
import Actor from "../models/actor.js";
import Creation from "../models/creation.js";
import Creator from "../models/creator.js";
import Pcspec from "../models/pcspec.js";
import Favourite from "../models/favourite.js";
import jweMethods from "../utilities/jwe.methods.js";
import Gamesagerating from "../models/gamesagerating.js";
import Review from "../models/review.js";
import User from "../models/user.js";

export default {
    // Ez a metódus egy adott játéknak az összes adatát lekérdezi 
    GamepageGetController: async (req, res) => {

        // Az url paramétere tartalmazza a játék azonosítóját, ezt elmentjük és megkeressük az adott játékot 
        try {
            const gameId = Number(req.params.gameId?.trim());
            
            if (!gameId || isFinite(gameId) === false) {
                res.status(400).json({
                    error: true,
                    message: "There's no game id!"
                });
                return;
            }

            // Megkeressük az URL-ben megadott számhoz tartozó játékot
            const game = await Game.findOne({
                where: {
                    id: gameId
                }
            });

            // Ha az adatbázisban nincs az URL-ben megadott számhoz tartozó játék akkor erre hiba üzenetet küldünk
            if (!game) {
                res.status(404).json({
                    error: true,
                    message: "There's no game with this id!"
                });
                return;
            }

            // Lementjük az adott játékhoz tartozó képeket
            const pictures = await Gamepicture.findAll({
                attributes: ['url'],
                where: {
                    gameid: gameId
                }
            });

            // Meg keressük hogy az adott játékhoz milyen stúdiók vettek részt a fejlesztésben
            const developers = await Studio.findAll({
                attributes: ["id", "name"],
                include: {
                    where: {id: gameId},
                    attributes: [],
                    model: Game,
                    through: {
                        attributes: [],
                        model: Studiosgame,
                        where: {isDeveloper: true}
                    }
                },
                raw: true
            });

            // Meg keressük hogy az adott játékhoz milyen stúdiók vettek részt a kiadásában
            const publishers = await Studio.findAll({
                attributes: ["id", "name"],
                include: {
                    where: {id: gameId},
                    attributes: [],
                    model: Game,
                    through: {
                        attributes: [],
                        model: Studiosgame,
                        where: {isPublisher: true}
                    }
                },
                raw: true
            });

            // Megkeressük és kiszámoljuk hogy a játék értékelése hány százalékban pozitív
            const positiveRatings = await Rating.count({where: {GameId: gameId, positive: true}});
            const allRatings = await Rating.count({where: {GameId: gameId}});

            const rating = Math.round((positiveRatings / allRatings) * 100)

            // Megkeressük hogy az adott játékhoz milyen korhatár besorolások tartoznak és azok képeit elmentjük
            const agerating = await Agerating.findAll({
                attributes: ["url"],
                include: {
                    where: { id: gameId },
                    model: Game,
                    through: {
                        model: Gamesagerating,
                        attributes: [],
                    },
                    attributes: [],
                },
                raw: true
            });

            // Megkeressük az adott játékhoz tartozó műfajokat
            const genres = await Tag.findAll({
                attributes: ["tag"],
                include: {
                    where: { id: gameId},
                    model: Game,
                    through: {
                        model: Gamestag,
                        attributes: [],
                    },
                    attributes: [],
                },
                raw: true
            });
            
            // Megkeressük hogy az adott játékot milyen díjakra jelölték amiket nem nyert el végül
            const nominations = await Award.findAll({
                attributes: ["organizer", "name"],
                include: {
                    where: { id: gameId},
                    model: Game,
                    through: {
                        model: Gamesaward,
                        where: { result: false },
                        attributes: ["year"]
                    },
                    attributes: []
                },
                raw: true
            });

            // Megkeressük hogy az adott játékot milyen díjakra jelölték amiket végül megnyert
            const wins = await Award.findAll({
                attributes: ["organizer", "name"],
                include: {
                    where: { id: gameId},
                    model: Game,
                    through: {
                        model: Gamesaward,
                        where: { result: true },
                        attributes: ["year"]
                    },
                    attributes: []
                },
                raw: true
            });

            // Megkeressük hogy az adott játék milyen nyelveket támogat
            const languages = await Language.findAll({
                attributes: ["language"],
                include: {
                    where: { id: gameId},
                    model: Game,
                    through: {
                        model: Gameslanguage,
                        attributes: ["dub"]
                    },
                    attributes: []
                },
                raw: true
            });

            // Megkeressük hogy az adott játék milyen platformokon elérhető
            const platforms = await Platform.findAll({
                attributes: ["platform"],
                include: {
                    where: { id: gameId },
                    model: Game,
                    through: {
                        model: Gamesplatform,
                        attributes: []
                    },
                    attributes: []
                },
                raw: true
            });

            // Megkeressük hogy az adott játékban milyen színészek vettek részt és hogy milyen szerepben
            const actors = await Actor.findAll({
                attributes: ["firstName", "lastName", "profilePicture"],
                include: {
                    where: { id: gameId },
                    model: Game,
                    through: {
                        model: Acting,
                        attributes: ["role"]
                    },
                    attributes: []
                },
                raw: true
            });

            // Megkeressük hogy az adott játék fejlesztésében kik vettek részt és milyen szerepben
            const creators = await Creator.findAll({
                attributes: ["firstName", "lastName"],
                include: {
                    where: { id: gameId},
                    model: Game,
                    through: {
                        model: Creation,
                        attributes: ["field"]
                    },
                    attributes: []
                },
                raw: true
            });

            // Megkeressük hogy az adott játék gépigényét
            const pcspec = await Pcspec.findOne({
                attributes: ["minop", "mincpu", "minram", "mingpu", "mindirectx", "op", "cpu", "ram", "gpu", "directx", "storage", "sidenote"],
                where: {
                    GameId: gameId
                }
            });

            // Megkeressük hogy az adott játékhoz az oldal felhasználói milyen kritikákat írtak, illetve azt is hogy milyen értékelést
            // adtak a játékra
            const reviews = await Review.findAll({
                attributes: ["id", "title", "content", "date"],
                where: {
                    GameId: gameId
                },
                include: {
                    model: User,
                    attributes: ["username"],
                    include: {
                        model: Rating,
                        attributes: ["positive"]
                    }
                },
                order: [["date", "DESC"]],
                raw: true
            })

            // Ha minden lekérdezés sikeres, akkor minden információt elküldünk egy válaszban
            res.status(200).json({
                error: false,
                message: "Data fetch was successfull!",
                datas: {
                    title: game.gameTitle,
                    altTitle: game.altGameTitle,
                    description: game.description,
                    boxart: game.boxart,
                    gallery: pictures,
                    release: game.release,
                    developers: developers,
                    publishers: publishers,
                    allRatings: allRatings,
                    rating: rating,
                    agerating: agerating,
                    genres: genres,
                    controllerSupport: game.controllerSupport,
                    crossplatform: game.crossplatform,
                    crossPlatformException: game.crossPlatformException,
                    awards: {
                        nominations: nominations,
                        wins: wins,
                    },
                    languages: languages,
                    platforms: platforms,
                    actors: actors,
                    creators: creators,
                    pcspec: pcspec,
                    reviews: reviews
                }
            })
        }
        catch(error) {
            console.log(error);
            res.status(500).json({
                error: true,
                message: "Something went wrong fetching the datas!"
            });
        }

    },

    //  Ez a metódus feladata hogy egy bejelentkezett felhasználó elmentse a játékokat a kedvencekbe
    GamepagePostController: async (req, res) => {
        try {
            // Lekérjük a felhasználó azonosítóját a további műveletekhez
            const userId = await jweMethods.GetUserId(req);

            // Ha nem sikerült a felhasználó azonosítóját lekérni, akkor egy hiba üzenetet küldünk vissza
            if (userId === undefined) {
                res.status(401).json({
                    error: true,
                    message: "The user is not logged in or the token is faulty!"
                });
                return;
            };

            // Az URL-ben szereplő játék azonosított lementjük a megfelelő formátumban
            const gameId = Number(req.params.gameId?.trim());

            // Ha a játék azonosító hiányzik vagy nem egy szám, akkor egy hiba üzenetet küldünk vissza
            if (!gameId || isFinite(gameId) === false) {
                res.status(400).json({
                    error: true,
                    message: "The games's id is missing!"
                });
                return;
            }

            // Megnézzük hogy az URL-ben megadott számhoz tartozik-e játék, ha nem akkor egy hiba üzenetet adunk vissza
            const gameExist = await Game.findOne({
                where: {
                    id: gameId
                }
            });

            if (!gameExist) {
                res.status(404).json({
                    error: true,
                    message: "There's no game with this id!"
                });
                return;
            }

            // Ellenőrizzük hogy a felhasználó hozzá adta-e már a játékot a kedvencekbe,
            // ha igen, akkor egy hiba üzenetet küldünk vissza
            const conflict = await Favourite.findOne({
                where: {
                    UserId: userId,
                    GameId: gameId
                }
            });

            if (conflict) {
                res.status(409).json({
                    error: true,
                    message: "The user has already added the game to favourites!"
                });
                return;
            }

            // Ha minden ellenőrzésen átment, akkor a játékot elmentjük a kedvencekbe, és egy megerősítő üzenetet küldünk róla
            await Favourite.create({
                UserId: userId,
                GameId: gameId
            });

            res.status(201).json({
                error: false,
                message: "The game has been successfuly added to favourites!"
            });
            return;

        }
        catch (error) {
            console.error(error);
            res.status(500).json({
                error: true,
                message: "Something went wrong during adding a game to favourites!"
            });
            return;
        }
    },

    // Ez a metódus egy bejelentkezett felhasználónál teszi lehetővé hogy értékelje a játékot, ehhez a kérés body-ban lévő
    // logikai értéket veszi alapul, ahol a false negatív értékelést, míg a true pozitív értékelést jelent
    GamepagePutController: async (req, res) => {
        // Lekérjük a felhasználó azonosítóját a további műveletekhez
        const userId = await jweMethods.GetUserId(req);

        // Ha nem sikerült a felhasználó azonosítóját lekérni, akkor egy hiba üzenetet küldünk vissza
        if (userId === undefined) {
            res.status(401).json({
                error: true,
                message: "The user is not logged in or the token is faulty!"
            });
            return;
        };

        // Az URL-ben szereplő játék azonosított lementjük a megfelelő formátumban
        const gameId = Number(req.params.gameId?.trim());

        // Ha a játék azonosító hiányzik vagy nem egy szám, akkor egy hiba üzenetet küldünk vissza
        if (!gameId || isFinite(gameId) === false) {
            res.status(400).json({
                error: true,
                message: "The games's id is missing!"
            });
            return;
        }

        // Lekérjük a játék adatait az megadott azonosító alapján
        const existingGame = await Game.findOne({
            attributes: ["gameTitle", "release"],
            where: {
                id: gameId
            }
        });

        // Ha az adott azonosítóhoz nem tartozik játék, akkor erre egy hiba üzenetet küldünk
        if (!existingGame) {
            res.status(404).json({
                error: true,
                message: "There isn't any game with this id!"
            });
            return;
        };

        // Először lementjük a játék megjelenési dátumot a megfelelő dátum formában, majd lementjük a jelenlegi dátumot, 
        // utána megnézzük hogy az adott játék megjelent, ha nem, akkor a felhasználó nem tudja értékelni
        // és ez esetben egy hiba üzenetet adunk

        const gamesReleaseDate = new Date(existingGame.release);
        const currentDate = new Date();
    
        if (gamesReleaseDate > currentDate) {
            res.status(401).json({
                error: true,
                message: "You can't rate a game when it's not released yet!"
            });
            return;
        }

        // Ellenőrizzük hogy a felhasználó értékelte-e már a játékot, ha igen, akkor ne tudja ezt megismételni és erre hiba üzenetet
        // adunk
        const conflict = await Rating.findOne({
            where: {
                UserId: userId,
                GameId: gameId
            }
        });

        if (conflict) {
            res.status(409).json({
                error: true,
                message: "The user has already rated the game!"
            });
            return;
        }

        // Lementjük a body-ban lévő értéket, ha ez valamilyen formában üres, akkor hiba üzenetet adunk
        const isPositive = req.body.isPositive;

        if (isPositive === "" || isPositive === null || isPositive === undefined) {
            res.status(400).json({
                error: true,
                message: "The rating is missing!"
            });
            return;
        }

        // Ellenőrizzük hogy a body-ban lévő érték ténylegesen logikai érték, ha nem, akkor egy hiba üzenetet küldünk
        if (isPositive !== true && isPositive !== false) {
            res.status(400).json({
                error: true,
                message: "The rating is not a boolean!"
            });
            return;
        }

        // Ha minden ellenőrzésen átment, akkor elemtjük a felhasználó értékelését, és egy megerősítő választ adunk
        await Rating.create({
            GameId: gameId,
            positive: isPositive,
            UserId: userId
        });

        res.status(201).json({
            error: false,
            message: "The rating has been saved!"
        })
        return;
    }
}