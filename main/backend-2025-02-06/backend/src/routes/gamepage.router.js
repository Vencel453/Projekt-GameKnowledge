import { Router } from "express";
import gamepageController from "../controllers/gamepage.controller.js";

const GamepageRouter = Router();

GamepageRouter.get("/game/:gameid", gamepageController.GamepageGetController);
GamepageRouter.put("/game/:gameid", gamepageController.GamepagePutController);
GamepageRouter.post("/game/:gameid", gamepageController.GamepagePostController);

export default GamepageRouter;