import { Router } from "express";
import MainpageController from "../controllers/mainpage.controller.js";

const MainPageRouter = Router();

MainPageRouter.get("/", MainpageController.MainpageGetController);
MainPageRouter.put("/", MainpageController.MainpagePutController);

export default MainPageRouter;