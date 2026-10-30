import React from 'react';
import { motion } from 'motion/react';
import { EXPERIENCE_PILLARS } from '../data/salonData';
import { Heart, Sparkles, ShieldCheck, Clock, Coffee, Smile } from 'lucide-react';

const iconMap = {
  Heart,
  Sparkles,
  ShieldCheck,
  Clock,
  Coffee,
  Smile,
};

export const Experience: React.FC = () => {
  return (
    <section id="experiencia" className="py-24 lg:py-32 bg-[#F8F5EE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-[#9E7D53] font-semibold mb-3">
            <span>A Experiência</span>
            <span aria-hidden="true">·</span>
            <span>Atenção aos Detalhes</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl text-[#2A2421] font-normal tracking-tight text-balance">
            Mais do que um atendimento, um momento pensado para você.
          </h2>

          <p className="mt-4 font-sans text-base sm:text-lg text-[#5E534D] font-light leading-relaxed">
            Acreditamos que o tempo que você passa no salão deve ser um intervalo revigorante no
            seu dia. Por isso, cada detalhe é desenhado para seu máximo conforto.
          </p>
        </div>

        {/* Grid dos 6 Pilares da Experiência */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {EXPERIENCE_PILLARS.map((pillar, index) => {
            const IconComponent = iconMap[pillar.iconName];
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white p-8 rounded-2xl border border-[#E3D4C4] shadow-xs hover:border-[#C5A880] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#E3D4C4] text-[#7A5E3B] flex items-center justify-center mb-6">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <h3 className="font-editorial text-2xl text-[#2A2421] font-semibold">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 font-sans text-sm text-[#5E534D] leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F8F5EE] flex items-center text-[11px] font-sans text-[#A89582] uppercase tracking-wider">
                  <span>Pilar de cuidado {index + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Citação Editorial em Faixa Suave */}
        <div className="mt-16 p-8 sm:p-12 rounded-2xl bg-[#EFE6DD]/70 border border-[#DBC8B5] text-center max-w-4xl mx-auto">
          <p className="font-editorial text-2xl sm:text-3xl text-[#2A2421] italic font-normal leading-relaxed text-balance">
            &ldquo;Cuidar de si é um ato de carinho que transforma o dia a dia e renova sua
            confiança.&rdquo;
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs font-sans text-[#7A5E3B] font-medium tracking-wider uppercase">
            <span>Salão da Yolanda</span>
            <span aria-hidden="true">·</span>
            <span>Jundiaí - SP</span>
          </div>
        </div>
      </div>
    </section>
  );
};
