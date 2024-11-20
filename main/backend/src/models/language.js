export default (sequelize, DataTypes) => {
    const Language = sequelize.define(
        'Language', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: false,
                primaryKey: true,
            },

            language: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
        }
    );
return Language;
}