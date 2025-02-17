import sequelize from "../config/config.js";
import { Model, DataTypes } from "sequelize";

class Gamestag extends Model {};
Gamestag.init ({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
        },
        {
            sequelize,
            modelName: "Gamestag"
        }
    );
    
export default Gamestag;