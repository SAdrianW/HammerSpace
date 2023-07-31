const Portfolio = require('../models/portfolio');
const portfolios = require('./portfolios');

module.exports = {
    create,
    // delete: deleteArmy
}

async function create(req, res) {
    const portfolio = await Portfolio.findById(req.params.id);
    portfolio.armies.push(req.body)
    try {
        await portfolio.save();
    } catch (err) {
        console.log(err);
    }
    // res.redirect(`/portfolios/${portfolio._id}`);
    res.render(`portfolios/${ portfolio._id }/armies}`)
}