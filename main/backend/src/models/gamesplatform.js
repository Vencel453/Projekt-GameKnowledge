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
            modelName: "Gamesplatform",
            comment: "Stores the connections of the games and the platforms that they was releason on."
        }
    );
    
export default Gamesplatform;