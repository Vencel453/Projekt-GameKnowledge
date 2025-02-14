import sequelize from "../config/config.js";
import { Model, DataTypes } from "sequelize";

class Studiosgame extends Model {};
Studiosgame.init ({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            isDeveloper: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: 0,
            },

            isPublisher: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: 0,
            },

        },
        {
            sequelize,
            modelName: "Studiosgame"
        }
    );

export default Studiosgame;