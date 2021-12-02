const Contacto = require("../models/contactos.models");
let response = {
    msg:"",
    exito:false
}

exports.create = function (req, res) {
    let contacto = new Contacto({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        mail: req.body.mail,
        ciudad: req.body.ciudad,
        telefono: req.body.telefono,
        comentario: req.body.comentario
       
    })

    contacto.save(function (err) {
        if (err) {
            console.log = false,
            response.exito = false,
            response.msg = "Error al guardar comentario"
            res.json(response)
            return;
        }
        response.exito = true,
        response.msg = "El comentario se envio correctamente"
        res.json(response)
    })
}

exports.find = function (req, res) {
    Contacto.find(function (err, contactos) {
        res.json(contactos)
    })
}

exports.findOne = function (req, res) {
    Contacto.findOne({_id: req.params.id }, function (err, contacto) {
        res.json(contacto)
    })
}

exports.update = function (req, res) {
    let contacto = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        mail: req.body.mail,
        ciudad: req.body.ciudad,
        telefono: req.body.telefono,
        comentario: req.body.comentario
    }
    Contacto.findByIdAndUpdate(req.params.id, {$set: contacto}, function (err) {
        if (err) {
            console.error(err),
                response.exito = false,
                response.msg = "Error al modificar el comentario"
                res.json(response)
                return;
        }
        response.exito = true,
        response.msg = "El comentario se modificó correctamente"
        res.json(response)
 
    })
}

exports.remove = function (req, res) {
    Comentario.findByIdAndRemove({_id: req.params.id}, function (err) {
        if (err) {
            console.error(err),
                response.exito = false,
                response.msg = "Error al eliminar el comentario"
                res.json(response)
                return;
        }
        response.exito = true,
        response.msg = "El comentario se eliminó correctamente"
        res.json(response)
 
    })
}