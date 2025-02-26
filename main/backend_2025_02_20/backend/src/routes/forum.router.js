import { Router } from "express";
import forumController from "../controllers/forum.controller.js";

const ForumRouter = new Router();

ForumRouter.get("/forum", forumController.ForumGetController);
ForumRouter.post("/forum/creation", forumController.ForumCreationPostController);
ForumRouter.get("/forum/:postId", forumController.ForumIdGetController);
ForumRouter.post("/forum/:postId", forumController.ForumIdGetController);
ForumRouter.delete("/forum/:postId", forumController.ForumIdDeleteController);

export default ForumRouter;