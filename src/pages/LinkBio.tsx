import React, { useState } from 'react';

interface LinkBioProps {
  onNavigate: (tab: string) => void;
}

const faqItems = [
  {
    q: 'Como faço para agendar?',
    a: 'O agendamento é feito pela página Agenda ou direto no WhatsApp. Você escolhe o serviço, a data e o horário, e eu confirmo a disponibilidade.',
  },
  {
    q: 'Quanto custa e preciso pagar sinal?',
    a: 'Os valores variam por técnica e comprimento, a partir de R$ 180. Para reservar o horário, peço um sinal de 30%, que é descontado do valor final.',
  },
  {
    q: 'Quanto tempo dura o atendimento?',
    a: 'Depende da técnica: box braids levam de 4 a 6 horas; nagô e torcional, de 2 a 3 horas. Reservo o tempo necessário para fazer tudo com calma.',
  },
  {
    q: 'Como devo chegar para o atendimento?',
    a: 'Venha com o cabelo lavado e seco, sem cremes ou óleos. Se precisar de lavagem no studio, me avise antes para reservar um tempo extra.',
  },
  {
    q: 'Vocês atendem crianças?',
    a: 'Sim! O serviço infantil é feito com paciência e técnicas mais suaves, a partir de R$ 180.',
  },
  {
    q: 'Como cuidar das tranças em casa?',
    a: 'Hidratação leve no couro cabeludo, dormir com touca de cetim e evitar produtos pesados. Passo todas as orientações no fim do atendimento.',
  },
  {
    q: 'Onde fica o studio?',
    a: 'No Maranhão · MA. O endereço completo é enviado na confirmação do agendamento, junto com as instruções de chegada.',
  },
];

