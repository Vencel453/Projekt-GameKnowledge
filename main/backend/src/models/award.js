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
                comment: "A díj szervezője"
            },

            name: {
                type: DataTypes.STRING(100),
                allowNull: false,
                comment: "A díj kategóriája/neve"
            },
        },
        {
            sequelize,
            modelName: "Award",
            comment: "Különböző intézmények díjak kategóriáját tartalmazza tartalmazza"
        }
    );
    
export default Award;
