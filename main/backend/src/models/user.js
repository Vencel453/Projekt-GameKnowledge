export default (Sequelize, DataTypes) => {
    const User = Sequelize.define(
        'User',{
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primary: true,
                autoIncrement: true,
            },

            username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },

            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {isEmail: true},
            },

            admin: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
    }
);
return User;
}