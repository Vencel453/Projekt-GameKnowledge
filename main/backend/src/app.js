import express from "express";
import { Sequelize } from "sequelize";

const app = express();
const sequelize = new Sequelize('game_knowledge', 'root', '', {
    host: 'localhost',
    dialect: "mysql"
});
const PORT = 3000;

app.use(express.json());


try {
    await sequelize.authenticate();
    console.log('Az adatbázishoz való csatlakozás sikeres!');
    app.listen(PORT, () => {
        console.log(`A backend szerver elindult a következő címen: http://localhost:/${PORT}/`);
    });
} catch (error) {
    console.error('Nem sikerült csatlakozni a szerverhez!');
    sequelize.close();
}






