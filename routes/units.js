const express = require('express');
const router = express.Router();
const squadsController = require('../controllers/squads');
const unitsController = require('../controllers/units');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /units
router.get('/units', unitsController.index);

// GET /units/new
router.get('/units/new', ensureLoggedIn, unitsController.new);

// POST /:id/units
router.post('/units', unitsController.create);

// GET /units/:id (show func)
router.get('/units/:id', unitsController.show);


module.exports = router;
