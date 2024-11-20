export default (sequelize, DataTypes) => {
    const Acting = sequelize.define(
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
                type: DataTypes.STRING(100),
            },
        }
    );

    Games.hasMany(Acting, {
        foreignKey: 'gameId',
        onDelete: 'CASCADE',
    });
    Acting.belongsTo(Games);

    Actor.hasMany(Acting, {
        foreignKey: 'actorId',
        onDelete: 'CASCADE',
    });
    Acting.belongsTo(Actor);

return Acting;
}