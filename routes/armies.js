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


module.exports = router;
