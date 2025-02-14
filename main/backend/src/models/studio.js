import sequelize from "../config/config.js";
import { Model, DataTypes } from "sequelize";

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