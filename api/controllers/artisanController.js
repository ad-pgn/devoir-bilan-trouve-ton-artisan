const { Artisan, Specialite, Categorie } = require('../models');

exports.getAllArtisans = async (req, res) => {
  try {
    const { categorie, specialite } = req.query;

    const whereSpecialite = {};
    if (specialite) {
      whereSpecialite.nom_specialite = specialite;
    }

    const whereCategorie = {};
    if (categorie) {
      whereCategorie.nom_categorie = categorie;
    }

    const artisans = await Artisan.findAll({
      include: [
        {
          model: Specialite,
          required: true,
          where: Object.keys(whereSpecialite).length ? whereSpecialite : undefined,
          include: [
            {
              model: Categorie,
              required: true,
              where: Object.keys(whereCategorie).length ? whereCategorie : undefined,
            },
          ],
        },
      ],
      order: [['nom_artisan', 'ASC']],
    });

    res.json(artisans);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération des artisans.' });
  }
};

exports.getTopArtisans = async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      where: { top_mois: true },
      include: [
        {
          model: Specialite,
          required: true,
          include: [{ model: Categorie, required: true }],
        },
      ],
      order: [['note', 'DESC']],
    });
    res.json(artisans);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération des artisans du mois.' });
  }
};

const { Op } = require('sequelize');

exports.searchArtisans = async (req, res) => {
  try {
    const { q } = req.query;
    if (!q) {
      return res.status(400).json({ message: 'Le paramètre de recherche "q" est requis.' });
    }
    const artisans = await Artisan.findAll({
      where: { nom_artisan: { [Op.like]: `%${q}%` } },
      include: [
        {
          model: Specialite,
          required: true,
          include: [{ model: Categorie, required: true }],
        },
      ],
    });
    res.json(artisans);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la recherche.' });
  }
};

exports.getArtisanById = async (req, res) => {
  try {
    const artisan = await Artisan.findByPk(req.params.id, {
      include: [
        {
          model: Specialite,
          required: true,
          include: [{ model: Categorie, required: true }],
        },
      ],
    });
    if (!artisan) {
      return res.status(404).json({ message: 'Artisan non trouvé.' });
    }
    res.json(artisan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération de l\'artisan.' });
  }
};