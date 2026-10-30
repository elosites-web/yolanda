import React, { useState } from 'react';
import { FREQUENT_QUESTIONS } from '../data/salonData';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F5] border-t border-[#E3D4C4]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-sans tracking-widest uppercase text-[#9E7D53] font-semibold mb-2">
            <span>Dúvidas Frequentes</span>
            <span aria-hidden="true">·</span>
            <span>Perguntas & Respostas</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl text-[#2A2421] font-normal tracking-tight">
            Tudo o que você precisa saber sobre nosso espaço.
          </h2>
        </div>

        <div className="space-y-4">
          {FREQUENT_QUESTIONS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#E3D4C4] bg-white transition-all duration-200 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="font-editorial text-xl text-[#2A2421] font-medium">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#9E7D53] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 pt-1 text-sm font-sans text-[#5E534D] leading-relaxed border-t border-[#FAF8F5]">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
