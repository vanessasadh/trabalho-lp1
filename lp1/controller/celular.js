
const Celular = require('../model/celular.js');
exports.listarCelular = async (req, res) => {
    try{
        const celular = await Celular.find({});
        res.send(celular);
    } catch(erro) {
        console.log(erro);
        res.send({ msg: '[ERRO]: Erro o listar!', detalhes: erro  });
    }
}

exports.adicionarCelular = async (req, res) => {
    const novoCelular = req.headers;
    if(!novoCelular.nome || !novoCelular.preco) {
        res.send({ msg: '[ERRO]: Informar nome e preço!' });
    } else {
        try{
            await Celular.create(novoCelular);
            res.send({ msg: '[SUCESSO]: Celular adicionado!' });
        } catch(erro) {
            console.log(erro);
            res.send({ msg: '[ERRO]: Erro ao cadastrar', detalhes: erro  });
        }
    }
}

exports.editarCelular = async (req, res) => {
    const celular = req.headers;
    if(!celular.nome || !celular.preco) {
       return res.send({ msg: '[ERRO]: Informar nome e preço!' });
    }
    try {
        const celularEditado = await Celular.findOneAndUpdate({ nome: celular.nome }, { preco: celular.preco });
        if(celularEditado == null)
            res.send({ msg: '[AVISO]: Celular não existe no BD!' });
        else
            res.send({ msg: '[SUCESSO]: Celular editado!' });
    } catch(erro) {
        console.log(erro);
        res.send({ msg: '[ERRO]: Erro ao editar', detalhes: erro });
    }
}

exports.removerCelular = async (req, res) => {
    const celular = req.headers;
    if(!celular.nome)
       return res.send({ msg: '[ERRO]: Informar nome!' });
    try {
        const celularRemovido = await celular.findOneAndDelete({ nome: celular.nome });
        if(celularRemovido == null)
            res.send({ msg: '[AVISO]: Celular não existe no BD!' });
        else
            res.send({ msg: '[SUCESSO]: Celular removido!' });
    } catch(erro) {
        console.log(erro);
        res.send({ msg: '[ERRO]: Erro ao remover', detalhes: erro });
    }
}
