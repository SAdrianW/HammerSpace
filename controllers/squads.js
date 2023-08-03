const Portfolio = require('../models/portfolio');
const Army = require('../models/army');
const Squad = require('../models/squad');
const Unit = require('../models/unit');
const cloudinary = require('../utils/cloudinary'); //
const upload = require('../utils/multer'); //

module.exports = {
    create,
    new: newSquad,
    index, 
    show,
    delete: deleteSquad,
    edit,
    update,
}


async function create(req, res) {
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        req.body.img = result.secure_url;
        req.body.cloudinary_id = result.public_id;
        const squad = await Squad.create(req.body);
        const army = await Army.findById(req.body.army);
        army.squads.push(squad._id);
        await army.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect('/armies');
}

// go to page that shows form to make new army
async function newSquad(req, res) {
    req.user.armies = await Army.find({user: req.user._id})
    res.render('squads/new', { title: 'New Squad'})
}

async function index(req, res) {
    const squads = await Squad.find({});
    res.render('squads/index', { title: 'All Squads', squads})
}

async function show(req, res) {                                 
    const squad = await Squad.findById(req.params.id).populate('units');    
    res.render('squads/show', {title: 'Squad Details', squad});
}

async function deleteSquad(req, res) {
    const squad = await Squad.findById(req.params.id);
    // console.log(squad);
    if (!squad) return res.redirect('/portfolios');
    // res.redirect('/armies');
    squad.deleteOne();
}

async function edit(req, res) {
    req.user.armies = await Army.find({user: req.user._id})
    req.user.armies.units = await Unit.find({user: req.user._id})
    const squad = await Squad.findById(req.params.id);
    res.render('squads/edit', { title: 'Edit Squad', squad})
}

async function update(req, res) {
    try {
    let squad = await Squad.findByIdAndUpdate(req.params.id, req.body);
    squad.save();
    res.redirect(`/squads/${req.params.id}`);
    } catch(err) {}
}


