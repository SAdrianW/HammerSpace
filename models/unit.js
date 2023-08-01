const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const unitSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        // required: true
    },
    userName: String,
    userAvatar: String,    
    unitName: {
        type: String,
        required: true
    },
    portfolios: String,     // *  *
    armies: {
        type: Schema.Types.ObjectId,
        ref: 'Army',
    },        
    squads: [{
        type: Schema.Types.ObjectId,
        ref: 'Squads',
    }],         // *  *
    genre: String,
    status: String,
    equipment: String,
    leader: String,
    description: String
}, {
    timestamps: true
});

module.exports =  mongoose.model('Unit', unitSchema);