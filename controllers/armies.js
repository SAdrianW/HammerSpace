const Portfolio = require('../models/portfolio');
const Army = require('../models/army');

module.exports = {
    create,
    // new: newArmy,
    index, 
    // show,
    // delete: deleteArmy
}


async function create(req, res) {
    try {
        await Army.create(req.body);
    } catch (err) {
        console.log(err);
    }
    res.redirect('/portfolios/new');
}

// go to page that shows form to make new army
// async function newArmy(req, res) {
//     res.render('armies/new', { title: 'New Army'})
// }

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