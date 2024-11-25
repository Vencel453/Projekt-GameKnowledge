import {Sequelize, DataTypes, Model} from "sequelize";
import Game from "./game.js";
import Onlineplatform from "./onlineplatform.js";
import { db_config } from "../config/config.js";
const sequelize = new Sequelize(db_config)

class Gamesonlineplatform extends Model {};
Gamesonlineplatform.init ({
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

            platformId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Onlineplatform',
                    key: 'id',
                },
            },
        },
        {
            sequelize,
            modelName: "Gamesonlineplatform"
        }
    );
    Game.hasMany(Gamesonlineplatform, {
        foreignKey: 'gameId',
        onDelete: 'CASCADE',
    });
    Gamesonlineplatform.belongsTo(Game);

    Onlineplatform.hasMany(Gamesonlineplatform, {
        foreignKey: 'platformId',
        onDelete: 'CASCADE',
    });
    Gamesonlineplatform.belongsTo(Onlineplatform);
    
export default Gamesonlineplatform;