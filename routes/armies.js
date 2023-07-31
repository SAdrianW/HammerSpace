const express = require('express');
const router = express.Router();
const armiesController = require('../controllers/armies');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /armies
router.get('/armies', armiesController.index);

// GET /armies/new
router.get('/armies/new', ensureLoggedIn, armiesController.new);

// POST /:id/armies
router.post('/armies', armiesController.create);

module.exports = router;
