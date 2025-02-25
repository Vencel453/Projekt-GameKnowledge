// Az adatbázist külön fájlba mentjük, mert sok különböző fájlban fel van használva
import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    username: 'root',
    password: '',
    dialect: "mariadb",
    // Így a createdAt és updatedAt táblák automatikus létrehozását kikapcsoljuk, mert nincs rá szükségünk
    define: {
        timestamps: false,
    },
    database: 'game_knowledge',
    host: 'localhost'
});

export default sequelize;