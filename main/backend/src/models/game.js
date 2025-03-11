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
                type: DataTypes.STRING,
                allowNull: false,
                comment: "The game's title."
            },

            altGameTitle: {
                type: DataTypes.STRING,
                comment: "The game's alternative title."
            },

            description: {
                type: DataTypes.TEXT,
                allowNull: false,
                comment: "A small description of the game."
            },

            release: {
                type: DataTypes.DATEONLY,
                allowNull: false,
                comment: "The date when the game was first released."
            },

            boxart: {
                type: DataTypes.STRING,
                comment: "The URL of a picture of the game's boxart."
            },

            promoArt: {
                type: DataTypes.STRING,
                comment: "A wide picture of the game used in promotional materials."
            },

            controllerSupport: {
                type: DataTypes.INTEGER,
                comment: "Shows if the game has controller support: NULL means that is not relevant, 0 is that it doesn't, 1 that is support xbox controller, 2 that is partially support playstation controllers, 3 that is fully support both types of controller."
            },

            crossplatform: {
                type: DataTypes.INTEGER.UNSIGNED,
                comment: "Shows if the game has cross platform support: NULL means it's not relevant, 0 that it doesn't have, 1 that is partially has, 2 that it has full support."
            },

            crossPlatformException: {
                type: DataTypes.STRING,
                comment: "Explains partial cross platform support."
            },

        },
        {
            sequelize,
            modelName: "Game",
            comment: "Stores the datas of games."
        }
    );
export default Game;