export default (sequelize, DataTypes) => {
    const Forumcomment = sequelize.define(
        'Forumcomment', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            postId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Forumpost',
                    key: 'id',
                },
            },

            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'User',
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
    Forumpost.HasMany(Forumcomment, {
        foreignKey: 'forumId',
    });
    Forumcomment.belongsTo(Forumpost);

    User.HasMany(Forumcomment, {
        foreignKey: 'userId',
    });
    Forumcomment.belongsTo(User);

return Forumcomment;
}