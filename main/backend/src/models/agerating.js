import { DataTypes, Sequelize } from "sequelize";

export default (Sequelize, DataTypes) => {
    const Agerating = Sequelize.define(
        'Agerating', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
        }
    );

return Agerating;
}