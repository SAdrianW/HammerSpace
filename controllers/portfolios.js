const Portfolio = require('../models/portfolio');

module.exports = {
    index,
    new: newPortfolio,
    create
};

async function index(req, res) {
    const portfolios = await Portfolio.find({});
    res.render('portfolios', { title: 'All Portfolios', portfolios})
}

async function newPortfolio(req, res) {
    res.render('portfolios/new', { title: 'New Portfolio'})
}

async function create(req, res) {
    // delete empty properties so defaults are used
    // for (let key in req.body) {
    //     if (req.body[key] === '' ) delete req.body[key];
    // }
    try {
        await Portfolio.create(req.body);
        res.redirect('/portfolios') // TODO update to pf just created
    } catch (err) {
        console.log(err);
        res.render('/', {errorMsg: err.message});
    }
}


