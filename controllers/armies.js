const Portfolio = require('../models/portfolio');
const Army = require('../models/army');
const cloudinary = require('../utils/cloudinary'); //
const upload = require('../utils/multer'); //

module.exports = {
    create,
    new: newArmy,
    index, 
    show,
    delete: deleteArmy
}


async function create(req, res) {
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        req.body.img = result.secure_url; // 
        req.body.cloudinary_id = result.public_id; //
        const army = await Army.create(req.body);
        const portfolio = await Portfolio.findById(req.body.portfolio);
        portfolio.armies.push(army._id);
        await portfolio.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect('/armies');
}

// go to page that shows form to make new army
async function newArmy(req, res) {
    req.user.portfolios = await Portfolio.find({user: req.user._id})
    res.render('armies/new', { title: 'New Army'})
}

async function index(req, res) {
    const armies = await Army.find({}).populate('squads').populate('units');
    // console.log(armies)
    res.render('armies/index', { title: 'All Armies', armies})
}

async function show(req, res) {                                 
    const army = await Army.findById(req.params.id).populate('squads').populate('units');    
    res.render('armies/show', {title: 'Army Details', army});
}

async function deleteArmy(req, res) {
    const army = await Army.findById(req.params.id);
    // console.log(army);
    if (!army) return res.redirect('/portfolios');
    res.redirect('/armies');
    army.deleteOne();
}

