const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query;
            
        const usuarios = await Usuario.paginate({}, { page, limit: 10 });

        return response.json(usuarios);
    },

    async show(request, response) {
        const usuario = await Usuario.findById(request.params.id);

        return response.json(usuario);
    },

    async store(request, response) {
        const { email } = request.body;

        if(await Usuario.findOne({ email }))
            return response.status(400).send({ error: 'Usuário já existe!' });

        const usuario = await Usuario.create(request.body);

        usuario.senha = undefined;

        return response.send({ usuario, token: generateToken({ id: usuario.id }) });
    },

    async update(request, response) {
        const usuario = await Usuario.findByIdAndUpdate(request.params.id, request.body, { new: true });
        
        return response.json(usuario);
    },

    async destroy(request, response) {
        await Usuario.findByIdAndRemove(request.params.id);
        
        response.send();
    }
};