import sequelize from "../config/config.js";
import { Model, DataTypes } from "sequelize";

class Acting extends Model {};
Acting.init ({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            role: {
                type: DataTypes.STRING(100),
            },
        },
        {
            sequelize, 
            modelName: 'Acting'
        }
    );

export default Acting;