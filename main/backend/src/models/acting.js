import {Sequelize, DataTypes, Model} from "sequelize";
import Actor from "./actor.js";
import Game from "./game.js";
import { db_config } from "../config/config.js";
const sequelize = new Sequelize(db_config)

class Acting extends Model {};
Acting.init ({
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
                    key: 'id'
                },
            },

            actorId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Actor',
                    key: 'id'
                },
                
            },

            role: {
                type: DataTypes.STRING(100),
            },
        },
        {
            sequelize, 
            modelName: 'Acting'
        }
    );

    Game.hasMany(Acting, {
        foreignKey: 'gameId',
        onDelete: 'CASCADE',
    });
    Acting.belongsTo(Game);

    Actor.hasMany(Acting, {
        foreignKey: 'actorId',
        onDelete: 'CASCADE',
    });
    Acting.belongsTo(Actor);

export default Acting;