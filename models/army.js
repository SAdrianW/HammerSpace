const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const armySchema = new Schema ({
    user: Schema.Types.ObjectId,
    armyName: {
        type: String,
        required: true
    },
    portfolio: String,      // *  *
    squads: String,
    units: String,
    genre: String,
    status: String,
    // squads: squadSchema,
    // units: unitSchema
}, {
    timestamps: true
});

module.exports =  mongoose.model('Army', armySchema);
