import { Router } from "express";
import jwtHandler from "../jwt/jwtHandler.js";
import MainpageController from "../controllers/mainpage.controller.js";

const MainPageRouter = Router();

MainPageRouter.get("/", jwtHandler.Authenticating, MainpageController.MainpageGetController);

export default MainPageRouter;