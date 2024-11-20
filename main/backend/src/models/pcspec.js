import { DATE, HasOne } from "sequelize"

export default (sequelize, DataTypes) => {
    const Pcspec = sequelize.define(
        'Pcspec', {
            op: {
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
        }
    );

    Gama.hasOne(Pcspec, {
        foreignKey: 'gameId',
        onDelete: 'CASCADE',
    });
    Pcspec.belongsTo(Game);

return Pcspec;
}