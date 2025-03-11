import sequelize from "../config/config.js";
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
                comment: "Actor's first name."
            },

            lastName: {
                type: DataTypes.STRING(100),
                comment: "Actor's last name.",
            },

            profilePicture: {
                type: DataTypes.STRING(100),
                comment: "The URL of a picture of the actor"
            },
        },
        {
            sequelize,
            modelName: "Actor",
            comment: "Stores the datas of the actors."
        });

export default Actor;
