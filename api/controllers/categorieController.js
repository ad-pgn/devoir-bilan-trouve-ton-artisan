const { Categorie } = require('../models');

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Categorie.findAll({
      order: [['nom_categorie', 'ASC']],
    });
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération des catégories.' });
  }
};