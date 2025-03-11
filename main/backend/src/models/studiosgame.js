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
                comment: "Did the studio take part in the development, 0 means no, 1 means yes."
            },

            isPublisher: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: 0,
                comment: "Did the studio take part in the publishing, 0 means no, 1 means yes."
            },

        },
        {
            sequelize,
            modelName: "Studiosgame",
            comment: "Stores the connections of games and studios and expand the studios roles."
        }
    );

export default Studiosgame;