const mongoose = require("mongoose");
const Cadastro = mongoose.model('Cadastro');


module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;
        const cadastros = await Cadastro.paginate({}, {page, limit: 2});
        return res.json(cadastros);
    },

    async show(req, res){
        const cadastro = await Cadastro.findById(req.params.id);
        return res.json(cadastro);
    },

    async store(req, res){
        const cadastro = await Cadastro.create(req.body);
        return res.json(cadastro);
    },

    async update(req, res){
        const cadastro = await Cadastro.findByIdAndUpdate(req.params.id, req.body, { new : true });
        return res.json(cadastro);
    },

    async delete(req, res){
        await Cadastro.findByIdAndRemove(req.params.id);
        return res.send();
    },
};
