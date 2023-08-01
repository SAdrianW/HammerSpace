const express = require('express');
const router = express.Router();
const portfoliosController = require('../controllers/portfolios');
const ensureLoggedIn = require('../config/ensureLoggedIn');
const cloudinary = require('../utils/cloudinary');
const upload = require('../utils/multer');

// server.js defines base route as/portfolios
// then routes here go to other places
// GET /portfolios
router.get('/', portfoliosController.index);

// GET /portfolios/new      ensurelogin TODO
router.get('/new', ensureLoggedIn, portfoliosController.new);

// POST /portfolios         ensurelogin TODO
router.post('/', upload.single('image'), portfoliosController.create)

// GET /portfolios/:id (show func)
router.get('/:id', portfoliosController.show);


module.exports = router;