const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const squadSchema = new Schema ({
    user: Schema.Types.ObjectId,
    squadName: {
        type: String,
        required: true
    },
    portfolio: String,      // *  *
    armies: String,         // *  *
    units: String,
    genre: String,
    status: String,
    leader: String, 
    equipment: String,
    // units: unitSchema
}, {
    timestamps: true
});

module.exports =  mongoose.model('Squad', squadSchema);
