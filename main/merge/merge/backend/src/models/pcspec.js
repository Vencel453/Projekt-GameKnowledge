import {Sequelize, DataTypes, Model} from "sequelize";
import Game from "./game.js";
import { db_config } from "../config/config.js";
const sequelize = new Sequelize(db_config)

class Pcspec extends Model {};
Pcspec.init ({
            minop: {
                type: DataTypes.STRING(50),
            },

            mincpu: {
                type: DataTypes.STRING(100),
            },

            minram: {
                type: DataTypes.STRING(10),
            },

            mingpu: {
                type: DataTypes.STRING(100),
            },

            mindirectx: {
                type: DataTypes.STRING(20),
                allowNul: false,
            },

            cpu: {
                type: DataTypes.STRING(100),
                allowNul: false,
            },

            ram: {
                type: DataTypes.STRING(10),
                allowNul: false,
            },

            gpu: {
                type: DataTypes.STRING(100),
                allowNul: false,
            },

            directx: {
                type: DataTypes.STRING(20),
                allowNul: false,
            },

            op: {
                type: DataTypes.STRING(50),
            },

            storage: {
                type: DataTypes.STRING(10),
                allowNul: false,
            },

            sidenote: {
                type: DataTypes.TEXT,
            },

            id: {
                type: DataTypes.INTEGER,
                allowNul: false,
                autoIncrement: true,
                primaryKey: true,
            },
            
            gameId: {
                type: DataTypes.INTEGER,
                allowNul: false,
                references: {
                    model: 'Game',
                    key: 'id',
                },
            },
        },
        {
            sequelize,
            modelName: "Pcspec"
        }
    );

    Game.hasOne(Pcspec, {
        foreignKey: 'gameId',
        onDelete: 'CASCADE',
    });
    Pcspec.belongsTo(Game);

export default Pcspec;