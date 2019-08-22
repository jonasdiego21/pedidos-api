const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ClienteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, 'Nome é obrigatório']
    },

    telefone: {
        type: String,
        /*validate: {
            validator: function(v) {
              return /\d{3}-\d{3}-\d{4}/.test(v);
            },
            message: props => `${props.value} número de telefone inválido`
        },*/
        required: [true, 'Número de telefone é obrigatório']
    },

    cpf: {
        type: String,
        /*validate: {
            validator: function(v) {
                return /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/.test(v);
            },
            message: props => `${props.value} cpf é inválido`
        },*/
        required: [true, 'CPF é obrigatório']
    },

    estado: {
        type: String,
        required: [true, 'O estado é obrigatório']
    },

    cidade: {
        type: String,
        required: [true, 'A cidade é obrigatória']
    },

    rua: {
        type: String,
        required: [true, 'Rua/Logradouro é obrigatória']
    },

    numero: {
        type: String,
        default: 'S/N'
    },

    bairro: String,

    createdAt: {
        type: Date,
        default: Date.now,
    }
});

ClienteSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Cliente', ClienteSchema);