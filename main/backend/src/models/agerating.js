import sequelize from "../config/config.js";
import { Model, DataTypes } from "sequelize";

class Agerating extends Model {};
Agerating.init ({
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            rating: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },

            institution: {
                type: DataTypes.STRING(4),
                allowNull: false,
            },

            url: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            sequelize,
            modelName: "Agerating"
        }
    );

export default Agerating;
