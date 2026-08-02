import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getArtisanById } from '../services/api';
import FormulaireContact from '../components/FormulaireContact';

function FicheArtisan() {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    let ignore = false;

    getArtisanById(id)
      .then((data) => {
        if (!ignore) {
          setArtisan(data);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!ignore) {
          setNotFound(true);
          setLoading(false);
        }
      });

    return () => {
      ignore = true;
      setLoading(true);
      setNotFound(false);
    };
  }, [id]);

  if (loading) {
    return <p className="text-center py-5">Chargement...</p>;
  }

  if (notFound || !artisan) {
    return <p className="text-center py-5">Artisan non trouvé.</p>;
  }

  const noteArrondie = Math.round(parseFloat(artisan.note));

  return (
    <div className="container py-5">
      <div className="row g-4 g-lg-5">
        {/* Bloc 1 : Photo + À propos, en flex vertical (DESKTOP) */}
        <div className="col-md-6 order-1 d-none d-md-flex flex-column gap-4">
          <img
            src={artisan.photo || 'https://placehold.co/500x400?text=Photo'}
            alt={artisan.nom_artisan}
            className="w-100 rounded-artisan"
            style={{ objectFit: 'cover', maxHeight: '400px' }}
          />
          <div className="bg-artisan-light rounded-artisan p-4 flex-grow-1">
            <h2 className="h4 fw-bold text-artisan-dark text-center">À propos</h2>
            <p className="mb-0 text-center">{artisan.a_propos}</p>
          </div>
        </div>

        {/* Bloc 1bis : Photo SEULE (MOBILE) */}
        <div className="col-md-6 order-1 d-md-none">
          <img
            src={artisan.photo || 'https://placehold.co/500x400?text=Photo'}
            alt={artisan.nom_artisan}
            className="w-100 rounded-artisan"
            style={{ objectFit: 'cover', maxHeight: '400px' }}
          />
        </div>

        {/* Bloc 2 : Infos artisan + formulaire (DESKTOP uniquement, regroupés en flex) */}
        <div className="col-md-6 order-2 d-none d-md-flex flex-column gap-4">
          <div className="bg-artisan-light rounded-artisan p-3 text-center d-flex flex-column justify-content-center">
            <h1 className="fw-bold text-artisan-dark h4 mb-2">{artisan.nom_artisan}</h1>
            <div className="d-flex justify-content-center gap-4 mb-1">
              <span>🏷️ {artisan.Specialite?.nom_specialite}</span>
              <span>📍 {artisan.ville}</span>
            </div>
            <div className="fs-1 text-artisan-primary-dark mb-1">
              {'★'.repeat(noteArrondie)}
              {'☆'.repeat(5 - noteArrondie)}
            </div>
            {artisan.site_web && (
              <p className="mb-0">
                🔗{' '}
                <a href={artisan.site_web} target="_blank" rel="noopener noreferrer">
                  {artisan.site_web}
                </a>
              </p>
            )}
          </div>

          <FormulaireContact artisanId={id} />
        </div>

        {/* Bloc 2bis : Infos artisan SEUL (MOBILE uniquement, sans le formulaire) */}
        <div className="col-md-6 order-2 d-md-none">
          <div className="bg-artisan-light rounded-artisan p-3 text-center d-flex flex-column justify-content-center">
            <h1 className="fw-bold text-artisan-dark h4 mb-2">{artisan.nom_artisan}</h1>
            <div className="d-flex justify-content-center gap-4 mb-1">
              <span>🏷️ {artisan.Specialite?.nom_specialite}</span>
              <span>📍 {artisan.ville}</span>
            </div>
            <div className="fs-1 text-artisan-primary-dark mb-1">
              {'★'.repeat(noteArrondie)}
              {'☆'.repeat(5 - noteArrondie)}
            </div>
            {artisan.site_web && (
              <p className="mb-0">
                🔗{' '}
                <a href={artisan.site_web} target="_blank" rel="noopener noreferrer">
                  {artisan.site_web}
                </a>
              </p>
            )}
          </div>
        </div>

        {/* Bloc 3 : À propos SEUL (MOBILE uniquement, le desktop l'a déjà affiché dans le bloc 1) */}
        <div className="col-md-6 order-3 d-md-none">
          <div className="bg-artisan-light rounded-artisan p-4">
            <h2 className="h4 fw-bold text-artisan-dark text-center">À propos</h2>
            <p className="mb-0 text-center">{artisan.a_propos}</p>
          </div>
        </div>

        {/* Bloc 4 : Formulaire (MOBILE uniquement, le desktop l'a déjà affiché dans le bloc 2) */}
        <div className="col-md-6 order-4 d-md-none">
          <FormulaireContact artisanId={id} />
        </div>
      </div>
    </div>
  );
}

export default FicheArtisan; 