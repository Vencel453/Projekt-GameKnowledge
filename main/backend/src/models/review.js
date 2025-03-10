import sequelize from "../config/config.js";
import { Model, DataTypes } from "sequelize";

class Review extends Model {};

Review.init ({
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
        allowNull: false
    },

    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
    },
    {
        sequelize,
        modelName: "Review"
    }
);

export default Review;