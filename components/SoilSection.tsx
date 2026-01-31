import React from 'react';
import { SOIL_IMAGE_MAIN, SOIL_IMAGE_SMALL_1, SOIL_IMAGE_SMALL_2 } from '../constants';

const SoilSection: React.FC = () => {
  return (
    <section id="soil" className="relative w-full bg-paper text-ink font-alt py-24 overflow-hidden">
      <div className="absolute inset-0 bg-linen opacity-30 pointer-events-none"></div>
      
      <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 relative">
          
          {/* Background Decor */}
          <div className="absolute -left-20 -top-20 opacity-[0.03] pointer-events-none select-none">
            <span className="material-symbols-outlined text-[40rem] font-thin">local_florist</span>
          </div>

          {/* Text Left */}
          <div className="lg:col-span-5 flex flex-col justify-center relative z-10">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-gold-dark"></span>
              <span className="font-serif italic text-gold-dark text-xl">O Guia do Curador</span>
            </div>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-ink mb-8">
              A Arte do <br/>
              <span className="text-sage italic font-light ml-4">Solo & Argila</span>
            </h2>
            <p className="font-alt text-xl md:text-2xl leading-relaxed text-ink/80 mb-10 pl-4 border-l-2 border-gold/30">
              "Plantar um jardim é acreditar no amanhã." <br/>
              <span className="text-base italic text-gold-dark mt-2 block">— Provérbio Botânico</span>
            </p>
            <div className="flex flex-col gap-2">
              <p className="font-serif italic text-2xl text-gold-dark rotate-2 w-max origin-left transform">Fig. 1: Preparação</p>
              <p className="font-serif text-xs uppercase tracking-[0.2em] text-ink/40">Est. 2024 — Vida Botânica de Alto Padrão</p>
            </div>
          </div>

          {/* Images Right - Collage */}
          <div className="lg:col-span-7 relative h-[600px] lg:h-[700px] mt-12 lg:mt-0">
            {/* Main Large Image */}
            <div className="absolute top-0 right-0 w-[85%] h-[80%] z-10 shadow-xl bg-ink p-2 transform rotate-1">
              <div className="w-full h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center sepia-[0.2]" style={{ backgroundImage: `url('${SOIL_IMAGE_MAIN}')` }}></div>
              </div>
            </div>
            
            {/* Overlay Image Bottom Left */}
            <div className="absolute bottom-0 left-4 w-[45%] aspect-[4/5] z-20 shadow-2xl border-4 border-paper transform -rotate-2 group">
              <div className="w-full h-full bg-cover bg-center transition duration-1000 grayscale group-hover:grayscale-0" style={{ backgroundImage: `url('${SOIL_IMAGE_SMALL_1}')` }}></div>
              <div className="absolute -bottom-8 -right-8 font-serif italic text-3xl text-ink">Detalhes em Terracota</div>
            </div>
            
            {/* Small Overlay Image Top Left */}
            <div className="absolute top-12 left-0 w-[30%] aspect-square z-30 shadow-lg border border-gold/50 bg-paper p-1 rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${SOIL_IMAGE_SMALL_2}')` }}></div>
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gold-dark/80 backdrop-blur-sm flex items-center justify-center text-paper font-serif font-bold text-xs shadow-sm">03</div>
            </div>
            
            {/* Handwriting Arrow */}
            <div className="absolute bottom-[20%] right-[10%] z-30 max-w-[150px] hidden md:block">
              <span className="material-symbols-outlined text-gold-dark text-4xl absolute -left-8 -top-4 -rotate-12">arrow_back</span>
              <p className="font-serif italic text-xl text-ink leading-tight">Observe a rica textura da mistura de substrato orgânico.</p>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="max-w-5xl mx-auto mb-24 relative">
          <div className="flex items-center justify-center gap-4 mb-12 opacity-40">
            <span className="h-px w-24 bg-ink"></span>
            <span className="material-symbols-outlined text-gold-dark text-sm">filter_vintage</span>
            <span className="h-px w-24 bg-ink"></span>
          </div>
          
          <div className="columns-1 md:columns-2 gap-12 lg:gap-20 space-y-8">
            <p className="font-alt text-xl lg:text-2xl leading-relaxed text-ink/90 text-justify mb-8 first-letter:text-6xl first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-gold-dark">
              Dominar a fundação de plantas saudáveis começa não com a folha, mas com a raiz. Descubra a sinergia perfeita entre textura do solo, escolha do vaso e drenagem. É um ritual de aterramento — literal e metaforicamente. A escolha de um vaso artesanal e a mistura de substratos ricos e orgânicos transforma uma tarefa simples em uma prática meditativa de cuidado e cultivo.
            </p>
            
            <div className="break-inside-avoid mb-8 p-8 bg-sage/10 border border-sage/20 relative">
              <span className="material-symbols-outlined absolute -top-3 left-1/2 -translate-x-1/2 bg-paper px-2 text-sage">format_quote</span>
              <p className="font-serif italic text-lg text-ink text-center mb-4">
                "Sempre esterilize vasos antigos antes de reutilizá-los. Um vaso limpo é a tela para uma nova vida, prevenindo o sussurro de doenças passadas."
              </p>
              <p className="text-center font-sans text-xs font-bold tracking-widest uppercase text-gold-dark">— Nota do Curador</p>
            </div>
            
            <p className="font-alt text-lg leading-relaxed text-ink/80 indent-8">
              O vaso é mais que um recipiente; é o lar onde seu companheiro botânico reside. Escolher terracota não esmaltada permite que as raízes respirem, absorvendo o excesso de umidade, enquanto cerâmicas esmaltadas mantêm a umidade próxima. O curador atento equilibra estética com função, entendendo que o próprio solo é um ecossistema vivo exigindo aeração, nutrição e estrutura.
            </p>
          </div>
        </div>

        {/* Methodology Steps */}
        <div className="border-t border-b border-ink/10 py-20 bg-paper relative overflow-hidden">
            <div className="text-center mb-16 relative z-10">
                <span className="font-serif italic text-3xl text-gold-dark block mb-2">Metodologia</span>
                <h3 className="font-serif text-4xl md:text-5xl text-ink">A Arte da Preparação</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative max-w-6xl mx-auto px-6">
                <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gold-dark/30 -z-10"></div>
                {['A Fundação de Drenagem', 'A Alquimia do Substrato', 'O Toque Final'].map((step, idx) => (
                    <div key={idx} className="group relative bg-paper pt-8 md:pt-12">
                         <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-paper border border-gold-dark rounded-full flex items-center justify-center z-10 shadow-sm">
                            <span className="font-serif text-xl font-bold text-gold-dark">{(['I', 'II', 'III'])[idx]}</span>
                        </div>
                        <div className="text-center p-6 border border-transparent group-hover:border-gold-dark/20 transition-all duration-500 bg-paper">
                            <h4 className="font-serif text-2xl text-ink mb-4 group-hover:text-gold-dark transition-colors">{step}</h4>
                            <p className="font-alt text-lg text-ink/70 leading-relaxed">
                                {idx === 0 && "Comece com uma camada deliberada de 2-3cm de argila expandida ou cascalho de rio. Este estrato oculto previne a estagnação."}
                                {idx === 1 && "Misture solo para vasos com corretivos de aeração como perlita. Uma proporção 70/30 cria a textura ideal para tropicais internas."}
                                {idx === 2 && "Regue abundantemente até que o fluxo saia limpo. Finalize com uma camada de pedras decorativas para uma estética de galeria."}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default SoilSection;