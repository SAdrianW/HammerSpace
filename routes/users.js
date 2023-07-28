const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
// GET /users
router.get('/', usersController.index);


module.exports = router;
