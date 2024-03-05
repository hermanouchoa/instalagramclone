module.exports.ola = function (api, req, res) {
    res.json({msg: "Olá"}) ;
}

module.exports.dual = async function (api, req, res) {
    var connection = await api.config.dbConnectionOracle();

    var dualModel  = new api.models.DualDAO(connection);

     dualModel.getDual(function (error, result) {
         res.json({resultado: result});
     });
}