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

export default {
    // Ez a metódus egy adott játéknak az összes adatát lekérdezi 
    GamepageGetController: async (req, res) => {

        // Az url paramétere tartalmazza a játék azonosítóját, ezt elmentjük és megkeressük az adott játékot 
        try {
            const gameId = Number(req.params.gameId?.trim());
            console.log(gameId);
            console.log(!gameId);
            console.log(isFinite(gameId) === false);
            
            if (!gameId || isFinite(gameId) === false) {
                res.status(400).json({
                    error: true,
                    message: "There's no game id!"
                });
                return;
            }

            const game = await Game.findOne({
                where: {
                    id: gameId
                }
            });

            const pictures = await Gamepicture.findAll({
                attributes: ['url'],
                where: {
                    gameid: gameId
                }
            });

            const developers = await Studio.findAll({
                attributes: ["id", "name", "logo"],
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

            console.log(developers);

            const publishers = await Studio.findAll({
                attributes: ["id", "name", "logo"],
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

            const positiveRatings = await Rating.count({where: {GameId: gameId, positive: true}});
            const allRatings = await Rating.count({where: {GameId: gameId}});

            const rating = Math.ceil((positiveRatings / allRatings) * 100)

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

            const actors = await Actor.findAll({
                include: {
                    where: { id: gameId },
                    model: Game,
                    through: {
                        model: Acting,
                        attributes: ["role"],
                    },
                    attributes: []
                },
                raw: true
            });

            const creators = await Creator.findAll({
                attributes: ["id", "firstName", "lastName"],
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

            const pcspec = await Pcspec.findOne({
                attributes: ["minop", "mincpu", "minram", "mingpu", "mindirectx", "op", "cpu", "ram", "gpu", "directx", "storage", "sidenote"],
                where: {
                    GameId: gameId
                }
            });

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
                    pcspec: pcspec
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
    GamepagePostController: async (req, res) => {
        try {

            const userId = await jweMethods.GetUserId(req);

            if (userId === undefined) {
                res.status(401).json({
                    error: true,
                    message: "The user is not logged in or the token is faulty!"
                });
                return;
            };

            const gameId = Number(req.params.gameId?.trim());

            if (!gameId || isFinite(gameId) === false) {
                res.status(400).json({
                    error: true,
                    message: "The games's id is missing!"
                });
                return;
            }

            const conflict = await Favourite.findOne({
                where: {
                    UserId: userId,
                    GameId: gameId
                }
            });

            console.log(conflict);

            if (conflict) {
                res.status(409).json({
                    error: true,
                    message: "The user has already added the game to favourites!"
                });
                return;
            }

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
    GamepagePutController: async (req, res) => {
        const userId = await jweMethods.GetUserId(req);

        if (userId === undefined) {
            res.status(401).json({
                error: true,
                message: "The user is not logged in or the token is faulty!"
            });
            return;
        };

        const gameId = Number(req.params.gameId?.trim());

        if (!gameId || isFinite(gameId) === false) {
            res.status(400).json({
                error: true,
                message: "The games's id is missing!"
            });
            return;
        }

        const existingGame = await Game.findOne({
            attributes: ["gameTitle", "release"],
            where: {
                id: gameId
            }
        });

        if (!existingGame) {
            res.status(404).json({
                error: true,
                message: "There isn't any game with this id!"
            });
            return;
        };

        const currentDate = new Date();

        if (existingGame.release < currentDate) {
            res.status(400).json({
                error: true,
                message: "You can't rate a game when it's not released yet!"
            });
            return;
        }

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

        const isPositive = req.body.isPositive;
        console.log(isPositive);

        if (isPositive === "" || isPositive === undefined || isPositive === null) {
            res.status(400).json({
                error: true,
                message: "The rating is missing!"
            });
            return;
        }

        if (isPositive !== true && isPositive !== false) {
            res.status(400).json({
                error: true,
                message: "The rating is not a boolean!"
            });
            return;
        }

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