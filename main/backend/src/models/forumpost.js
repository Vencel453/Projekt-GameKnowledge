import sequelize from "../config/config.js";
import { Model, DataTypes } from "sequelize";

class Forumpost extends Model {};
Forumpost.init ({
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            title: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },

            content: {
                type: DataTypes.TEXT,
                allowNull: false,
            },

            story: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: 0,
            },

            gameplay: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: 0,
            },

            creation: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "Forumpost"
        }
    );

export default Forumpost;