const Portfolio = require('../models/portfolio');
const Army = require('../models/army');
const Squad = require('../models/squad');
const Unit = require('../models/unit');

module.exports = {
    create,
    new: newUnit,
    index, 
    show,
    // delete: deleteArmy
}


async function create(req, res) {
    try {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
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