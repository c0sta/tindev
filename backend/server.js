const express = require('express');
const routes = require('./src/routes');
const mongoose = require('mongoose');
const cors = require('cors')
// Conectando no banco de dados
mongoose.connect("mongodb://localhost:27012/nodeapi", { useNewUrlParser: true });

// iniciando servidor
const servidor = express();

// Definindo que será utilizado o formato JSON
servidor.use(cors());
servidor.use(express.json());
servidor.use(routes);

servidor.listen(3333);