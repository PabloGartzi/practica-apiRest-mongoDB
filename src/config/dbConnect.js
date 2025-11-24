const mongoose = require('mongoose'); //CONEXIÓN CON LA BD DE MONGO


const connection = async () => {
    try {
        const response = await mongoose.connect(process.env.DB_URI)    
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