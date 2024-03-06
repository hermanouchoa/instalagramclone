function PostagemDAO(connection) {
    this._connection = connection;
}

PostagemDAO.prototype.salvarPostagem = function (postagem, callback) {
    this._connection.query('insert into postagem set ? ', postagem, callback);
}

PostagemDAO.prototype.obterPostagem = function (id_postagem, callback) {
    this._connection.query('select * from postagem where id_postagem = '+ id_postagem, callback);
}

module.exports = function () {
    return PostagemDAO;
}