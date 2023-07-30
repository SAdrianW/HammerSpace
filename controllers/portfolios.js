const Portfolio = require('../models/portfolio');

module.exports = {
    index,
    new: newPortfolio,
    create,
    show
};

async function index(req, res) {
    const portfolios = await Portfolio.find({});
    res.render('portfolios', { title: 'All Portfolios', portfolios})
}

async function newPortfolio(req, res) {
    res.render('portfolios/new', { title: 'New Portfolio'})
}

async function create(req, res) {
   
    try {
        await Portfolio.create(req.body);
        res.redirect('/portfolios') // TODO update to pf just created
    } catch (err) {
        console.log(err);
        res.redirect('/portfolios', {title: 'All Portfolios', errorMsg: err.message});
    }
}

async function show(req, res) {                                 // !!! ------ HELP ------ !!!
    const portfolio = await Portfolio.findById(req.params.id);    // findById wasn't being recognised as a function
    res.render('portfolios/showPf', {title: 'Portfolio Details', portfolio});
    // console.log(portfolio);
}

