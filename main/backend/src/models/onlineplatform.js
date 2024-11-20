export default (sequelize, DataTypes) => {
    const Onlineplatform = sequelize.define(
        'Onlineplatform', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: false,
                primaryKey: true,
            },

            onlineplatform: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        }
    );
return Onlineplatform;
}