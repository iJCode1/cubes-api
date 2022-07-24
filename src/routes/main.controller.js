// Importación de componentes del proyecto
const express = require(express);

const cubers = require('./cubers/index.js');
const cubes = require('./cubes/index.js');

// Definiendo los endpoints
const routerApi = (app) => {
  app.use('/cubers', cubers);
  app.use('/cubes', cubes);
}

// Exportación de la función
module.exports = routerApi;