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
                allowNull: false,
            },
        }
    );
    Forumpost.HasMany(Forumcomment, {
        foreignKey: 'forumId',
        onDelete: 'CASCADE',
    });
    Forumcomment.belongsTo(Forumpost);

    User.HasMany(Forumcomment, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
    });
    Forumcomment.belongsTo(User);

return Forumcomment;
}