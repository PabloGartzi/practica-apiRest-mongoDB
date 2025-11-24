const {Schema, model} = require('mongoose');

const ServicioSchema = new Schema({
    nombre: {
        type: String, //unique CUIDADO !!!
        required: true,
        unique: true
    },
    descripcion: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    }
})

module.exports = model("Servicio", ServicioSchema);
