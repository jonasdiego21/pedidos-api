const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProdutoSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    }, 

    descricao: {
        type: String,
        required: true, 
    },

    valor: {
        type: Number,
        required: true,
    },

    foto: String,

    tamanhoFoto: Number,

    hashFoto: String,

    urlFoto: String,

    codigoBarras: {
        type: String,
        required: true,
    },
    
    categoria: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Categoria',
        required: true,
    },
    
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

ProdutoSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Produto', ProdutoSchema);