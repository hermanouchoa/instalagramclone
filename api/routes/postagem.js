module.exports = function (api) {
    api.post('/postagem/store', function (req, res) {
        api.controllers.postagem.store(api, req, res);
    });

    api.get('/postagem/:id_postagem', function (req, res) {
        api.controllers.postagem.postagem(api, req, res);
    });
}