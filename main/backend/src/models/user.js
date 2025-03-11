import sequelize from "../config/config.js";
import { Model, DataTypes } from "sequelize";

class User extends Model {};
User.init ({
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },

            username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                comment: "A felhasználó által megadott becenév"
            },

            password: {
                type: DataTypes.STRING,
                allowNull: false,
                comment: "A felhasználó jelszava titkosítva"
            },

            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {isEmail: true},
                comment: "A felhasználó email címe"
            },

            admin: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: 0,
                comment: "A felhasználó admin státusza, ahol a 0 azt jelenti hogy csak általános felhasználó, míg az 1 azt jelenti hogy admin"
            },

            creation: {
                type: DataTypes.DATEONLY,
                allowNull: false,
                comment: "A felhasználó fiókjának létrehozásának a dátuma"
            },
        },
        {
            sequelize,
            modelName: "User",
            comment: "A felhasználók adatait tárolja"
        }
    );

export default User;
