import Game from "../models/game.js";
import Gamepicture from "../models/gamepicture.js";
import Studio from "../models/studio.js";
import Studiosgame from "../models/studiosgame.js";

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

            const developers = await Game.findAll({
                attributes: [],
                where: {
                    id: gameid
                },
                include: [{
                    model: Studio,
                    through: Studiosgame,
                    attributes: ['name'],
                    required: true,
                }]
            })

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
                    publishers
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