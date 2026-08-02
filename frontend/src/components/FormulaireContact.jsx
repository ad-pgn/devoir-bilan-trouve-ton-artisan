import { useState } from 'react';
import { contactArtisan } from '../services/api';

function FormulaireContact({ artisanId }) {
  const [formData, setFormData] = useState({ nom: '', email: '', objet: '', message: '' });
  const [envoiStatus, setEnvoiStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnvoiStatus('loading');
    try {
      await contactArtisan(artisanId, formData);
      setEnvoiStatus('success');
      setFormData({ nom: '', email: '', objet: '', message: '' });
    } catch (error) {
      console.error(error);
      setEnvoiStatus('error');
    }
  };

  return (
    <div className="bg-artisan-light rounded-artisan p-4 flex-grow-1">
      <h2 className="h4 fw-bold text-artisan-dark text-center mb-3">
        Formulaire de contact
      </h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="nom"
            className="form-control form-control-artisan"
            placeholder="Votre nom"
            value={formData.nom}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            name="email"
            className="form-control form-control-artisan"
            placeholder="Votre e-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="objet"
            className="form-control form-control-artisan"
            placeholder="Objet de votre demande"
            value={formData.objet}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3 flex-grow-1">
          <textarea
            name="message"
            className="form-control form-control-artisan"
            placeholder="Votre message..."
            value={formData.message}
            onChange={handleChange}
            required
            style={{ minHeight: '100px', flexGrow: 1 }}
          />
        </div>

        {envoiStatus === 'success' && (
          <p className="text-success text-center mb-2">Votre message a bien été envoyé !</p>
        )}
        {envoiStatus === 'error' && (
          <p className="text-danger text-center mb-2">Une erreur est survenue, veuillez réessayer.</p>
        )}

        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary px-4 fw-bold border border-danger"
            disabled={envoiStatus === 'loading'}
          >
            {envoiStatus === 'loading' ? 'Envoi...' : 'ENVOYER'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormulaireContact;