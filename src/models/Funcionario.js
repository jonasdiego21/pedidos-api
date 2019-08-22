const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const FuncionarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, 'O nome é obrigatório']
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
});

FuncionarioSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Funcionario', FuncionarioSchema);