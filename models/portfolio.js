const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Do these need to be moved or embedded? they need to be referenced

const portfolioSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        // required: true
    },
    userName: String,
    userAvatar: String,
    pfName: {
        type: String,
        required: true
    },
    genre: String,
    armies: String,     // embeded within? no, use refeerencing instead v vv
    squads: String,     // does not display on pf page
    units: String,      // does not display on pf page
    // coverImg: String
    // will cover img go here? TBD later
    // armies: armySchema,      //
    // squads: squadSchema,     //  ^ v not being used, not embedding
    // units: unitSchema        // 
}, {
    timestamps: true
});

module.exports = mongoose.model('Portfolio', portfolioSchema);