export const LinkBio: React.FC<LinkBioProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="w-full min-h-screen bg-espresso flex items-center justify-center p-0 md:p-6 lg:p-10 font-sans selection:bg-terracotta selection:text-creamlight">
      {/* Main Desktop & Responsive Canvas (corresponds to Index — Link na Bio Desktop `cojr9`) */}
      <div className="w-full max-w-[1440px] min-h-[900px] bg-espresso rounded-none md:rounded-[4px] shadow-2xl flex flex-col lg:flex-row overflow-hidden border-0 md:border border-line/60">
        
        {/* ============================================================== */}
        {/* LEFT COLUMN: Profile Panel (bg-espresso, 520px on desktop)     */}
        {/* ============================================================== */}
        <div className="w-full lg:w-[480px] xl:w-[520px] bg-espresso text-creamlight p-6 sm:p-10 lg:p-14 flex flex-col justify-between shrink-0 border-b lg:border-b-0 lg:border-r border-line/50">
          <div className="flex flex-col gap-8 sm:gap-10">
            {/* Brand Header */}
            <div className="flex items-center gap-2.5">
              <span className="text-[15px] font-display uppercase tracking-wider text-creamlight">
                maabraidss
              </span>
            </div>

            {/* Profile Block */}
            <div className="flex flex-col gap-5 sm:gap-6">
              {/* Avatar with Verified Badge */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto lg:mx-0">
                <img
                  src={`${import.meta.env.BASE_URL}images/generated-9.png`}
                  alt="maabraidss"
                  className="w-full h-full object-cover rounded-full shadow-soft"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = `${import.meta.env.BASE_URL}images/generated-1.png`;
                  }}
                />
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-terracotta rounded-full flex items-center justify-center text-creamlight text-sm font-bold shadow-soft">
                  ✓
                </div>
              </div>

              {/* Title & Tagline */}
              <div className="flex flex-col items-center gap-2 text-center lg:items-start lg:text-left">
                <h1 className="text-5xl sm:text-6xl xl:text-[76px] leading-[0.9] font-display uppercase tracking-tight text-creamlight select-none">
                  MAABRAIDSS
                </h1>
                <p className="text-[14px] leading-relaxed text-latte font-medium max-w-[380px] pt-1 mx-auto lg:mx-0">
                  Trancista · box braids, nagô e torcional · Maranhão, MA
                </p>
              </div>

              {/* Status Pill */}
              <div className="w-fit mx-auto lg:mx-0 flex items-center px-2.5 sm:px-3.5 py-2 bg-[#33241B] rounded-[3px] border border-line/40">
                <span className="text-[9px] sm:text-[11px] text-sage-light font-semibold tracking-wider uppercase whitespace-nowrap">
                  Agenda aberta · Vagas limitadas no mês
                </span>
              </div>
            </div>
          </div>

          {/* Bottom of Profile Panel: Socials & URL */}
          <div className="flex flex-col gap-5 pt-8 lg:pt-10">
            {/* Social Icons */}
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href="https://instagram.com/maabraidss"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-[3px] border border-line hover:border-sand flex items-center justify-center text-latte hover:text-creamlight hover:bg-[#2C1C14] transition-all"
                title="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              <a
                href="https://wa.me/5511988881234"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-[3px] border border-line hover:border-sand flex items-center justify-center text-latte hover:text-whatsapp hover:bg-[#2C1C14] transition-all"
                title="WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>

              <button
                onClick={() => onNavigate('sobre')}
                className="px-3.5 h-11 rounded-[3px] border border-line hover:border-sand flex items-center justify-center text-latte hover:text-creamlight hover:bg-[#2C1C14] text-xs font-bold tracking-wider whitespace-nowrap transition-all"
                title="Sobre Núbia"
              >
                SOBRE
              </button>

              <button
                onClick={() => onNavigate('home')}
                className="px-3.5 h-11 rounded-[3px] border border-line hover:border-sand flex items-center justify-center text-latte hover:text-honey text-xs font-semibold tracking-wider whitespace-nowrap transition-all"
                title="Site Completo"
              >
                PORTFÓLIO ↗
              </button>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* RIGHT COLUMN: Links Panel (bg-cream, fill container)           */}
        {/* ============================================================== */}
        <div className="flex-1 bg-cream text-espresso p-6 sm:p-10 lg:p-14 flex flex-col justify-between gap-8">
          <div className="flex flex-col gap-6">
            {/* Highlights Section */}
            <div className="flex flex-col gap-3">
              <div className="w-full flex justify-between items-center">
                <span className="text-[11px] text-mocha font-bold tracking-[0.14em] uppercase">
                  DESTAQUES
                </span>
                <button
                  onClick={() => onNavigate('trabalhos')}
                  className="text-[11px] text-terracotta font-semibold hover:underline"
                >
                  ver todos →
                </button>
              </div>

              {/* Thumbs Row */}
              <div className="grid grid-cols-3 gap-3">
                <div
                  onClick={() => onNavigate('trabalhos')}
                  className="h-28 sm:h-36 rounded-[3px] overflow-hidden bg-sand/20 cursor-pointer group"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}images/generated-2.png`}
                    alt="Destaque Box Braids"
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div
                  onClick={() => onNavigate('trabalhos')}
                  className="h-28 sm:h-36 rounded-[3px] overflow-hidden bg-sand/20 cursor-pointer group"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}images/generated-7.png`}
                    alt="Destaque Torcional"
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div
                  onClick={() => onNavigate('trabalhos')}
                  className="h-28 sm:h-36 rounded-[3px] overflow-hidden bg-sand/20 cursor-pointer group"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}images/generated-4.png`}
                    alt="Destaque Noivas"
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Panel Head */}
            <div className="w-full flex justify-between items-center">
              <span className="text-[11px] text-terracotta font-sans font-bold tracking-[0.14em] uppercase">
                LINKS RÁPIDOS
              </span>
            </div>

            {/* Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-[58px] leading-[0.95] font-display uppercase tracking-tight text-espresso select-none">
              TUDO NUM LUGAR SÓ
            </h2>

            {/* Featured Link 1: Agendar Horário (Big Terracotta Card) */}
            <button
              onClick={() => onNavigate('agenda')}
              className="w-full p-5 sm:p-6 bg-terracotta hover:bg-[#c25830] text-creamlight rounded-[3px] flex items-center justify-between gap-4 transition-all hover:scale-[1.008] shadow-medium group text-left"
            >
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <div className="w-11 h-11 rounded-[3px] bg-white/10 flex items-center justify-center text-xl shrink-0">
                  📅
                </div>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="text-lg sm:text-xl font-bold font-sans tracking-wide whitespace-nowrap">
                    Agendar horário
                  </span>
                  <span className="text-[11px] sm:text-xs text-[#F7D6C0] font-medium truncate">
                    Resposta em até 24h · sinal de 30%
                  </span>
                </div>
              </div>
              <span className="text-xl font-bold transition-transform group-hover:translate-x-1 shrink-0">
                →
              </span>
            </button>

            {/* Grid of Secondary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* Card 1: Serviços & Valores */}
              <button
                onClick={() => onNavigate('servicos')}
                className="p-5 bg-espresso hover:bg-[#2C1C14] text-creamlight rounded-[3px] flex items-center gap-4 transition-all hover:scale-[1.01] text-left group shadow-soft"
              >
                <div className="w-11 h-11 shrink-0 rounded-[3px] bg-white/10 flex items-center justify-center text-lg">
                  ✂️
                </div>
                <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                  <span className="font-display text-lg sm:text-xl uppercase tracking-tight text-creamlight group-hover:text-honey transition-colors whitespace-nowrap">
                    Serviços &amp; Valores
                  </span>
                  <span className="text-[11px] sm:text-xs text-latte font-medium truncate">
                    6 técnicas · a partir de R$ 180
                  </span>
                </div>
                <span className="hidden sm:inline text-xs text-mocha group-hover:text-honey font-bold transition-colors shrink-0 whitespace-nowrap">
                  Ver tabela →
                </span>
              </button>

              {/* Card 2: Trabalhos & Portfólio */}
              <button
                onClick={() => onNavigate('trabalhos')}
                className="p-5 bg-espresso hover:bg-[#2C1C14] text-creamlight rounded-[3px] flex items-center gap-4 transition-all hover:scale-[1.01] text-left group shadow-soft"
              >
                <div className="w-11 h-11 shrink-0 rounded-[3px] bg-white/10 flex items-center justify-center text-lg">
                  ✨
                </div>
                <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                  <span className="font-display text-lg sm:text-xl uppercase tracking-tight text-creamlight group-hover:text-honey transition-colors whitespace-nowrap">
                    Trabalhos &amp; Galeria
                  </span>
                  <span className="text-[11px] sm:text-xs text-latte font-medium truncate">
                    Fotos reais das clientes do studio
                  </span>
                </div>
                <span className="hidden sm:inline text-xs text-mocha group-hover:text-honey font-bold transition-colors shrink-0 whitespace-nowrap">
                  Galeria →
                </span>
              </button>

              {/* Card 3: Como Chegar (Localização) */}
              <a
                href="https://maps.google.com/?q=Maranhão"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-espresso hover:bg-[#2C1C14] text-creamlight rounded-[3px] flex items-center gap-4 transition-all hover:scale-[1.01] text-left group shadow-soft"
              >
                <div className="w-11 h-11 shrink-0 rounded-[3px] bg-white/10 flex items-center justify-center text-lg">
                  📍
                </div>
                <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                  <span className="font-display text-lg sm:text-xl uppercase tracking-tight text-creamlight group-hover:text-honey transition-colors whitespace-nowrap">
                    Como Chegar
                  </span>
                  <span className="text-[11px] sm:text-xs text-latte font-medium truncate">
                    Studio no Maranhão · MA
                  </span>
                </div>
                <span className="hidden sm:inline text-xs text-mocha group-hover:text-sand font-bold transition-colors shrink-0 whitespace-nowrap">
                  Abrir mapa ↗
                </span>
              </a>

              {/* Card 4: WhatsApp Direto */}
              <a
                href="https://wa.me/5511988881234?text=Olá Núbia! Vi seu link na bio e gostaria de conversar sobre tranças."
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-whatsapp hover:bg-[#1EBE5A] text-white rounded-[3px] flex items-center gap-4 transition-all hover:scale-[1.01] text-left group shadow-soft"
              >
                <div className="w-11 h-11 shrink-0 rounded-[3px] bg-white/20 flex items-center justify-center text-lg">
                  💬
                </div>
                <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                  <span className="font-display text-lg sm:text-xl uppercase tracking-tight text-white group-hover:text-white transition-colors whitespace-nowrap">
                    WhatsApp Direto
                  </span>
                  <span className="text-[11px] sm:text-xs text-white/85 font-medium truncate">
                    (11) 98888-1234 · Dúvidas rápidas
                  </span>
                </div>
                <span className="hidden sm:inline text-xs text-white/90 group-hover:text-white font-bold transition-colors shrink-0 whitespace-nowrap">
                  Chamar ↗
                </span>
              </a>
            </div>

            {/* FAQ Section */}
            <div className="flex flex-col gap-3 pt-4 border-t border-[#D9C7B1]">
              <span className="text-[11px] text-mocha font-bold tracking-[0.14em] uppercase">
                PERGUNTAS FREQUENTES
              </span>
              <div className="flex flex-col">
                {faqItems.map((item, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div key={item.q} className="border-b border-[#D9C7B1]">
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        aria-expanded={isOpen}
                        className="w-full py-3.5 flex items-start justify-between gap-4 text-left group"
                      >
                        <span className="font-sans font-semibold text-[13px] sm:text-sm text-espresso group-hover:text-terracotta transition-colors">
                          {item.q}
                        </span>
                        <span
                          className={`text-terracotta text-lg leading-none shrink-0 transition-transform duration-300 ${
                            isOpen ? 'rotate-45' : ''
                          }`}
                          aria-hidden="true"
                        >
                          +
                        </span>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen ? 'max-h-60 opacity-100 pb-4' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className="text-xs sm:text-[13px] leading-relaxed text-mocha">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Panel Footer */}
          <div className="w-full pt-4 border-t border-[#D9C7B1] flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-mocha">
            <span>© {currentYear} maabraidss · Maranhão</span>
            <button
              onClick={() => onNavigate('home')}
              className="font-bold text-espresso hover:text-terracotta tracking-wider uppercase transition-colors"
            >
              Ver site completo →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkBio;