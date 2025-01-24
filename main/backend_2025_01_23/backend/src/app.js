import express from "express";
import cors from "cors"
import { Sequelize } from "sequelize";
import { db_config } from "./config/config.js";
import RegistRouter from "./routes/regist.router.js";
import MainPageRouter from "./routes/mainpage.router.js";
import LoginRouter from "./routes/login.router.js";
import GamepageRouter from "./routes/gamepage.router.js";

const PORT = 3000;
const app = express();
const sequelize = new Sequelize(db_config);

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

// Egy csatkalozás kisérlet után ha sikeres akkor elindítjuk a szervert
await sequelize.authenticate()
    .then(() => {
        console.log("The test connection to the server was succesfull!");
        app.listen(PORT, () => {
            console.log(`The backend server is running on: https://localhost:${PORT}/`);
        })
    })
    .catch((error) => {
        console.error("Can't connect to the server!\n" + error);
        sequelize.close();
    });