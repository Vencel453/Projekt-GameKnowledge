import sequelize from "../config/config.js";
import { Model, DataTypes } from "sequelize";

class Award extends Model {};
Award.init ({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            organizer: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "Award"
        }
    );
    
export default Award;
