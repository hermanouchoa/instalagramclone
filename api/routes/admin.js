module.exports = function (api) {
    api.get('/ola', function (req, res) {
        api.controllers.admin.ola(api, req, res);    
    });    
}