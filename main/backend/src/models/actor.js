import sequelize from "../config.js";
import { Model, DataTypes } from "sequelize";

class Actor extends Model {};
Actor.init ({
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            firstName: {
                type: DataTypes.STRING(100),
                comment: "A színész keresztneve"
            },

            lastName: {
                type: DataTypes.STRING(100),
                comment: "A színész vezetékneve",
            },

            profilePicture: {
                type: DataTypes.STRING,
                comment: "A színészről tárolt kép elérési útvonala"
            },
        },
        {
            sequelize,
            modelName: "Actor",
            comment: "A színészek adatait tárolja"
        });

export default Actor;
