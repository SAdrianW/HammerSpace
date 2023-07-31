const User = require('../models/user');

module.exports = {
    index
};

async function index(req, res) {
    const users = await User.find({});
    console.log(users)
    res.render('users', { title: 'All Users', users})
}
