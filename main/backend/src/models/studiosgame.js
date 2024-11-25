import {Sequelize, DataTypes, Model} from "sequelize";
import Game from "./game.js";
import Studio from "./studio.js";
import { db_config } from "../config/config.js";
const sequelize = new Sequelize(db_config)

class Studiosgame extends Model {};
Studiosgame.init ({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: false,
                primaryKey: true,
            },

            gameId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Game',
                    key: 'Id',
                },
            },

            studioId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Studio',
                    key: 'Id',
                },
            },

            isDeveloper: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: 0,
            },

            isPublisher: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: 0,
            },

        },
        {
            sequelize,
            modelName: "Studiosgame"
        }
    );

Game.hasMany(Studiosgame, {
    foreignKey: "gameId",
});
Studiosgame.belongsTo(Game);

Studio.hasMany(Studiosgame, {
    foreignKey: "userId",
});
Studiosgame.belongsTo(Studio);

export default Studiosgame;