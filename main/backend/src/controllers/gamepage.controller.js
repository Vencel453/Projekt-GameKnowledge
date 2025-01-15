import { Op } from "sequelize";
import Game from "../models/game.js";
import Gamepicture from "../models/gamepicture.js";
import Studio from "../models/studio.js";
import Studiosgame from "../models/studiosgame.js";
import Rating from "../models/rating.js";
import Agerating from "../models/agerating.js";
import Tag from "../models/tag.js";
import Gamestag from "../models/gamestag.js";

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
    GamepagePostController: (req, res) => {
        res.status(501);
        return;
    },
    GamepagePutController: (req, res) => {
        res.status(501);
        return;
    }
}