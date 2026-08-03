import { useState, useEffect } from 'react';
import { NavLink, Link, useSearchParams, useNavigate } from 'react-router-dom';
import { getCategories } from '../services/api';
import logo from '../assets/logo.png';

function Header() {
  const [categories, setCategories] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams] = useSearchParams();
  const categorieActive = searchParams.get('categorie');

  const navigate = useNavigate();

  // Récupération des catégories depuis l'API au chargement du composant
  useEffect(() => {
    getCategories()
      .then(setCategories)
      .catch((err) => console.error('Erreur chargement catégories :', err));
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/artisans?q=${encodeURIComponent(searchQuery)}`);
      setSearchOpen(false);
    }
  };

  return (
    <header className="bg-white header-border header-sticky">
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
              className={
                `fw-bold text-decoration-none ${
                  categorieActive === cat.nom_categorie ? 'text-success text-decoration-underline' : 'text-dark'
                }`
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
            className="form-control ps-5 placeholder-artisan"
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
            onClick={() => {
              setSearchOpen(!searchOpen);
              setMenuOpen(false);
            }}
            aria-label={searchOpen ? 'Fermer la recherche' : 'Rechercher'}
          >
            {searchOpen ? '✕' : '🔍'}
          </button>
          <button
            className="btn d-lg-none"
            onClick={() => {
              setMenuOpen(!menuOpen);
              setSearchOpen(false);
            }}
            aria-label={menuOpen ? 'Fermer le menu' : 'Menu'}
          >
            {menuOpen ? '✕' : '☰'}
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
            className="form-control ps-5 placeholder-artisan"
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
        <>
          {/* Overlay sombre en arrière-plan, démarre sous le header */}
          <div
            className="position-fixed start-0 w-100 d-lg-none"
            style={{
              top: '100px',
              height: 'calc(100% - 100px)',
              backgroundColor: 'rgba(0,0,0,0.4)',
              zIndex: 1040,
            }}
            onClick={() => setMenuOpen(false)}
          />

          {/* Panneau latéral, démarre sous le header */}
          <nav
            className="d-lg-none position-fixed end-0 bg-white p-4 d-flex flex-column gap-3 menu-panel"
            style={{
              top: '100px',
              height: 'calc(100% - 100px)',
              width: '70%',
              maxWidth: '320px',
              zIndex: 1050,
            }}
          >
            {categories.map((cat) => (
              <NavLink
                key={cat.id_categorie}
                to={`/artisans?categorie=${cat.nom_categorie}`}
                  className={
                    `fw-bold text-decoration-none ${
                      categorieActive === cat.nom_categorie ? 'text-success text-decoration-underline' : 'text-dark'
                    }`
                  }
                onClick={() => setMenuOpen(false)}
              >
                <span className="menu-puce" />
                {cat.nom_categorie}
              </NavLink>
            ))}
          </nav>
        </>
      )}
    </header>
  );
}

export default Header;