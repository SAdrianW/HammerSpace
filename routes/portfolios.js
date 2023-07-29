const express = require('express');
const router = express.Router();
const portfoliosController = require('../controllers/portfolios');
// const ensureLoggedIn = require('../config/ensureLoggedIn');

// server.js defines base route as/portfolios
// then routes here go to other places
// GET /portfolios
router.get('/', portfoliosController.index);

// GET /portfolios/new
router.get('/new', portfoliosController.new);

// POST /portfolios
router.post('/', portfoliosController.create)

module.exports = router;