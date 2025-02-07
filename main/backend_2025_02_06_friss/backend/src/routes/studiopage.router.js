import { Router } from "express";
import StudiopageController from "../controllers/studiopage.controller.js";

const StudiopageRouter = new Router();

StudiopageRouter.get("/studio", StudiopageController.StudiopageGetController);

export default StudiopageRouter;