import { Sequelize, Model, DataTypes } from "sequelize";
const database = require("../ConnectionDB");
const Category = require("./CategoryEntity");

// database.sync({update:true});

const BookEntity = database.define('Book', {
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
    CreationDate: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    CreationLocality: {
        type: DataTypes.STRING,
        allowNull: true,
    }
});

    BookEntity.belongsTo(Category, {
        constraint: true,
        foreingnKey: 'CategoryId', 
        allowNull: false});

    module.exports = BookEntity;