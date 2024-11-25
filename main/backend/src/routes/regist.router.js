import { Router } from "express";
import RegistController from "../controllers/regist.controller.js";

const RegistRouter = Router();

RegistRouter.get("/registration", RegistController.RegistGetController);
RegistRouter.put("/registration", RegistController.RegistPutController);

export default RegistRouter;
