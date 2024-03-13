var mysql = require('mysql');

var connMysql = async function () {
    var connection = await mysql.createConnection({
        host: process.env.HST_MYSQL,
        user: process.env.USR_MYSQL,
        password: process.env.PWD_MYSQL,
        database: process.env.DB_MYSQL,
        port: process.env.PRT_MYSQL,
    });

    return connection;
}

module.exports = function () {
    return connMysql;
}