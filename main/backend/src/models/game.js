import {Sequelize, DataTypes, Model} from "sequelize";
import { db_config } from "../config/config.js";
const sequelize = new Sequelize(db_config)

class Game extends Model {};
Game.init ({
            id: {
                type: DataTypes.INTEGER,
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
                allowNull: false,
                defaultValue: 0,
            },

            crossplatform: {
                type: DataTypes.INTEGER,
            },

            crossPlatformException: {
                type: DataTypes.INTEGER,
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