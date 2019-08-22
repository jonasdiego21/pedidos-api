const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

module.exports = (request, response, next) => {
    const token = request.headers.authorization;

    console.log(token);

    if(!token)
        return response.status(401).send({ error: 'Token não informado!' }); 

    const parts = token.split('.');

    if(!parts.length === 3)
        return response.status(401).send({ error: 'Token errado!' });

    //const [ header, payload, signature ] = parts;

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if(err) return response.status(401).send({ error: 'Token inválido!' });

        request.usuarioId = decoded.id;

        return next();
    })
}