const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({


    provincias: { type: String, required: true },
    habitantes: { type: String, required: true },
    animales: [{ type: Schema.Types.ObjectId, ref: "animales" }],

},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('provincias', schema);