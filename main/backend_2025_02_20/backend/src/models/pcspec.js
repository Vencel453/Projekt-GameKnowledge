import sequelize from "../config/config.js";
import { Model, DataTypes } from "sequelize";

class Pcspec extends Model {};
Pcspec.init ({
            id: {
                type: DataTypes.INTEGER,
                allowNul: false,
                autoIncrement: true,
                primaryKey: true,
            },

            minOp: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },

            minCpu: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },

            minRam: {
                type: DataTypes.STRING(10),
                allowNull: false
            },

            minGpu: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },

            minDirectx: {
                type: DataTypes.STRING(20),
                allowNul: false,
            },

            cpu: {
                type: DataTypes.STRING(100)
            },

            ram: {
                type: DataTypes.STRING(10)
            },

            gpu: {
                type: DataTypes.STRING(100)
            },

            directx: {
                type: DataTypes.STRING(20)
            },

            op: {
                type: DataTypes.STRING(50)
            },

            storage: {
                type: DataTypes.STRING(10),
                allowNul: false,
            },

            sidenote: {
                type: DataTypes.TEXT,
            },
            
        },
        {
            sequelize,
            modelName: "Pcspec"
        }
    );

export default Pcspec;