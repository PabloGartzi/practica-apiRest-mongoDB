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
//   //Establecer ejs como template engine
// app.set('view engine' , 'ejs')

//   //Estableder cual va a ser la carpeta de vistas
// app.set("views",__dirname + "/views");

//MIDDLEWARE
  //configurar carpeta public
app.use(express.static(__dirname+'/public'))
app.use(express.json()) //Cuidao que sin esta no va lo de añadir servicio --> IMPORTANTE

//RUTAS
app.use('/api/v1', require('./routes/servicios.rutas'));

//LISTENER
app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
