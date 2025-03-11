import sequelize from "../config/config.js";
import { Model, DataTypes } from "sequelize";

class User extends Model {};
User.init ({
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },

            username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                comment: "The custom name of the user."
            },

            password: {
                type: DataTypes.STRING,
                allowNull: false,
                comment: "The hashed password of the user."
            },

            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {isEmail: true},
                comment: "The email address of the user."
            },

            admin: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: 0,
                comment: "The user status, 0 means general user, 1 means admin user."
            },

            creation: {
                type: DataTypes.DATEONLY,
                allowNull: false,
                comment: "The date of the user account's creation. "
            },
        },
        {
            sequelize,
            modelName: "User",
            comment: "Stores the datas of users."
        }
    );

export default User;
