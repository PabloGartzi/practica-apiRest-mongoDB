const express = require("express"); //USAMOS EXPRESS PARA LA CONEXIÓN CON EL SERVIDOR
require('dotenv').config() //MANEJO DE VARIABLES DE ENTORNO
const {connection} = require('./config/dbConnect') 

const app = express()
const port = process.env.PORT;

//BBDD
connection()
  .then((resp) => console.log('Conectado a la base de datos de mongo'))
  .catch((error) => console.log(error))

//TEMPLATES

//MIDDLEWARE
app.use(express.json()) //Cuidao que sin esta no va lo de añadir servicio --> IMPORTANTE
app.use(express.urlencoded())

//RUTAS
app.use('/api/v1', require('./routes/servicios.rutas'));

//LISTENER
app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
