import {Sequelize, DataTypes, Model} from "sequelize";
import { db_config } from "../config/config.js";
const sequelize = new Sequelize(db_config)

class Actor extends Model {};
Actor.init ({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            firstName: {
                type: DataTypes.STRING(100),
            },

            lastNameName: {
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