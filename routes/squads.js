const express = require('express');
const router = express.Router();
const armiesController = require('../controllers/armies');
const squadsController = require('../controllers/squads');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /squads
router.get('/squads', squadsController.index);

// GET /squads/new
router.get('/squads/new', ensureLoggedIn, squadsController.new);

// POST /:id/squads
router.post('/squads', squadsController.create);

// GET /squads/:id (show func)
router.get('/squads/:id', squadsController.show);


module.exports = router;
