import { Op } from "sequelize";
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

export default {
    GamepageGetController: async (req, res) => {
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

            const developers = await Studiosgame.findAll({
                attributes: [],
                where: {
                    gameId: gameid,
                    isDeveloper: true
                },
                include: {
                    model: Studio,
                    attributes: ["name"],
                },
                raw: true
            });

            const publishers = await Studiosgame.findAll({
                attributes: [],
                where: {
                    gameId: gameid,
                    isPublisher: true
                },
                include: {
                    model: Studio,
                    attributes: ["name"],
                },
                raw: true
            });

            const rating = await Rating.count({where: {gameId: gameid, positive: true}}) - await Rating.count({where: {gameId: gameid}}) * 100;

            const agerating = await Agerating.findAll({
                attributes: ["rating", "institution"],
                where: {
                    gameId: gameid
                }
            });

            const genres = await Gamestag.findAll({
                attributes: [],
                where: {
                    gameId: gameid
                },
                include: {
                    model: Tag,
                    attributes: ["tag"],
                },
                raw: true
            });
            
            const nominations = await Gamesaward.findAll({
                attributes: ["year"],
                where: {
                    gameId: gameid,
                    result: false
                },
                include: {
                    model: Award,
                    attributes: ["organizer", "name"]
                }
            });

            const wins = await Gamesaward.findAll({
                attributes: ["year"],
                where: {
                    gameId: gameid,
                    result: true
                },
                include: {
                    model: Award,
                    attributes: ["organizer", "name"]
                }
            });

            const languages = await Gameslanguage.findAll({
                attributes: ["dub"],
                where: {
                    gameId: gameid
                },
                include: {
                    model: Language,
                    attributes: ["language"]
                },
                raw: true
            });

            const platforms = await Gamesplatform.findAll({
                attributes: [],
                where: {
                    gameId: gameid
                },
                include: {
                    model: Platform,
                    attributes: ["platform"]
                },
                raw: true
            });

            const actors = await Acting.findAll({
                attributes: ["role"],
                where: {
                    gameId: gameid
                },
                include: {
                    model: Actor,
                    attributes: ["firstName", "lastName"]
                },
                raw: true
            });

            const creators = await Creation.findAll({
                attributes: ["field"],
                where: {
                    gameId: gameid
                },
                include: {
                    model: Creator,
                    attributes: ["firstName", "lastName"]
                },
                raw: true
            });

            const pcspec = await Pcspec.findOne({
                attributes: ["minop", "mincpu", "minram", "mingpu", "mindirectx", "op", "cpu", "ram", "gpu", "directx", "storage", "sidenote"],
                where: {
                    gameId: gameid
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
            const gameid = req.params.gameid;

            const userid = await jweMethods.GetUserId(req);

            if (userid === undefined) {
                res.status(401).json({
                    error: true,
                    message: "The user is not logged in or the token is faulty!"
                })
            }

            const conflict = await Favourite.findOne({
                where: {
                    userId: userid,
                    gameId: gameid
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
                userId: userid,
                gameId: gameid
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
    GamepagePutController: (req, res) => {
        res.status(501);
        return;
    }
}