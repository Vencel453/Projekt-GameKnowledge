import Favourite from "../models/favourite.js";
import Game from "../models/game.js";
import jweMethods from "../utilities/jwe.methods.js";

export default {
    FavouritesGetController: async(req, res) => {
        try {
            const userId = await jweMethods.GetUserId(req);
            if (userId === undefined) {
                res.status(404).json({
                    error: true,
                    message: "The token is empty or faulty!"
                });
                return;
            }
            
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

    FavouritesDeleteController: async(req, res) => {
        try {
            const userId = await jweMethods.GetUserId(req);
            if (userId === undefined) {
                res.status(404).json({
                    error: true,
                    message: "The token is empty or faulty!"
                });
                return;
            }
            
            const gameId = req.body.gameId;
            if (!gameId) {
                res.status(400).json({
                    error: true,
                    message: "The game's id is missing!"
                });
                return;
            }

            if (isFinite(gameId) === false) {
                res.status(400).json({
                    error: true,
                    message: "The game's id is not a number!"
                });
                return;
            }

            const favouriteToDelete = await Favourite.findOne({
                where: {
                    GameId: gameId,
                    UserId: userId
                }
            });

            console.log(favouriteToDelete);

            if (!favouriteToDelete) {
                res.status(404).json({
                    error: true,
                    message: "The game was not saved in the favourites!"
                });
                return;
            }

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