import sequelize from "../config/config.js";
import { Model, DataTypes } from "sequelize";

class Blacklistedtoken extends Model {};
Blacklistedtoken.init ({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            token: {
                type: DataTypes.TEXT,
                allowNull: false,
            },

            date: {
                type: DataTypes.DATE,
                allowNull: false,
            }
        },
        {
            sequelize,
            modelName: "Blacklistedtokens"
        }
    );

export default Blacklistedtoken;