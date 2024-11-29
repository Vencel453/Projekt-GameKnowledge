import {Sequelize, DataTypes, Model} from "sequelize";
import { db_config } from "../config/config.js";
const sequelize = new Sequelize(db_config)

class Studio extends Model {};
Studio.init ({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },

            logo: {
                type: DataTypes.STRING,
            },
        },
        {
            sequelize,
            modelName: "Studio"
        }
    );

export default Studio;