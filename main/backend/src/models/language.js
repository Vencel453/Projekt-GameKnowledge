import sequelize from "../config/config.js";
import { Model, DataTypes } from "sequelize";

class Language extends Model {};
Language.init ({
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            language: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                comment: "The name of the language."
            },
        },
        {
            sequelize,
            modelName: "Language",
            comment: "Stores the various langauges that usually supported in games."
        }
    );
export default Language;