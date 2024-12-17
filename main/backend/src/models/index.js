import { Sequelize} from "sequelize";
import { db_config } from "../config/config.js";
const sequelize = new Sequelize(db_config);

// Minden modelt be importálunk ide
import Acting from "./acting.js"
import Actor from "./actor.js"
import Agerating from "./agerating.js";
import Award from "./award.js";
import Blacklistedtoken from "./blacklistedtoken.js";
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

// Létrehozzuk az adatbázis kapcsolatokat

// Színész - Játék kapcsolat
Actor.belongsToMany(Game, {
    through: Acting,
    foreignKey: "actorId",
    otherKey: "gameId",
});
Game.belongsToMany(Actor, {
    through: Acting,
    foreignKey: "gameId",
    otherKey: "actorId",
});

// Korhatár - Játék kapcsolat
Game.hasMany(Agerating, {
    foreignKey: "gameId",
    onDelete: "CASCADE"
});
Agerating.belongsTo(Game);

// Díj - Játék kapcsolat
Game.belongsToMany(Award, {
    through: Gamesaward,
    foreignKey: "gameId",
    otherKey: "awardId"
});
Award.belongsToMany(Game, {
    through: Gamesaward,
    foreignKey: "awardId",
    otherKey: "gameId",
});

// Fekete Listás Tokenek - Felhasználók kapcsolat
User.hasMany(Blacklistedtoken, {
    foreignKey: "userId"
});
Blacklistedtoken.belongsTo(User);

// Készítők - Játékok kapcsolat
Creator.belongsToMany(Game, {
    through: Creation,
    foreignKey: "creatorId",
    otherKey: "gameId",
});
Game.belongsToMany(Creator, {
    through: Creation,
    foreignKey: "gameId",
    otherKey: "creatorId",
});

// Kedvencek: Felhasználók - Játékok kapcsolat
User.belongsToMany(Game, {
    through: Favourite,
    foreignKey: "userId",
    otherKey: "gameId",
});
Game.belongsToMany(User, {
    through: Favourite,
    foreignKey: "gameId",
    otherKey: "userId"
});

// Fórum poszt - Játék kapcsolat
Game.hasMany(Forumpost, {
    foreignKey: "gameId",
    onDelete: "CASCADE"
});
Forumpost.belongsTo(Game);

// Fórum poszt - Felhasználó kapcsolat
User.hasMany(Forumpost, {
    foreignKey: "userId",
});
Forumpost.belongsTo(User);

// Fórum poszt - Fórum komment kapcsolat
Forumpost.hasMany(Forumcomment, {
    foreignKey: "postId",
    onDelete: "CASCADE"
});
Forumcomment.belongsTo(Forumpost);

// Fórum komment - Felhasználó kapcsolat
User.hasMany(Forumcomment, {
    foreignKey: "userId",
});
Forumcomment.belongsTo(User);

// Játék - Játék képek kapcsolat
Game.hasMany(Gamepicture, {
    foreignKey: 'gameId',
    onDelete: 'CASCADE',
});
Gamepicture.belongsTo(Game);

// Nyelv játék kapcsolat
Language.belongsToMany(Game, {
    through: Gameslanguage,
    foreignKey: "languageId",
    otherKey: "gameId",
});
Game.belongsToMany(Language, {
    through: Gameslanguage,
    foreignKey: "gameId",
    otherKey: "languageId",
});

// Online platform - Játék kapcsolat
Onlineplatform.belongsToMany(Game, {
    through: Gamesonlineplatform,
    foreignKey: "platformId",
    otherKey: "gameId",
});
Game.belongsToMany(Onlineplatform, {
    through: Gamesonlineplatform,
    foreignKey: "gameId",
    otherKey: "platformId",
});

// Gépigény - Játék kapcsolat
Game.hasOne(Pcspec, {
    foreignKey: "gameId",
});
Pcspec.belongsTo(Game);

// Platform - Játék kapcsolat
Platform.belongsToMany(Game, {
    through: Gamesplatform,
    foreignKey: "platformId",
    otherKey: "gameId",
});
Game.belongsToMany(Platform, {
    through: Gamesplatform,
    foreignKey: "gameId",
    otherKey: "platformId",
});

// Értékelések - Játékok kapcsolat
Game.hasMany(Rating, {
    foreignKey: "gameId",
});
Rating.belongsTo(Game);

// Értékelések - Felhasználók kapcsolat
User.hasMany(Rating, {
    foreignKey: "userId",
});
Rating.belongsTo(User);

// Studió - Játék kapcsolat
Studio.belongsToMany(Game, {
    through: Studiosgame,
    foreignKey: "studioId",
    otherKey: "gameId",
});
Game.belongsToMany(Studio, {
    through: Studiosgame,
    foreignKey: "gameId",
    otherKey: "studioId",
});

// Címke - Játék kapcsolat
Tag.belongsToMany(Game, {
    through: Gamestag,
    foreignKey: "tagId",
    otherKey: "gameId",
});
Game.belongsToMany(Tag, {
    through: Gamestag,
    foreignKey: "gameId",
    otherKey: "tagId",
});



// Szinkronizáljuk a modeleket az adatbázissal
sequelize.sync()
    .then(() => {
        console.log("The database sync was succesfull!");
    })
    .catch((error) => {
    console.log("The database sync failed", error);
    });

// Itt exportáljuk az összes modelt és innen fogjuk importálni a controller fájlokba
export default {sequelize, User, Game, Actor, Acting, Agerating, Award, Blacklistedtoken, Creation, Creator, Favourite, Forumcomment, Forumpost,
    Gamepicture, Gamesaward, Gameslanguage, Gamesonlineplatform, Gamesplatform, Gamestag, Language, Onlineplatform, Pcspec,
    Platform, Rating, Studio, Studiosgame, Tag};