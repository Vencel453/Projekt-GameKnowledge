export default (Sequelize, DataTypes) => {
    const Acting = Sequelize.define(
        'Acting',{
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            gameId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Game',
                    key: 'id'
                },
                onDelete: 'CASCADE',
            },

            actorId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Actor',
                    key: 'id'
                },
            },

            role: {
                type: DataTypes.STRING,
            },
        }
    );

    Games.hasMany(Acting, {
        foreignKey: 'gameId',
    });
    Acting.belongsTo(Games);

    Actor.hasMany(Acting, {
        foreignKey: 'actorId',
    });
    Acting.belongsTo(Actor);

return Acting;
}