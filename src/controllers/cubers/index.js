// Importación de componentes del proyecto
const CubersServices = require('../../services/cubers/');

const cubersService = new CubersServices();

// Definiendo los métodos

// Método GET: obtener todos los cubers registrados
const get = async(req, res) => {
  try{
    const { country } = req.query;
    const cubers = await cubersService.findAll(country);
    res.status(200).json(cubers);
  }catch(error){
    res.status(404).json( { message: "No hay datos..." } );
  }
};

// Método Get con parámetro (request param): buscar un cuber por su ID 
const getByCountry = async(req, res) => {
  const {country} = req.params;
  try{
    const foundedCuber = await cubersService.findAll(country);
    res.status(200).send( { message: "La Busqueda fue éxitosa!", foundedCuber } );
  }catch(error){
    res.status(404).json( { message: "El País ingresado no existe!..." } );
  }
};

// Método Post: agregar un nuevo registro (cuber)
const create = async(req, res) => {
  const newCuber = req.body;
  try{
    await cubersService.create(newCuber);
    res.status(201).send( { message: "Cuber añadido correctamente!" } );
  }catch(error){
    res.status(500).json( { message: "El cuber no se pudo añadir, intente más tarde..." } );
  }
};

// Método Patch (Partial Edition): Modificación de un cuber
const edit = async(req, res) => {
  const {id} = req.params;
  const body = req.body;
  try{
    await cubersService.editPartial(id, body);
    res.status(200).send( { message: "La modificación Patch fue exitosa!", id } );
  }catch(error){
    res.status(404).send( { message: "El ID ingresado no existe!..." } );
  }
};

// Método Put (Complete edition): Modificación de un cuber
const editComplete = async(req, res)=>{
  const {id} = req.params;
  const body = req.body;
  try{
    await cubersService.editComplete(id, body);
    res.status(200).send( { message: "La modificación Put fue exitosa!", id } );
  }catch(error){
    res.status(404).send( { message: "El ID ingresado no existe!..." } );
  }
};

// Método Delete: Elimina un registro a partir de su ID
const deletee = async(req, res)=>{
  const {id} = req.params;
  try{
    await cubersService.delete(id);
    res.status(200).send( { message: "La eliminación fue exitosa!" } );
  }catch(error){
    res.status(404).send( { message: "El ID ingresado no existe!..." } );
  }
};

// Exportación del objeto que contiene los métodos
module.exports = {
  get,
  getByCountry,
  create,
  edit,
  editComplete,
  deletee
};