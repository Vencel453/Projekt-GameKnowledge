import {Sequelize, DataTypes, Model} from "sequelize";
import Game from "./game.js";
import User from "./user.js";
import { db_config } from "../config/config.js";
const sequelize = new Sequelize(db_config)

class Favourite extends Model {};
Favourite.init ({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'User',
                    key: "id",
                },
            },

            gameId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Game',
                    key: 'id',
                },
            },
        },
        {
            sequelize,
            modelName: "Favourite"
        }
    );

export default Favourite;