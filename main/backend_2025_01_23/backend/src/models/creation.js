import {Sequelize, DataTypes, Model} from "sequelize";
import Game from "./game.js";
import Creator from "./creator.js";
import { db_config } from "../config/config.js";
const sequelize = new Sequelize(db_config)

class Creation extends Model {};
Creation.init ({
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

            creatorId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Creator',
                    key: 'id'
                },
            },

            field: {
                type: DataTypes.STRING,
            },
        },
        {
            sequelize,
            modelName: "Creation"
        }
    );

export default Creation;
