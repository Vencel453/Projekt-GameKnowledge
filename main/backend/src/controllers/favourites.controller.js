import Favourite from "../models/favourite.js";
import Game from "../models/game.js";
import jweMethods from "../utilities/jwe.methods.js";

export default {
    // Ez a metódus lekérdezi az adott bejelentkezett felhasználó kedvencekbe mentett játékait
    FavouritesGetController: async(req, res) => {
        try {
            // Lekérjük a felhasználó azonosítóját, és hiba üzenetet küldünk, ha ez nem sikerül, mert nem bejelentkezett felhaszánó
            // nem fér hozzá ehhez a funkcióhoz
            const userId = await jweMethods.GetUserId(req);
            if (userId === undefined) {
                res.status(401).json({
                    error: true,
                    message: "The token is empty or faulty!"
                });
                return;
            }
            
            // A felhasználó azonosítója alapján megkeressük az összes kedvencekbe elmentett játékokat, majd visszaadjuk a válaszban
            const favourites = await Game.findAll({
                attributes: ["id", "gameTitle", "boxart"],
                include: {
                    attributes: [],
                    where: { UserId: userId},
                    model: Favourite
                }
            });

            res.status(200).json({
                error: false,
                message: "User's favourite games are fetched!",
                favourites: favourites
            });
            return;
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                error: true,
                message: "Something went wrong when creating a comment!"
            });
            return;
        }
    },

    // Ez a metódus a kitörli a bejelentkezett felhasználó kedvencekbe mentet játékát,
    // hogy melyik játékot, azt a body-ban kell megadni
    FavouritesDeleteController: async(req, res) => {
        try {
            // Lekérjük a felhasználó azonosírtóját, és hiba üzenetet küldünk, ha ez nem sikerül, mert nem bejelentkezett felhaszánó
            // nem fér hozzá ehhez a funkcióhoz
            const userId = await jweMethods.GetUserId(req);
            if (userId === undefined) {
                res.status(401).json({
                    error: true,
                    message: "The token is empty or faulty!"
                });
                return;
            }
            
            // Ha nem kapjuk meg a játék azonosítóját, akkor erre hiba üzenetet küldünk
            const gameId = req.body.gameId;
            if (!gameId) {
                res.status(400).json({
                    error: true,
                    message: "The game's id is missing!"
                });
                return;
            }

            // Ha nem számot kapunk értékül, akkor hibát adunk rá
            if (isFinite(gameId) === false) {
                res.status(400).json({
                    error: true,
                    message: "The game's id is not a number!"
                });
                return;
            }

            // Ellenőrizzük, hogy a játék, amelyet törölni szeretnénk az tényleg le volt-e mentve a felhasználónál,
            // ha nem, akkor erre hibát dobunk
            const favouriteToDelete = await Favourite.findOne({
                where: {
                    GameId: gameId,
                    UserId: userId
                }
            });

            if (!favouriteToDelete) {
                res.status(404).json({
                    error: true,
                    message: "The game was not saved in the favourites!"
                });
                return;
            }

            // Ha nem volt probléma az ellenőrzések során, akkor kitöröljük a játékot a felhasználó kedvenceiből, és a válaszban
            // megerősítjük, hogy sikeres volt
            await favouriteToDelete.destroy();

            res.status(200).json({
                error: false,
                message: "The game is removed from the user's favourites!",
            });
            return;
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                error: true,
                message: "Something went wrong when deleting a favourite!"
            });
            return;
        }
    },
}