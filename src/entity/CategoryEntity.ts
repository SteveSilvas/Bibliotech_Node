import { Sequelize, Model, DataTypes } from "sequelize";
const database = require("../ConnectionDB");

database.sync();

module.exports = database.define('Category', {
    Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    Description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
   
});
