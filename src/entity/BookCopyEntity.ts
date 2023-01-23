import { Sequelize, Model, DataTypes } from "sequelize";
const database = require("../ConnectionDB");

// database.sync({force:true});

module.exports = database.define('BookCopy', {
    Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    ISBN: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    Editora: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    TypePrint: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    PublicationDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    PublicationLocality: {
        type: DataTypes.STRING,
        allowNull: true,
    },

});
