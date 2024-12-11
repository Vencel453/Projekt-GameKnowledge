import { Router } from "express";
import loginController from "../controllers/login.controller.js";

const LoginRouter = Router();

LoginRouter.post("/login",loginController.LoginPostController);

export default LoginRouter;