import {Sequelize, DataTypes, Model} from "sequelize";
import { db_config } from "../config/config.js";

const sequelize = new Sequelize(db_config)

class User extends Model {};
User.init ({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },

            username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },

            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {isEmail: true},
            },

            admin: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: 0,
            },

            creation: {
                type: DataTypes.DATEONLY,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "User"
        }
    );

export default User;
