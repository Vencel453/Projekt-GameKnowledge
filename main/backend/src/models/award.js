import sequelize from "../config/config.js";
import { Model, DataTypes } from "sequelize";

class Award extends Model {};
Award.init ({
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            organizer: {
                type: DataTypes.STRING,
                allowNull: false,
                comment: "The organizer of the award."
            },

            name: {
                type: DataTypes.STRING,
                allowNull: false,
                comment: "The name and the category of the award."
            },
        },
        {
            sequelize,
            modelName: "Award",
            comment: "Stores various game awards."
        }
    );
    
export default Award;
