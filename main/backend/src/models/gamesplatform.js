import sequelize from "../config/config.js";
import { Model, DataTypes } from "sequelize";

class Gamesplatform extends Model {};
Gamesplatform.init ({
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

        },
        {
            sequelize,
            modelName: "Gamesplatform"
        }
    );
    
export default Gamesplatform;