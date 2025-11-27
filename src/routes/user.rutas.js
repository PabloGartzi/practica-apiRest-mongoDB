const express = require("express")
const router = express.Router()

const {createUser, loginUser, renewToken} = require("../controllers/users.controllers")
const {validarJWT} = require("../middlewares/validarJWT")
const {validarRol} = require("../middlewares/roles.middleware")

//REGISTER
router.post('/new', /* [validacion] ,*/ createUser)

//LOGIN
router.post('/login', /* [validacion] ,*/ loginUser)

//RENEWTOKEN
router.post('/renew', [validarJWT, validarRol(["admin", "user"])] , renewToken)



module.exports=router;