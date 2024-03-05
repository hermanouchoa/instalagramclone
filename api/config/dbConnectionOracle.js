var oracledb = require('oracledb');
oracledb.initOracleClient({libDir: process.env.CLI_ORA });
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

const mypw = process.env.PWD_ORA;

var connOracle = async function () {
    var connection = await oracledb.getConnection ({
        user          : process.env.USR_ORA,
        password      : mypw,
        connectString : process.env.DSC_ORA
    });

    return connection;
}

module.exports = function () {
    return connOracle;
}