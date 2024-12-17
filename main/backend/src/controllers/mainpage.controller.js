import { Op } from "sequelize";
import Game from "../models/game.js";
import Tag from "../models/tag.js";
import Gamestag from "../models/gamestag.js";
import Gamepicture from "../models/gamepicture.js";
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
            const jsonUpComingGames = JSON.stringify(upcomingGames, null, 2);

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
            const jsonNewReleasesGames = JSON.stringify(newReleaseGames, null, 2);

            // Itt 5 játék kategóriát küldünk le amik: Shooter, Adventure, RPG, Racing, Strategy
            // Egy kategóriához maximum 15 játék tartozik és ABC sorrendben jelennek meg, képpekkel együtt

            // 15 Shooter/lövöldözős játék
            const shooters = await Game.findAll({
                attributes: ["gameTitle"],
                include: [
                    {
                        model: Tag,
                        where: { tag: "Shooter" },
                        attributes: [],
                    },
                    {
                        model: Gamepicture,
                        attributes: ["url"],
                    }
                ]
            });
            const tempShooters = shooters.map(game => {
                return {
                    title: game.gameTitle,
                    boxart: game.Games[0]?.Gamepictures[0]?.url || null
                }
            });
            const jsonShooters = JSON.stringify(tempShooters, null, 2);

            // '15 Adventure/Kaland játék
            const adventures = await Game.findAll({
                include: [
                    {
                        model: Tag,
                        through: {
                            model: Gamestag,
                            where: { tag: "Adventure" }
                        },
                        attributes: [],
                        include: [{
                            model: Gamepicture,
                            attributes: ["url"],
                        }],
                    }
                ],
                limit: 15,
                attributes: ["gameTitle", ""]
            });
            const jsonAdventures = JSON.stringify(adventures.map(game => {
                return {
                    title: game.gameTitle,
                    boxart: game.Games[0]?.Gamepictures[0]?.url || null
                }
            }), null, 2);

            // 15 RPG/Szerep játék
            const rpgs = await Game.findAll({
                include: [
                    {
                        model: Tag,
                        through: {
                            model: Gamestag,
                            where: { tag: "RPG" }
                        },
                        attributes: [],
                        include: [{
                            model: Gamepicture,
                            attributes: ["url"],
                        }],
                    }
                ],
                limit: 15,
                attributes: ["gameTitle", ""]
            });
            const jsonRpgs = JSON.stringify(rpgs.map(game => {
                return {
                    title: game.gameTitle,
                    boxart: game.Games[0]?.Gamepictures[0]?.url || null
                }
            }), null, 2);

            // 15 Racing/Versenyzős játék
            const racings = await Game.findAll({
                include: [
                    {
                        model: Tag,
                        through: {
                            model: Gamestag,
                            where: { tag: "Racing" }
                        },
                        attributes: [],
                        include: [{
                            model: Gamepicture,
                            attributes: ["url"],
                        }],
                    }
                ],
                limit: 15,
                attributes: ["gameTitle", ""]
            });
            const jsonRacings = JSON.stringify(racings.map(game => {
                return {
                    title: game.gameTitle,
                    boxart: game.Games[0]?.Gamepictures[0]?.url || null
                }
            }), null, 2);

            // 15 Strategy/Stratégiai játékok
            const strategies = await Game.findAll({
                include: [
                    {
                        model: Tag,
                        through: {
                            model: Gamestag,
                            where: { tag: "Strategy" }
                        },
                        attributes: [],
                        include: [{
                            model: Gamepicture,
                            attributes: ["url"],
                        }],
                    }
                ],
                limit: 15,
                attributes: ["gameTitle", ""]
            });
            const jsonStrategies = JSON.stringify(strategies.map(game => {
                return {
                    title: game.gameTitle,
                    boxart: game.Games[0]?.Gamepictures[0]?.url || null
                }
            }), null, 2);

            res.status(200).json({
                error: true,
                message: "Game datas successfully fetched!",
                datas: {
                    upComings: {
                        jsonUpComingGames
                    },
                    newReleases: {
                        jsonNewReleasesGames
                    },
                    shooterGames: {
                        jsonShooters
                    },
                    adventuresGames: {
                        jsonAdventures
                    },
                    rpgGames: {
                        jsonRpgs
                    },
                    racingGames: {
                        jsonRacings
                    },
                    strategyGames: {
                        jsonStrategies
                    }
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