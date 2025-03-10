import express from "express";
import cors from "cors"
import jweMethods from "./utilities/jwe.methods.js";
import RegistRouter from "./routes/regist.router.js";
import MainPageRouter from "./routes/mainpage.router.js";
import LoginRouter from "./routes/login.router.js";
import GamepageRouter from "./routes/gamepage.router.js";
import MyprofileRouter from "./routes/myprofile.router.js";
import FavouritesRouter from "./routes/favourites.router.js";
import ReviewRouter from "./routes/review.router.js";

// Létrehozzunk egy konstanst az express segítségével amivel a szervert fogjuk kezelni
const app = express();

// A frontend elérése a 4200-as porton
app.use(cors({
    origin: "http://localhost:4200",
    allowedHeaders: ["Authorization", "Content-type"],
    exposedHeaders: ["Authorization"]
}));

// Engedélyezzük json típusú válaszokat
app.use(express.json());

// A router-ek elérését adjuk meg, illetve egy middleware a token hosszabításra
app.use("/", jweMethods.ExntendingToken, MainPageRouter);
app.use("/", RegistRouter);
app.use("/", LoginRouter);
app.use("/", jweMethods.ExntendingToken, GamepageRouter);
app.use("/", jweMethods.ExntendingToken, MyprofileRouter);
app.use("/", jweMethods.ExntendingToken, FavouritesRouter);
app.use("/", jweMethods.ExntendingToken, ReviewRouter);

// Ha egy olyan metódust kapunk egy útvonalra amit nem támogatunk, akkor ezt az üzenetet adjuk vissza
app.use((req, res) => {
    res.status(405).json({
        error: true,
        message: "Method not allowed!"
    });
    return;
});

// Exportáljuk hogy az index.js-ben felhasználjuk
export default app;