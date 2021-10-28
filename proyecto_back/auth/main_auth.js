const jwt = require("jsonwebtoken")
const { request} = require("../app")

const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split("")[1]
        const decoded = jwt.verify(token, "_recret_")
        request.usuario = decoded
        next()
    } catch (error) {
        res.status(401)
        res.json({ code: 4, msg:"No cuenta con los permisos para acceder" })
        
    }
}
module.exports = auth
