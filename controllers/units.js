const Portfolio = require('../models/portfolio');
const Army = require('../models/army');
const Squad = require('../models/squad');
const Unit = require('../models/unit');
const cloudinary = require('../utils/cloudinary'); //
const upload = require('../utils/multer'); //
const unit = require('../models/unit');

module.exports = {
    create,
    new: newUnit,
    index, 
    show,
    delete: deleteUnit,
    edit,
    update
}


async function create(req, res) {
    try {
        const result = await cloudinary.uploader.upload(req.file.path); //
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        req.body.img = result.secure_url; // 
        req.body.cloudinary_id = result.public_id; // 
        const unit = await Unit.create(req.body);
        const army = await Army.findById(req.body.army);
        const squad = await Squad.findById(req.body.squad);
        squad.units.push(unit._id);
        army.units.push(unit._id);
        army.squads.push(squad._id);
        await squad.save();
        await army.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect('/armies');
}

// go to page that shows form to make new unit
async function newUnit(req, res) {
    req.user.armies = await Army.find({user: req.user._id})
    req.user.armies.squads = await Squad.find({user: req.user._id})

    res.render('units/new', { title: 'New Unit'})
}

async function index(req, res) {
    const unit = await Unit.find({});
    res.render('units/index', { title: 'All Units', unit})
}

async function show(req, res) {                                 
    const unit = await Unit.findById(req.params.id);    
    res.render('units/show', {title: 'Unit Details', unit});
}

async function deleteUnit(req, res) {
    const unit = await Unit.findById(req.params.id);
    // console.log(unit);
    if (!unit) return res.redirect('/portfolios');
    res.redirect('/armies');
    unit.deleteOne();
}

async function edit(req, res) {
    req.user.armies = await Army.find({user: req.user._id})
    req.user.armies.squads = await Squad.find({user: req.user._id})
    const unit = await Unit.findById(req.params.id);
    res.render('units/edit', { title: 'Edit Unit', unit})
}

async function update(req, res) {
    try {
    let unit = await Unit.findByIdAndUpdate(req.params.id, req.body);
    unit.save();
    res.redirect(`/units/${req.params.id}`);
    } catch(err) {}
}

