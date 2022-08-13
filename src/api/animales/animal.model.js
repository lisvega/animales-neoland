const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nombre: { type: String, required: true },
    tipo: { type: String, required: true },
    imagen: { type: String, required: true },
    descripción: { type: String, required: true }

},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('animales', schema);