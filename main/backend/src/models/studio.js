import sequelize from "../config.js";
import { Model, DataTypes } from "sequelize";

class Studio extends Model {};
Studio.init ({
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            name: {
                type: DataTypes.STRING(50),
                allowNull: false,
                unique: true,
                comment: "A stúdió neve"
            }
        },
        {
            sequelize,
            modelName: "Studio",
            comment: "Különböző játék stúdiókat tárol"
        }
    );

export default Studio;