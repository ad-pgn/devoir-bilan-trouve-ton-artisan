import { Link } from 'react-router-dom';
import erreur404 from '../assets/erreur404.jpg';

function PageNotFound() {
  return (
    <div className="container py-5 text-center">
      <div className="mx-auto" style={{ maxWidth: '500px' }}>
        <img
          src={erreur404}
          alt="Page non trouvée"
          className="img-fluid mb-4 rounded-artisan"
        />
        <h1 className="fw-bold text-artisan-dark mb-3">Page non trouvée</h1>
        <p className="mb-4">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link to="/" className="btn btn-primary px-4 fw-bold border border-danger">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;