const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');
const upload = require('../utils/multer');


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
// GET /users
router.get('/', usersController.index);

// CREATE
router.post('/', upload.single('image'), usersController.create);

// SHOW
// router.get('.:id', usersController.show);

module.exports = router;
