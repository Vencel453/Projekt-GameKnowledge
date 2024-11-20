export default (sequelize, DataTypes) => {
    const Gamestag = sequelize.define(
        'Gamestag', {
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

            tagId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Tag',
                    key: 'id',
                },
            },
        }
    );
    Game.hasMany(Gamestag, {
        foreignKey: 'gameId',
        onDelete: 'CASCADE',
    });
    Gamestag.belongTo(Game);

    Tag.hasMany(Gamestag, {
        foreignKey: 'tagId',
        onDelete: 'CASCADE',
    });
    Gamestag.belongTo(Tag);
    
return Gamestag;
}