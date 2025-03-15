import sequelize from "../config.js";
import { Model, DataTypes } from "sequelize";

class Acting extends Model {};
Acting.init ({
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            role: {
                type: DataTypes.STRING(100),
                comment: "A színész által eljátszott karakter"
            },
        },
        {
            sequelize, 
            modelName: "Acting",
            comment: "A szénészek és játékokat kapcsolja össze kiegészítve a színész által eljátszott szereppel"
        }
    );

export default Acting;