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
            },

            altGameTitle: {
                type: DataTypes.STRING,
            },

            description: {
                type: DataTypes.TEXT,
                allowNull: false,
            },

            release: {
                type: DataTypes.DATEONLY,
                allowNull: false,
            },

            boxart: {
                type: DataTypes.STRING,
            },

            promoArt: {
                type: DataTypes.STRING,
            },

            controllerSupport: {
                type: DataTypes.INTEGER,
            },

            crossplatform: {
                type: DataTypes.INTEGER.UNSIGNED,
            },

            crossPlatformException: {
                type: DataTypes.STRING,
            },

            steamdeckComp: {
                type: DataTypes.INTEGER,
            },
        },
        {
            sequelize,
            modelName: "Game"
        }
    );
export default Game;