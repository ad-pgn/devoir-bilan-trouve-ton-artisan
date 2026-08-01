require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { sequelize } = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // 100 requêtes max par IP sur cette fenêtre
  message: { message: 'Trop de requêtes envoyées depuis cette IP, veuillez réessayer plus tard.' },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter);

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  methods: ['GET', 'POST'],
};
app.use(cors(corsOptions));

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