import {Sequelize, DataTypes, Model} from "sequelize";
import { db_config } from "../config/config.js";
const sequelize = new Sequelize(db_config)

class Gamesaward extends Model {};
Gamesaward.init ({
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

            awardId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    modul: 'Award',
                    key: 'id',
                },
            },

            year: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            result: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: 0,
            },
        },
        {
            sequelize,
            modelName: "Gamesaward"
        }
    );

export default Gamesaward;
