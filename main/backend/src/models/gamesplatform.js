export default (sequelize, DataTypes) => {
    const Gamesplatform = sequelize.define(
        'Gamesplatform', {
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

            platformId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Platform',
                    key: 'id',
                },
            },
        }
    );
    Game.hasMany(Gamesplatform, {
        foreignKey: 'gameId',
        onDelete: 'CASCADE',
    });
    Gamesplatform.belongTo(Game);

    Platform.hasMany(Gamesplatform, {
        foreignKey: 'platformId',
        onDelete: 'CASCADE',
    });
    Gamesplatform.belongTo(Platform);
    
return Gamesplatform;
}