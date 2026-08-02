import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { getCategories } from '../services/api';
import logo from '../assets/Logo.png';

function Header() {
  const [categories, setCategories] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Récupération des catégories depuis l'API au chargement du composant
  useEffect(() => {
    getCategories()
      .then(setCategories)
      .catch((err) => console.error('Erreur chargement catégories :', err));
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // La navigation vers la page de résultats sera branchée avec React Router
    console.log('Recherche :', searchQuery);
  };

  return (
    <header className="bg-white header-border">
      <div
        className="container d-flex align-items-stretch justify-content-between"
        style={{ height: '100px' }}
      >
        {/* Logo cliquable renvoyant vers l'accueil */}
        <Link to="/" className="d-flex align-items-center">
          <img
            src={logo}
            alt="Trouve ton artisan"
            style={{ height: '100%', width: 'auto', objectFit: 'contain' }}
          />
        </Link>

        {/* Liens de catégories - visibles uniquement en desktop */}
        <nav className="d-none d-lg-flex align-items-center gap-5">
          {categories.map((cat) => (
            <NavLink
              key={cat.id_categorie}
              to={`/artisans?categorie=${cat.nom_categorie}`}
              className={({ isActive }) =>
                `fw-bold text-decoration-none ${isActive ? 'text-success' : 'text-dark'}`
              }
            >
              {cat.nom_categorie}
            </NavLink>
          ))}
        </nav>

        {/* Barre de recherche - visible en permanence en tablette/desktop */}
        <form
          onSubmit={handleSearchSubmit}
          className="d-none d-md-flex align-items-center position-relative"
        >
          <input
            type="text"
            className="form-control ps-5"
            placeholder="Rechercher un artisan..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="position-absolute top-50 start-0 translate-middle-y ps-3">
            🔍
          </span>
        </form>

        {/* Icône recherche (mobile uniquement) + burger (mobile/tablette) */}
        <div className="d-flex align-items-center gap-3">
          <button
            className="btn d-md-none"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Rechercher"
          >
            🔍
          </button>
          <button
            className="btn d-lg-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Overlay recherche - mobile uniquement */}
      {searchOpen && (
        <form
          onSubmit={handleSearchSubmit}
          className="d-md-none p-3 border-top position-relative"
        >
          <input
            type="text"
            className="form-control ps-5"
            placeholder="Rechercher un artisan..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />
          <span className="position-absolute top-50 start-0 translate-middle-y ps-4 ms-2">
            🔍
          </span>
        </form>
      )}

      {/* Overlay menu - mobile + tablette */}
      {menuOpen && (
        <nav className="d-lg-none p-3 border-top d-flex flex-column gap-2">
          {categories.map((cat) => (
            <NavLink
              key={cat.id_categorie}
              to={`/artisans?categorie=${cat.nom_categorie}`}
              className={({ isActive }) =>
                `fw-bold text-decoration-none ${isActive ? 'text-success' : 'text-dark'}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {cat.nom_categorie}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;