function DualDAO(connection) {
    this._connection = connection;
}

DualDAO.prototype.getDual = async function (callback) {
    const result = await this._connection.execute(
        `SELECT 'select na dual ;)'
         FROM dual
         WHERE 1 = :id`,
        [1],  // bind value for :id
        callback
    );

    await this._connection.close();    
    return result;
}

module.exports = function () {
    return DualDAO;
}