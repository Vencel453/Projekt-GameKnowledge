import {Sequelize, DataTypes, Model} from "sequelize";
import Game from "./game.js";
import User from "./user.js";
import { db_config } from "../config/config.js";
const sequelize = new Sequelize(db_config)

class Rating extends Model {};
Rating.init ({
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

            positive: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: 0,
            },

            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'User',
                    key: 'Id',
                },
            },
        },
        {
            sequelize,
            modelName: "Rating"
        }
    );

Game.hasMany(Rating, {
    foreignKey: "gameId",
    onDelete: 'CASCADE',
});
Rating.belongsTo(Game);

User.hasMany(Rating, {
    foreignKey: "userId",
    onDelete: 'CASCADE',
});
Rating.belongsTo(User);

export default Rating;