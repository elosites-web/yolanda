import React from 'react';
import { X, CheckCircle2, Sparkles, ArrowRight, Shield, Layers, Smartphone, MapPin } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface ProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProposalModal: React.FC<ProposalModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="bg-[#FAF8F5] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#C5A880]/50 shadow-2xl relative flex flex-col">
        {/* Topo do Modal */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#E3D4C4] bg-white/95 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#9E7D53]" />
            <span className="text-xs font-sans tracking-widest uppercase text-[#7A5E3B] font-semibold">
              ēloSites · Estúdio Web
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-[#5E534D] hover:text-[#2A2421] rounded-full hover:bg-[#F3EDE2] transition-colors"
            aria-label="Fechar proposta comercial"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Corpo do Conteúdo */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <span className="text-xs font-sans uppercase tracking-widest text-[#9E7D53] font-semibold">
              Apresentação Comercial Exclusiva
            </span>
            <h3 className="font-editorial text-3xl sm:text-4xl text-[#2A2421] font-semibold mt-1">
              Proposta Visual para o Salão da Yolanda
            </h3>
            <p className="mt-3 font-sans text-sm text-[#5E534D] leading-relaxed">
              Olá, Yolanda! Este site foi desenvolvido como um protótipo exclusivo para
              apresentar como a sua marca pode se destacar na internet com sofisticação,
              elegância e credibilidade.
            </p>
          </div>

          {/* Destaques do Protótipo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white border border-[#E3D4C4]">
              <div className="flex items-center gap-2 text-[#7A5E3B] font-medium text-xs mb-1.5">
                <Sparkles className="w-4 h-4 text-[#9E7D53]" />
                <span>Identidade Visual SY</span>
              </div>
              <p className="text-xs font-sans text-[#5E534D] leading-relaxed">
                Monograma exclusivo vetorial em tons champagne, nude e ouro suave.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E3D4C4]">
              <div className="flex items-center gap-2 text-[#7A5E3B] font-medium text-xs mb-1.5">
                <Smartphone className="w-4 h-4 text-[#9E7D53]" />
                <span>100% Mobile & Veloz</span>
              </div>
              <p className="text-xs font-sans text-[#5E534D] leading-relaxed">
                Navegação perfeita em smartphones, tablets e computadores.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E3D4C4]">
              <div className="flex items-center gap-2 text-[#7A5E3B] font-medium text-xs mb-1.5">
                <MapPin className="w-4 h-4 text-[#9E7D53]" />
                <span>Google Maps Integrado</span>
              </div>
              <p className="text-xs font-sans text-[#5E534D] leading-relaxed">
                Endereço na Vila Hortolândia com botão direto para traçar rota.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E3D4C4]">
              <div className="flex items-center gap-2 text-[#7A5E3B] font-medium text-xs mb-1.5">
                <Shield className="w-4 h-4 text-[#9E7D53]" />
                <span>Pronto para SEO Local</span>
              </div>
              <p className="text-xs font-sans text-[#5E534D] leading-relaxed">
                Estrutura otimizada para aparecer quando pesquisarem salões em Jundiaí.
              </p>
            </div>
          </div>

          {/* O que personalizaremos juntos */}
          <div className="p-5 rounded-2xl bg-[#F3EDE2]/80 border border-[#DBC8B5]">
            <h4 className="font-editorial text-xl text-[#2A2421] font-semibold mb-3">
              Próximos passos para a publicação definitiva:
            </h4>
            <ul className="space-y-2.5 text-xs font-sans text-[#5E534D]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7A5E3B] shrink-0 mt-0.5" />
                <span>
                  <strong>WhatsApp oficial:</strong> Botões direcionando direto para o seu número
                  com mensagens de agendamento pré-formatadas.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7A5E3B] shrink-0 mt-0.5" />
                <span>
                  <strong>Catálogo oficial de serviços:</strong> Inclusão dos seus serviços reais,
                  pacotes especiais e valores conforme sua escolha.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7A5E3B] shrink-0 mt-0.5" />
                <span>
                  <strong>Fotos autorais:</strong> Substituição das fotos ilustrativas por fotos do
                  seu espaço físico e do trabalho da sua equipe.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7A5E3B] shrink-0 mt-0.5" />
                <span>
                  <strong>Horários de atendimento:</strong> Configuração dos dias e horários reais
                  de funcionamento.
                </span>
              </li>
            </ul>
          </div>

          {/* Assinatura ēloSites */}
          <div className="pt-2 text-center">
            <p className="text-xs font-sans text-[#7A5E3B]">
              Desenvolvido com carinho por Everton da <strong className="font-semibold">ēloSites</strong>
            </p>
          </div>
        </div>

        {/* Rodapé do Modal */}
        <div className="sticky bottom-0 z-10 px-6 sm:px-8 py-4 border-t border-[#E3D4C4] bg-white flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs font-sans text-[#A89582] text-center sm:text-left">
            Protótipo comercial sob avaliação
          </span>

          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 text-xs font-sans font-semibold text-white bg-[#7A5E3B] hover:bg-[#634b2e] rounded-full transition-colors"
          >
            Continuar navegando no site
          </button>
        </div>
      </div>
    </div>
  );
};
