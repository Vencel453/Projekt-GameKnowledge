export default (sequelize, DataTypes) => {
    const Game = sequelize.define(
        'Game', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },

            gameTitle: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            altGameTitle: {
                type: DataTypes.STRING,
            },

            description: {
                type: DataTypes.TEXT,
                allowNull: false,
            },

            release: {
                type: DataTypes.DATEONLY,
                allowNull: false,
            },

            boxart: {
                type: DataTypes.STRING,
            },

            controllerSupport: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },

            crossplatform: {
                type: DataTypes.INTEGER,
            },

            crossPlatformException: {
                type: DataTypes.INTEGER,
            },

            steamdeckComp: {
                type: DataTypes.INTEGER,
            },
        }
    );
    return Game;
}