export default (sequelize, DataTypes) => {
    const Creation = sequelize.define(
        'Creation', {
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

            creatorId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Creator',
                    key: 'id'
                },
            },

            field: {
                type: DataTypes.STRING,
            },
        }
    );
    Game.HasMany(Creation, {
        foreignKey: 'gameId',
    });
    Creation.belongTo(Game);

    Creator.HasMany(Creation, {
        foreignKey: 'creatorId',
    });
    Creation.belongsTo(Creator);

return Creation;
}