const isAdmin = ((req, res, next) => {
    if(req.body.isAdmin){
        next()
    }
    else{
        res.status(403).send(`Lo sentimos, no esta autorizado para acceder a ${req.ur}`)
    }
})


module.exports={isAdmin}