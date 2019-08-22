const mongoose = require('mongoose');
const Produto = mongoose.model('Produto');

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query;
            
        const produtos = await Produto.paginate({}, { page, limit: 10 });

        return response.json(produtos);
    },

    async show(request, response) {
        const produto = await Produto.findById(request.params.id);

        return response.json(produto);
    },

    async store(request, response) {
        const { titulo } = request.body;

        if(await Usuario.findOne({ titulo }))
            return response.status(400).send({ error: 'Produto já existe!' });

        const produto = await Produto.create(request.body);

        return response.json(produto);
    },

    async update(request, response) {
        const produto = await Produto.findByIdAndUpdate(request.params.id, request.body, { new: true });
        
        return response.json(produto);
    },

    async destroy(request, response) {
        await Produto.findByIdAndRemove(request.params.id);
        
        response.send();
    }
};