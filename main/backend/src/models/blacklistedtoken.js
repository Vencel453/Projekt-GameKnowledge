import {Sequelize, DataTypes, Model} from "sequelize";
import { db_config } from "../config/config.js";

const sequelize = new Sequelize(db_config)

class Blacklistedtoken extends Model {};
Blacklistedtoken.init ({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            token: {
                type: DataTypes.TEXT,
                allowNull: false,
            },

            date: {
                type: DataTypes.DATE,
                allowNull: false,
            }
        },
        {
            sequelize,
            modelName: "Blacklistedtokens"
        }
    );

export default Blacklistedtoken;