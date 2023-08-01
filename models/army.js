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
    squads: [{ type: Schema.Types.ObjectId, ref: 'Squad'}],
    units: [{ type: Schema.Types.ObjectId, ref: 'Unit'}],
    leader: String,
    description: String,
    genre: String,
    status: String,
    img: String,
    cloudinary_id: {
        type: String
    }
}, {
    timestamps: true
});

module.exports =  mongoose.model('Army', armySchema);
