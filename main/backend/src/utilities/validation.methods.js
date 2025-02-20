import leoProfanity from "leo-profanity";

export default {
    CheckProfanity: (text) => {
        return leoProfanity.check(text);
    },

    CheckUsername: (username) => {
        return String(username).length >= 5 && String(username).length <= 30 &&
            !(String(username).includes(" "));
    },

    CheckPassword: (password) => {
        return String(password).length >= 10 && String(password).length <= 30 && !(password.toLowerCase() == password) && /[0-9]/.test(password);
    },
}