const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecomendadosSchema = new Schema({
    nombre:{ type: String, required: true, max: 60 },
    apellido:{ type: String, required: true, max: 40 },
    telefono:{ type: String, required: true, max: 15 },
    ciudad:{ type: String, required: false, max: 70 },
    servicio_1:{ type: String, required: false, max: 150 },
    servicio_2:{ type: String, required: false, max: 150 },
    servicio_3:{ type: String, required: false, max: 150 }
});

module.exports = mongoose.model("recomendados", RecomendadosSchema);