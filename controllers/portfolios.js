const Portfolio = require('../models/portfolio');

module.exports = {
    index,
    new: newPortfolio
};

async function index(req, res) {
    // const portfolios = await Portfolio.find({});
    res.render('portfolios', { title: 'All Portfolios'})
}

async function newPortfolio(req, res) {
    res.render('portfolios/new', { title: 'New Portfolio'})
}

