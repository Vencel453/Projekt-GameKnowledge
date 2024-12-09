import {Sequelize, DataTypes, Model} from "sequelize";
import Game from "./game.js";
import User from "./user.js";
import { db_config } from "../config/config.js";
const sequelize = new Sequelize(db_config)

class Forumpost extends Model {};
Forumpost.init ({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'User',
                    key: 'id',
                },
            },

            gameId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Game',
                    key: 'id',
                },
            },

            content: {
                type: DataTypes.TEXT,
                allowNull: false,
            },

            story: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: 0,
            },

            gameplay: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: 0,
            },

            creation: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "Forumpost"
        }
    );
    User.hasMany(Forumpost, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
    });
    Forumpost.belongsTo(User);

    Game.hasMany(Forumpost, {
        foreignKey: 'gameId',
        onDelete: 'CASCADE'
    })

export default Forumpost;