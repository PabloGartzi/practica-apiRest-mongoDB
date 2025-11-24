const express=require('express');
const router=express.Router();

const{getAllServicios, createServicio, getServiceById, updateService, deleteService} = require('../controllers/servicios.controllers')


//GET ALL CLIENTS
router.get('/', getAllServicios)

//GET A CLIENT BY ID
router.get('/servicios/:id', getServiceById)

//CREATE A CLIENT
router.post('/servicios/crear', createServicio)

//UPDATE A CLIENT BY ID
router.put('/servicios/modificar/:id', updateService)

//DELETE A CLIENT BY ID
router.delete('/servicios/borrar/:id', deleteService)



module.exports=router;