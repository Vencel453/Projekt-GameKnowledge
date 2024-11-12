export default (Sequelize, DataTypes) => {
    const Game = Sequelize.define(
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
            },

            release: {
                type: DataTypes.DATEONLY,
            },

            boxart: {
                type: DataTypes.STRING,
            },

            controllerSupport: {
                type: DataTypes.INTEGER,
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