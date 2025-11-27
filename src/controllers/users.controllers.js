const bcrypt = require("bcryptjs");

const User = require("../models/user.model")
const {JWTGenerator} = require("../helpers/jwt")

const createUser = async (req, res) => {
    try {
        const {name, email, password, rol} = req.body
        //console.log(name, email, password)
        const existe = await User.findOne({email});
        //console.log(existe)
        if(existe){
            return res.status(401).json({
                ok:false,
                msg: "Usuario existente"
            })
        }
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);
        //console.log(hashedPassword)
        const newUser = {
            name,
            email,
            password: hashedPassword,
            rol
        }
        const user = new User(newUser)
        const savedUser = await user.save(newUser)
        //console.log(savedUser)
        const payload ={
            uid: savedUser._id,
            rol: savedUser.rol
        }
        const token = await JWTGenerator(payload)
        return res.status(200).json({
            ok:true,
            msg: "REGISTRANDO.............",
            token
        })

    } catch (error) {
        console.log(error)

        return res.status(500).json({
            ok:false,
            msg: "Contacte con el administrador"
        })
    }
}

/**
 * TODO: 
 *  1.  Recoger el email y password del req.body
 *  2.  Comprobar si no existe un usuario con ese email
 *  3.  Comparar que las contraseñas coinciden
 *  4.  Generar el token
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body
        //console.log(email, password)
        const usuario = await User.findOne({email});
        //console.log(usuario)
        if(!usuario){
            return res.status(400).json({
                ok:false,
                msg: "No hay usuario con ese email"
            })
        }
        const passwordOk = bcrypt.compareSync(password, usuario.password)
        if(!passwordOk){
            return res.status(400).json({
                ok:false,
                msg: "La contraseña no es válida"
            })
        }
        //console.log(usuario, "Usuario correcto--Llega hasta aqui")
        const payload ={
            uid: usuario._id,
            rol: usuario.rol
        }
        const token = await JWTGenerator(payload)
        return res.status(200).json({
            ok:true,
            msg: "Login de usuario",
            usuario,
            token
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok:false,
            msg: "Contacte con el administrador"
        })
    }
}

const renewToken = async (req, res) => {
    const {uid, rol} = req.userToken;
    //console.log(uid, rol)

    const token = await JWTGenerator({uid, rol})
    return res.status(200).json({
        ok:true,
        msg: "Renew de usuario",
        usuario: {
            uid,
            rol
        },
        token
    })
}

module.exports={
    createUser,
    loginUser,
    renewToken
}