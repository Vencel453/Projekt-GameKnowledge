import sequelize from "../config/config.js";
import { Model, DataTypes } from "sequelize";

class Tag extends Model {};
Tag.init ({
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            tag: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                comment: "A címke neve"
            },
        },
        {
            sequelize,
            modelName: "Tag",
            comment: "Különböző címkéket tárol amivel a játékokat lehet besorolni"
        }
    );

export default Tag;