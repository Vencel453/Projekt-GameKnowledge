export default (sequelize, DataTypes) => {
    const Award = sequelize.define(
        'Award', {
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

            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            organizer: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            year: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            result: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
        }
    );

    Game.hasMany(Award, {
        foreignKey: 'gameId',
    })
    Award.belongsTo(Game);

return Award;
}