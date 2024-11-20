export default (sequelize, DataTypes) => {
    const Gameslanguage = sequelize.define(
        'Gameslanguage', {
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

            languageId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Language',
                    key: 'id',
                },
            },

            dub: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: 0,
            },

        }
    );
    Game.hasMany(Gameslanguage, {
        foreignKey: 'gameId',
        onDelete: 'CASCADE',
    });
    Gameslanguage.belongTo(Game);

    Language.hasMany(Gameslanguage, {
        foreignKey: 'languageId',
        onDelete: 'CASCADE',
    });
    Gameslanguage.belongTo(Language);

return Gameslanguage;
}