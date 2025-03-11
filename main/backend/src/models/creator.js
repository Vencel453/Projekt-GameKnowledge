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
                comment: "The first name of the developer."
            },

            lastName: {
                type: DataTypes.STRING(100),
                comment: "The last name of the developer."
            },

        },
        {
            sequelize,
            modelName: "Creator",
            comment: "Stores the informations of developers."
        }
    );

export default Creator;
