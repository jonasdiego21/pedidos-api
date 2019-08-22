const mongoose = require('mongoose');
const Categoria = mongoose.model('Categoria');

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query;
        
        const categorias = await Categoria.paginate({}, { page, limit: 10 });

        return response.json(categorias);
    },

    async show(request, response) {
        const categoria = await Categoria.findById(request.params.id);

        return response.json(categoria);
    },

    async store(request, response) {
        const { nome } = request.body;

        if(await Usuario.findOne({ nome }))
            return response.status(400).send({ error: 'Categoria já existe!' });

        const categoria = await Categoria.create(request.body);   
        
        return response.json(categoria);
    },

    async update(request, response) {
        const categoria = await Categoria.findByIdAndUpdate(request.params.id, request.body, { new: true });
        
        return response.json(categoria);
    },

    async destroy(request, response) {
        await Categoria.findByIdAndRemove(request.params.id);

        response.send();
    }
};