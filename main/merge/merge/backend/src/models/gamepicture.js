import {Sequelize, DataTypes, Model} from "sequelize";
import Game from "./game.js";
import { db_config } from "../config/config.js";
const sequelize = new Sequelize(db_config)

class Gamepicture extends Model {};
Gamepicture.init ({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            gameId: {
                type: DataTypes.INTEGER,
                allowNull:false,
                references: {
                    model: 'Game',
                    key: 'id',
                },
            },

            url: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        },
        {
            sequelize,
            modelName: "Gamepicture"
        }
    );
    Game.hasMany(Gamepicture, {
        foreignKey: 'gameId',
        onDelete: 'CASCADE',
    });
    Gamepicture.belongsTo(Game);

export default Gamepicture;
