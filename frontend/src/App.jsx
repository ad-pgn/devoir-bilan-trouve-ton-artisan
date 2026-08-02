import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import ListeArtisans from './pages/ListeArtisans';
import FicheArtisan from './pages/FicheArtisan';
import PageNotFound from './pages/PageNotFound';
import PageLegale from './pages/PageLegale';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/artisans" element={<ListeArtisans />} />
        <Route path="/artisans/:id" element={<FicheArtisan />} />
        <Route path="*" element={<PageNotFound />} />
        
        <Route path="/mentions-legales" element={<PageLegale titre="Mentions légales" />} />
        <Route path="/donnees-personnelles" element={<PageLegale titre="Données personnelles" />} />
        <Route path="/accessibilite" element={<PageLegale titre="Accessibilité" />} />
        <Route path="/cookies" element={<PageLegale titre="Cookies" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;