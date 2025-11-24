const mongoose = require('mongoose'); //CONEXIÓN CON LA BD DE MONGO


const connection = async () => {
    try {
        const response = await mongoose.connect("mongodb+srv://admin:123456ABC@cluster0.7laarfu.mongodb.net/practica-servicios")//Debería ser mongoose.connect(process.env.DB_URI) pero da problemas en el despliegue en render
        return response //Opcional (No lo necesito)

    } catch (error) {
        console.log(error)
        return {
            ok: false,
            msg: 'Error al conectar con la base de datos'
        }
    }

}


module.exports = { connection }