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
                comment: "A minimum rendszer követelményben meghatározott operációs rendszer"
            },

            minCpu: {
                type: DataTypes.STRING(100),
                allowNull: false,
                comment: "A minimum rendszer követelményben meghatározott processzor"
            },

            minRam: {
                type: DataTypes.STRING(10),
                allowNull: false,
                comment: "A minimum rendszer követelményben meghatározott memória"
            },

            minGpu: {
                type: DataTypes.STRING(100),
                allowNull: false,
                comment: "A minimum rendszer követelményben meghatározott videókártya"
            },

            minDirectx: {
                type: DataTypes.STRING(20),
                allowNul: false,
                comment: "A minimum rendszer követelményben meghatározott DirectX verziója"
            },

            op: {
                type: DataTypes.STRING(50),
                comment: "Az ajánlott rendszer követelményben meghatározott operációs rendszer"
            },

            cpu: {
                type: DataTypes.STRING(100),
                comment: "Az ajánlott rendszer követelményben meghatározott processzor"
            },

            ram: {
                type: DataTypes.STRING(10),
                comment: "Az ajánlott rendszer követelményben meghatározott memória"
            },

            gpu: {
                type: DataTypes.STRING(100),
                comment: "Az ajánlott rendszer követelményben meghatározott videókártya"
            },

            directx: {
                type: DataTypes.STRING(20),
                comment: "Az ajánlott rendszer követelményben meghatározott DirectX verzió"
            },

            storage: {
                type: DataTypes.STRING(10),
                allowNul: false,
                comment: "Az rendszer követelményben meghatározott háttártáron szükséges szabad hely"
            },

            sidenote: {
                type: DataTypes.STRING,
                comment: "Egyéb rendszerkövetelmény"
            },
            
        },
        {
            sequelize,
            modelName: "Pcspec",
            comment: "A játékok rendszer követelményeit tárolja"
        }
    );

export default Pcspec;