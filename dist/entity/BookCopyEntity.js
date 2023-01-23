"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database = require("../ConnectionDB");
database.sync();
module.exports = database.define('BookCopy', {
    Id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    ISBN: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    Editora: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    TypePrint: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    PublicationDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    PublicationLocality: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
});
