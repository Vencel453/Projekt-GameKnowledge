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
                comment: "A képernyőkép elérési útvonala"
            }
        },
        {
            sequelize,
            modelName: "Gamepicture",
            comment: "A játékok képernyőképeinek az elérési útvonalait tárolja"
        }
    );

export default Gamepicture;
