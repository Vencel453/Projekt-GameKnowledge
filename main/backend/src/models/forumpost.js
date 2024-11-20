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

            story: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: 0,
            },

            gameplay: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: 0,
            },

            creation: {
                type: DataTypes.DATETIME,
                allowNull: false,
            },
        }
    );
    User.HasMany(Forumpost, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
    });
    Forumcomment.belongsTo(User);

    Game.HasMany(Forumcomment, {
        foreignKey: 'gameId',
        onDelete: 'CASCADE',
    });
    Forumcomment.belongsTo(Game);

return Forumcomment;
}