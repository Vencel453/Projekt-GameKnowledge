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
Actor.hasMany(Acting, {
    foreignKey: "actorId",
});
Acting.belongsTo(Actor);

Game.hasMany(Acting, {
    foreignKey: "gameId",
});
Acting.belongsTo(Game);

// Korhatár - Játék kapcsolat
Game.hasMany(Agerating, {
    foreignKey: "gameId",
    onDelete: "CASCADE"
});
Agerating.belongsTo(Game);

// Díj - Játék kapcsolat
Game.hasMany(Gamesaward, {
    foreignKey: "gameId"
});
Gamesaward.belongsTo(Game);

Award.hasMany(Gamesaward, {
    foreignKey: "awardId"
});
Gamesaward.belongsTo(Award);

// Fekete Listás Tokenek - Felhasználók kapcsolat
User.hasMany(Blacklistedtoken, {
    foreignKey: "userId"
});
Blacklistedtoken.belongsTo(User);

// Készítők - Játékok kapcsolat
Creator.hasMany(Creation, {
    foreignKey: "creatorId",
});
Creation.belongsTo(Creator);

Game.hasMany(Creation, {
    foreignKey: "gameId",
});
Creation.belongsTo(Game);

// Kedvencek: Felhasználók - Játékok kapcsolat

Game.hasMany(Favourite, {
    foreignKey: "gameId",
});
Favourite.belongsTo(Game);

User.hasMany(Favourite, {
    foreignKey: "userId",
});
Favourite.belongsTo(User);

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

// Nyelv - játék kapcsolat

Game.hasMany(Gameslanguage, {
    foreignKey: "gameId"
});
Gameslanguage.belongsTo(Game);

Language.hasMany(Gameslanguage, {
    foreignKey: "languageId"
});
Gameslanguage.belongsTo(Language);

// Online platform - Játék kapcsolat
Onlineplatform.hasMany(Gamesonlineplatform, {
    foreignKey: "platformId",
});
Gamesonlineplatform.belongsTo(Onlineplatform);

Game.hasMany(Gamesonlineplatform, {
    foreignKey: "gameId"
});
Gamesonlineplatform.belongsTo(Game);

// Gépigény - Játék kapcsolat
Game.hasOne(Pcspec, {
    foreignKey: "gameId",
});
Pcspec.belongsTo(Game);

// Platform - Játék kapcsolat
Platform.hasMany(Gamesplatform, {
    foreignKey: "platformId",
});
Gamesplatform.belongsTo(Platform);

Game.hasMany(Gamesplatform, {
    foreignKey: "gameId",
});
Gamesplatform.belongsTo(Game);

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
Game.hasMany(Studiosgame, {
    foreignKey: "gameId",
});
Studiosgame.belongsTo(Game);

Studio.hasMany(Studiosgame, {
    foreignKey: "studioId",
});
Studiosgame.belongsTo(Studio);

// Címke - Játék kapcsolat
Game.hasMany(Gamestag, {
    foreignKey: "gameId",
});
Gamestag.belongsTo(Game);

Tag.hasMany(Gamestag, {
    foreignKey: "tagId",
});
Gamestag.belongsTo(Tag);

Game.belongsToMany(Tag, {
    through: Gamestag,
    foreignKey: "gameId",
    otherKey: "tagId"
});

Tag.belongsToMany(Game, {
    through: Gamestag,
    foreignKey: "tagId",
    otherKey: "gameId"
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