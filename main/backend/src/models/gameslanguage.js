import sequelize from "../config/config.js";
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
                comment: "Does the game has dub, 0 means no, 1 means yes."
            },

        },
        {
            sequelize,
            modelName: "Gameslanguage",
            comment: "Stores the connections of games and languages and expand on that did the language include dub."
        }
    );

export default Gameslanguage;