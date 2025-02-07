import {Sequelize, DataTypes, Model} from "sequelize";
import { db_config } from "../config/config.js";
const sequelize = new Sequelize(db_config)

class Language extends Model {};
Language.init ({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            language: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
        },
        {
            sequelize,
            modelName: "Language"
        }
    );
export default Language;