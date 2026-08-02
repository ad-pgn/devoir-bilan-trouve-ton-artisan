import { useState, useEffect } from 'react';
import { getTopArtisans } from '../services/api';
import ArtisanCard from '../components/ArtisanCard';

const etapes = [
  { numero: 1, texte: "Choisir la catégorie d'artisanat dans le menu." },
  { numero: 2, texte: 'Choisir un artisan.' },
  { numero: 3, texte: 'Le contacter via le formulaire de contact.' },
  { numero: 4, texte: 'Une réponse sera apportée sous 48h.' },
];

function Accueil() {
  const [artisansTop, setArtisansTop] = useState([]);

  useEffect(() => {
    getTopArtisans()
      .then(setArtisansTop)
      .catch((err) => console.error('Erreur chargement artisans du mois :', err));
  }, []);

  return (
    <div className="container py-5">
      <section className="mb-5">
        <h1 className="text-center fw-bold mb-4 text-artisan-dark">
          Comment trouver mon artisan ?
        </h1>
        <div className="bg-artisan-light rounded-artisan p-4">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row g-4 gy-5">
                {etapes.map((etape) => (
                  <div key={etape.numero} className="col-md-6">
                    <div className="d-flex align-items-center gap-3">
                      <div
                        className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center flex-shrink-0"
                        style={{ width: '48px', height: '48px' }}
                      >
                        ☰
                      </div>
                      <p className="mb-0">
                        <strong>{etape.numero}.</strong> {etape.texte}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-center fw-bold mb-4 text-artisan-dark">
          Les artisans du mois
        </h2>
        <div className="row g-4">
          {artisansTop.map((artisan) => (
            <div key={artisan.id_artisan} className="col-md-4">
              <ArtisanCard artisan={artisan} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Accueil;