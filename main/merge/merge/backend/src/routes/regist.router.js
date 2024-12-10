import { Router } from "express";
import RegistController from "../controllers/regist.controller.js";

const RegistRouter = Router();

RegistRouter.post("/registration", RegistController.RegistPostController);

export default RegistRouter;
