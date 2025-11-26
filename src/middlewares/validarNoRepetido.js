const Servicio = require('../models/servicio.model');
const mongoose = require('mongoose');

const validarNoRepetido = async (req, res, next) => {
    try {
        const {nombre, email} = req.body;
        const nombreExiste = await Servicio.findOne({nombre: nombre.trim()});
        const emailExiste = await Servicio.findOne({email: email.trim()});

        if (nombreExiste || emailExiste) {
            return res.status(400).json({
                ok: false,
                msg: 'El servicio ya existe'});
        }
        next();
    } catch (error) {
        console.error(error);
        return res.status(500).json({ 
            ok: false,
            msg: 'Error del servidor'});
    }
};

module.exports = {
    validarNoRepetido
};
