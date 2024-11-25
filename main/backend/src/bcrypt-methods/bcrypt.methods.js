import bcrypt from "bcrypt";

const salts = 10;

export default {
    Hashing: (password) => {
        return bcrypt.hashSync(password, salts);
    },

    Comparing: (plainPassword, hashedPassword) => {
        return bcrypt.compareSync(plainPassword, hashedPassword);
    },
};