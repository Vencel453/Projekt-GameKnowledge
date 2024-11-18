export default (sequelize, DataTypes) => {
    const Favourite = sequelize.define(
        'Favourite', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'User',
                    key: "id",
                },
            },

            gameId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Game',
                    key: 'id',
                },
            },
        }
    );

    Game.HasMany(Favourite, {
        foreignKey: 'gameId'
    });
    Favourite.belongsTo(Game);

    User.HasMany(Favourite, {
        foreignKey: 'userId'
    });
    Favourite.belongsTo(User);

return Favourite;
}