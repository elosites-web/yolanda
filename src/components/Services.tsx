import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICE_CATEGORIES, ServiceItem, ServiceCategory } from '../data/salonData';
import { Check, Info, Sparkles, ChevronRight, X } from 'lucide-react';

export const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('cabelos');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const currentCategory =
    SERVICE_CATEGORIES.find((cat) => cat.id === activeCategory) || SERVICE_CATEGORIES[0];

  return (
    <section id="servicos" className="py-24 lg:py-32 bg-[#F8F5EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-sans tracking-widest uppercase text-[#9E7D53] font-semibold mb-3">
            <span>Nossos Serviços</span>
            <span aria-hidden="true">·</span>
            <span>Menu Demonstrativo</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl text-[#2A2421] font-normal tracking-tight text-balance">
            Cuidados pensados para cada momento da sua rotina.
          </h2>

          <p className="mt-4 font-sans text-base text-[#5E534D] font-light leading-relaxed">
            Uma seleção completa de tratamentos para valorizar seus cabelos, unhas e bem-estar
            pessoal, com produtos de alta performance e técnicas refinadas.
          </p>

          {/* Aviso transparente de protótipo */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-[#E3D4C4] text-xs font-sans text-[#7A5E3B]">
            <Info className="w-3.5 h-3.5 text-[#9E7D53] shrink-0" />
            <span>Menu demonstrativo para proposta comercial · Valores sob consulta com a Yolanda</span>
          </div>
        </div>

        {/* Abas Interativas de Categorias */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex p-1.5 bg-[#EFE6DD] rounded-full gap-1 sm:gap-2 shadow-inner max-w-full overflow-x-auto">
            {SERVICE_CATEGORIES.map((cat) => {
              const isActive = cat.id === activeCategory;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-sans font-medium transition-all duration-300 whitespace-nowrap shrink-0 flex items-center gap-2 ${
                    isActive
                      ? 'bg-white text-[#2A2421] shadow-xs'
                      : 'text-[#5E534D] hover:text-[#2A2421]'
                  }`}
                >
                  {cat.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bloco de Conteúdo com Transição Suave de Categoria */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCategory.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="mt-12 lg:mt-16"
          >
            {/* Split: Imagem da Categoria e Grid de Serviços */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Card Destaque da Categoria */}
              <div className="lg:col-span-4 bg-white rounded-2xl overflow-hidden border border-[#E3D4C4] shadow-sm flex flex-col">
                <div className="relative aspect-4/3 overflow-hidden">
                  <picture>
                    <source srcSet={currentCategory.image} type="image/webp" />
                    <img
                      src={currentCategory.image}
                      alt={`Referência visual ilustrativa para categoria ${currentCategory.title}`}
                      className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                      width={1200}
                      height={896}
                      referrerPolicy="no-referrer"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A2421]/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] font-sans uppercase tracking-widest text-[#EFE6DD]">
                      {currentCategory.subtitle}
                    </span>
                    <h3 className="font-editorial text-2xl font-medium mt-0.5">
                      {currentCategory.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="font-sans text-sm text-[#5E534D] leading-relaxed">
                    {currentCategory.description}
                  </p>
                  <div className="mt-6 pt-5 border-t border-[#F0E6DC] flex items-center justify-between text-xs text-[#7A5E3B]">
                    <span>{currentCategory.services.length} serviços demonstrativos</span>
                    <span className="font-medium">Personalizável</span>
                  </div>
                </div>
              </div>

              {/* Lista / Grid de Serviços */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentCategory.services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white p-6 rounded-2xl border border-[#E3D4C4] shadow-xs hover:border-[#C5A880] hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-sans font-medium text-[#9E7D53] tracking-wider uppercase">
                          {service.tag}
                        </span>
                        <Sparkles className="w-3.5 h-3.5 text-[#C5A880] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>

                      <h4 className="font-editorial text-2xl text-[#2A2421] font-semibold">
                        {service.name}
                      </h4>

                      <p className="mt-2 font-sans text-sm text-[#5E534D] leading-relaxed">
                        {service.description}
                      </p>

                      {service.details && (
                        <ul className="mt-4 space-y-1.5 border-t border-[#F8F5EE] pt-3">
                          {service.details.map((detail, dIdx) => (
                            <li
                              key={dIdx}
                              className="text-xs font-sans text-[#7A5E3B] flex items-center gap-2"
                            >
                              <Check className="w-3.5 h-3.5 text-[#9E7D53] shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#F3EDE2] flex items-center justify-between">
                      <span className="text-[11px] font-sans text-[#A89582]">
                        Valores sob consulta oficial
                      </span>
                      <button
                        type="button"
                        onClick={() => setSelectedService(service)}
                        className="text-xs font-sans font-semibold text-[#7A5E3B] hover:text-[#2A2421] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                      >
                        Ver detalhes <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modal de Detalhes do Serviço */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 border border-[#E3D4C4] shadow-2xl relative">
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 text-[#5E534D] hover:text-[#2A2421] rounded-full hover:bg-[#F8F5EE]"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-sans uppercase tracking-widest text-[#9E7D53] font-semibold">
              {selectedService.tag}
            </span>

            <h3 className="font-editorial text-3xl text-[#2A2421] font-semibold mt-1">
              {selectedService.name}
            </h3>

            <p className="mt-3 font-sans text-sm text-[#5E534D] leading-relaxed">
              {selectedService.description}
            </p>

            {selectedService.details && (
              <div className="mt-5 p-4 rounded-xl bg-[#FAF8F5] border border-[#E3D4C4]/60">
                <span className="text-xs font-sans font-semibold text-[#2A2421] block mb-2">
                  O que este serviço pode incluir (demonstrativo):
                </span>
                <ul className="space-y-2">
                  {selectedService.details.map((item, idx) => (
                    <li key={idx} className="text-xs font-sans text-[#5E534D] flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#9E7D53] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-6 pt-5 border-t border-[#F0E6DC] flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs font-sans text-[#A89582] text-center sm:text-left">
                Tabela oficial a ser fornecida pela Yolanda
              </span>
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-sans font-semibold text-white bg-[#7A5E3B] hover:bg-[#634b2e] rounded-full"
              >
                Entendi
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
