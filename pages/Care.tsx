import React from 'react';
import RitualsSection from '../components/RitualsSection';
import DiagnosticsGuide from '../components/DiagnosticsGuide';
import SEO from '../components/SEO';

const Care: React.FC = () => {
  return (
    <div className="pt-20">
      <SEO title="Rituais de Cuidado" description="Guias de luz, rega e umidade. Aprenda a ler os sinais de suas plantas e estabelecer rituais de manutenção." />
      <RitualsSection />
      <DiagnosticsGuide />
    </div>
  );
};

export default Care;