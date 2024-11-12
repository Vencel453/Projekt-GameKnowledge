import { Sequelize, DataTypes } from "sequelize";

const config = require('../config/config.js');
const sequelize = new Sequelize(config.db_config);

const User = require('./user').default(sequelize, DataTypes);
const Game = require('./game').default(sequelize, DataTypes);
const Actor = require('./actor').default(sequelize, DataTypes);
const Acting = require('./acting').default(sequelize, DataTypes);

sequelize.sync();

export default {sequelize, User, Game, Actor, Acting};