import React, { useState } from 'react';
import { Logo } from './Logo';
import { SALON_INFO } from '../data/salonData';
import { MapPin, Shield, X, Heart } from 'lucide-react';

interface FooterProps {
  onOpenProposal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenProposal }) => {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <footer className="bg-[#FAF8F5] border-t border-[#E3D4C4] pt-16 pb-12 text-[#5E534D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 pb-12 border-b border-[#E3D4C4]">
          {/* Coluna 1: Logo & Propósito */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Logo variant="horizontal" />
            <p className="mt-4 font-sans text-sm text-[#5E534D] leading-relaxed max-w-sm font-light">
              Um refúgio de beleza, cuidado capilar e bem-estar em Jundiaí. Criado para valorizar
              sua singularidade e renovar sua autoestima a cada atendimento.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <button
                type="button"
                onClick={onOpenProposal}
                className="text-xs font-sans text-[#7A5E3B] hover:text-[#2A2421] px-3 py-1.5 rounded-full border border-[#DBC8B5] bg-white transition-colors"
              >
                Ver Proposta ēloSites
              </button>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="md:col-span-3">
            <h4 className="font-editorial text-lg text-[#2A2421] font-semibold mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs font-sans">
              <li>
                <a href="#inicio" className="hover:text-[#2A2421] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#2A2421] transition-colors">
                  O Salão
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#2A2421] transition-colors">
                  Serviços Demonstrativos
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-[#2A2421] transition-colors">
                  Galeria Visual
                </a>
              </li>
              <li>
                <a href="#experiencia" className="hover:text-[#2A2421] transition-colors">
                  A Experiência
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-[#2A2421] transition-colors">
                  Localização
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Endereço & Local */}
          <div className="md:col-span-4">
            <h4 className="font-editorial text-lg text-[#2A2421] font-semibold mb-4">
              Localização em Jundiaí
            </h4>
            <div className="space-y-2 text-xs font-sans leading-relaxed">
              <p className="flex items-start gap-2 text-[#2A2421] font-medium">
                <MapPin className="w-4 h-4 text-[#9E7D53] shrink-0 mt-0.5" />
                <span>{SALON_INFO.address.street}</span>
              </p>
              <p className="pl-6 text-[#5E534D]">
                {SALON_INFO.address.neighborhood} · {SALON_INFO.address.city} - {SALON_INFO.address.state}
              </p>
              <p className="pl-6 text-[#9E7D53] font-mono">
                CEP {SALON_INFO.address.cep}
              </p>
            </div>

            <div className="mt-4 pt-3 pl-6 border-t border-[#F0E6DC]">
              <a
                href={SALON_INFO.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-sans text-[#7A5E3B] hover:text-[#2A2421] underline underline-offset-4 font-medium"
              >
                Abrir no Google Maps &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Linha Final de Copyright, Assinatura e LGPD */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-[#A89582]">
          <div className="text-center md:text-left">
            <span>© {new Date().getFullYear()} Salão da Yolanda. Todos os direitos reservados.</span>
            <span className="mx-2 hidden sm:inline">·</span>
            <button
              type="button"
              onClick={() => setPrivacyOpen(true)}
              className="hover:text-[#5E534D] underline underline-offset-2 transition-colors ml-1"
            >
              Privacidade & Termos
            </button>
          </div>

          {/* Assinatura Requerida pela ēloSites */}
          <div className="text-center md:text-right font-medium text-[#7A5E3B]">
            <span>{SALON_INFO.agency.signature}</span>
          </div>
        </div>
      </div>

      {/* Modal LGPD & Termos de Uso */}
      {privacyOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in"
        >
          <div className="bg-[#FAF8F5] rounded-2xl max-w-lg w-full p-6 sm:p-8 border border-[#E3D4C4] shadow-2xl relative max-h-[85vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setPrivacyOpen(false)}
              className="absolute top-4 right-4 p-2 text-[#5E534D] hover:text-[#2A2421] rounded-full hover:bg-[#F3EDE2]"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-[#9E7D53] mb-2">
              <Shield className="w-4 h-4" />
              <span className="text-xs font-sans uppercase tracking-wider font-semibold">
                Privacidade & Proteção de Dados (LGPD)
              </span>
            </div>

            <h3 className="font-editorial text-2xl text-[#2A2421] font-semibold">
              Termos e Privacidade do Protótipo
            </h3>

            <div className="mt-4 space-y-3 font-sans text-xs text-[#5E534D] leading-relaxed">
              <p>
                <strong>1. Natureza do Site:</strong> Esta página é um protótipo visual e
                comercial desenvolvido pelo estúdio <em>ēloSites</em> com a finalidade de
                apresentação e demonstração ao <strong>Salão da Yolanda</strong>.
              </p>
              <p>
                <strong>2. Ausência de Coleta de Dados Pessoais:</strong> Este protótipo não realiza
                coleta de dados cadastrais, informações de pagamento ou cookies invasivos. Qualquer
                futura funcionalidade de agendamento será implementada sob conformidade estrita com
                a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
              </p>
              <p>
                <strong>3. Controlador dos Dados:</strong> Quando o site for publicado
                oficialmente, o controlador responsável pelos atendimentos e agendamentos será o
                próprio Salão da Yolanda.
              </p>
              <p>
                <strong>4. Propriedade Intelectual & Direção Criativa:</strong> Logotipo,
                monograma e código foram desenvolvidos sob medida pela ēloSites.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E3D4C4] flex justify-end">
              <button
                type="button"
                onClick={() => setPrivacyOpen(false)}
                className="px-5 py-2 text-xs font-sans font-semibold text-white bg-[#7A5E3B] hover:bg-[#634b2e] rounded-full"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
