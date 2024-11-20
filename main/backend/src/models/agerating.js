export default (sequelize, DataTypes) => {
    const Agerating = sequelize.define(
        'Agerating', {
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

            rating: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },

            institution: {
                type: DataTypes.STRING(4),
                allowNull: false,
            },
        }
    );

    Game.HasMany(Agerating, {
        foreignKey: "gameId",
        onDelete: 'CASCADE',
    });
    Agerating.BelongsTo(Game);

return Agerating;
}