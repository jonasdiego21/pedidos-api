const routes = require('express').Router();
const authMiddleware = require('./middlewares/auth');
const multer = require('multer');

const ClienteController = require('./controllers/ClienteController');
const FuncionarioController = require('./controllers/FuncionarioController');
const ProdutoController = require('./controllers/ProdutoController');
const PedidoController = require('./controllers/PedidoController');
const CategoriaController = require('./controllers/CategoriaController');
const UsuarioController = require('./controllers/UsuarioController');
const LoginController = require('./controllers/LoginController');
const UploadController = require('./controllers/UploadController');
const multerConfig = require('./config/multer');

/**
 * Cliente
 */
routes.get('/clientes', authMiddleware, ClienteController.index);
routes.get('/clientes:id', authMiddleware, ClienteController.show);
routes.post('/clientes/', authMiddleware, ClienteController.store);
routes.put('/clientes/:id', authMiddleware, ClienteController.update);
routes.delete('/clientes/:id', authMiddleware, ClienteController.destroy);

/**
 * Funcionario
 */
routes.get('/funcionarios', authMiddleware, FuncionarioController.index);
routes.get('/funcionarios:id', authMiddleware, FuncionarioController.show);
routes.post('/funcionarios/', authMiddleware, FuncionarioController.store);
routes.put('/funcionarios/:id', authMiddleware, FuncionarioController.update);
routes.delete('/funcionarios/:id', authMiddleware, FuncionarioController.destroy);

/**
 * Categoria
 */
routes.get('/categorias', authMiddleware, CategoriaController.index);
routes.get('/categorias/:id', authMiddleware, CategoriaController.show);
routes.post('/categorias', authMiddleware, CategoriaController.store);
routes.put('/categorias/:id', authMiddleware, CategoriaController.update);
routes.delete('/categorias/:id', authMiddleware, CategoriaController.destroy);

/**
 * Produto
 */
routes.get('/produtos', authMiddleware, ProdutoController.index);
routes.get('/produtos/:id', authMiddleware, ProdutoController.show);
routes.post('/produtos', authMiddleware, ProdutoController.store);
routes.put('/produtos/:id', authMiddleware, ProdutoController.update);
routes.delete('/produtos/:id', authMiddleware, ProdutoController.destroy);

/**
 * Pedido
 */
routes.get('/pedidos', authMiddleware, PedidoController.index);
routes.get('/pedidos/:id', authMiddleware, PedidoController.show);
routes.post('/pedidos', authMiddleware, PedidoController.store);
routes.put('/pedidos/:id', authMiddleware, PedidoController.update);
routes.delete('/pedidos/:id', authMiddleware, PedidoController.destroy);

/**
 * Pedido
 */
routes.get('/usuarios', authMiddleware, UsuarioController.index);
routes.get('/usuarios/:id', authMiddleware, UsuarioController.show);
routes.post('/usuarios', authMiddleware, UsuarioController.store);
routes.put('/usuarios/:id', authMiddleware, UsuarioController.update);
routes.delete('/usuarios/:id', authMiddleware, UsuarioController.destroy);

/**
 * Upload Foto
 */
routes.post('/uploads', multer(multerConfig).single('file'), UploadController.upload);

/**
 * Login
 */
routes.post('/login', LoginController.logar);

module.exports = routes;