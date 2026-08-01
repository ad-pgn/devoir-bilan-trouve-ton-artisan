require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API Trouve ton artisan opérationnelle');
});

const categorieRoutes = require('./routes/categorieRoutes');
app.use('/api/categories', categorieRoutes);

const artisanRoutes = require('./routes/artisanRoutes');
app.use('/api/artisans', artisanRoutes);

sequelize.authenticate()
  .then(() => console.log('Connexion à la base de données réussie.'))
  .catch((err) => console.error('Erreur de connexion à la base de données :', err));

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});