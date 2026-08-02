const express = require('express');
const router = express.Router();
const {
  getAllArtisans,
  getTopArtisans,
  searchArtisans,
  getArtisanById,
  contactArtisan,
} = require('../controllers/artisanController');

const { query, body, validationResult } = require('express-validator');

const validateSearch = [
  query('q')
    .trim()
    .notEmpty().withMessage('Le paramètre de recherche ne peut pas être vide.')
    .isLength({ min: 1, max: 100 }).withMessage('La recherche doit contenir entre 1 et 100 caractères.')
    .escape(),
];

const validateContact = [
  body('nom').trim().notEmpty().withMessage('Le nom est requis.').isLength({ max: 100 }),
  body('email').trim().isEmail().withMessage('Email invalide.').normalizeEmail(),
  body('objet').trim().notEmpty().withMessage("L'objet est requis.").isLength({ max: 150 }),
  body('message').trim().notEmpty().withMessage('Le message est requis.').isLength({ max: 2000 }),
];

router.get('/search', validateSearch, (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}, searchArtisans);

router.post('/:id/contact', validateContact, (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}, contactArtisan);

router.get('/top', getTopArtisans);
router.get('/:id', getArtisanById);
router.get('/', getAllArtisans);

module.exports = router;