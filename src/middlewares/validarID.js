const mongoose = require('mongoose');

const validarID = (req, res, next) => {
    const id = req.params.id
    if (!mongoose.isValidObjectId(id)) { // También se puede usar ObjectId.isValid(id) pero creo que no es recomendable.. Lo encontre buscando info de mongo NO de mongoose
        return res.status(400).json({
            ok: false,
            msg: "El ID es inválido mi rey"
        });
    }
    else{
        next()
    }
}

module.exports = {
    validarID
};