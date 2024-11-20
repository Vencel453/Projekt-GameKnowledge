export default (sequelize, DataTypes) => {
    const Tag = sequelize.define(
        'Tag', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: false,
                primaryKey: true,
            },

            tag: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        }
    );
Game.haveMany(Tag, {
    foreignKey: "gameId",
    onDelete: 'CASCADE'
});
Tag.belongTo(Game);

return Tag;
}