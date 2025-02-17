import sequelize from "../config/config.js";
import { Model, DataTypes } from "sequelize";

class Gamesonlineplatform extends Model {};
Gamesonlineplatform.init ({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

        },
        {
            sequelize,
            modelName: "Gamesonlineplatform"
        }
    );
    
export default Gamesonlineplatform;