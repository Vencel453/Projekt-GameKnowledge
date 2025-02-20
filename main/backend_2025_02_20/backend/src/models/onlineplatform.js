import sequelize from "../config/config.js";
import { Model, DataTypes } from "sequelize";

class Onlineplatform extends Model {};
Onlineplatform.init ({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            onlineplatform: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
        },
        {
            sequelize,
            modelName: "Onlineplatform"
        }
    );
    
export default Onlineplatform;
