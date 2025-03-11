import sequelize from "../config/config.js";
import { Model, DataTypes } from "sequelize";

class Agerating extends Model {};
Agerating.init ({
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            rating: {
                type: DataTypes.STRING(10),
                allowNull: false,
                comment: "A korhatár besorolás"
            },

            institution: {
                type: DataTypes.STRING(4),
                allowNull: false,
                comment: "A korhatár besorolást intéző intézmény"
            },

            url: {
                type: DataTypes.STRING,
                allowNull: false,
                comment: "A korhatár besorolás képének az elérési útvonala"
            }
        },
        {
            sequelize,
            modelName: "Agerating",
            comment: "Korhatár besorolások adatait tartalmazó tábla"
        }
    );

export default Agerating;
