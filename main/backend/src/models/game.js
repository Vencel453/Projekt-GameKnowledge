import sequelize from "../config/config.js";
import { Model, DataTypes } from "sequelize";

class Game extends Model {};
Game.init ({
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },

            gameTitle: {
                type: DataTypes.STRING(350),
                allowNull: false,
                comment: "A játék címe"
            },

            altGameTitle: {
                type: DataTypes.STRING(350),
                comment: "A játék esetleges alternatív címe"
            },

            description: {
                type: DataTypes.STRING,
                allowNull: false,
                comment: "Rövid leírás a játékról"
            },

            release: {
                type: DataTypes.DATEONLY,
                allowNull: false,
                comment: "A játék legelső megjelenítési dátuma"
            },

            boxart: {
                type: DataTypes.STRING,
                comment: "A játék borító képének az elérési útvonala"
            },

            promoArt: {
                type: DataTypes.STRING,
                comment: "Egy olyan széles felbontású kép a játékról"
            },

            controllerSupport: {
                type: DataTypes.INTEGER.UNSIGNED,
                comment: "A játék kontroller támogatásának száma, a NULL azt jelenti hogy nem releváns, a 0 hogy nincs támogatás, az 1 hogy csak xbox típusú kontrollert támogat, a 2 hogy az xbox mellet a playstation részleges támogatást kap, a 3 hogy xbox és playstation kontrollert is teljesen támogat"
            },

            crossplatform: {
                type: DataTypes.INTEGER.UNSIGNED,
                comment: "A crossplay támogatás száma, a NULL azt jelenti hogy nem releváns, a 0 hogy nincs, az 1 hogy részleges támogatás, a 2 hogy teljes támogatás"
            },

            crossPlatformException: {
                type: DataTypes.STRING,
                comment: "Azt magyarázza hogy a részleges crossplay támogatást mit jelent az adott játék esetén"
            },

        },
        {
            sequelize,
            modelName: "Game",
            comment: "A játékok egyedi adatait tárolja"
        }
    );
export default Game;