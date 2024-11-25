import { Sequelize} from "sequelize";
import { db_config } from "../config/config.js";
const sequelize = new Sequelize(db_config);

import Acting from "./acting.js"
import Actor from "./actor.js"
import Agerating from "./agerating.js";
import Award from "./award.js";
import Creation from "./creation.js";
import Creator from "./creator.js"
import Favourite from "./favourite.js";
import Forumcomment from "./forumcomment.js";
import Forumpost from "./forumpost.js";
import Game from "./game.js";
import Gamepicture from "./gamepicture.js";
import Gamesaward from "./gamesaward.js";
import Gameslanguage from "./gameslanguage.js";
import Gamesonlineplatform from "./gamesonlineplatform.js";
import Gamesplatform from "./gamesplatform.js";
import Gamestag from "./gamestag.js";
import Language from "./language.js";
import Onlineplatform from "./onlineplatform.js";
import Pcspec from "./pcspec.js";
import Platform from "./platform.js";
import Rating from "./rating.js";
import Studio from "./studio.js";
import Studiosgame from "./studiosgame.js";
import Tag from "./tag.js";
import User from "./user.js";




sequelize.sync().then(() => {
    console.log("The database sync was succesfull!");
}).catch((error) => {
    console.log("The database sync failed", error);
});

export default {sequelize, User, Game, Actor, Acting, Agerating, Award, Creation, Creator, Favourite, Forumcomment, Forumpost,
    Gamepicture, Gamesaward, Gameslanguage, Gamesonlineplatform, Gamesplatform, Gamestag, Language, Onlineplatform, Pcspec,
    Platform, Rating, Studio, Studiosgame, Tag};