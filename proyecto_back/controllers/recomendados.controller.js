const Recomendado = require("../models/recomendados.models");
let response = {
    msg:"",
    exito:false
}

exports.create = function (req, res) {
    let recomendado = new Recomendado({
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        telefono: req.body.telefono,
        ciudad: req.body.ciudad,
        servicio_1: req.body.servicio_1,
        servicio_2:req.body.servicio_2,
        servicio_3:req.body.servicio_3
    })

    recomendado.save(function (err) {
        if (err) {
            console.log = false,
            response.exito = false,
            response.msg = "Error al guardar recomendado"
            res.json(response)
            return;
        }
        response.exito = true,
        response.msg = "El recomendado se guardó correctamente"
        res.json(response)
    })
}

exports.find = function (req, res) {
    Recomendado.find(function (err, recomendados) {
        res.json(recomendados)
    })
}

exports.findOne = function (req, res) {
    Recomendado.findOne({_id: req.params.id }, function (err, recomendados) {
        res.json(recomendados)
    })
}

exports.update = function (req, res) {
    let recomendado = {
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        telefono: req.body.telefono,
        ciudad: req.body.ciudad,
        servicio_1: req.body.servicio_1,
        servicio_2: req.body.servicio_2,
        servicio_3: req.body.servicio_3
    }
    Recomendado.findByIdAndUpdate(req.params.id, { $set: recomendado }, function (err) {
        if (err) {
            console.error(err),
                response.exito = false,
                response.msg = "Error al modificar el recomendado"
                res.json(response)
                return;
        }
        response.exito = true,
        response.msg = "El recomendado se modificó correctamente"
        res.json(response)
 
    })
}

exports.remove = function (req, res) {
    Recomendado.findByIdAndRemove({_id: req.params.id}, function (err) {
        if (err) {
            console.error(err),
                response.exito = false,
                response.msg = "Error al eliminar el recomendado"
                res.json(response)
                return;
        }
        response.exito = true,
        response.msg = "El recomendado se eliminó correctamente"
        res.json(response)
 
    })
}