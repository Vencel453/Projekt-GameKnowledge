import leoProfanity from "leo-profanity";

export default {
    // A leoprofanity csomag metódusával ellenőrizzük a kráomkodást
    CheckProfanity: (text) => {
        return leoProfanity.check(text);
    },

    // Ez a metódus a felhasználónevet ellenőrzi hogy a [5;30] tartományon belül van, illetve tiltja a szóköz használatot
    CheckUsername: (username) => {
        return String(username).length >= 5 && String(username).length <= 30 &&
            !(String(username).includes(" "));
    },

    // Ez a metódus a jelszó formátumát ellenőrzi, hogy benne van-e a [10;30] tartományban,
    // tartalmaz-e nagy betűt és hogy tartalmaz-e számot
    CheckPassword: (password) => {
        return String(password).length >= 10 && String(password).length <= 30 && !(password.toLowerCase() == password) && /[0-9]/.test(password);
    },
}