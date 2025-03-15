import sequelize from "../config.js";
import { Model, DataTypes } from "sequelize";

class Gameslanguage extends Model {};
Gameslanguage.init ({
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            dub: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: 0,
                comment: "Az adott nyelvhez tartozik-e szinkron, a 0 nemet jelent, az 1 az igent"
            },

        },
        {
            sequelize,
            modelName: "Gameslanguage",
            comment: "A játékokat köti össze a játék által támogatott nyelvekkel kiegészítve hogy tartozik-e hozzá szinkron"
        }
    );

export default Gameslanguage;