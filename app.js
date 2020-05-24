'use strict';

const express       = require('express');
const bodyParser    = require('body-parser');

const app = express();
const usuarioRutas = require('./src/controller/loginController');

app.use(bodyParser.json());

app.use('/api/auth', usuarioRutas);

app.listen(3000, function () {
  console.log('Express Server on port 3000!');
});