import { Router } from "express";
import loginController from "../controllers/login.controller.js";

const LoginRouter = Router();

LoginRouter.post("/login", loginController.LoginPostController);
LoginRouter.get("/login", (req, res) => {
    return res.sendStatus(200);
});

export default LoginRouter;