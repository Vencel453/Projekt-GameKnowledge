import sequelize from "../config/config.js";
import { Model, DataTypes } from "sequelize";

class Creation extends Model {};
Creation.init ({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            field: {
                type: DataTypes.STRING,
            },
        },
        {
            sequelize,
            modelName: "Creation"
        }
    );

export default Creation;
