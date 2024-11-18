export default (sequelize, DataTypes) => {
    const Studio = sequelize.define(
        'Studio', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: false,
                primaryKey: true,
            },

            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            logo: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        }
    );

return Studio;
}