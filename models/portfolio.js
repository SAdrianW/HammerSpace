const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portfolioSchema = new Schema ({
    user: String,
    name: {
        type: String,
        required: true
    },
    armies: String,
    squads: String,
    units: String,
    genre: String
});

const armySchema = new Schema ({
    user: String,
    name: {
        type: String,
        required: true
    },
    portfolios: String,
    squads: String,
    units: String,
    genre: String,
    status: String
});

const squadSchema = new Schema ({
    user: String,
    name: {
        type: String,
        required: true
    },
    portfolios: String,
    armies: String,
    units: String,
    genre: String,
    status: String
});

const unitSchema = new Schema ({
    user: String,
    name: {
        type: String,
        required: true
    },
    portfolios: String,
    armies: String,
    squads: String,
    genre: String,
    status: String
});


module.exports = mongoose.model('Portfolio', portfolioSchema);