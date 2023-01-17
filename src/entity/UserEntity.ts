import { Sequelize, Model, DataTypes } from "sequelize";
const database = require("../ConnectionDB");

database.sync();

module.exports = database.define('User', {
    Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Nascimento: {
        type: DataTypes.DATE,
        allowNull: false,
    }
});
