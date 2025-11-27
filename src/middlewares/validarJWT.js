const jwt = require("jsonwebtoken");


const validarJWT = (req, res, next) =>{
    //const token = req.header('x-token')
    const token = req.headers['authorization'].split(" ")[1]
    //console.log(token, "<===========================================================>")
    if(!token){
        return res.status(401).json({
            ok: false,
            msg: "No hay token en la petición"
        })
    }
    try {
        const payload = jwt.verify(token, process.env.SECRET_KEY)
        //console.log(payload, "<============================================================>")
        /* req.uid = payload.uid
        req.rol = payload.rol */

        const userToken = {
            uid: payload.uid,
            rol: payload.rol
        }
        req.userToken = userToken

    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: "ERROR"
        })
    }
    next()
}


module.exports={validarJWT}