import {Sequelize, DataTypes, Model} from "sequelize";
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
    
export default Gamestag;