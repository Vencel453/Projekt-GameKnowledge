import { Op } from "sequelize";
import Game from "../models/game.js";
import Tag from "../models/tag.js";
import Gamestag from "../models/gamestag.js";
import jweMethods from "../utilities/jwe.methods.js";
import Actor from "../models/actor.js";
import Creator from "../models/creator.js";

export default {
    MainpageGetController: async(req, res) => {
        // Ez a főoldalhoz kéri le az adatbázisból az adatokat, így egyből try catch párban kezdjük a kódot
        try {
            // Először azokat a játékokat kérjük le amelyek az elkövetkező 6 hónapban megjelennek
            const currentDate = new Date();
            const oneMonthForward = new Date();
            oneMonthForward.setMonth(currentDate.getMonth() + 12);

            const upcomingGames = await Game.findAll({
                attributes: ["id", "promoArt", "release"],
                where: {
                    release: {
                        [Op.between]: [currentDate, oneMonthForward]
                    }
                }
            });

            // Most azokat a játékokat kérjük le amelyek 6 hónapon belül jelentek meg
            const oneMonthBack = new Date();
            oneMonthBack.setMonth(currentDate.getMonth() - 12);

            const newReleaseGames = await Game.findAll({
                attributes: ["id", "gameTitle", "boxart"],
                where: {
                    release: {
                        [Op.between]: [oneMonthBack, currentDate]
                    }
                }
            });

            // Itt 5 játék kategóriát küldünk le amik: Shooter, Adventure, RPG, Racing, Strategy
            // Egy kategóriához maximum 15 játék tartozik és ABC sorrendben jelennek meg, képpekkel együtt

            // 15 Shooter/lövöldözős játék
            const shooters = await Game.findAll({
                attributes: ["id", "gameTitle", "boxart"],
                limit: 15,
                where: {release: {
                    [Op.lte]: currentDate
                }},
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
                attributes: ["id", "gameTitle", "boxart"],
                limit: 15,
                where: {release: {
                    [Op.lte]: currentDate
                }},
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
                attributes: ["id", "gameTitle", "boxart"],
                limit: 15,
                where: {release: {
                    [Op.lte]: currentDate
                }},
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
                attributes: ["id","gameTitle", "boxart"],
                limit: 15,
                where: {release: {
                    [Op.lte]: currentDate
                }},
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
                attributes: ["id", "gameTitle", "boxart"],
                limit: 15,
                where: {release: {
                    [Op.lte]: currentDate
                }},
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
            const successfulLogout = await jweMethods.Blacklisting(req, res);
            
            if (successfulLogout === true) {
                res.status(200).json({
                    error: false,
                    message: "The users token has been invalidated!"
                });
                return;
            }
            else {
                res.status(200).json({
                    error: false,
                    message: "The token was already invalid!"
                });
                return;
            }
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                error: true,
                message: "Something went wrong doing the logout!"
            });
            return;
        }
    },
    // Ez a metódus a kereső sávért felel
    MainpagePutController: async (req, res) => {
        // Try catch párban dolgozunk hogy kezeljünk bármi féle hibát a további futtatás során
        try {
            // Le mentjük a kapott keresést és a felesleges keresést elkerülve ellenőrizzük hogy a nem-e üres, de alapvetően ez nem számít
            // hibának, így a 200-as kódot küldjük vissza, de megüzenjük hogy ez üres
            const search = req.body.search;

            if (!search) {
                res.status(200).json({
                    error: false,
                    message: "It is an empty search!"
                });
                return;
            }

            // Az átláthatóság érdekében egy új változóban formázzuk a keresés szövegét az adatbázishoz való lekérdezéshez
            const formattedSearch = "%" + String(search).toLowerCase() + "%";

            // A szükséges információkat kérjük le csak, a lekérdezés érvényes a játék alternatív nevére is, ezután 200-as kóddal
            // vissza adjuk az eredményt/eredményeket
            const game = await Game.findAll({
                attributes: ["id", "gameTitle", "altGameTitle", "release", "boxart"],
                where: {[Op.or]:
                    [   
                        {gameTitle: {[Op.like]: formattedSearch}},
                        {altGameTitle: {[Op.like]: formattedSearch}}
                    ]
                }
            });

            const actor = await Actor.findAll({
                attributes: ["id", "firstName", "lastName", "profilePicture"],
                where: {[Op.or]:
                    [   
                        {firstName: {[Op.like]: formattedSearch}},
                        {lastName: {[Op.like]: formattedSearch}}
                    ]
                }
            });

            const creator = await Creator.findAll({
                attributes: ["id", "firstName", "lastName", "profilePicture"],
                where: {[Op.or]:
                    [   
                        {firstName: {[Op.like]: formattedSearch}},
                        {lastName: {[Op.like]: formattedSearch}}
                    ]
                }
            });

            res.status(200).json({
                error: false,
                message: "Successful search!",
                game: game,
                actor: actor,
                creator: creator
            });
        } 
        catch (error) {
            console.log(error);
            res.status(500).json({
                error: true,
                message: "Something went wrong during the search!"
            });
        }
    }
}