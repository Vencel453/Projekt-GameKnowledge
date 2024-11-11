import { Sequelize, DataTypes } from "sequelize";

const config = require('../config/config.js');
const sequelize = new Sequelize(config.adatbázis);

const User = require('./user').default(sequelize, DataTypes);
const Game = require('./game').default(sequelize, DataTypes);

sequelize.sync();

module.exports = {sequelize, User, Game};