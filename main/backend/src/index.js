import sequelize from "./config.js";
import app from "./app.js";

// Minden modelt be importálunk ide
import Acting from "./models/acting.js";
import Actor from "./models/actor.js"
import Agerating from "./models/agerating.js";
import Award from "./models/award.js";
import Creation from "./models/creation.js";
import Creator from "./models/creator.js"
import Favourite from "./models/favourite.js";
import Game from "./models/game.js";
import Gamepicture from "./models/gamepicture.js";
import Gamesagerating from "./models/gamesagerating.js";
import Gamesaward from "./models/gamesaward.js";
import Gameslanguage from "./models/gameslanguage.js";
import Gamesplatform from "./models/gamesplatform.js";
import Gamestag from "./models/gamestag.js";
import Language from "./models/language.js";
import Pcspec from "./models/pcspec.js";
import Platform from "./models/platform.js";
import Rating from "./models/rating.js";
import Review from "./models/review.js";
import Studio from "./models/studio.js";
import Studiosgame from "./models/studiosgame.js";
import Tag from "./models/tag.js";
import User from "./models/user.js";

// Létrehozzuk az adatbázis kapcsolatokat

// Színész - Játék kapcsolat
Game.belongsToMany(Actor, {
    through: Acting
});
Actor.belongsToMany(Game, {
    through: Acting
});

// Korhatár - Játék kapcsolat
Game.belongsToMany(Agerating, {
    through: Gamesagerating
});
Agerating.belongsToMany(Game, {
    through: Gamesagerating
});

// Díj - Játék kapcsolat
Game.belongsToMany(Award, {
    through: Gamesaward
});
Award.belongsToMany(Game, {
    through: Gamesaward
});

// Készítők - Játékok kapcsolat
Game.belongsToMany(Creator,{
    through: Creation
});
Creator.belongsToMany(Game, {
    through: Creation
});

// Kedvencek Felhasználók - Játékok kapcsolat
Game.hasMany(Favourite, {
    onDelete: 'CASCADE'
});
Favourite.belongsTo(Game);

User.hasMany(Favourite, {
    onDelete: 'CASCADE'
});
Favourite.belongsTo(User);

// Játék - Játék képek kapcsolat
Game.hasMany(Gamepicture, {
    onDelete: 'CASCADE',
});
Gamepicture.belongsTo(Game);

// Nyelv - játék kapcsolat
Game.belongsToMany(Language, {
    through: Gameslanguage
});
Language.belongsToMany(Game, {
    through: Gameslanguage
});

// Gépigény - Játék kapcsolat
Game.hasOne(Pcspec, {
    onDelete: 'CASCADE'
});
Pcspec.belongsTo(Game);

// Platform - Játék kapcsolat
Game.belongsToMany(Platform, {
    through: Gamesplatform
});
Platform.belongsToMany(Game, {
    through: Gamesplatform
});

// Értékelések - Játékok kapcsolat
Game.hasMany(Rating, {
    onDelete: 'CASCADE'
});
Rating.belongsTo(Game);

// Értékelések - Felhasználók kapcsolat
User.hasMany(Rating, {
    onDelete: 'CASCADE'
});
Rating.belongsTo(User);

// Studió - Játék kapcsolat
Game.belongsToMany(Studio, {
    through: Studiosgame
});

Studio.belongsToMany(Game, {
    through: Studiosgame
});

// Címke - Játék kapcsolat
Game.belongsToMany(Tag, {
    through: Gamestag,
});

Tag.belongsToMany(Game, {
    through: Gamestag,
});

// Kritika - Felhasználó kapcsolat
User.hasMany(Review, {
    onDelete: 'CASCADE'
});
Review.belongsTo(User);

// Kritika - Játék kapcsolat
Game.hasMany(Review, {
    onDelete: 'CASCADE'
});
Review.belongsTo(Game); 

// Konstansként elmentjük a backend port számát
const PORT = 3000;

// Egy csatkalozás kisérlet után, ha sikeres akkor elindítjuk a szervert
await sequelize.authenticate()
    .then(() => {
        console.log("The test connection to the server was succesfull!");
        // Szinkronizáljuk a modeleket az adatbázissal
        sequelize.sync()
        .then(() => {
            console.log("The database sync was succesfull!");
            app.listen(PORT, () => {
                console.log(`The backend server is running on: https://localhost:${PORT}/`);
            });
        })
        .catch((error) => {
        console.log("The database sync failed", error);
        });
    })
    .catch((error) => {
        console.error("Can't connect to the server!\n" + error);
        sequelize.close();
    });