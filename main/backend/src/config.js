// Az adatbázist külön konstansként mentjük majd exportáljuk, mert sok különböző fájlban fel van használva
import { Sequelize } from "sequelize";

// Megadjuk az adatbázis adatait az eléréséhez
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