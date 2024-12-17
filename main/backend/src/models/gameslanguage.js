import {Sequelize, DataTypes, Model} from "sequelize";
import { db_config } from "../config/config.js";
const sequelize = new Sequelize(db_config)

class Gameslanguage extends Model {};
Gameslanguage.init ({
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

            languageId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Language',
                    key: 'id',
                },
            },

            dub: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: 0,
            },

        },
        {
            sequelize,
            modelName: "Gameslanguage"
        }
    );

export default Gameslanguage;