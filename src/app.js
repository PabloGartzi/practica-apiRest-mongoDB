const express = require("express"); //USAMOS EXPRESS PARA LA CONEXIÓN CON EL SERVIDOR
require('dotenv').config() //MANEJO DE VARIABLES DE ENTORNO
const {connection} = require('./config/dbConnect') 
const {isAdmin} = require("./middlewares/roles.middleware")
var cors = require("cors");

const app = express()
const port = process.env.PORT;

cors({
  origin:["http://xxxx.com", "http://www.render.com"]
})


//BBDD
connection()
  .then((resp) => console.log('Conectado a la base de datos de mongo'))
  .catch((error) => console.log(error))

//TEMPLATES

//MIDDLEWARE
app.use(express.json()) //Cuidao que sin esta no va lo de añadir servicio --> IMPORTANTE
app.use(express.urlencoded())

//app.use(isAdmin) //ESTE ESTÁ EN GLOBAL, EL DE DEBAJO ES SOLO PARA LA RUTA DASHBOARD
/* app.get('/dashboard', isAdmin, (req, res) => { //ESTO ES PARA PROBAR LO DEL MIDDLEWARE, HABRÍA QUE SEPARARLO Y LLEVARLO A LAS RUTAS Y LOS CONTROLADORES
  res.send('You are an admin');
}); */

//RUTAS
app.use('/api/v1/servicios', require('./routes/servicios.rutas'));
app.use('/api/v1/auth', require('./routes/user.rutas'));



//LISTENER
app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
