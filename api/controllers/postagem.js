module.exports.store = async function (api, req, res) {    
    var postagem = req.body;

    //res.json(postagem);

    req.assert('titulo', 'Título deve ser informado').notEmpty();
    req.assert('titulo', 'Título deve ter entre 3 e 100 caracteres').len(3,100);
    req.assert('dt_postagem', 'Data da postagem deve ser informada').notEmpty();
    req.assert('dt_postagem', 'Data da postagem postagem invalida').isDate({format: 'YYYY-MMYDD'});

    var erros = req.validationErrors();
    
    if (erros) {
        res.json({erros: erros})
        return;
    } 

    var connection = await api.config.dbConnectionMySql();
                        
    var postagemModel = new api.models.mysql.PostagemDAO(connection);
    

    postagemModel.salvarPostagem(postagem, function (error, result) {
        if (error) {
            res.json({erro: error});    
        } else {
            res.json({msg: "Registro inserido com sucesso_"});
        }
        
        //res.json({msg: "Registro inserido com sucesso_", registro: result});
    });
}

module.exports.postagem = function (api, req, res) {
    var id_postagem = req.params.id_postagem;
    console.log('id_postagem informada => '+id_postagem);
    res.json({msg: "to do postagem. id_postagem informada => "+id_postagem});
}