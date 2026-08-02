import { Link } from 'react-router-dom';

function ArtisanCard({ artisan }) {
  const noteArrondie = Math.round(parseFloat(artisan.note));

  return (
    <Link
      to={`/artisans/${artisan.id_artisan}`}
      className="text-decoration-none text-dark"
    >
      <div className="card h-100 shadow-sm bg-artisan-light border-0 rounded-artisan">
        <div className="row g-0 h-100">
          <div className="col-4">
            <img
              src={artisan.photo || 'https://placehold.co/200x200?text=Photo'}
              alt={artisan.nom_artisan}
              className="w-100 h-100 rounded-start"
              style={{ objectFit: 'cover', minHeight: '100px' }}
            />
          </div>
          <div className="col-8 p-3">
            <h3 className="h6 fw-bold mb-1">{artisan.nom_artisan}</h3>
            <div className="mb-1 text-artisan-primary-dark fs-3">
              {'★'.repeat(noteArrondie)}
              {'☆'.repeat(5 - noteArrondie)}
            </div>
            <p className="mb-1">🏷️ {artisan.Specialite?.nom_specialite}</p>
            <p className="mb-0">📍 {artisan.ville}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ArtisanCard;