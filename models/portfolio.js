const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portfolioSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        // required: true
    },
    pfName: {
        type: String,
        required: true
    },
    genre: String,
    armies: String,     // embeded within? v vv
    squads: String,     // does not display on pf page
    units: String,      // does not display on pf page
    // coverImg: String
    // will cover img go here? TBD later
    // armies: armySchema
}, {
    timestamps: true
});


// Do these need to be moved or embedded?               ??? HELP/ ASK ???

const armySchema = new Schema ({
    user: Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    portfolio: String,
    squads: String,
    units: String,
    genre: String,
    status: String,
    // squads: squadSchema,
    // units: unitSchema
}, {
    timestamps: true
});

const squadSchema = new Schema ({
    user: Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    portfolio: String,
    armies: String,
    units: String,
    genre: String,
    status: String,
    leader: String, 
    equipment: String,
    // units: unitSchema
}, {
    timestamps: true
});

const unitSchema = new Schema ({
    user: Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    portfolios: String,
    armies: String,
    squads: String,
    genre: String,
    status: String,
    equipment: String
}, {
    timestamps: true
});


module.exports = mongoose.model('Portfolio', portfolioSchema);