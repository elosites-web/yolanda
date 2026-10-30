import React, { useState } from 'react';
import { SALON_INFO } from '../data/salonData';
import { X, Send, CheckCircle2, AlertCircle, ExternalLink, ShieldCheck } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [testNumber, setTestNumber] = useState('');

  const configuredPhone = SALON_INFO.whatsapp?.phoneNumber?.trim() || '';
  const message = SALON_INFO.whatsapp?.defaultMessage || '';

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (configuredPhone) {
      // Abre diretamente o WhatsApp oficial com a mensagem codificada
      const cleanPhone = configuredPhone.replace(/\D/g, '');
      const encodedMsg = encodeURIComponent(message);
      const url = `https://wa.me/${cleanPhone}?text=${encodedMsg}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      // Abre modal demonstrativo elegante informando a preparação do botão
      setModalOpen(true);
    }
  };

  const handleTestRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanTest = testNumber.replace(/\D/g, '');
    if (!cleanTest) return;
    const encodedMsg = encodeURIComponent(message);
    const url = `https://wa.me/${cleanTest}?text=${encodedMsg}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Botão Flutuante Fixo no Canto Inferior Direito */}
      <aside aria-label="Contato direto via WhatsApp" className="fixed bottom-6 right-6 z-50">
        <a
          href={
            configuredPhone
              ? `https://wa.me/${configuredPhone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
              : '#whatsapp-config'
          }
          onClick={handleClick}
          target={configuredPhone ? '_blank' : undefined}
          rel={configuredPhone ? 'noopener noreferrer' : undefined}
          className="group relative flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 sm:px-5 py-3.5 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-hidden focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer"
          title="Agendar via WhatsApp — Salão da Yolanda"
          aria-haspopup={!configuredPhone}
        >
          {/* Efeito de Radar / Pulso Suave */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 group-hover:opacity-50 animate-ping -z-10" />

          {/* Ícone Oficial Vetorial do WhatsApp */}
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 fill-current shrink-0"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>

          {/* Texto do Botão */}
          <span className="font-sans font-semibold text-xs sm:text-sm tracking-wide whitespace-nowrap">
            Agendar via WhatsApp
          </span>
        </a>
      </aside>

      {/* Modal Demonstrativo quando o número oficial ainda aguarda confirmação da cliente */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in"
        >
          <div className="bg-[#FAF8F5] rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#C5A880]/50 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 p-2 text-[#5E534D] hover:text-[#2A2421] rounded-full hover:bg-[#F3EDE2] transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Cabeçalho do Modal */}
            <div className="flex items-center gap-2.5 text-[#25D366] mb-3">
              <div className="w-9 h-9 rounded-full bg-[#25D366]/15 flex items-center justify-center">
                <Send className="w-5 h-5 text-[#25D366]" />
              </div>
              <div>
                <span className="text-[10px] font-sans uppercase tracking-widest text-[#7A5E3B] font-bold block">
                  Integração Oficial wa.me
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#2A2421] font-semibold leading-tight">
                  Agendar via WhatsApp
                </h3>
              </div>
            </div>

            {/* Status transparente */}
            <div className="mt-4 p-4 rounded-2xl bg-white border border-[#E3D4C4]">
              <div className="flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-[#9E7D53] shrink-0 mt-0.5" />
                <div className="text-xs font-sans text-[#5E534D] leading-relaxed">
                  <p className="text-[#2A2421] font-medium mb-1">
                    Configuração pronta para ativação
                  </p>
                  <p>
                    O botão já está totalmente programado no padrão oficial <strong>wa.me</strong>.
                    Assim que a cliente Yolanda confirmar o número oficial de WhatsApp do salão,
                    o clique direcionará instantaneamente os visitantes para a conversa com a mensagem pré-formatada.
                  </p>
                </div>
              </div>
            </div>

            {/* Mensagem Pré-formatada */}
            <div className="mt-4">
              <span className="text-xs font-sans uppercase tracking-wider text-[#9E7D53] font-semibold block mb-1.5">
                Mensagem configurada para o cliente:
              </span>
              <div className="p-3.5 rounded-xl bg-[#EFE6DD]/60 border border-[#DBC8B5] font-sans text-xs text-[#2A2421] italic leading-relaxed">
                &ldquo;{message}&rdquo;
              </div>
            </div>

            {/* Formulário de Teste / Demonstração */}
            <form onSubmit={handleTestRedirect} className="mt-5 pt-4 border-t border-[#E3D4C4]">
              <label htmlFor="test-phone" className="block text-xs font-sans text-[#5E534D] mb-1.5">
                Deseja testar agora o envio com um número de WhatsApp? (opcional):
              </label>
              <div className="flex items-center gap-2">
                <input
                  id="test-phone"
                  type="tel"
                  placeholder="Ex: 11999999999"
                  value={testNumber}
                  onChange={(e) => setTestNumber(e.target.value)}
                  className="flex-1 px-3.5 py-2 text-xs font-sans rounded-xl border border-[#DBC8B5] bg-white focus:outline-hidden focus:ring-2 focus:ring-[#25D366]"
                />
                <button
                  type="submit"
                  disabled={!testNumber.trim()}
                  className="px-4 py-2 text-xs font-sans font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-colors flex items-center gap-1.5 shrink-0"
                >
                  <span>Testar wa.me</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
              <span className="text-[10px] text-[#A89582] mt-1 block">
                O número oficial definitivo pode ser inserido diretamente em <code>/src/data/salonData.ts</code>.
              </span>
            </form>

            {/* Rodapé do Modal */}
            <div className="mt-6 pt-4 border-t border-[#E3D4C4] flex items-center justify-between">
              <span className="text-[11px] font-sans text-[#7A5E3B] flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#9E7D53]" />
                Zero dados coletados
              </span>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="px-5 py-2 text-xs font-sans font-semibold text-[#7A5E3B] hover:text-[#2A2421] bg-white border border-[#DBC8B5] hover:border-[#9E7D53] rounded-full transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
