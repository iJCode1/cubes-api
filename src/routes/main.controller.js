// Importación de componentes del proyecto
const express = require('express');

const cubesRouter = require('./cubes/index.js');
const cubersRouter = require('./cubers/index.js');

// Definiendo los endpoints
const routerApi = (app) => {
  app.use('/cubes', cubesRouter);
  app.use('/cubers', cubersRouter);
}

// Exportación de la función
module.exports = routerApi;