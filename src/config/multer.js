const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    
    storage: multer.diskStorage({
        destination: (request, file, callback) => {
            callback(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'));
        },

        filename: (request, file, callback) => {
            crypto.randomBytes(16, (error, hash) => {
                if(error) callback(error); 

                const filename = `${hash.toString('hex')}-${file.originalname}`;
                
                callback(null, filename);
            });
        }
    }),
    
    limits: {
        fileSize: 2 * 1024 * 1024,
    },

    fileFilter: (request, file, callback) => {
        const allowedMimes = [
            'image/jpg',
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif'
        ];

        if(allowedMimes.includes(file.mimetype)) {
            callback(null, true);
        } else {
            callback(new Error('Arquivo inválido.'));
        }
    },
}