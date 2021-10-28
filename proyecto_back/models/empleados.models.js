const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmpleadosSchema = new Schema({
    nombre: { type: String, requred: true, max: 60 },
    apellido_p: { type: String, requred: true, max: 40 },
    apellido_m: { type: String, requred: false, max: 40 },
    telefono: { type: String, requred: true, max: 15 },
    mail: { type: String, requred: false, max: 70 },
    direccion: { type: String, requred: false, max: 150 }
});

module.exports = mongoose.model("empleados", EmpleadosSchema);