import {Sequelize, DataTypes, Model} from "sequelize";
import Game from "./game.js";
import Platform from "./platform.js";
import { db_config } from "../config/config.js";
const sequelize = new Sequelize(db_config)

class Gamesplatform extends Model {};
Gamesplatform.init ({
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
                    model: 'Platform',
                    key: 'id',
                },
            },
        },
        {
            sequelize,
            modelName: "Gamesplatform"
        }
    );
    Game.hasMany(Gamesplatform, {
        foreignKey: 'gameId',
        onDelete: 'CASCADE',
    });
    Gamesplatform.belongsTo(Game);

    Platform.hasMany(Gamesplatform, {
        foreignKey: 'platformId',
        onDelete: 'CASCADE',
    });
    Gamesplatform.belongsTo(Platform);
    
export default Gamesplatform;