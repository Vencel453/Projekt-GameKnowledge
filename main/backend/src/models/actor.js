export default (sequelize, DataTypes) => {
    const Actor = sequelize.define(
        'Actor', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            firstName: {
                type: DataTypes.STRING,
            },

            lastNameName: {
                type: DataTypes.STRING,
            },

            profilePicture: {
                type: DataTypes.STRING,
            },
        }
    );
return Actor;
}