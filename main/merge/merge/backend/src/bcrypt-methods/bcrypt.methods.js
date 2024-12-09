import bcrypt from "bcrypt";

const salts = 10;

// A jelszó titkosítás és összehasonlítást külön fájlban definiáljuk majd exportáljuk, így ahol fel van használva ezek a metódusok
// kevesebb ismétlődést és jobb átláthatóságot eredményez
export default {
    Hashing: (password) => {
        return bcrypt.hashSync(password, salts);
    },

    Comparing: (plainPassword, hashedPassword) => {
        return bcrypt.compareSync(plainPassword, hashedPassword);
    },
};