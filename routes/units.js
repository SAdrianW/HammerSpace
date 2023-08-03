const express = require('express');
const router = express.Router();
const squadsController = require('../controllers/squads');
const unitsController = require('../controllers/units');
const ensureLoggedIn = require('../config/ensureLoggedIn');
const cloudinary = require('../utils/cloudinary');
const upload = require('../utils/multer');
const unit = require('../models/unit');

// GET /units
router.get('/units', unitsController.index);

// GET /units/new
router.get('/units/new', ensureLoggedIn, unitsController.new);

// POST /:id/units
router.post('/units', upload.array('image', 12), unitsController.create);

// GET /units/:id (show func)
router.get('/units/:id', unitsController.show);

// DELETE /units/:id
router.delete('/units/:id', ensureLoggedIn, unitsController.delete);

// GET /units/:id/edit
router.get('/units/:id/edit', ensureLoggedIn, unitsController.edit);
// PUT /units/:id
router.put('/units/:id', ensureLoggedIn, unitsController.update);

module.exports = router;
