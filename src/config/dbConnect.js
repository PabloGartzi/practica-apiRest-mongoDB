const mongoose = require('mongoose'); //CONEXIÓN CON LA BD DE MONGO


const connection = async () => {
    try {
        //Preguntar a cerca de esto para render... Porque el env esta oculto pero render lo necesita
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