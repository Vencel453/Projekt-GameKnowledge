import sequelize from "../config/config.js";
import { Model, DataTypes } from "sequelize";

class Gamestag extends Model {};
Gamestag.init ({
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
        },
        {
            sequelize,
            modelName: "Gamestag",
            comment: "Stores the connections of games and the tags that fit the game."
        }
    );
    
export default Gamestag;