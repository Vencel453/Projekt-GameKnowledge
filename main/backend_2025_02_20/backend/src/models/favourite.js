import sequelize from "../config/config.js";
import { Model, DataTypes } from "sequelize";

class Favourite extends Model {};
Favourite.init ({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
        },
        {
            sequelize,
            modelName: "Favourite"
        }
    );

export default Favourite;