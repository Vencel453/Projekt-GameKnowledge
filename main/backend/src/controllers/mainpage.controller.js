import { Op } from "sequelize";
import Game from "../models/game.js";
import Tag from "../models/tag.js";
import Gamestag from "../models/gamestag.js";
import jweMethods from "../utilities/jwe.methods.js";

export default {
    MainpageGetController: async(req, res) => {
        // Ez a főoldalhoz kéri le az adatbázisból az adatokat, így egyből try catch párban kezdjük a kódot
        try {
            // Először azokat a játékokat kérjük le amelyek az elkövetkező 1 hónapban megjelennek
            const currentDate = new Date();
            const oneMonthForward = new Date();
            oneMonthForward.setMonth(currentDate.getMonth() + 1)

            const upcomingGames = await Game.findAll({
                attributes: ['gameTitle', 'boxart'],
                where: {
                    release: {
                        [Op.between]: [currentDate, oneMonthForward]
                    }
                }
            });

            // Most azokat a játékokat kérjük le amelyek 1 hónapon belül jelentek meg
            const oneMonthBack = new Date();
            oneMonthBack.setMonth(currentDate.getMonth() - 1)

            const newReleaseGames = await Game.findAll({
                attributes: ['gameTitle', 'boxart'],
                where: {
                    release: {
                        [Op.between]: [currentDate, oneMonthBack]
                    }
                }
            });

            // Itt 5 játék kategóriát küldünk le amik: Shooter, Adventure, RPG, Racing, Strategy
            // Egy kategóriához maximum 15 játék tartozik és ABC sorrendben jelennek meg, képpekkel együtt

            // 15 Shooter/lövöldözős játék
            const shooters = await Game.findAll({
                attributes: ["gameTitle", "boxart"],
                limit: 15,
                include: [{
                        model: Tag,
                        through: Gamestag,
                        where: { tag: "Shooter" },
                        attributes: [],
                        required: true,
                    }],
            });
            
            // '15 Adventure/Kaland játék
            const adventures = await Game.findAll({
                attributes: ["gameTitle", "boxart"],
                limit: 15,
                include: [{
                        model: Tag,
                        through: Gamestag,
                        where: { tag: "Adventure" },
                        attributes: [],
                        required: true,
                    }],
            });

            // 15 RPG/Szerep játék
            const rpgs = await Game.findAll({
                attributes: ["gameTitle", "boxart"],
                limit: 15,
                include: [{
                        model: Tag,
                        through: Gamestag,
                        where: { tag: "RPG" },
                        attributes: [],
                        required: true,
                    }],
            });

            // 15 Racing/Versenyzős játék
            const racings = await Game.findAll({
                attributes: ["gameTitle", "boxart"],
                limit: 15,
                include: [{
                        model: Tag,
                        through: Gamestag,
                        where: { tag: "Racing" },
                        attributes: [],
                        required: true,
                    }]
            });

            // 15 Strategy/Stratégiai játékok
            const strategies = await Game.findAll({
                attributes: ["gameTitle", "boxart"],
                limit: 15,
                include: [{
                        model: Tag,
                        through: Gamestag,
                        where: { tag: "Strategy" },
                        attributes: [],
                        required: true
                    }],
            });

            res.status(200).json({
                error: false,
                message: "Game datas successfully fetched!",
                datas: {
                    upcomingGames,
                    newReleaseGames,
                    shooters,
                    adventures,
                    rpgs,
                    racings,
                    strategies
                }
            });
            return;

        } 
        catch(error) {
            console.log(error);
            res.status(500).json({
                error: true,
                message: "Something went wrong accessing the database!"
            })
        }
    },
    // Ez a metódus kijelentkezteti a felhasználót, ehhez a 'jweHandler' fájl egy metódusát hívja meg és küldi ki a megfelelő kódot és
    // üzenetet, ha valami hiba történik akkor hiba üznetet ki írja a konzolra
    MainpagePostController: async (req, res) => {
        try {
            jweMethods.Blacklisting(req);
            res.status(200).json({
                error: false,
                message: "The users token has been invalidated!"
            });
            return;
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                error: true,
                message: "Something went wrong doing the logout!"
            });
            return;
        }
        
    }
}