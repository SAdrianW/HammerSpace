// const User = require('../models/users');

module.exports = {
    index
};

async function index(req, res) {
    // const users = await User.find({});
    res.render('users', { title: 'All Users'})
}
