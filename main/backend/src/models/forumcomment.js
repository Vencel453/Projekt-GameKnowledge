import sequelize from "../config/config.js";
import { Model, DataTypes } from "sequelize";

class Forumcomment extends Model {};
Forumcomment.init ({
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

            creation: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "Forumcomment"
        }
    );

export default Forumcomment;
