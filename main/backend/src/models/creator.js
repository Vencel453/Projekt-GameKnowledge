export default (sequelize, DataTypes) => {
    const Creator = sequelize.define(
        'Creator', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        }
    );

return Creator;
}