const Servicio = require('../models/servicio.model')
const validarModelo = (req, res, next) => {
    const body = req.body;
    const bodyKeys = Object.keys(body);
    console.log(bodyKeys)
    //FALTA COMPROBAR LOS OBJETOS ANIDADOS, NI IDEA DE COMO HACERLO
    const modelo = Object.keys(Servicio.schema.obj).filter(key => !['_id', '__v'].includes(key));//El filter es para eliminar _id y __v que van por defecto con mongoose
    const todosValidos = bodyKeys.every((key) => {
        return modelo.includes(key)});

    if (!todosValidos) {            
        const camposInvalidos = bodyKeys.filter((key) => {
                return !modelo.includes(key)})
        return res.status(400).json({
            msg: "El body contiene campos que no están en el esquema",
            camposInvalidos
        });
    }
    next();
};


module.exports={
    validarModelo
}