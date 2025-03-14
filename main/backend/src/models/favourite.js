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
            comment: "A felhasználók által a kedvencekbe mentett játékaikat tárolja"
        }
    );

export default Favourite;