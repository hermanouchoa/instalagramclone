var mysql = require('mysql');

var connMysql = function () {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'instagramclone'
    });
}

module.exports = function () {
    return connMysql;
}