import sequelize from "../config.js";
import { Model, DataTypes } from "sequelize";

class Creation extends Model {};
Creation.init ({
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

            field: {
                type: DataTypes.STRING(50),
                comment: "A személy munkaterületét írja le"
            },
        },
        {
            sequelize,
            modelName: "Creation",
            comment: "Összeköti a készítőket az általuk részt vett játékokkal és hogy milyen téren vett részt"
        }
    );

export default Creation;
