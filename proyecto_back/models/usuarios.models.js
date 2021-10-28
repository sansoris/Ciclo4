const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    usuario:{type: String, required: true, max: 120 },
    pass:{type: String, requred: false, max: 128 }
});

module.exports = mongoose.model("usuarios", UsuarioSchema);