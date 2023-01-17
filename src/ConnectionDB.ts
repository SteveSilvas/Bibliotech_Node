const Sequelize = require('sequelize');
require('dotenv').config({path: '.env'});

const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPwd = process.env.DB_PASSWORD;
const dbDialect = process.env.DB_DIALECT;

const ConnectionDB = new Sequelize(dbName,dbUser, dbPwd,
{
    dialect: dbDialect, host:dbHost, port: dbPort
});

// ConnectionDB.sync({force:true});
module.exports = ConnectionDB;