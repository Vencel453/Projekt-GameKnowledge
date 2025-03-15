import sequelize from "../config.js";
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
            comment: "A játékokat köti azokkal a címkékkel amelyek a játékra illenek"
        }
    );
    
export default Gamestag;