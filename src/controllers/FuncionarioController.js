const mongoose = require('mongoose');
const Funcionario = mongoose.model('Funcionario');

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query;
            
        const funcionarios = await Funcionario.paginate({}, { page, limit: 10 });

        return response.json(funcionarios);
    },

    async show(request, response) {
        const funcionario = await Funcionario.findById(request.params.id);

        return response.json(funcionario);
    },

    async store(request, response) {
        const { nome } = request.body;

        if(await Usuario.findOne({ nome }))
            return response.status(400).send({ error: 'Funcionário já existe!' });

        const funcionario = await Funcionario.create(request.body);

        return response.json(funcionario);
    },

    async update(request, response) {
        const funcionario = await Funcionario.findByIdAndUpdate(request.params.id, request.body, { new: true });
        
        return response.json(funcionario);
    },

    async destroy(request, response) {
        await Funcionario.findByIdAndRemove(request.params.id);

        response.send();
    }
};