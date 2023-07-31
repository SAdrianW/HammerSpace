const User = require('../models/user');
const Portfolio = require('../models/portfolio');

module.exports = {
    index
};

async function index(req, res) {
    const users = await User.find({});
    const portfolios = await Portfolio.find({});

    console.log(users)
    res.render('users', { title: 'All Users', users, portfolios})
}
