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
                type: DataTypes.STRING(100),
            },

            lastNameName: {
                type: DataTypes.STRING(100),
            },

            profilePicture: {
                type: DataTypes.STRING(100),
            },
        }
    );
return Actor;
}