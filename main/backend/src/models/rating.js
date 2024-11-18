export default (sequelize, DataTypes) => {
    const Rating = sequelize.define(
        'Rating', {
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

            positive: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: 0,
            },

            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'User',
                    key: 'Id',
                },
            },
        }
    );

Game.haveMany(Rating, {
    foreignKey: "gameId",
});
Rating.belongTo(Game);

User.haveMany(Rating, {
    foreignKey: "userId",
});
Rating.belongTo(User);

return Rating;
} 