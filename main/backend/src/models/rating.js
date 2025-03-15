import sequelize from "../config.js";
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
                comment: "Az értékelés, ha 0 az negatív értékelést jelent míg az 1 pozitívat"
            },
        },
        {
            sequelize,
            modelName: "Rating",
            comment: "A játékok felhasználói értékeléseit tárolja"
        }
    );

export default Rating;