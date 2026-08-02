import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getArtisans, searchArtisans } from '../services/api';
import ArtisanCard from '../components/ArtisanCard';

function ListeArtisans() {
  const [searchParams] = useSearchParams();
  const categorie = searchParams.get('categorie');
  const q = searchParams.get('q');

  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    const fetchData = q
      ? searchArtisans(q)
      : getArtisans(categorie ? { categorie } : {});

    fetchData
      .then((data) => {
        if (!ignore) {
          setArtisans(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error('Erreur chargement artisans :', err);
        if (!ignore) {
          setLoading(false);
        }
      });

    return () => {
      ignore = true;
      setLoading(true); // réinitialise l'état de chargement pour la prochaine navigation
    };
  }, [categorie, q]);

  const titre = q ? `Résultats pour "${q}"` : categorie || 'Tous les artisans';

  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-4 text-artisan-dark">{titre}</h1>

      {loading ? (
        <p className="text-center">Chargement...</p>
      ) : artisans.length === 0 ? (
        <p className="text-center">Aucun artisan trouvé.</p>
      ) : (
        <div className="row g-4">
          {artisans.map((artisan) => (
            <div key={artisan.id_artisan} className="col-md-6 col-lg-4">
              <ArtisanCard artisan={artisan} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ListeArtisans;