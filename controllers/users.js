const User = require('../models/user');
const Portfolio = require('../models/portfolio');

module.exports = {
    index
};

async function index(req, res) {
    const users = await User.find({});
    // const portfolios = await Portfolio.find({});
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        user.portfolios = await Portfolio.find({user: user._id})
    }
    console.log(users)
    res.render('users', { title: 'All Users', users})
}
