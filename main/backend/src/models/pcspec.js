import sequelize from "../config/config.js";
import { Model, DataTypes } from "sequelize";

class Pcspec extends Model {};
Pcspec.init ({
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNul: false,
                autoIncrement: true,
                primaryKey: true,
            },

            minOp: {
                type: DataTypes.STRING(50),
                allowNull: false,
                comment: "The minimum requirement of the operation system."
            },

            minCpu: {
                type: DataTypes.STRING(100),
                allowNull: false,
                comment: "The minimum requirement of the CPU."
            },

            minRam: {
                type: DataTypes.STRING(10),
                allowNull: false,
                comment: "The minimum requirement of the RAM storage."
            },

            minGpu: {
                type: DataTypes.STRING(100),
                allowNull: false,
                comment: "The minimum requirement of the GPU."
            },

            minDirectx: {
                type: DataTypes.STRING(20),
                allowNul: false,
                comment: "The minimum requirement of the DirectX version."
            },

            op: {
                type: DataTypes.STRING(50),
                comment: "The recommended requirement of the operation system"
            },

            cpu: {
                type: DataTypes.STRING(100),
                comment: "The recommended requirement of the CPU."
            },

            ram: {
                type: DataTypes.STRING(10),
                comment: "The recommended requirement of the RAM storage."
            },

            gpu: {
                type: DataTypes.STRING(100),
                comment: "The recommended requirement of the GPU."
            },

            directx: {
                type: DataTypes.STRING(20),
                comment: "The recommended requirement of the DirectX version."
            },

            storage: {
                type: DataTypes.STRING(10),
                allowNul: false,
                comment: "The needed free space needed on a secondary storage."
            },

            sidenote: {
                type: DataTypes.STRING,
                comment: "Some other requirement that couldn't be specified in the other columns."
            },
            
        },
        {
            sequelize,
            modelName: "Pcspec",
            comment: "Stores a game's pc requirements."
        }
    );

export default Pcspec;