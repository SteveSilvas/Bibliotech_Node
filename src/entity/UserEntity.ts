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
    Birth: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Pass: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});
