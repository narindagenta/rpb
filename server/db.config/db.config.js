const { Client } = require('pg');
require('dotenv').config()

const db = new Client({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DB,
    password: process.env.PW,
    port: process.env.PORT_DB,
});

module.exports = db;