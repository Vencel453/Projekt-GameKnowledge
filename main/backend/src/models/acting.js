import sequelize from "../config/config.js";
import { Model, DataTypes } from "sequelize";

class Acting extends Model {};
Acting.init ({
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            role: {
                type: DataTypes.STRING(100),
                comment: "Shows what character was the actor playing."
            },
        },
        {
            sequelize, 
            modelName: "Acting",
            comment: "Stores the connections of the games and actors and show an actor role in the game."
        }
    );

export default Acting;