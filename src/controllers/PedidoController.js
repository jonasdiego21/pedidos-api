const mongoose = require('mongoose');
const Pedido = mongoose.model('Pedido');

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query;
            
        const pedidos = await Pedido.paginate({}, { page, limit: 10 });

        return response.json(pedidos);
    },

    async show(request, response) {
        const pedido = await Pedido.findById(request.params.id);

        return response.json(pedido);
    },

    async store(request, response) {
        const { numeroPedido } = request.body;

        if(await Usuario.findOne({ numeroPedido }))
            return response.status(400).send({ error: 'Pedido já existe!' });

        const pedido = await Pedido.create(request.body);

        return response.json(pedido);
    },

    async update(request, response) {
        const pedido = await Pedido.findByIdAndUpdate(request.params.id, request.body, { new: true });
        
        return response.json(pedido);
    },

    async destroy(request, response) {
        await Pedido.findByIdAndRemove(request.params.id);

        response.send();
    }
};