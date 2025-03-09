import sequelize from "../config/config.js";
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
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            }
        },
        {
            sequelize,
            modelName: "Studio"
        }
    );

export default Studio;