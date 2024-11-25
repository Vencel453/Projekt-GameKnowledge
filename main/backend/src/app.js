import express from "express";
import { Sequelize } from "sequelize";
import RegistRouter from "./routes/regist.router.js";
import MainPageRouter from "./routes/mainpage.router.js";
import { db_config } from "./config/config.js";

const PORT = 3000;
const app = express();
const sequelize = new Sequelize(db_config);

app.use(express.json());

app.use("/", MainPageRouter);
app.use("/", RegistRouter);

try {
    await sequelize.authenticate();
    console.log('Az adatbázishoz való csatlakozás sikeres!');
    app.listen(PORT, () => {
        console.log(`A backend szerver elindult a következő címen: http://localhost:${PORT}/`);
        console.log(`A regisztráció oldala: http://localhost:${PORT}/registration`);
    });
    
} catch (error) {
    console.error('Nem sikerült csatlakozni a szerverhez!');
    sequelize.close();
}