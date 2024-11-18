export default (sequelize, DataTypes) => {
    const Platform = sequelize.define(
        'Platform', {
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

            platform: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        }
    );
Game.haveMany(Platform, {
    foreignKey: "gameId",
});
Platform.belongTo(Game);

return Platform;
}