const express = require('express');
const router = express.Router();
const armiesController = require('../controllers/armies');
const ensureLoggedIn = require('../config/ensureLoggedIn');
const cloudinary = require('../utils/cloudinary');
const upload = require('../utils/multer');

// GET /armies
router.get('/armies', armiesController.index);

// GET /armies/new
router.get('/armies/new', ensureLoggedIn, armiesController.new);

// POST /:id/armies
router.post('/armies', upload.single('image'), armiesController.create);

// GET /armies/:id (show func)
router.get('/armies/:id', armiesController.show);

// DELETE /armies/:id
router.delete('/armies/:id', ensureLoggedIn, armiesController.delete);

// GET /armies/:id/edit
router.get('/armies/:id/edit', ensureLoggedIn, armiesController.edit);
// PUT /armies/:id
router.put('/armies/:id', ensureLoggedIn, armiesController.update);


module.exports = router;
