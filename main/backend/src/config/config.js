// Az adatbázis konfigurációját külön fájlba mentjük, mert sok különböző fájlban fel van használva
export const db_config = {
    username: 'root',
    password: '',
    dialect: 'mysql',
    // Így a createdAt és updatedAt táblák automatikus létrehozását kikapcsoljuk, mert nincs rá szükségünk
    define: {
        timestamps: false,
    },
    database: 'game_knowledge',
    host: 'localhost'
};