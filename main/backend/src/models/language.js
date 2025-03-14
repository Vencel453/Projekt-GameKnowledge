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
                type: DataTypes.STRING(25),
                allowNull: false,
                unique: true,
                comment: "A nyelv neve"
            },
        },
        {
            sequelize,
            modelName: "Language",
            comment: "A játékokban előforduló nyelveket tárolja"
        }
    );
export default Language;