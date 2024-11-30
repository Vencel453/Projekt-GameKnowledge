import express from "express";
import fs from "fs";
import https from "https"
import path from "path";
import cors from "cors"
import { fileURLToPath } from "url";
import { Sequelize } from "sequelize";
import { db_config } from "./config/config.js";
import RegistRouter from "./routes/regist.router.js";
import MainPageRouter from "./routes/mainpage.router.js";
import LoginRouter from "./routes/login.router.js";

const PORT = 3000;
const app = express();
const sequelize = new Sequelize(db_config);

// A frontend elérése a 4200-as porton
app.use(cors({origin: 4200}));

app.use(express.json());


// Mivel a readFileSync statikus útvonalat használ, de szeretnénk elérni hogy a projekt könnyen átvihető legyen egy másik gépre ezért
// Különböző metódusok segítségével készítünk relatívan egy statikus útvonalat
const pathToCerts = path.dirname(fileURLToPath(import.meta.url));

const crtRoute = path.join(pathToCerts, "certs", "gameknowledge.crt");
const keyRoute = path.join(pathToCerts, "certs", "gameknowledge.key");


// A https hitelesítőket olvassa be
const verify = {
    cert: fs.readFileSync(crtRoute),
    key: fs.readFileSync(keyRoute)
};

// A router-ek elérése
app.use("/", MainPageRouter);
app.use("/", RegistRouter);
app.use("/", LoginRouter);

// A szerver indítása
try {
    await sequelize.authenticate();
    console.log('The test connection to the server was succesfull!');
    https.createServer(verify, app).listen(PORT, () => {
        console.log(`The backend server is running on: https://localhost:${PORT}/`);
    });
    
} catch (error) {
    console.error('Can not connect to the server!');
    sequelize.close();
}