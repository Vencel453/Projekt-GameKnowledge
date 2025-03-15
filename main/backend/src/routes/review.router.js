import { Router } from "express";
import reviewController from "../controllers/review.controller.js";

const ReviewRouter = Router();

ReviewRouter.put("/game/:gameId/review", reviewController.ReviewPutController);
ReviewRouter.delete("/game/:gameId/review", reviewController.ReviewDeleteController);

export default ReviewRouter;