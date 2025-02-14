import sequelize from "../config/config.js";
import { Model, DataTypes } from "sequelize";

class Gameslanguage extends Model {};
Gameslanguage.init ({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            dub: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: 0,
            },

        },
        {
            sequelize,
            modelName: "Gameslanguage"
        }
    );

export default Gameslanguage;