import {Sequelize, DataTypes, Model} from "sequelize";
import { db_config } from "../config/config.js";
const sequelize = new Sequelize(db_config)

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
            },
        },
        {
            sequelize,
            modelName: "Platform"
        }
    );
    
export default Platform;