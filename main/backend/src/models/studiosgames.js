export default (sequelize, DataTypes) => {
    const Studiosgame = sequelize.define(
        'Studiosgame', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: false,
                primaryKey: true,
            },

            gameId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Game',
                    key: 'Id',
                },
            },

            studioId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Studio',
                    key: 'Id',
                },
            },

            isDeveloper: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: 0,
            },

            isPublisher: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: 0,
            },

        }
    );

Game.haveMany(Studiosgame, {
    foreignKey: "gameId",
});
Studiosgame.belongTo(Game);

Studio.haveMany(Studiosgame, {
    foreignKey: "userId",
});
Studiosgame.belongTo(Studio);

return Studiosgame;
} 