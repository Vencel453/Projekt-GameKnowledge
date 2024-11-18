export default (sequelize, DataTypes) => {
    const Language = sequelize.define(
        'Language', {
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

            language: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        }
    );
Game.haveMany(Language, {
    foreignKey: "gameId",
});
Language.belongTo(Game);

return Language;
}