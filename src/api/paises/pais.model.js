const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({

    pais: { type: String, unique: false, required: true },
    provincias: [{ type: Schema.Types.ObjectId, ref: "provincias", required: true }],
    habitantesPais: { type: String, required: true },


},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('paises', schema); 