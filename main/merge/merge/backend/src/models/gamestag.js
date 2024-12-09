import {Sequelize, DataTypes, Model} from "sequelize";
import Game from "./game.js";
import Tag from "./tag.js";
import { db_config } from "../config/config.js";
const sequelize = new Sequelize(db_config)

class Gamestag extends Model {};
Gamestag.init ({
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

            tagId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Tag',
                    key: 'id',
                },
            },
        },
        {
            sequelize,
            modelName: "Gamestag"
        }
    );
    Game.hasMany(Gamestag, {
        foreignKey: 'gameId',
        onDelete: 'CASCADE',
    });
    Gamestag.belongsTo(Game);

    Tag.hasMany(Gamestag, {
        foreignKey: 'tagId',
        onDelete: 'CASCADE',
    });
    Gamestag.belongsTo(Tag);
    
export default Gamestag;