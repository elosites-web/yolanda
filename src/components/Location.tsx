import React, { useState } from 'react';
import { SALON_INFO, getWhatsAppUrl } from '../data/salonData';
import { MapPin, Navigation, Copy, Check, ExternalLink, Clock, Phone, AlertCircle, Compass } from 'lucide-react';

export const Location: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [showLiveEmbed, setShowLiveEmbed] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(SALON_INFO.address.full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="localizacao" className="py-24 lg:py-32 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-[#9E7D53] font-semibold mb-3">
            <span>Localização</span>
            <span aria-hidden="true">·</span>
            <span>Vila Hortolândia</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl text-[#2A2421] font-normal tracking-tight text-balance">
            Fácil acesso em Jundiaí, em um ponto tranquilo e acolhedor.
          </h2>

          <p className="mt-4 font-sans text-base sm:text-lg text-[#5E534D] font-light leading-relaxed">
            Estamos situados na Vila Hortolândia, com localização pensada para proporcionar
            conveniência e tranquilidade na sua chegada.
          </p>
        </div>

        {/* Layout Split: Cartão de Informações e Mapa Interativo */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card de Detalhes do Endereço */}
          <div className="lg:col-span-5 bg-white p-8 rounded-2xl border border-[#E3D4C4] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#F8F5EE] border border-[#E3D4C4] text-[#7A5E3B] flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-sans uppercase tracking-wider text-[#9E7D53] font-semibold">
                    Endereço Oficial
                  </span>
                  <h3 className="font-editorial text-2xl text-[#2A2421] font-semibold">
                    Vila Hortolândia
                  </h3>
                </div>
              </div>

              {/* Endereço Completo */}
              <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#E3D4C4]/70">
                <p className="font-sans text-base sm:text-lg text-[#2A2421] font-semibold leading-relaxed">
                  {SALON_INFO.address.street}
                </p>
                <p className="font-sans text-sm text-[#5E534D] mt-0.5">
                  {SALON_INFO.address.neighborhood} · {SALON_INFO.address.city} - {SALON_INFO.address.state}
                </p>
                <p className="font-sans text-xs text-[#9E7D53] mt-2 font-mono font-medium">
                  CEP: {SALON_INFO.address.cep}
                </p>
              </div>

              {/* Botões de Ação para o Endereço */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={SALON_INFO.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-5 py-3 text-xs uppercase tracking-wider font-sans font-semibold text-white bg-[#7A5E3B] hover:bg-[#634b2e] rounded-full shadow-xs transition-colors flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Como Chegar</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="px-4 py-3 text-xs font-sans font-medium text-[#7A5E3B] hover:text-[#2A2421] border border-[#C5A880] hover:border-[#7A5E3B] bg-[#F8F5EE] rounded-full transition-colors flex items-center justify-center gap-2"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-700" />
                      <span className="text-emerald-700 font-medium">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copiar Endereço</span>
                    </>
                  )}
                </button>
              </div>

              {/* Quadro Informativo Oficial de Atendimento */}
              <div className="mt-8 p-4 rounded-xl bg-[#F8F5EE]/80 border border-[#DBC8B5] text-xs font-sans space-y-2">
                <div className="flex items-center gap-1.5 text-[#7A5E3B] font-semibold">
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>Contato & Agendamentos</span>
                </div>
                <p className="text-[#5E534D] leading-relaxed">
                  Entre em contato diretamente para consultar horários e agendar seu atendimento:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-[11px] text-[#7A5E3B]">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:underline"
                  >
                    <Phone className="w-3 h-3 text-[#9E7D53]" />
                    <span>WhatsApp: {SALON_INFO.whatsapp.formatted}</span>
                  </a>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-[#9E7D53]" />
                    <span>Horários com agendamento prévio</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F0E6DC] text-[11px] font-sans text-[#A89582] flex items-center justify-between">
              <span>Jundiaí · São Paulo</span>
              <button
                type="button"
                onClick={() => setShowLiveEmbed(!showLiveEmbed)}
                className="hover:text-[#7A5E3B] underline underline-offset-2 transition-colors"
              >
                {showLiveEmbed ? 'Ver mapa ilustrativo' : 'Carregar iframe Google Maps'}
              </button>
            </div>
          </div>

          {/* Visual do Mapa — Estilizado e Delicado com Ponto Exato */}
          <div className="lg:col-span-7 bg-[#F4EFEA] rounded-2xl overflow-hidden border border-[#E3D4C4] shadow-xs relative min-h-[380px] lg:min-h-full flex items-center justify-center">
            {showLiveEmbed ? (
              <iframe
                title="Localização do Salão Yolanda Lima no Google Maps"
                src={SALON_INFO.address.embedMapUrl}
                className="w-full h-full min-h-[380px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="relative w-full h-full min-h-[380px] p-6 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#FAF8F5] via-[#F3EDE2] to-[#EFE6DD]">
                {/* Linhas cartográficas estilizadas do mapa */}
                <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
                  <path d="M-50 150 Q 200 120 400 180 T 900 140" stroke="#C5A880" strokeWidth="6" fill="none" />
                  <path d="M-50 300 Q 300 280 600 320 T 1100 290" stroke="#C5A880" strokeWidth="8" fill="none" />
                  <path d="M250 -50 L 300 600" stroke="#DBC8B5" strokeWidth="4" fill="none" />
                  <path d="M550 -50 L 520 600" stroke="#DBC8B5" strokeWidth="5" fill="none" />
                  <path d="M120 160 L 600 240" stroke="#FAF8F5" strokeWidth="10" fill="none" />
                  <circle cx="450" cy="220" r="140" fill="#EAE0D5" opacity="0.4" />
                </svg>

                {/* Top Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E3D4C4] text-xs font-sans text-[#2A2421] shadow-xs flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#7A5E3B]" />
                    <span className="font-medium">Vila Hortolândia · Jundiaí</span>
                  </div>

                  <span className="text-[11px] font-sans text-[#9E7D53] font-medium flex items-center gap-1 bg-white/80 px-2.5 py-1 rounded-full">
                    <Compass className="w-3.5 h-3.5" /> SP-330 / Fácil Acesso
                  </span>
                </div>

                {/* Pin Central do Salão */}
                <div className="relative z-10 my-auto flex flex-col items-center text-center">
                  <div className="relative group">
                    <div className="w-16 h-16 rounded-full bg-[#7A5E3B] text-white flex items-center justify-center shadow-xl ring-8 ring-[#C5A880]/30 transition-transform hover:scale-110">
                      <MapPin className="w-8 h-8" />
                    </div>
                    {/* Efeito radar sutil */}
                    <div className="absolute inset-0 rounded-full border border-[#7A5E3B] animate-ping opacity-30 -z-10" />
                  </div>

                  <div className="mt-4 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl border border-[#C5A880] shadow-md max-w-xs">
                    <p className="font-editorial text-lg text-[#2A2421] font-semibold leading-tight">
                      {SALON_INFO.name}
                    </p>
                    <p className="text-xs font-sans text-[#5E534D] mt-0.5">
                      {SALON_INFO.address.street}
                    </p>
                  </div>
                </div>

                {/* Bottom CTA bar */}
                <div className="relative z-10 flex items-center justify-between pt-4">
                  <a
                    href={SALON_INFO.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-sans font-medium text-[#7A5E3B] hover:text-[#2A2421] bg-white/90 px-4 py-2 rounded-full border border-[#E3D4C4] flex items-center gap-1.5 shadow-xs transition-colors"
                  >
                    <span>Abrir no Google Maps oficial</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    type="button"
                    onClick={() => setShowLiveEmbed(true)}
                    className="text-xs font-sans text-[#5E534D] hover:text-[#2A2421] bg-white/80 px-3 py-1.5 rounded-full border border-[#E3D4C4]"
                  >
                    Ver mapa satélite
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
