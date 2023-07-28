const Portfolio = require('../models/portfolio');

module.exports = {
    index
};

async function index(req, res) {
    // const portfolios = await Portfolio.find({});
    res.render('portfolios', { title: 'All Portfolios'})
}
