import {Sequelize, DataTypes, Model} from "sequelize";
import Game from "./game.js";
import Language from "./language.js";
import { db_config } from "../config/config.js";
const sequelize = new Sequelize(db_config)

class Gameslanguage extends Model {};
Gameslanguage.init ({
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

            languageId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Language',
                    key: 'id',
                },
            },

            dub: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: 0,
            },

        },
        {
            sequelize,
            modelName: "Gameslanguage"
        }
    );
    Game.hasMany(Gameslanguage, {
        foreignKey: 'gameId',
        onDelete: 'CASCADE',
    });
    Gameslanguage.belongsTo(Game);

    Language.hasMany(Gameslanguage, {
        foreignKey: 'languageId',
        onDelete: 'CASCADE',
    });
    Gameslanguage.belongsTo(Language);

export default Gameslanguage;