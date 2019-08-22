const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const PedidoSchema = new mongoose.Schema({
    numeroPedido: {
        type: Number,
        required: true,
    },
    
    cliente: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Cliente',
        required: [true, 'O cliente é obrigatório'],
    },

    funcionario: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Funcionario', 
        required: [true, 'O funcionário é obrigatório'],
    },

    produtos: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Produto', 
        required: [true, 'Adicione pelo menos um produto'],
    }],

    emitido: {
        type: Boolean,
        default: false,
    },
    
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

PedidoSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Pedido', PedidoSchema);