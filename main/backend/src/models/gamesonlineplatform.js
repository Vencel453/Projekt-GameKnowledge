export default (sequelize, DataTypes) => {
    const Gamesonlineplatform = sequelize.define(
        'Gamesonlineplatform', {
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
                    key: 'id',
                },
            },

            platformId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Onlineplatform',
                    key: 'id',
                },
            },
        }
    );
    Game.hasMany(Gamesonlineplatform, {
        foreignKey: 'gameId',
        onDelete: 'CASCADE',
    });
    Gamesonlineplatform.belongTo(Game);

    Onlineplatform.hasMany(Gamesonlineplatform, {
        foreignKey: 'platformId',
        onDelete: 'CASCADE',
    });
    Gamesonlineplatform.belongTo(Onlineonlineplatform);
    
return Gamesonlineplatform;
}