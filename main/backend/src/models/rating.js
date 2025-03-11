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
                comment: "The rating's value, if it's 0, it means that it's negative rating, if it's 1, it means that it's a positive rating."
            },
        },
        {
            sequelize,
            modelName: "Rating",
            comment: "Stores the user's ratings of the games,"
        }
    );

export default Rating;