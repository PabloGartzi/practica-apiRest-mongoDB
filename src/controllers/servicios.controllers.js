const Servicio = require('../models/servicio.model')
const mongoose = require('mongoose');

//GET ALL SERVICES
const getAllServicios = async (req, res) => {
    try {
        const servicios = await Servicio.find()
        console.log(servicios)

        return res.status(200).json({
            ok:true,
            msg: "Lista de servicios",
            servicios
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok:false,
            msg:'Error, contacte con el administrador',
        })
    }
}

//GET A SERVICE BY ID
const getServiceById = async (req, res) => {
    const id = req.params.id
    try { //Si el id ha sido válido intentamos buscarlo en la BD - Si lo encontramos -> Todo way; Si NO lo encontramos -> Todo NO way
        const servicio = await Servicio.findById(id)
        if (servicio) {
            return res.status(200).json({
                ok:true,
                msg: "Servicio por ID",
                servicio
            })
        } else {
            return res.status(404).json({
                ok:false,
                msg: "ERROR 404, servicio no encontrado",
            })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok:false,
            msg:'Error, contacte con el administrador',
        })
    }
}


//CREATE A SERVICE
const createServicio = async (req, res) => {
    console.log(req.body)
    const servicio = new Servicio(req.body)
    try {
        const servicioGuardado = await servicio.save()
        console.log('servicioGuardado')

        return res.status(201).json({
            ok:true,
            msg:'servicio creado satisfactoriamente',
            servicioGuardado
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok:false,
            msg:'Error, contacte con el administrador',
        })
    }
}


//UPDATE A SERVICE
const updateService = async (req, res) => {
    const id = req.params.id
    const modificacion = req.body
    try {
        const servicio = await Servicio.findByIdAndUpdate(id, modificacion, {new: true}) //Lo de new:true es para que devuelva el servicio actualizado, si no, devuelve el antiguo
        if (servicio) {
            return res.status(200).json({
                ok:true,
                msg: "Servicio actualizado",
                servicio
            })
        } else {
            return res.status(404).json({
                ok:false,
                msg: "ERROR 404, servicio no encontrado",
            })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok:false,
            msg:'Error, contacte con el administrador',
        })
    }
}

//DELETE A SERVICE
const deleteService = async (req, res) => {
    const id = req.params.id
    try {
        const servicio = await Servicio.findByIdAndDelete(id)
        if (servicio) {
            return res.status(200).json({
                ok:true,
                msg: "Servicio borrado",
                servicio
            })
        } else {
            return res.status(404).json({
                ok:false,
                msg: "ERROR 404, servicio no encontrado",
            })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok:false,
            msg:'Error, contacte con el administrador',
        })
    }
}

module.exports ={
    getAllServicios, 
    createServicio,
    getServiceById,
    updateService,
    deleteService
};