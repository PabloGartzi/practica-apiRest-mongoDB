const {Schema, model} = require('mongoose');

const ServicioSchema = new Schema({
    nombre: {
        type: String, //unique CUIDADO !!!
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    descripcion: {
        type: String,
        required: true
    },
    direccion: {
        latitud: {
            type: Number,
            required: true
        },
        longitud: {
            type: Number,
            required: true
        }
    },
    precio: {
        type: Number,
        required: true
    }
})

module.exports = model("Servicio", ServicioSchema);
