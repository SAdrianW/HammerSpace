const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const squadSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        // required: true
    },
    userName: String,
    userAvatar: String,
    squadName: {
        type: String,
        required: true
    },
    portfolio: {
        type: Schema.Types.ObjectId,
        ref: 'Portfolio',
    },      
    armies: {
        type: Schema.Types.ObjectId,
        ref: 'Army',
    },        
    units: [{
        type: Schema.Types.ObjectId,
        ref: 'Unit',
    }],
    genre: String,
    status: String,
    leader: String, 
    description: String, 
    equipment: String,
    img: String,
    cloudinary_id: {
        type: String
    }
}, {
    timestamps: true
});

module.exports =  mongoose.model('Squad', squadSchema);
