const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root', 
    database: 'videojuegos_db', 
    password: 'dieguitodb', 
    connectionLimit: 5
});

module.exports = pool;
