export default (sequelize, DataTypes) => {
    const Award = sequelize.define(
        'Award', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            organizer: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        }
    );
return Award;
}