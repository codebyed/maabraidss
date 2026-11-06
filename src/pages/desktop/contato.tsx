import React from 'react';

const WHATSAPP_URL =
  'https://wa.me/5511988881234?text=Ol%C3%A1%20N%C3%BAbia!%20Vi%20seu%20site%20e%20gostaria%20de%20falar%20com%20voc%C3%AA.';
const INSTAGRAM_URL = 'https://instagram.com/maabraidss';

export const ContatoPage: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center bg-espresso min-h-screen">
      <div className="w-full max-w-[1440px] px-6 md:px-14 pt-10 md:pt-16 pb-20">
        {/* Intro */}
        <div className="flex flex-col gap-5">
          <span className="text-[12px] text-honey font-sans font-bold tracking-[0.14em] uppercase">
            CONTATO
          </span>
          <h1 className="text-6xl sm:text-8xl md:text-[116px] leading-[0.92] text-creamlight font-display uppercase tracking-tight select-none">
            FALE NO<br />WHATSAPP
          </h1>
          <p className="text-[14px] leading-[22px] text-latte font-sans font-medium max-w-[520px] pb-4">
            Dúvidas, referências ou um oi rápido: é só chamar no WhatsApp. Respondo pessoalmente.
          </p>
        </div>

        {/* Content: WhatsApp CTA + Studio Info */}
        <div className="w-full flex flex-col lg:flex-row gap-12 pt-8">
          {/* WhatsApp CTA */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col justify-center gap-8 bg-[#2C1C14] border border-line hover:border-whatsapp p-8 md:p-12 rounded-[3px] transition-colors group"
          >
            <div className="w-16 h-16 rounded-[3px] bg-whatsapp/15 flex items-center justify-center text-whatsapp">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-3xl sm:text-4xl leading-[0.95] text-creamlight font-display uppercase tracking-tight">
                Chamar no WhatsApp
              </span>
              <span className="text-sm text-latte font-medium">
                (11) 98888-1234 · conversa direta com a Núbia
              </span>
            </div>

            <span className="inline-flex items-center gap-2 text-[12px] text-whatsapp font-bold tracking-wider uppercase group-hover:gap-3 transition-all">
              Abrir conversa
              <span aria-hidden="true">→</span>
            </span>
          </a>

          {/* Studio Info Sidebar */}
          <div className="w-full lg:w-[380px] shrink-0 flex flex-col gap-6">
            <div className="bg-cream text-espresso p-8 rounded-[3px] flex flex-col gap-6 shadow-medium">
              <span className="text-[11px] text-terracotta font-sans font-bold tracking-[0.14em] uppercase">
                STUDIO MAABRAIDSS
              </span>

              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-bold text-mocha uppercase tracking-wider">Localização</span>
                <p className="text-sm font-medium text-espresso leading-relaxed">
                  Rua das Palmeiras, 128<br />
                  Maranhão · MA
                </p>
              </div>

              <div className="w-full h-[1px] bg-[#D9C7B1]"></div>

              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-bold text-mocha uppercase tracking-wider">Horários</span>
                <p className="text-sm font-medium text-espresso leading-relaxed">
                  Terça a Sexta: 9h às 19h<br />
                  Sábado: 8h às 16h
                </p>
              </div>

              <div className="w-full h-[1px] bg-[#D9C7B1]"></div>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold text-mocha uppercase tracking-wider">Canais Diretos</span>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-espresso hover:text-terracotta transition-colors"
                >
                  WhatsApp: (11) 98888-1234
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-espresso hover:text-terracotta transition-colors"
                >
                  Instagram: @maabraidss
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContatoPage;
