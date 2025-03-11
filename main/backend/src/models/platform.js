import sequelize from "../config/config.js";
import { Model, DataTypes } from "sequelize";

class Platform extends Model {};
Platform.init ({
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            platform: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                comment: "The name of the platform or console."
            },
        },
        {
            sequelize,
            modelName: "Platform",
            comment: "Stores various platforms or console that officially support running games."
        }
    );
    
export default Platform;