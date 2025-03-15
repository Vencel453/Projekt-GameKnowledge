import sequelize from "../config.js";
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
        comment: "A kritika címe"
    },

    content: {
        type: DataTypes.TEXT,
        allowNull: false,
        comment: "A kritika törzs szövege"
    },

    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        comment: "A kritika létrehozásának a dátuma"
    }
    },
    {
        sequelize,
        modelName: "Review",
        comment: "A felhasználók által írt játék kritikákat tárolja"
    }
);

export default Review;