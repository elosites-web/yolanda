import React from 'react';
import { motion } from 'motion/react';
import { SALON_IMAGES } from '../data/salonData';
import { Sparkles, Heart, Flower2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-[#FAF8F5] relative overflow-hidden">
      {/* Detalhe de fundo suave */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 rounded-full bg-[#F3EDE2]/60 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Coluna Visual: Composição Editorial com Foto e Monograma */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Moldura da imagem principal com arcos elegantes */}
              <div className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-xl border border-[#E3D4C4]">
                <picture>
                  <source srcSet={SALON_IMAGES.ambiance} type="image/webp" />
                  <img
                    src={SALON_IMAGES.ambianceJpg}
                    alt="Referência visual ilustrativa do espaço e detalhes de acolhimento"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                    width={1200}
                    height={896}
                    referrerPolicy="no-referrer"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A2421]/30 via-transparent to-transparent" />
              </div>

              {/* Card flutuante editorial */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md p-5 sm:p-6 rounded-xl border border-[#E3D4C4] shadow-lg max-w-[240px] sm:max-w-[270px]">
                <div className="flex items-center gap-2 text-[#9E7D53] mb-2">
                  <Flower2 className="w-4 h-4" />
                  <span className="text-[11px] font-sans font-semibold tracking-wider uppercase">
                    Conceito do Espaço
                  </span>
                </div>
                <p className="font-editorial text-lg sm:text-xl text-[#2A2421] leading-snug italic">
                  &ldquo;Um refúgio de serenidade onde cada momento é dedicado a você.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>

          {/* Coluna Textual: Filosofia e Proposta do Salão */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Kicker limpo sem pílulas */}
            <div className="flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-[#9E7D53] font-semibold mb-3">
              <span>O Salão</span>
              <span aria-hidden="true">·</span>
              <span>Propósito & Cuidado</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#2A2421] font-normal tracking-tight leading-[1.15] text-balance">
              Um espaço pensado para acolher, valorizar e renovar a sua autoestima.
            </h2>

            <p className="mt-6 font-sans text-base sm:text-lg text-[#5E534D] leading-relaxed font-light">
              O Salão Yolanda Lima nasce com a proposta de oferecer um ambiente agradável,
              cuidadoso e verdadeiramente acolhedor em Jundiaí. Aqui, o cuidado pessoal vai além do
              estético: é um convite para você desacelerar da rotina, relaxar e se reconectar com a
              sua melhor versão.
            </p>

            <p className="mt-4 font-sans text-base text-[#5E534D] leading-relaxed font-light">
              Cada atendimento é pensado para proporcionar uma experiência tranquila e especial,
              aliando atenção aos detalhes, técnicas cuidadosas e uma atmosfera de respeito à
              singularidade de cada cliente.
            </p>

            {/* Três Pilares da Proposta */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#E3D4C4]">
              <div>
                <div className="w-8 h-8 rounded-full bg-[#F3EDE2] text-[#7A5E3B] flex items-center justify-center mb-3">
                  <Heart className="w-4 h-4" />
                </div>
                <h3 className="font-editorial text-xl text-[#2A2421] font-semibold">
                  Acolhimento
                </h3>
                <p className="mt-1.5 font-sans text-xs text-[#5E534D] leading-relaxed">
                  Ambiente sereno para você se sentir em casa desde o primeiro instante.
                </p>
              </div>

              <div>
                <div className="w-8 h-8 rounded-full bg-[#F3EDE2] text-[#7A5E3B] flex items-center justify-center mb-3">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="font-editorial text-xl text-[#2A2421] font-semibold">
                  Cuidado Pessoal
                </h3>
                <p className="mt-1.5 font-sans text-xs text-[#5E534D] leading-relaxed">
                  Atenção dedicada a cada procedimento com delicadeza e sensibilidade.
                </p>
              </div>

              <div>
                <div className="w-8 h-8 rounded-full bg-[#F3EDE2] text-[#7A5E3B] flex items-center justify-center mb-3">
                  <Flower2 className="w-4 h-4" />
                </div>
                <h3 className="font-editorial text-xl text-[#2A2421] font-semibold">
                  Bem-Estar
                </h3>
                <p className="mt-1.5 font-sans text-xs text-[#5E534D] leading-relaxed">
                  Momentos planejados para recarregar as energias e valorizar sua beleza.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
