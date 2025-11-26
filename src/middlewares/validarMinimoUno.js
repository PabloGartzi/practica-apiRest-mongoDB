const validarMinimoUno = (req, res, next) => {
    const body = req.body;
    if (!body || Object.keys(body).length == 0 || Object.values(body).length == 0) {
        return res.status(400).json({
            ok: false,
            msg: "Se requiere al menos un campo para actualizar"
        });
    }
    next();
    };

module.exports={
    validarMinimoUno
}