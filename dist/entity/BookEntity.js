"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database = require("../ConnectionDB");
const Category = require("./CategoryEntity");
database.sync();
const BookEntity = database.define('Book', {
    Id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    Title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    Autor: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    CreationDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    CreationLocality: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    }
});
BookEntity.belongsTo(Category, {
    constraint: true,
    foreingnKey: 'CategoryId',
    allowNull: false
});
module.exports = BookEntity;
