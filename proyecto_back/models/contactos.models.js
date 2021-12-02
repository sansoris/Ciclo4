const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactosSchema = new Schema({
    nombre: { type: String, required: true, max: 60 },
    apellido: { type: String, required: true, max: 40 },
    mail: { type: String, required: false, max: 70 },
    ciudad:{ type: String, required: false, max: 70 },
    telefono: { type: String, required: true, max: 15 },
    comentario: { type: String, required: false, max: 150 }
});

module.exports = mongoose.model("contactos", ContactosSchema);

  