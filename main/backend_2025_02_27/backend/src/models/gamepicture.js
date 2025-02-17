import sequelize from "../config/config.js";
import { Model, DataTypes } from "sequelize";

class Gamepicture extends Model {};
Gamepicture.init ({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            url: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        },
        {
            sequelize,
            modelName: "Gamepicture"
        }
    );

export default Gamepicture;
