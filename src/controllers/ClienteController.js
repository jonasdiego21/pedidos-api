const mongoose = require('mongoose');
const Cliente = mongoose.model('Cliente');

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query;
            
        const clientes = await Cliente.paginate({}, { page, limit: 10 });

        return response.json(clientes);
    },

    async show(request, response) {
        const cliente = await Cliente.findById(request.params.id);

        return response.json(cliente);
    },

    async store(request, response) {
        const { nome } = request.body;

        if(await Usuario.findOne({ nome }))
            return response.status(400).send({ error: 'Cliente já existe!' });

        const cliente = await Cliente.create(request.body);

        return response.json(cliente);
    },

    async update(request, response) {
        const cliente = await Cliente.findByIdAndUpdate(request.params.id, request.body, { new: true });
        
        return response.json(cliente);
    },

    async destroy(request, response) {
        await Cliente.findByIdAndRemove(request.params.id);

        response.send();
    }
};