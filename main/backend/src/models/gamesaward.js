import sequelize from "../config/config.js";
import { Model, DataTypes } from "sequelize";

class Gamesaward extends Model {};
Gamesaward.init ({
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            year: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                comment: "The year when the game was nominated."
            },

            result: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: 0,
                comment: "The result where 0 means the games was only nominated, 1 means that the award was won."
            },
        },
        {
            sequelize,
            modelName: "Gamesaward",
            comment: "Stores the connections of games and awards and expand on what year was the event and did the game won the award."
        }
    );

export default Gamesaward;
