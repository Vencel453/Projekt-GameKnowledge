import { Router } from "express";
import gamepageController from "../controllers/gamepage.controller.js";

const GamepageRouter = Router();

GamepageRouter.get("/:gameid", gamepageController.GamepageGetController);
GamepageRouter.put("/:gameid", gamepageController.GamepagePutController);
GamepageRouter.post("/:gameid", gamepageController.GamepagePostController);

export default GamepageRouter;