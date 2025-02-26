import sequelize from "../config/config.js";
import { Model, DataTypes } from "sequelize";

class Rating extends Model {};
Rating.init ({
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            positive: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: 0,
            },
        },
        {
            sequelize,
            modelName: "Rating"
        }
    );

export default Rating;