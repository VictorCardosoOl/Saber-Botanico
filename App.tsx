import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';

// Pages
import Home from './pages/Home';
import Glossary from './pages/Glossary';
import Vases from './pages/Vases';
import Soil from './pages/Soil';
import Care from './pages/Care';

// Helper to scroll to top on route change
// Com o Lenis, precisamos forçar o scroll para 0 usando a instância, 
// mas para simplicidade em rota, o window.scrollTo nativo ainda funciona 
// se o Lenis estiver observando o root.
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <SmoothScroll>
        <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
          <ScrollToTop />
          <Header />
          <main className="flex-1 w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/glosario" element={<Glossary />} />
              <Route path="/vasos" element={<Vases />} />
              <Route path="/solo" element={<Soil />} />
              <Route path="/cuidados" element={<Care />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </HashRouter>
  );
};

export default App;