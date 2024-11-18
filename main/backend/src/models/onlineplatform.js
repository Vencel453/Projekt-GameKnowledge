export default (sequelize, DataTypes) => {
    const Onlineplatform = sequelize.define(
        'Onlineplatform', {
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

            onlineplatform: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        }
    );
Game.haveMany(Onlineplatform, {
    foreignKey: "gameId",
});
Onlineplatform.belongTo(Game);

return Onlineplatform;
}