const express = require('express');
const router = express.Router();
const {
  getAllArtisans,
  getTopArtisans,
  searchArtisans,
  getArtisanById,
} = require('../controllers/artisanController');

router.get('/search', searchArtisans);
router.get('/top', getTopArtisans);
router.get('/:id', getArtisanById);
router.get('/', getAllArtisans);

module.exports = router;