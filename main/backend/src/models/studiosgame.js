import sequelize from "../config/config.js";
import { Model, DataTypes } from "sequelize";

class Studiosgame extends Model {};
Studiosgame.init ({
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            isDeveloper: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: 0,
                comment: "A stúdió részt vett-e a játék fejlesztésében, a 0 nemet, az 1 igent jelent"
            },

            isPublisher: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: 0,
                comment: "A stúdió részt vett-e a játék kiadásában, a 0 nemet, az 1 igent jelent"
            },

        },
        {
            sequelize,
            modelName: "Studiosgame",
            comment: "Összeköti a játékokat a hozzájuk tartozó stúdiókkal kiegészítve a stúdió szerepével"
        }
    );

export default Studiosgame;