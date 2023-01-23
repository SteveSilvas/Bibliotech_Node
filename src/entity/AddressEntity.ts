import { Sequelize, Model, DataTypes } from "sequelize";
const database = require("../ConnectionDB");

// database.sync({force:true});

module.exports = database.define('Addresses', {
    Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    Rua: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Numero: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Complemento: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Bairro: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Cep: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Cidade: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Estado: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Pais: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});
