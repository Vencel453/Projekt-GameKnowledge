import sequelize from "../config/config.js";
import { Model, DataTypes } from "sequelize";

class Creation extends Model {};
Creation.init ({
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            field: {
                type: DataTypes.STRING,
                comment: "On what field or role did the developer take part in."
            },
        },
        {
            sequelize,
            modelName: "Creation",
            comment: "Stores the connections of the games and the developers and what part or role they did during the game's development."
        }
    );

export default Creation;
