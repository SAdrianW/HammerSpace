const express = require('express');
const router = express.Router();
const armiesController = require('../controllers/armies');
const squadsController = require('../controllers/squads');
const ensureLoggedIn = require('../config/ensureLoggedIn');
const cloudinary = require('../utils/cloudinary'); //
const upload = require('../utils/multer'); //

// GET /squads
router.get('/squads', squadsController.index);

// GET /squads/new
router.get('/squads/new', ensureLoggedIn, squadsController.new);

// POST /:id/squads
router.post('/squads', upload.single('image'), squadsController.create);

// GET /squads/:id (show func)
router.get('/squads/:id', squadsController.show);

// DELETE /squads/:id
router.delete('/squads/:id', ensureLoggedIn, squadsController.delete);

// GET /squads/:id/edit
router.get('/squads/:id/edit', ensureLoggedIn, squadsController.edit);
// PUT /squads/:id
router.put('/squads/:id', ensureLoggedIn, squadsController.update);

module.exports = router;
