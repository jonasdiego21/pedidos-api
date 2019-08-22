const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const mongoosePaginate = require('mongoose-paginate');

const UsuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, 'Nome é obrigatório']
    },

    email: {
        type: String,
        required: [true, 'E-mail é obrigatório']
    },

    senha: {
        type: String,
        select: false,
        required: [true, 'A senha é obrigatória']
    },

    nivel: {
        type: String,
        required: [true, 'O nível é obrigatório'],
    },

    createdAt: {
        type: Date,
        default: Date.now,
    }
});

UsuarioSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.senha, 10);
    this.senha = hash;

    next();
});

UsuarioSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Usuario', UsuarioSchema);