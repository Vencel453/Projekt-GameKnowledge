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
                comment: "The name of the tag."
            },
        },
        {
            sequelize,
            modelName: "Tag",
            comment: "Stores various tags that can be associated to games."
        }
    );

export default Tag;