const express = require('express');
const router = express.Router();
const armiesController = require('../controllers/armies')

// GET /armies
router.get('/armies', armiesController.index);

// POST /:id/armies
router.post('/armies', armiesController.create);

module.exports = router;
