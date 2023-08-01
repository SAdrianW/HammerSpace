const User = require('../models/user');
const Portfolio = require('../models/portfolio');
const cloudinary = require('../utils/cloudinary');
const upload = require('../utils/multer');

module.exports = {
    index,
    create
};

async function index(req, res) {
    const users = await User.find({});
    // const portfolios = await Portfolio.find({});
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        user.portfolios = await Portfolio.find({user: user._id})
    }
    console.log(users)
    res.render('users', { title: 'All Users', users})
}

async function create(req, res, next) {
    try{
        console.log(req.file)
        console.log(req.file.path)
        // const result = await cloudinary.uploader.upload(req.file.path);
        // let user = new User({
        //     name: req.body.name,
        //     img: result.secure_url,
        //     cloudinary_id: result.public_id
        // })
        // await user.save();
        res.redirect('/users');
    } catch (err) {
        console.log(err);
    }
}