import { Router } from "express";
import MainpageController from "../controllers/mainpage.controller.js";

const MainPageRouter = Router();

MainPageRouter.get("/", MainpageController.MainpageGetController);
MainPageRouter.post("/", MainpageController.MainpagePostController);

export default MainPageRouter;