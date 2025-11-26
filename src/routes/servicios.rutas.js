const express=require('express');
const router=express.Router();
const {check} = require("express-validator");

const{getAllServicios, createServicio, getServiceById, updateService, deleteService} = require('../controllers/servicios.controllers');
const{validateInputs}= require("../middlewares/validateInputs");
const{validarMinimoUno}= require("../middlewares/validarMinimoUno");
const{validarModelo}= require("../middlewares/validarModelo");
const{validarNoRepetido} = require("../middlewares/validarNoRepetido");
const{validarID} = require("../middlewares/validarID");


//GET ALL CLIENTS
router.get('/', getAllServicios)

//GET A CLIENT BY ID
router.get('/servicios/:id', validarID
    //Para validar el id podríamos hacer param("id").isMongoId().withMessage("El ID no es un MongoID válido")
    , getServiceById)

//CREATE A CLIENT
router.post('/servicios/crear', [
    validarModelo,
    validarNoRepetido,
    check("nombre")
        .not().isEmpty().withMessage("Debes escribir el nombre")
        .isLength({min:2,max:100}).withMessage("El nombre no tiene la longitud correcta"),

    check("email")
        .not().isEmpty().withMessage("Debes escribir el email")
        .isEmail().withMessage("Debes escribir un email correcto"),

    check("descripcion")
        .not().isEmpty().withMessage("Debes escribir la descripción")
        .isLength({min:2,max:150}).withMessage("La descripción no tiene la longitud correcta"),

    check("direccion")
        .not().isEmpty().withMessage("Debes escribir la dirección"),

    check("direccion.latitud")
        .not().isEmpty().withMessage("Debes indicar la latitud")
        .isFloat({min:-90, max:90}).withMessage("La latitud debe estar entre -90 y 90"),

    check("direccion.longitud")
        .not().isEmpty().withMessage("Debes indicar la longitud")
        .isFloat({min:-180, max:180}).withMessage("La longitud debe estar entre -180 y 180"),
    
    check("precio")
        .not().isEmpty().withMessage("Debes escribir el precio")
        .isFloat({min:0}).withMessage("Debes costar mas de 0 euros"),

    validateInputs
] , createServicio)

//UPDATE A CLIENT BY ID
router.put('/servicios/modificar/:id', [
    validarID,
    validarModelo,
    validarMinimoUno,
    check("nombre").optional()
        .not().isEmpty().withMessage("Debes escribir el nombre")
        .isLength({min:2,max:100}).withMessage("El nombre no tiene la longitud correcta"),

    check("email").optional()
        .not().isEmpty().withMessage("Debes escribir el email").isEmail().withMessage("Debes escribir un email correcto"),

    check("descripcion").optional()
        .not().isEmpty().withMessage("Debes escribir la descripción").isLength({min:2,max:150})
        .withMessage("La descripción no tiene la longitud correcta"),

    check("direccion").optional()
        .not().isEmpty().withMessage("Debes escribir la dirección"),

    check("direccion.latitud").optional()
        .not().isEmpty().withMessage("Debes indicar la latitud")
        .isFloat({min:-90, max:90}).withMessage("La latitud debe estar entre -90 y 90"),

    check("direccion.longitud").optional()
        .not().isEmpty().withMessage("Debes indicar la longitud")
        .isFloat({min:-180, max:180}).withMessage("La longitud debe estar entre -180 y 180"),
    
    check("precio").optional()
        .not().isEmpty().withMessage("Debes escribir el precio")
        .isFloat({min:0}).withMessage("Debes costar mas de 0 euros"),

    validateInputs
] , updateService)

//DELETE A CLIENT BY ID
router.delete('/servicios/borrar/:id', validarID, deleteService)



module.exports=router;