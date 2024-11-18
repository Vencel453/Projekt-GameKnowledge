import { request } from "express";
import { Sequelize, DataTypes } from "sequelize";

const config = require('../config/config.js');
const sequelize = new Sequelize(config.db_config);

const User = require('./user').default(sequelize, DataTypes);
const Game = require('./game').default(sequelize, DataTypes);
const Actor = require('./actor').default(sequelize, DataTypes);
const Acting = require('./acting').default(sequelize, DataTypes);
const Agerating = require('./agerating').default(sequelize, DataTypes);
const Award = require('./award').default(sequelize, DataTypes);
const Creation = require('./creation').default(sequelize, DataTypes);
const Creator = require('./creator').default(sequelize, DataTypes);
const Favourite = require('./favourite').default(sequelize, DataTypes);
const Forumcomment = require('./forumcomment').default(sequelize, DataTypes);
const Forumpost = require('./forumpost').default(sequelize, DataTypes);
const Gamepicture = require('./gamepicture').default(sequelize, DataTypes);
const Language = require('./language').default(sequelize, DataTypes);
const Onlineplatform = require('./onlineplatform').default(sequelize, DataTypes);
const Platform = require('./platform').default(sequelize, DataTypes);
const Rating = require('./rating').default(sequelize, DataTypes);
const Studio = require('./studio').default(sequelize, DataTypes);
const Studiosgame = require('./studiosgames').default(sequelize, DataTypes);
const Tag = require('./tag').default(sequelize, DataTypes);


sequelize.sync();

export default {sequelize, User, Game, Actor, Acting, Agerating, Award, Creation, Creator, Favourite, Forumcomment, Forumpost,
    Gamepicture, Language, Onlineplatform, Platform, Rating, Studio, Studiosgame, Tag};