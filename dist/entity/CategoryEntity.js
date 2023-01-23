"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database = require("../ConnectionDB");
database.sync();
module.exports = database.define('Category', {
    Id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    Description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
});
