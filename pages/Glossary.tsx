import React, { useState } from 'react';
import { PLANTS, ARCHIVE_HERO } from '../constants';
import { PlantSpecimen } from '../types';
import PlantCard from '../components/PlantCard';
import PlantModal from '../components/PlantModal';

const Glossary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlant, setSelectedPlant] = useState<PlantSpecimen | null>(null);

  const filteredPlants = PLANTS.filter(plant => 
    plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    plant.scientificName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-[#fbfcf8] via-[#f4f7f9] to-[#eef2f6]">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header Glossary */}
        <div className="text-center mb-16">
          <span className="text-gold-dark font-mono text-xs uppercase tracking-[0.3em] mb-4 block">Arquivo Botânico</span>
          <h1 className="text-5xl md:text-6xl font-serif text-charcoal mb-6">Glosário de Espécies</h1>
          <p className="max-w-2xl mx-auto text-charcoal/60 font-alt text-xl">
            Uma enciclopédia viva das plantas que habitam nossos lares. Clique em um espécime para iniciar a interação e descobrir seus rituais.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-16 relative">
          <input 
            type="text" 
            placeholder="Pesquisar por nome ou espécie..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-charcoal/10 rounded-full py-4 pl-14 pr-6 text-charcoal placeholder-charcoal/40 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 shadow-sm transition-all"
          />
          <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-charcoal/40">search</span>
        </div>

        {/* Grid */}
        {filteredPlants.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlants.map((plant) => (
              <div key={plant.id} onClick={() => setSelectedPlant(plant)} className="cursor-pointer">
                <PlantCard plant={plant} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 opacity-50">
             <span className="material-symbols-outlined text-6xl mb-4">grass</span>
             <p className="text-xl font-serif">Nenhum espécime encontrado.</p>
          </div>
        )}
      </div>

      {/* Modal Interaction */}
      {selectedPlant && (
        <PlantModal plant={selectedPlant} onClose={() => setSelectedPlant(null)} />
      )}
    </section>
  );
};

export default Glossary;