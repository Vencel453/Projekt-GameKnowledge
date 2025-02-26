import sequelize from "../config/config.js";
import { Model, DataTypes } from "sequelize";

class Gamesagerating extends Model {};
Gamesagerating.init({
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
        },
        {
            sequelize,
            modelName: "Gamesagerating"
        }
    );

export default Gamesagerating;