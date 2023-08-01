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
    armies: [{ type: Schema.Types.ObjectId, ref: 'Army'}],    //String,     // embeded within? no, use refeerencing instead v vv
    squads: String,     // does not display on pf page
    units: String,      // does not display on pf page
    img: String,
    cloudinary_id: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Portfolio', portfolioSchema);