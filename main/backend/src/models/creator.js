import {Sequelize, DataTypes, Model} from "sequelize";
import { db_config } from "../config/config.js";
const sequelize = new Sequelize(db_config)

class Creator extends Model {};
Creator.init ({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            firstName: {
                type: DataTypes.STRING(100),
            },

            lasttName: {
                type: DataTypes.STRING(100),
            },
        },
        {
            sequelize,
            modelName: "Creator"
        }
    );

export default Creator;
