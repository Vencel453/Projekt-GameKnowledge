import { Router } from "express";
import myprofileController from "../controllers/myprofile.controller.js";

const MyprofileRouter = Router();

MyprofileRouter.get("/myprofile", myprofileController.MyprofileGetController);
MyprofileRouter.post("/myprofile", myprofileController.MyprofilePostController);

export default MyprofileRouter;