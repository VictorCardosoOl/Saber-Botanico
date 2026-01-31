import React from 'react';
import { SOIL_IMAGE_MAIN } from '../constants';

const Vases: React.FC = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 bg-paper text-ink">
       <div className="max-w-[1200px] mx-auto px-6">
          
          <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
            <div className="w-full md:w-1/2">
                <span className="text-gold-dark font-mono text-xs uppercase tracking-[0.3em] mb-4 block">Fundamentos</span>
                <h1 className="text-5xl md:text-6xl font-serif text-ink mb-8">A Arquitetura do Vaso</h1>
                <p className="font-alt text-xl text-ink/80 leading-relaxed mb-6">
                    Antes de pensar na planta, pense no lar dela. O vaso não é apenas um item estético, é a primeira linha de defesa contra o apodrecimento das raízes e o segredo para um crescimento estruturado.
                </p>
                <div className="p-6 bg-sage/10 border-l-4 border-sage">
                    <p className="font-serif italic text-lg">"O erro mais comum do jovem jardineiro é subestimar a importância de um furo de drenagem."</p>
                </div>
            </div>
            <div className="w-full md:w-1/2 relative h-[500px]">
                <div className="absolute inset-0 bg-gray-200 transform rotate-3 rounded-lg"></div>
                <div 
                    className="absolute inset-0 bg-cover bg-center rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1463320726281-696a485928c7?q=80&w=1000&auto=format&fit=crop')` }}
                ></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mb-24">
              <div>
                  <h2 className="text-3xl font-serif mb-6 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full border border-gold text-gold flex items-center justify-center text-sm font-sans">01</span>
                      Materiais
                  </h2>
                  <ul className="space-y-6">
                      <li className="flex gap-4">
                          <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center shrink-0">
                              <span className="material-symbols-outlined text-orange-800 text-3xl">grid_view</span>
                          </div>
                          <div>
                              <h3 className="font-bold text-lg mb-1">Terracota (Barro)</h3>
                              <p className="text-sm text-gray-600 leading-relaxed">Porosa e respirável. Ideal para cactos e suculentas pois permite que a água evapore pelas paredes. Cuidado: seca o solo rápido.</p>
                          </div>
                      </li>
                      <li className="flex gap-4">
                          <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                              <span className="material-symbols-outlined text-gray-600 text-3xl">circle</span>
                          </div>
                          <div>
                              <h3 className="font-bold text-lg mb-1">Cerâmica Esmaltada</h3>
                              <p className="text-sm text-gray-600 leading-relaxed">Retém umidade. Ótima para plantas tropicais que gostam de água (Samambaias, Calatheas). Variedade estética infinita.</p>
                          </div>
                      </li>
                      <li className="flex gap-4">
                          <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                              <span className="material-symbols-outlined text-blue-800 text-3xl">recycling</span>
                          </div>
                          <div>
                              <h3 className="font-bold text-lg mb-1">Plástico</h3>
                              <p className="text-sm text-gray-600 leading-relaxed">Leve e retém muita água. Prático, mas esteticamente inferior. Use como vaso interno (nursery pot) dentro de um cachepot.</p>
                          </div>
                      </li>
                  </ul>
              </div>

              <div>
                   <h2 className="text-3xl font-serif mb-6 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full border border-gold text-gold flex items-center justify-center text-sm font-sans">02</span>
                      Anatomia da Montagem
                  </h2>
                  <div className="relative border border-ink/10 bg-white p-8 rounded-sm">
                      <div className="absolute left-12 top-0 bottom-0 w-px bg-dashed border-l border-ink/20 border-dashed"></div>
                      
                      <div className="relative pl-12 mb-8 group">
                          <div className="absolute left-[-5px] top-0 w-3 h-3 bg-green-500 rounded-full"></div>
                          <h4 className="font-bold uppercase tracking-widest text-xs text-green-700 mb-1">Camada 4: A Planta</h4>
                          <p className="text-sm text-gray-500">O torrão da raiz deve ficar 2cm abaixo da borda do vaso.</p>
                      </div>

                      <div className="relative pl-12 mb-8 group">
                          <div className="absolute left-[-5px] top-0 w-3 h-3 bg-amber-700 rounded-full"></div>
                          <h4 className="font-bold uppercase tracking-widest text-xs text-amber-700 mb-1">Camada 3: Substrato</h4>
                          <p className="text-sm text-gray-500">A mistura principal de terra, perlita e húmus onde as raízes vivem.</p>
                      </div>

                      <div className="relative pl-12 mb-8 group">
                          <div className="absolute left-[-5px] top-0 w-3 h-3 bg-gray-400 rounded-full"></div>
                          <h4 className="font-bold uppercase tracking-widest text-xs text-gray-500 mb-1">Camada 2: Manta de Bidim</h4>
                          <p className="text-sm text-gray-500">Um tecido fino que impede a terra de se misturar com as pedras e entupir o fundo.</p>
                      </div>

                      <div className="relative pl-12 group">
                          <div className="absolute left-[-5px] top-0 w-3 h-3 bg-stone-500 rounded-full"></div>
                          <h4 className="font-bold uppercase tracking-widest text-xs text-stone-600 mb-1">Camada 1: Drenagem</h4>
                          <p className="text-sm text-gray-500">Argila expandida, brita ou cacos de telha. Essencial para o excesso de água escorrer.</p>
                      </div>
                  </div>
              </div>
          </div>

       </div>
    </section>
  );
};

export default Vases;