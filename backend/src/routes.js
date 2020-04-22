const express = require('express');
const connection = require('./database/connection');
const FilmeController = require('./controllers/FilmesController');
const CategoriaController = require('./controllers/CategoriaController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();
//rotas dos filmes
routes.post('/filmes/cadastro',FilmeController.create);
routes.get('/filmes', FilmeController.listaFilmes);
routes.delete('/filmes/:id', FilmeController.delete);


//rotas das categorias
routes.post('/filmes/categorias', CategoriaController.create);
routes.get('/filmes/cadastro', CategoriaController.listarCategorias);

//rota login
routes.post('/', SessionController.create);




module.exports = routes;