import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS, GalleryItem } from '../data/salonData';
import { Maximize2, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'cabelos' | 'unhas' | 'ambiente' | 'rituais'>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    filter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === filter);

  const currentItem =
    activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  const handleNext = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        (activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  return (
    <section id="galeria" className="py-24 lg:py-32 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho Editorial da Galeria */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-sans tracking-widest uppercase text-[#9E7D53] font-semibold mb-3">
            <span>Galeria Visual</span>
            <span aria-hidden="true">·</span>
            <span>Inspirações & Conceito</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl text-[#2A2421] font-normal tracking-tight text-balance">
            Uma prévia da estética e cuidado que inspiram nosso espaço.
          </h2>

          <p className="mt-4 font-sans text-base text-[#5E534D] font-light leading-relaxed">
            Composição visual editorial com referências de acabamento, saúde capilar,
            delicadeza nas unhas e atmosfera acolhedora.
          </p>

          <p className="mt-2 text-xs font-sans text-[#A89582] italic">
            * Fotografias conceituais ilustrativas para a apresentação da proposta comercial.
          </p>
        </div>

        {/* Filtros em Botões Limpos com Segmented Control */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex p-1 bg-[#F3EDE2] rounded-full gap-1 overflow-x-auto max-w-full">
            {[
              { id: 'all', label: 'Todas as Imagens' },
              { id: 'cabelos', label: 'Cabelos' },
              { id: 'unhas', label: 'Unhas' },
              { id: 'ambiente', label: 'Ambiente' },
              { id: 'rituais', label: 'Rituais' },
            ].map((tab) => {
              const isActive = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setFilter(tab.id as typeof filter)}
                  className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-sans font-medium rounded-full transition-all duration-200 whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-white text-[#2A2421] shadow-xs'
                      : 'text-[#5E534D] hover:text-[#2A2421]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid Editorial Moderno com Efeito Hover */}
        <motion.div layout className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl overflow-hidden bg-white border border-[#E3D4C4] shadow-xs hover:shadow-xl transition-all duration-500 cursor-pointer aspect-4/3 sm:aspect-square flex flex-col justify-end"
                onClick={() => setActiveLightboxIndex(index)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Scrim Gradiente no Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A2421]/80 via-[#2A2421]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Botão sutil de Zoom */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-[#2A2421] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                  <Maximize2 className="w-4 h-4 text-[#7A5E3B]" />
                </div>

                {/* Conteúdo textual da imagem */}
                <div className="relative z-10 p-5 sm:p-6 text-white transform group-hover:-translate-y-1 transition-transform duration-300">
                  <span className="text-[10px] font-sans uppercase tracking-widest text-[#EFE6DD] font-medium">
                    {item.categoryLabel}
                  </span>
                  <h3 className="font-editorial text-xl sm:text-2xl font-medium mt-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#E3D4C4] line-clamp-2 font-sans font-light opacity-90">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal com Zoom e Navegação */}
      {currentItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#2A2421]/90 backdrop-blur-md animate-in fade-in duration-300"
        >
          <div className="relative max-w-4xl w-full bg-[#FAF8F5] rounded-2xl overflow-hidden shadow-2xl border border-[#C5A880]/40 flex flex-col">
            {/* Barra Superior do Lightbox */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#E3D4C4] bg-white">
              <div>
                <span className="text-[11px] font-sans uppercase tracking-wider text-[#9E7D53] font-semibold">
                  {currentItem.categoryLabel}
                </span>
                <h4 className="font-editorial text-xl text-[#2A2421] font-semibold">
                  {currentItem.title}
                </h4>
              </div>

              <button
                type="button"
                onClick={() => setActiveLightboxIndex(null)}
                className="p-2 text-[#5E534D] hover:text-[#2A2421] rounded-full hover:bg-[#F3EDE2] transition-colors"
                aria-label="Fechar ampliação"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Imagem Ampliada com Controles */}
            <div className="relative aspect-16/10 sm:aspect-16/9 bg-[#1F1A18] flex items-center justify-center overflow-hidden">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="max-h-full max-w-full object-contain"
                referrerPolicy="no-referrer"
              />

              {/* Botão Anterior */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-xs transition-colors"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Botão Próximo */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-xs transition-colors"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Rodapé do Lightbox com Legenda & Disclaimer */}
            <div className="p-4 sm:p-5 bg-white border-t border-[#E3D4C4] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <p className="font-sans text-xs text-[#5E534D] font-light">
                {currentItem.caption}
              </p>
              <span className="text-[10px] font-sans uppercase tracking-wider text-[#A89582] bg-[#FAF8F5] px-2.5 py-1 rounded-sm border border-[#E3D4C4] shrink-0">
                Conceito Demonstrativo
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
