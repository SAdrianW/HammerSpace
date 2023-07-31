const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const armySchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        // required: true
    },
    userName: String,
    userAvatar: String,
    armyName: {
        type: String,
        required: true
    },
    portfolio: String,      // *  *
    squads: String,
    units: String,
    leader: String,
    description: String,
    genre: String,
    status: String,
    // squads: squadSchema,
    // units: unitSchema
}, {
    timestamps: true
});

module.exports =  mongoose.model('Army', armySchema);
