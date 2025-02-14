export default {
    CheckUsername: async(username) => {
        return String(username).length >= 5 && String(username).length <= 30;
    },

    CheckPassword: async(password) => {
        return String(password).length >= 10 && String(password).length <= 30 && !(password.toLowerCase() == password) && /[0-9]/.test(password);
    },
}