import bcrypt from "bcrypt";

const salts = 10;

// A jelszó titkosítás és összehasonlítást külön fájlban definiáljuk majd exportáljuk
export default {
    Hashing: (password) => {
        return bcrypt.hashSync(password, salts);
    },

    Comparing: (plainPassword, hashedPassword) => {
        return bcrypt.compareSync(plainPassword, hashedPassword);
    },
};