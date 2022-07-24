// Importación de componentes del proyecto
import express from 'express';

// CORS
const cors = require('cors');

// Variables para levantar servidor
const app = express();
const port = process.env.PORT || 3000;

// Obtener las rutas definidas (endpoints)
const routerApi = require('./routes/main.controller.js');

// Middleware para uso de req.body
app.use(express.json());

// configuración de CORS
const whiteList = ['http://127.0.0.1:5500'];
const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('No permitido por tema de CORS'));
    }
  }
};
app.use(cors(corsOptions));

// Root EndPoint
app.get("/", (req, res) => {
  res.send("Bienvenid@ a la API 'Rubiks Cube API' by iJCode1");
});

// Levantamiento del servidor
app.listen(port, ()=> {
  console.log("Servidor express listen...");
});

// Agregar route
routerApi(app);
