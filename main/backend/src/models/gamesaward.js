export default (sequelize, Datatypes) => {
    const Gamesaward = sequelize.define(
        'Gamesaward', {
            id: {
                type: Datatypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            gameId: {
                type: Datatypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Game',
                    key: 'id',
                },
            },

            awardId: {
                type: Datatypes.INTEGER,
                allowNull: false,
                references: {
                    modul: 'Award',
                    key: 'id',
                },
            },

            year: {
                type: Datatypes.INTEGER,
                allowNull: false,
            },

            result: {
                type: Datatypes.BOOLEAN,
                allowNull: false,
                defaultValue: 0,
            },
        }
    );
    Game.hasMany(Gamesaward, {
        foreignKey: gameId,
        onDelete: 'CASCADE'
    });
    Gamesaward.belongTo(Game);

    Award.hasMany(Gamesaward, {
        foreignKey: 'awardId',
        onDelete: 'CASCADE',
    });
    Gamesaward.belongTo(Award);

return Gamesaward;
}