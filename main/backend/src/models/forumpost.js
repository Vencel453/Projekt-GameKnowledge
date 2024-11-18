export default (sequelize, DataTypes) => {
    const Forumpost = sequelize.define(
        'Forumpost', {
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
                    key: 'id',
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

            content: {
                type: DataTypes.TEXT,
                allowNull: false,
            },

            creation: {
                type: DataTypes.DATETIME,
            },
        }
    );
    User.HasMany(Forumpost, {
        foreignKey: 'userId',
    });
    Forumcomment.belongsTo(User);

    Game.HasMany(Forumcomment, {
        foreignKey: 'gameId',
    });
    Forumcomment.belongsTo(Game);

return Forumcomment;
}