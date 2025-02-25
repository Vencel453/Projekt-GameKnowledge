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
            },

            result: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: 0,
            },
        },
        {
            sequelize,
            modelName: "Gamesaward"
        }
    );

export default Gamesaward;
