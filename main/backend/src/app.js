import express from "express";
import cors from "cors"
import jweMethods from "./utilities/jwe.methods.js";
import RegistRouter from "./routes/regist.router.js";
import MainPageRouter from "./routes/mainpage.router.js";
import LoginRouter from "./routes/login.router.js";
import GamepageRouter from "./routes/gamepage.router.js";
import MyprofileRouter from "./routes/myprofile.router.js";
import ForumRouter from "./routes/forum.router.js";
import FavouritesRouter from "./routes/favourites.router.js";

const app = express();

// A frontend elérése a 4200-as porton
app.use(cors({
    origin: "http://localhost:4200",
    allowedHeaders: "Authorization"
}));

app.use(express.json());

// A router-ek elérése
app.use("/", jweMethods.ExntendingToken, MainPageRouter);
app.use("/", RegistRouter);
app.use("/", LoginRouter);
app.use("/", jweMethods.ExntendingToken, GamepageRouter);
app.use("/", jweMethods.ExntendingToken, MyprofileRouter);
app.use("/", jweMethods.ExntendingToken, FavouritesRouter);
app.use("/", jweMethods.ExntendingToken, ForumRouter);

app.use((req, res) => {
    res.status(405).json({
        error: true,
        message: "Method not allowed!"
    });
    return;
});

export default app;