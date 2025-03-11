import sequelize from "../config/config.js";
import { Model, DataTypes } from "sequelize";

class Agerating extends Model {};
Agerating.init ({
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            rating: {
                type: DataTypes.STRING(10),
                allowNull: false,
                comment: "An age rating of the game."
            },

            institution: {
                type: DataTypes.STRING(4),
                allowNull: false,
                comment: "The institution that gave the age rating."
            },

            url: {
                type: DataTypes.STRING,
                allowNull: false,
                comment: "The URL of the age rating's picture."
            }
        },
        {
            sequelize,
            modelName: "Agerating",
            comment: "Stores a games age ratings and which institutions gave it and the URL of the age rating's pictures."
        }
    );

export default Agerating;
