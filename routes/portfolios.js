const express = require('express');
const router = express.Router();
const portfoliosController = require('../controllers/portfolios');
// const ensureLoggedIn = require('../config/ensureLoggedIn');

// server.js defines base route as/portfolios
// then routes here go to other places
// GET /portfolios
router.get('/', portfoliosController.index);




  module.exports = router;