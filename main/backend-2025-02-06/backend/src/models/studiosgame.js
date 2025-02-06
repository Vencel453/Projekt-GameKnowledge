import {Sequelize, DataTypes, Model} from "sequelize";
import { db_config } from "../config/config.js";
import Game from "./game.js";
import Studio from "./studio.js";
const sequelize = new Sequelize(db_config)

class Studiosgame extends Model {};
Studiosgame.init ({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            gameId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Game',
                    key: 'id',
                },
            },

            studioId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Studio',
                    key: 'id',
                },
            },

            isDeveloper: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: 0,
            },

            isPublisher: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: 0,
            },

        },
        {
            sequelize,
            modelName: "Studiosgame"
        }
    );

export default Studiosgame;