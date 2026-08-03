import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-auto footer-border">
      <div className="container d-flex flex-row align-items-center justify-content-between gap-4" style={{ fontSize: '0.80rem' }}>
        <nav className="d-flex flex-column flex-md-row align-items-md-center gap-2 gap-md-4">
          <Link to="/mentions-legales" className="text-white">Mentions légales</Link>
          <Link to="/donnees-personnelles" className="text-white">Données personnelles</Link>
          <Link to="/accessibilite" className="text-white">Accessibilité</Link>
          <Link to="/cookies" className="text-white">Cookies</Link>
        </nav>

        <address className="mb-0">
          101 cours Charlemagne<br />
          CS 20033<br />
          69269 LYON CEDEX 02<br />
          France<br />
          +33 (0)4 26 73 40 00
        </address>
      </div>
    </footer>
  );
}

export default Footer;