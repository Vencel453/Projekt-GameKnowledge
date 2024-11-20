export default (sequelize, DataTypes) => {
    const Platform = sequelize.define(
        'Platform', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: false,
                primaryKey: true,
            },

            platform: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        }
    );
return Platform;
}