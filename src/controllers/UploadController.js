const multer = require('multer');

module.exports = {
    async upload(request, response) {
        const { originalname: foto, tamanhoFoto, filename: hashFoto  } = request.file; 
        // salvar no banco de dados
    }
}