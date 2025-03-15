import sequelize from "../config.js";
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
            comment: "A játékokat köti össze azokkal a platformokkal amelyeken megjelentek"
        }
    );
    
export default Gamesplatform;