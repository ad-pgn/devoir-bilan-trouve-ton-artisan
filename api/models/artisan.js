const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Artisan = sequelize.define('Artisan', {
  id_artisan: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nom_artisan: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  note: {
    type: DataTypes.DECIMAL(2, 1),
    allowNull: false,
  },
  ville: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  photo: {
  type: DataTypes.STRING(255),
  allowNull: true,
  },
  a_propos: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  site_web: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  top_mois: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
}, {
  tableName: 'ARTISAN',
  timestamps: false,
});

module.exports = Artisan;