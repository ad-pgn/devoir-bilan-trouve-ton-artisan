# Trouve ton artisan !

Plateforme dédiée aux artisans de la région Auvergne-Rhône-Alpes, permettant aux particuliers de trouver un artisan par catégorie ou par recherche, et de le contacter directement via un formulaire.

Projet réalisé dans le cadre de la formation Développeur Web au Centre Européen de Formation (CEF).

🔗 **Site en ligne :** https://trouve-ton-artisan-frontend-x2rv.onrender.com
🔗 **API en ligne :** https://trouve-ton-artisan-api-zu6t.onrender.com

## Sommaire

- [Stack technique](#stack-technique)
- [Prérequis](#prérequis)
- [Structure du projet](#structure-du-projet)
- [Installation](#installation)
  - [1. Cloner le projet](#1-cloner-le-projet)
  - [2. Base de données](#2-base-de-données)
  - [3. API](#3-api)
  - [4. Frontend](#4-frontend)
- [Lancement](#lancement)
- [Variables d'environnement](#variables-denvironnement)

## Stack technique

- **Frontend :** React (Vite), React Router, Bootstrap, Sass
- **Backend :** Node.js, Express, Sequelize
- **Base de données :** MySQL / MariaDB
- **Envoi d'emails :** Nodemailer

## Prérequis

- [Node.js](https://nodejs.org/) v18 ou supérieur
- [npm](https://www.npmjs.com/) (installé avec Node.js)
- [MySQL](https://www.mysql.com/) ou [MariaDB](https://mariadb.org/) (serveur local ou distant)
- Un compte SMTP pour l'envoi d'emails (ex. [Mailtrap](https://mailtrap.io/) pour le développement)

## Structure du projet

```
devoir-bilan-trouve-ton-artisan/
├── api/                # Backend Node.js / Express / Sequelize
│   ├── config/         # Configuration (connexion base de données)
│   ├── controllers/    # Logique métier des routes
│   ├── models/         # Modèles Sequelize
│   ├── routes/         # Définition des routes de l'API
│   └── server.js       # Point d'entrée du serveur
├── frontend/            # Frontend React (Vite)
│   ├── public/          # Fichiers statiques (photos des artisans, favicon)
│   └── src/
│       ├── assets/      # Logo et images internes
│       ├── components/  # Composants réutilisables (Header, Footer, ArtisanCard...)
│       ├── pages/        # Pages de l'application
│       ├── services/     # Appels à l'API
│       └── styles/       # Fichiers Sass (variables, styles globaux)
└── database/
    ├── create.sql       # Script de création des tables
    └── seed.sql         # Script d'alimentation des données
```

## Installation

### 1. Cloner le projet

```bash
git clone https://github.com/ad-pgn/devoir-bilan-trouve-ton-artisan.git
cd devoir-bilan-trouve-ton-artisan
```

### 2. Base de données

Créez une base de données MySQL, puis exécutez les scripts fournis dans l'ordre :

```sql
CREATE DATABASE trouve_ton_artisan;
USE trouve_ton_artisan;
```

Puis exécutez `database/create.sql` (création des tables) suivi de `database/seed.sql` (alimentation des données), via votre client MySQL habituel (MySQL Workbench, phpMyAdmin, ligne de commande...).

### 3. API

```bash
cd api
npm install
cp .env.example .env
```

Renseignez les variables dans le fichier `.env` (voir la section [Variables d'environnement](#variables-denvironnement)).

### 4. Frontend

```bash
cd frontend
npm install
cp .env.example .env
```

Renseignez l'URL de votre API dans le fichier `.env`.

## Lancement

### API (depuis le dossier `api/`)

```bash
npm run dev
```

L'API est accessible par défaut sur `http://localhost:3000`.

### Frontend (depuis le dossier `frontend/`)

```bash
npm run dev
```

Le site est accessible par défaut sur `http://localhost:5173`.

## Variables d'environnement

### `api/.env`

| Variable | Description |
|---|---|
| `DB_HOST` | Hôte de la base de données |
| `DB_PORT` | Port de la base de données |
| `DB_NAME` | Nom de la base de données |
| `DB_USER` | Utilisateur de la base de données |
| `DB_PASSWORD` | Mot de passe de la base de données |
| `PORT` | Port sur lequel démarre l'API |
| `NODE_ENV` | Environnement d'exécution (`development` ou `production`) |
| `FRONTEND_URL` | URL du frontend, utilisée pour la configuration CORS |
| `SMTP_HOST` | Hôte du serveur SMTP (envoi d'emails) |
| `SMTP_PORT` | Port du serveur SMTP |
| `SMTP_USER` | Identifiant SMTP |
| `SMTP_PASSWORD` | Mot de passe SMTP |

### `frontend/.env`

| Variable | Description |
|---|---|
| `VITE_API_URL` | URL de base de l'API (ex. `http://localhost:3000/api`) |

Des fichiers `.env.example` sont fournis dans `api/` et `frontend/` à titre de modèle.