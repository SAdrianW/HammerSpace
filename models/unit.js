const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const unitSchema = new Schema ({
    user: Schema.Types.ObjectId,
    unitName: {
        type: String,
        required: true
    },
    portfolios: String,     // *  *
    armies: String,         // * these just define where this data belongs *
    squads: String,         // *  *
    genre: String,
    status: String,
    equipment: String
}, {
    timestamps: true
});

module.exports =  mongoose.model('Unit', unitSchema);