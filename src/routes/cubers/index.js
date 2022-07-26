// Importación de componentes del proyecto
const express = require('express');
const cubersRouter = express.Router();

const {
  get,
  getByCountry,
  create,
  edit,
  editComplete,
  deletee
} = require('../../controllers/cubers/');

// Usando los métodos definidos en el controlador

// Método GET: obtener todos los cubers registrados
cubersRouter.get('/', get);

// Método Get con parámetro (request param): buscar un cuber por su país
cubersRouter.get('/:country', getByCountry);

// Método Post: agregar un nuevo registro (cuber)
cubersRouter.post('/', create);

// Método Patch (Partial Edition): Modificación de un cuber
cubersRouter.patch('/:id', edit);

// Método Put (Complete edition): Modificación de un cuber
cubersRouter.put('/:id', editComplete);

// Método Delete: Elimina un registro a partir de su ID
cubersRouter.delete('/:id', deletee);

// Exportación del objeto que contiene las rutas
module.exports = cubersRouter;