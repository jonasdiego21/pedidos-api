const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
//const morgan = require('morgan');

const app = express();
app.use(express.json());
app.use(cors());
//app.use(express.urlencoded({ extended: true }));
//app.use(morgan('dev'));

/**
 * Database config
 */
mongoose.connect('mongodb://localhost:27017/pedidos', 
    { useNewUrlParser: true, useCreateIndex: true });

/**
 * Models
 */
requireDir('./src/models');

/**
 * Rotas
 */
app.use(require('./src/routes'));

app.listen(3333);