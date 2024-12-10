import {Sequelize, DataTypes, Model} from "sequelize";
import { db_config } from "../config/config.js";
import Game from "./game.js";
import Award from "./award.js";
const sequelize = new Sequelize(db_config)

class Gamesaward extends Model {};
Gamesaward.init ({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            gameId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Game',
                    key: 'id',
                },
            },

            awardId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    modul: 'Award',
                    key: 'id',
                },
            },

            year: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            result: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: 0,
            },
        },
        {
            sequelize,
            modelName: "Gamesaward"
        }
    );
    Game.hasMany(Gamesaward, {
        foreignKey: "gameId",
        onDelete: 'CASCADE'
    });
    Gamesaward.belongsTo(Game);

    Award.hasMany(Gamesaward, {
        foreignKey: 'awardId',
        onDelete: 'CASCADE',
    });
    Gamesaward.belongsTo(Award);

export default Gamesaward;
