import sequelize from "../config/config.js";
import { Model, DataTypes } from "sequelize";

class Gamepicture extends Model {};
Gamepicture.init ({
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            url: {
                type: DataTypes.STRING,
                allowNull: false,
                comment: "The URL of a picture that shows a screenshot of the game."
            }
        },
        {
            sequelize,
            modelName: "Gamepicture",
            comment: "Stores the screenshots of various games."
        }
    );

export default Gamepicture;
