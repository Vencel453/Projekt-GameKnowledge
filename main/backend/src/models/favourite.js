import sequelize from "../config/config.js";
import { Model, DataTypes } from "sequelize";

class Favourite extends Model {};
Favourite.init ({
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
        },
        {
            sequelize,
            modelName: "Favourite",
            comment: "Stores the games that the users are saved in thex favourites."
        }
    );

export default Favourite;