const express = require('express');
const router = express.Router();
const {
  getAllArtisans,
  getTopArtisans,
  searchArtisans,
  getArtisanById,
} = require('../controllers/artisanController');

const { query, validationResult } = require('express-validator');

const validateSearch = [
  query('q')
    .trim()
    .notEmpty().withMessage('Le paramètre de recherche ne peut pas être vide.')
    .isLength({ min: 1, max: 100 }).withMessage('La recherche doit contenir entre 1 et 100 caractères.')
    .escape(), // échappe les caractères HTML potentiellement dangereux
];

router.get('/search', validateSearch, (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}, searchArtisans);

router.get('/top', getTopArtisans);
router.get('/:id', getArtisanById);
router.get('/', getAllArtisans);

module.exports = router;