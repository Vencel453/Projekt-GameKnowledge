import sequelize from "../config/config.js";
import { Model, DataTypes } from "sequelize";

class Actor extends Model {};
Actor.init ({
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            firstName: {
                type: DataTypes.STRING(100),
            },

            lastName: {
                type: DataTypes.STRING(100),
            },

            profilePicture: {
                type: DataTypes.STRING(100),
            },
        },
        {
            sequelize,
            modelName: "Actor"
        });

export default Actor;
