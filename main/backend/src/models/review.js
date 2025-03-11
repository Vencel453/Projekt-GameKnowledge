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
        comment: "The small title of the the review."
    },

    content: {
        type: DataTypes.TEXT,
        allowNull: false,
        comment: "The text of the review."
    },

    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        comment: "The date when the review was shared."
    }
    },
    {
        sequelize,
        modelName: "Review",
        comment: "Stores the reviews of games that are wrote by users who rated the game before."
    }
);

export default Review;