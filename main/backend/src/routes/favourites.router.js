import { Router } from "express";
import favouritesController from "../controllers/favourites.controller.js";

const FavouritesRouter = new Router();

FavouritesRouter.get("/favourites", favouritesController.FavouritesGetController);
FavouritesRouter.delete("/favourites", favouritesController.FavouritesDeleteController);

export default FavouritesRouter;