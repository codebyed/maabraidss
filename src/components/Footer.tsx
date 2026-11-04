import React from 'react';

interface FooterProps {
  onNavigate?: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full flex flex-col gap-8 md:gap-14 px-5 sm:px-8 md:px-14 py-10 md:py-20 bg-cream text-espresso mt-auto">
      {/* Top Banner */}
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div className="flex flex-col gap-4">
          <span className="text-[12px] text-terracotta font-sans font-bold tracking-[0.14em] uppercase">
            AGENDAMENTOS ABERTOS
          </span>
          <h2 className="text-4xl md:text-[68px] leading-[1.05] font-display font-normal uppercase tracking-tight text-espresso">
            VAMOS CUIDAR<br />DO SEU CABELO?
          </h2>
        </div>

        <button
          onClick={() => onNavigate?.('agenda')}
          className="flex items-center gap-2.5 px-7 py-4 bg-espresso hover:bg-[#332015] text-creamlight text-[13px] font-bold rounded-[3px] tracking-wider transition-all hover:translate-x-1"
        >
          <span>AGENDAR HORÁRIO</span>
          <span className="text-[15px]">→</span>
        </button>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-[#D9C7B1]"></div>

      {/* Studio Info Columns */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col gap-2.5">
          <span className="text-[11px] text-mocha font-bold tracking-[0.14em] uppercase">
            STUDIO
          </span>
          <p className="text-[14px] leading-[22px] text-espresso font-medium">
            Rua das Palmeiras, 128<br />
            Maranhão · MA
          </p>
        </div>

        <div className="flex flex-col gap-2.5">
          <span className="text-[11px] text-mocha font-bold tracking-[0.14em] uppercase">
            HORÁRIOS
          </span>
          <p className="text-[14px] leading-[22px] text-espresso font-medium">
            Ter–Sex · 9h às 19h<br />
            Sáb · 8h às 16h
          </p>
        </div>

        <div className="flex flex-col gap-2.5">
          <span className="text-[11px] text-mocha font-bold tracking-[0.14em] uppercase">
            CONTATO
          </span>
          <p className="text-[14px] leading-[22px] text-espresso font-medium">
            +55 11 98888-1234<br />
            <a
              href="https://instagram.com/maabrainds"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-terracotta transition-colors"
            >
              @maabrainds
            </a>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-[#D9C7B1]/50 text-[12px] text-mocha">
        <span>© {currentYear} maabraidss · Todos os direitos reservados</span>
        <span>Tranças, cuidado e identidade — Maranhão</span>
      </div>
    </footer>
  );
};
