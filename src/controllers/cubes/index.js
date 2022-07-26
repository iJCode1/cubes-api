// Importación de componentes del proyecto
const CubesServices = require('../../services/cubes/');

const cubesService = new CubesServices();

// Definiendo los métodos

// Método GET: obtener todos los cubos registrados
const get = async(req, res) => {
  const {category} = req.query;
  try{
    const cubes = await cubesService.findAll(category);
    res.status(200).json(cubes);
  }catch(error){
    res.status(404).json( { message: "No hay datos..." } );
  }
};

// Método Get con parámetro (request param): buscar un cubo por su ID 
const getByCategory = async(req, res) => {
  const {category} = req.params;
  try{
    const foundedCube = await cubesService.findOne(category);
    res.status(200).send( { message: "La Busqueda fue éxitosa!", foundedCube } );
  }catch(error){
    res.status(404).json( { message: "La categoría ingresada no existe!..." } );
  }
};

// Método Post: agregar un nuevo registro (cubo)
const create = async(req, res) => {
  const newCube = req.body;
  try{
    await cubesService.create(newCube);
    res.status(201).send( { message: "Cubo añadido correctamente!" } );
  }catch(error){
    res.status(500).json( { message: "El cubo no se pudo añadir, intente más tarde..." } );
  }
};

// Método Patch (Partial Edition): Modificación de un cubo
const edit = async(req, res) => {
  const {id} = req.params;
  const body = req.body;
  try{
    await cubesService.editPartial(id, body);
    res.status(200).send( { message: "La modificación Patch fue exitosa!", id } );
  }catch(error){
    res.status(404).send( { message: "El ID ingresado no existe!..." } );
  }
};

// Método Put (Complete edition): Modificación de un cubo
const editComplete = async(req, res)=>{
  const {id} = req.params;
  const body = req.body;
  try{
    await cubesService.editComplete(id, body);
    res.status(200).send( { message: "La modificación Put fue exitosa!", id } );
  }catch(error){
    res.status(404).send( { message: "El ID ingresado no existe!..." } );
  }
};

// Método Delete: Elimina un registro a partir de su ID
const deletee = async(req, res)=>{
  const {id} = req.params;
  try{
    await cubesService.delete(id);
    res.status(200).send( { message: "La eliminación fue exitosa!" } );
  }catch(error){
    res.status(404).send( { message: "El ID ingresado no existe!..." } );
  }
};

// Exportación del objeto que contiene los métodos
module.exports = {
  get,
  getByCategory,
  create,
  edit,
  editComplete,
  deletee
};