import { Sequelize, Model, DataTypes } from "sequelize";
const database = require("../ConnectionDB");

database.sync();

module.exports = database.define('Book', {
    Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    Title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Autor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    CreationDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    CreationLocality: {
        type: DataTypes.STRING,
        allowNull: true,
    },

});
