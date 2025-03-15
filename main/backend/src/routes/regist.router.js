import { Router } from "express";
import RegistController from "../controllers/regist.controller.js";

const RegistRouter = Router();

RegistRouter.post("/registration", RegistController.RegistPostController);
RegistRouter.get("/registration", (req, res) => {
    return res.sendStatus(200);
});

export default RegistRouter;
