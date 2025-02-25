import { Router } from "express";
import gamepageController from "../controllers/gamepage.controller.js";

const GamepageRouter = Router();

GamepageRouter.get("/game/:gameId", gamepageController.GamepageGetController);
GamepageRouter.put("/game/:gameId", gamepageController.GamepagePutController);
GamepageRouter.post("/game/:gameId", gamepageController.GamepagePostController);

export default GamepageRouter;