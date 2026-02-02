import React from 'react';
import SoilSection from '../components/SoilSection';
import SEO from '../components/SEO';

const Soil: React.FC = () => {
  return (
    <div className="pt-20">
      <SEO title="Ciência do Solo" description="A arte do substrato. Entenda como a composição do solo, drenagem e pH influenciam o vigor de suas plantas." />
      <SoilSection />
    </div>
  );
};

export default Soil;