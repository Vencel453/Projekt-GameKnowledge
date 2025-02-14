import sequelize from "../config/config.js";
import { Model, DataTypes } from "sequelize";

class Forumpost extends Model {};
Forumpost.init ({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
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