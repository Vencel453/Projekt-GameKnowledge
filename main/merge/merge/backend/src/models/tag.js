import {Sequelize, DataTypes, Model} from "sequelize";
import Game from "./game.js";
import { db_config } from "../config/config.js";
const sequelize = new Sequelize(db_config)

class Tag extends Model {};
Tag.init ({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            tag: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "Tag"
        }
    );
Game.hasMany(Tag, {
    foreignKey: "gameId",
    onDelete: 'CASCADE'
});
Tag.belongsTo(Game);

export default Tag;