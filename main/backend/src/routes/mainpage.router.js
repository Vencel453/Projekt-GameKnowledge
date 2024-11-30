import { Router } from "express";
import jwtHandler from "../jwt/jwtHandler.js";
import MainpageController from "../controllers/mainpage.controller.js";

const MainPageRouter = Router();

MainPageRouter.get("/", jwtHandler.Authenticating, jwtHandler.ExntendingToken, MainpageController.MainpageGetController);
MainPageRouter.post("/", jwtHandler.Authenticating, MainpageController.MainpagePostController);

export default MainPageRouter;