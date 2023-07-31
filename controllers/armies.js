const Portfolio = require('../models/portfolio');
const Army = require('../models/army');

module.exports = {
    create,
    new: newArmy,
    index, 
    // show,
    // delete: deleteArmy
}


async function create(req, res) {
    try {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
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
    const armies = await Army.find({});
    // console.log(armies)
    res.render('armies/index', { title: 'All Armies', armies})
}



// embedded create function. not using
// async function create(req, res) {
//     const portfolio = await Portfolio.findById(req.params.id);
//     portfolio.armies.push(req.body)
//     try {
//         await portfolio.save();
//     } catch (err) {
//         console.log(err);
//     }
//     res.redirect('/portfolios');
//     // res.render(`portfolios/${ portfolio._id }/armies}`)
// }