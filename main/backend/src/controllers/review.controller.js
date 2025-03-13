import Game from "../models/game.js";
import Rating from "../models/rating.js";
import Review from "../models/review.js";
import User from "../models/user.js";
import jweMethods from "../utilities/jwe.methods.js";
import validationMethods from "../utilities/validation.methods.js";

export default {
    ReviewPutController: async (req, res) => {
        try {
            const userId = await jweMethods.GetUserId(req);

            if (userId === undefined) {
                res.status(401).json({
                    error: true,
                    message: "The token is missing or faulty!"
                });
                return;
            }

            const gameId = Number(req.params.gameId?.trim());
            
            if (!gameId || isFinite(gameId) === false) {
                res.status(400).json({
                    error: true,
                    message: "There's no game id!"
                });
                return;
            }

            const game = await Game.findOne({
                attributes: ["id"],
                where: {
                    id: gameId
                }
            });

            if (!game) {
                res.status(404).json({
                    error: true,
                    message: "There's no game with this id!"
                });
                return;
            }

            const reviewExist = await Review.findOne({
                attributes: ["id"],
                where: {
                    UserID: userId,
                    GameId: gameId
                }
            });

            if (reviewExist) {
                res.status(409).json({
                    error: true,
                    message: "The user already wrote a review!"
                });
                return;
            }

            const userRated = await Rating.findOne({
                where: {
                    UserId: userId,
                    GameId: gameId
                }
            });

            if (!userRated) {
                res.status(400).json({
                    error: true,
                    message: "The user didn't rate the game before!"
                });
                return;
            }

            const { title: title, content: content } = req.body;

            if (!title) {
                res.status(400).json({
                    error: true,
                    message: "Title is missing!"
                });
                return;
            }

            if (title.length < 5) {
                res.status(400).json({
                    error: true,
                    message: "Title is less than 5 character!"
                });
                return;
            }

            if (title.length > 100) {
                res.status(400).json({
                    error: true,
                    message: "Title is more than 100 character!"
                });
                return;
            }

            if (!content) {
                res.status(400).json({
                    error: true,
                    message: "Content is missing!"
                });
                return;
            }

            if (content.length < 50) {
                res.status(400).json({
                    error: true,
                    message: "Content is less than 50 character!"
                });
                return;
            }

            if (content.length > 5000) {
                res.status(400).json({
                    error: true,
                    message: "Content is more than 5000 character!"
                });
                return;
            }

            if ((validationMethods.CheckProfanity(title) === true) || validationMethods.CheckProfanity(content) === true) {
                res.status(400).json({
                    error: true,
                    message: "The review contains profanity!"
                });
                return;
            }

            const currentDate = new Date();

            await Review.create({
                title: title,
                content: content,
                date: currentDate,
                GameId: gameId,
                UserId: userId
            });

            res.status(201).json({
                error: false,
                message: "Review has been shared!"
            });
            return;
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                error: "true",
                message: "Something went wrong creating an user!",
            });
            return;
        }
    },
    ReviewDeleteController: async (req, res) => {
        const userId = await jweMethods.GetUserId(req);

        if (userId === undefined) {
            res.status(401).json({
                error: true,
                message: "The token is missing or faulty!"
            });
            return;
        }

        let isUserAuthorized = false;

        const isUserAdmin = await User.findOne({
            where: {
                id: userId
            }
        });

        if (isUserAdmin.admin === true) {
            isUserAuthorized = true
        }

        const gameId = Number(req.params.gameId?.trim());
        
        if (!gameId || isFinite(gameId) === false) {
            res.status(400).json({
                error: true,
                message: "There's no game id!"
            });
            return;
        }

        const game = await Game.findOne({
            attributes: ["id"],
            where: {
                id: gameId
            }
        });

        if (!game) {
            res.status(404).json({
                error: true,
                message: "There's no game with this id!"
            });
            return;
        }

        const reviewId = req.body.reviewId;

        if (!reviewId || isFinite(reviewId) === false) {
            res.status(400).json({
                error: true,
                message: "Review id is missing!"
            });
            return;
        }

        const reviewExist = await Review.findOne({
            where: {
                id: reviewId
            }
        });

        if (!reviewExist) {
            res.status(404).json({
                error: true,
                message: "There's no review with this id!"
            });
            return;
        }

        if (reviewExist.UserId === userId) {
            isUserAuthorized = true;
        }

        if (isUserAuthorized === true) {
            await Review.destroy({
                where: {
                    id: reviewId
                }
            });
    
            res.status(200).json({
                error: false,
                message: "The review has been deleted!"
            });
            return;
        }
        else {
            res.status(401).json({
                error: true,
                message: "You are not authorized to do this!"
            });
            return;
        }
    },
}