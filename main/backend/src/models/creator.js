export default (sequelize, DataTypes) => {
    const Creator = sequelize.define(
        'Creator', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            firstName: {
                type: DataTypes.STRING(100),
            },

            lasttName: {
                type: DataTypes.STRING(100),
            },
        }
    );

return Creator;
}