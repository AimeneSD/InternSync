const mysql = require('mysql2');
require('dotenv').config();

// Création d'un "Pool" de connexions (plus performant en JS qu'une connexion unique)
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10
});

// On exporte la version "promise" pour pouvoir utiliser async/await plus tard
module.exports = pool.promise();