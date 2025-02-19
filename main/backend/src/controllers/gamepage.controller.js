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
        const gameid = req.params.gameid;
        try {
            const game = await Game.findOne({
                where: {
                    id: gameid
                }
            });

            const pictures = await Gamepicture.findAll({
                attributes: ['url'],
                where: {
                    gameid: gameid
                }
            });

            const developers = await Studio.findAll({
                attributes: ["id", "name", "logo"],
                include: {
                    where: {id: gameid},
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
                    where: {id: gameid},
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

            const positiveRatings = await Rating.count({where: {GameId: gameid, positive: true}});
            const allRatings = await Rating.count({where: {GameId: gameid}});

            const rating = Math.ceil((positiveRatings / allRatings) * 100)

            const agerating = await Agerating.findAll({
                attributes: ["rating", "institution", "url"],
                include: {
                    where: { id: gameid },
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
                    where: { id: gameid},
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
                    where: { id: gameid},
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
                    where: { id: gameid},
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
                    where: { id: gameid},
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
                    where: { id: gameid },
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
                    where: { id: gameid },
                    model: Game,
                    through: {
                        model: Acting,
                        attributes: []
                    },
                    attributes: []
                },
                raw: true
            });

            const creators = await Creator.findAll({
                attributes: ["id", "firstName", "lastName"],
                include: {
                    where: { id: gameid},
                    model: Game,
                    through: {
                        model: Creation,
                        attributes: []
                    },
                    attributes: []
                },
                raw: true
            });

            const pcspec = await Pcspec.findOne({
                attributes: ["minop", "mincpu", "minram", "mingpu", "mindirectx", "op", "cpu", "ram", "gpu", "directx", "storage", "sidenote"],
                where: {
                    GameId: gameid
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

            const userid = await jweMethods.GetUserId(req);

            if (userid === undefined) {
                res.status(401).json({
                    error: true,
                    message: "The user is not logged in or the token is faulty!"
                })
            };

            const gameid = req.params.gameid;

            const conflict = await Favourite.findOne({
                where: {
                    UserId: userid,
                    GameId: gameid
                }
            });

            if (conflict) {
                res.status(403).json({
                    error: true,
                    message: "The user has already added the game to favourites!"
                });
                return;
            }

            await Favourite.create({
                UserId: userid,
                GameId: gameid
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
        const userid = await jweMethods.GetUserId(req);

        if (userid === undefined) {
            res.status(401).json({
                error: true,
                message: "The user is not logged in or the token is faulty!"
            });
            return;
        };

        const gameid = req.params.gameid;

        const conflict = await Rating.findOne({
            where: {
                UserId: userid,
                GameId: gameid
            }
        });

        if (conflict) {
            res.status(403).json({
                error: true,
                message: "The user has already rated the game!"
            });
            return;
        }

        const isPositive = req.body.isPositive;
        console.log(isPositive);

        if (isPositive === undefined || isPositive === "") {
            res.status(400).json({
                error: true,
                message: "The rating is missing!"
            });
            return;
        }

        await Rating.create({
            GameId: gameid,
            positive: isPositive,
            UserId: userid
        });

        res.status(201).json({
            error: false,
            message: "The rating has been saved!"
        })
        return;
    }
}