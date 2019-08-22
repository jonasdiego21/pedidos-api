const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const CategoriaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, 'Nome é obrigatório']
    },

    createdAt: {
        type: Date,
        default: Date.now,
    }
});

CategoriaSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Categoria', CategoriaSchema);