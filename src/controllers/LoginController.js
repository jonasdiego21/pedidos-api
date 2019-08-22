const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const authConfig = require('../config/auth');
const jwt = require('jsonwebtoken');
const Usuario = mongoose.model('Usuario');

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    });
}

module.exports = {
    async logar(request, response) {
        const { email, senha } = request.body;

        const usuario = await Usuario.findOne({ email }).select('+senha');

        if(!usuario)
            return response.status(400).send({ error: 'Usuário não encontrado!' }); 
        
        if(!await bcrypt.compare(senha, usuario.senha))
            return response.status(400).send({ error: 'Senha inválida' });

        usuario.senha = undefined;
        
        response.send({ usuario, token: generateToken({ id: usuario.id }) });
    }
}