export default (sequelize, DataTypes) => {
    const Gamepicture = sequelize.define(
        'GamePicture', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            gameId: {
                type: DataTypes.INTEGER,
                allowNull:false,
                references: {
                    model: 'Game',
                    key: 'id',
                },
            },

            url: {
                types: DataTypes.STRING,
                allowNull: false,
            }
        }
    );
    Game.hasMany(Gamepicture, {
        foreignKey: 'gameId',
    });
    Gamepicture.belongsTo(Game);

return Gamepicture;
}