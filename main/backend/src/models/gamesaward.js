import sequelize from "../config/config.js";
import { Model, DataTypes } from "sequelize";

class Gamesaward extends Model {};
Gamesaward.init ({
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            year: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                comment: "Az év amikor a játékot a díjra jelölték"
            },

            result: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: 0,
                comment: "Az eredmény, ahol a 0 azt jelenti hogy a játékot csak jelölték a díjra, az 1 hogy megnyerte a díjat"
            },
        },
        {
            sequelize,
            modelName: "Gamesaward",
            comment: "A játékokat köti össze azokkal a díjakkal amelyekre jeölték és az adott jelölésre specifikus adatokkal kiegészítve"
        }
    );

export default Gamesaward;
