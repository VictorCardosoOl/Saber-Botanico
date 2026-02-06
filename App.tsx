import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import SmoothScrolling from './components/SmoothScrolling'; 
import { ToastProvider } from './context/ToastContext';
import { CollectionProvider } from './context/CollectionContext';

// Pages
import Home from './pages/Home';
import Glossary from './pages/Glossary';
import Vases from './pages/Vases';
import Soil from './pages/Soil';
import Care from './pages/Care';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/glosario" element={<Glossary />} />
        <Route path="/vasos" element={<Vases />} />
        <Route path="/solo" element={<Soil />} />
        <Route path="/cuidados" element={<Care />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ToastProvider>
        <CollectionProvider>
          {/* HashRouter deve estar DENTRO do SmoothScrolling se quiséssemos passar o router para ele, 
              mas como SmoothScrolling usa useLocation, ele precisa estar DENTRO do Router.
              Refatorando a ordem: Router -> SmoothScrolling -> App Content
          */}
          <HashRouter>
            <SmoothScrolling> 
              <Header />
              
              <div className="w-full relative overflow-x-hidden min-h-screen flex flex-col bg-forest-dark">
                <main className="flex-1 w-full">
                  <AnimatedRoutes />
                </main>
                <Footer />
                <BackToTop />
              </div>

            </SmoothScrolling>
          </HashRouter>
        </CollectionProvider>
      </ToastProvider>
    </HelmetProvider>
  );
};

export default App;