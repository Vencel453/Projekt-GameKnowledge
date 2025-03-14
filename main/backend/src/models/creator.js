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
                comment: "A készítő keresztneve"
            },

            lastName: {
                type: DataTypes.STRING(100),
                comment: "A készítő vezetékneve"
            },

        },
        {
            sequelize,
            modelName: "Creator",
            comment: "A játékokban részvevő készítőket tárolja"
        }
    );

export default Creator;
