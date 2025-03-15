import { Router } from "express";
import myprofileController from "../controllers/myprofile.controller.js";

const MyprofileRouter = Router();

MyprofileRouter.get("/myprofile", myprofileController.MyprofileGetController);
MyprofileRouter.post("/myprofile", myprofileController.MyprofilePostController);
MyprofileRouter.delete("/myprofile", myprofileController.MyprofileDeleteController);

export default MyprofileRouter;