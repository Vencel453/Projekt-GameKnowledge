export default (sequelize, DataTypes) => {
    const Actor = sequelize.define(
        'Actor', {
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

            profilePicture: {
                type: DataTypes.STRING,
            },
        }
    );
return Actor;
}