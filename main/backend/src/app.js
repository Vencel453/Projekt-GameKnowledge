import express from "express";
import cors from "cors"
import RegistRouter from "./routes/regist.router.js";
import MainPageRouter from "./routes/mainpage.router.js";
import LoginRouter from "./routes/login.router.js";
import GamepageRouter from "./routes/gamepage.router.js";
import StudiopageRouter from "./routes/studiopage.router.js";
import MyprofileRouter from "./routes/myprofile.router.js";

const app = express();

// A frontend elérése a 4200-as porton
app.use(cors({
    origin: "http://localhost:4200"
}));

app.use(express.json());

// A router-ek elérése
app.use("/", MainPageRouter);
app.use("/", RegistRouter);
app.use("/", LoginRouter);
app.use("/", GamepageRouter);
app.use("/", StudiopageRouter);
app.use("/", MyprofileRouter);

export default app;