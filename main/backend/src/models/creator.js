import sequelize from "../config/config.js";
import { Model, DataTypes } from "sequelize";

class Creator extends Model {};
Creator.init ({
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            firstName: {
                type: DataTypes.STRING(100),
            },

            lastName: {
                type: DataTypes.STRING(100),
            },

            profilePicture: {
                type: DataTypes.STRING,
            }
        },
        {
            sequelize,
            modelName: "Creator"
        }
    );

export default Creator;
