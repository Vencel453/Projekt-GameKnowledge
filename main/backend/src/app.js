import express from "express";
import fs from "fs";
import https from "https"
import path from "path";
import { fileURLToPath } from "url";
import { Sequelize } from "sequelize";
import { db_config } from "./config/config.js";
import RegistRouter from "./routes/regist.router.js";
import MainPageRouter from "./routes/mainpage.router.js";
import LoginRouter from "./routes/login.router.js";


const PORT = 3000;
const app = express();
const sequelize = new Sequelize(db_config);

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

try {
    await sequelize.authenticate();
    console.log('Az adatbázishoz való csatlakozás sikeres!');
    https.createServer(verify, app).listen(PORT, () => {
        console.log(`A backend szerver elindult a következő címen: https://localhost:${PORT}/`);
        console.log(`A regisztráció oldala: https://localhost:${PORT}/registration`);
    });
    
} catch (error) {
    console.error('Nem sikerült csatlakozni a szerverhez!');
    sequelize.close();
}