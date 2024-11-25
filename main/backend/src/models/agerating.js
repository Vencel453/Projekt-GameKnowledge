import {Sequelize, DataTypes, Model} from "sequelize";
import Game from "./game.js";
import { db_config } from "../config/config.js";
const sequelize = new Sequelize(db_config)

class Agerating extends Model {};
Agerating.init ({
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

            rating: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },

            institution: {
                type: DataTypes.STRING(4),
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "Agerating"
        }
    );

    Game.hasMany(Agerating, {
        foreignKey: "gameId",
        onDelete: 'CASCADE',
    });
    Agerating.belongsTo(Game);

export default Agerating;
