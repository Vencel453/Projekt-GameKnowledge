import sequelize from "../config.js";
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
                type: DataTypes.STRING(40),
                allowNull: false,
                unique: true,
                comment: "A platform neve"
            },
        },
        {
            sequelize,
            modelName: "Platform",
            comment: "Különböző platformokat tárol amelyek hivatalosan támogatják a játékok futtatását"
        }
    );
    
export default Platform;