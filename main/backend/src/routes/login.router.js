import { Router } from "express";
import loginController from "../controllers/login.controller.js";

const LoginRouter = Router();

LoginRouter.put("/login",loginController.LoginPutController);


export default LoginRouter;