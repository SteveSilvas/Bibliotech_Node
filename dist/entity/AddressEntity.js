"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database = require("../ConnectionDB");
database.sync({ force: true });
module.exports = database.define('Address', {
    Id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    Rua: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    Numero: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    Complemento: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    Bairro: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    Cep: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    Cidade: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    Estado: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    Pais: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
});
