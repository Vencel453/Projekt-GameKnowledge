import {Sequelize, DataTypes, Model} from "sequelize";
import User from "./user.js";
import Forumpost from "./forumpost.js";
import { db_config } from "../config/config.js";
const sequelize = new Sequelize(db_config)

class Forumcomment extends Model {};
Forumcomment.init ({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            postId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Forumpost',
                    key: 'id',
                },
            },

            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'User',
                    key: 'id',
                },
            },

            content: {
                type: DataTypes.TEXT,
                allowNull: false,
            },

            creation: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "Forumcomment"
        }
    );
    Forumpost.hasMany(Forumcomment, {
        foreignKey: 'forumId',
        onDelete: 'CASCADE',
    });
    Forumcomment.belongsTo(Forumpost);

    User.hasMany(Forumcomment, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
    });
    Forumcomment.belongsTo(User);

export default Forumcomment;
