import sequelize from "../config/config.js";
import { Model, DataTypes } from "sequelize";

class Platform extends Model {};
Platform.init ({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            platform: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
        },
        {
            sequelize,
            modelName: "Platform"
        }
    );
    
export default Platform;