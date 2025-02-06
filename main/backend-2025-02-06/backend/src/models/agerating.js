import {Sequelize, DataTypes, Model} from "sequelize";
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

export default Agerating;
