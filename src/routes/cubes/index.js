// Importación de componentes del proyecto
const express = require('express');
const cubesRouter = express.Router();

const {
  get,
  getByCategory,
  create,
  edit,
  editComplete,
  deletee
} = require('../../controllers/cubes/');

// Usando los métodos definidos en el controlador

// Método GET: obtener todos los cubos registrados
cubesRouter.get('/', get);

// Método Get con parámetro (request param): buscar un cubo por su categoría
cubesRouter.get('/:category', getByCategory);

// Método Post: agregar un nuevo registro (cubo)
cubesRouter.post('/', create);

// Método Patch (Partial Edition): Modificación de un cubo
cubesRouter.patch('/:id', edit);

// Método Put (Complete edition): Modificación de un cubo
cubesRouter.put('/:id', editComplete);

// Método Delete: Elimina un registro a partir de su ID
cubesRouter.delete('/:id', deletee);

// Exportación del objeto que contiene las rutas
module.exports = cubesRouter;