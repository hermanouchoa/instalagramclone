module.exports.store = function (api, req, res) {
     res.json({msg: "to do store postagem"});
}

module.exports.postagem = function (api, req, res) {
    var id_postagem = req.params.id_postagem;
    console.log('id_postagem informada => '+id_postagem);
    res.json({msg: "to do postagem. id_postagem informada => "+id_postagem});
}