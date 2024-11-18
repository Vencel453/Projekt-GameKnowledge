export default (sequelize, DataTypes) => {
    const Tag = sequelize.define(
        'Tag', {
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

            tag: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        }
    );
Game.haveMany(Tag, {
    foreignKey: "gameId",
});
Tag.belongTo(Game);

return Tag;
}