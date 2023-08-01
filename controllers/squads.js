const Portfolio = require('../models/portfolio');
const Army = require('../models/army');
const Squad = require('../models/squad');

module.exports = {
    create,
    new: newSquad,
    index, 
    // show,
    // delete: deleteArmy
}


async function create(req, res) {
    try {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
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