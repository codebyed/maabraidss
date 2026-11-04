import React from 'react';

interface HomePageProps {
  onNavigate: (tab: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full flex flex-col items-center bg-espresso">
      {/* Hero Section */}
      <section className="w-full max-w-[1440px] px-5 sm:px-8 md:px-14 pt-8 md:pt-14 pb-10 flex flex-col items-center">
        {/* Eyebrow (matching mobile & desktop) */}
        <span className="text-[10px] md:text-[12px] text-honey font-sans font-bold tracking-[0.14em] uppercase pb-2 self-start md:self-center">
          TRANCISTA · MARANHÃO
        </span>

        {/* Giant Headline */}
        <h1 className="w-full text-left md:text-center font-display text-[68px] sm:text-[110px] md:text-[150px] lg:text-[192px] leading-[0.9] text-creamlight uppercase tracking-tight select-none">
          BRAIDS &amp;<br className="md:hidden" /> TRANÇAS
        </h1>

        {/* Intro Row */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pt-6 md:pt-10 pb-8 md:pb-11 border-b border-line/40">
          <p className="text-[13px] md:text-[14px] leading-[22px] text-latte font-sans font-medium max-w-[360px]">
            Sou trancista e especialista em cabelos crespos, atendendo no meu studio há mais de 10
            anos com tranças que respeitam o fio e a história de cada cliente.
          </p>

          <p className="text-[13px] md:text-[14px] leading-[22px] text-latte font-sans font-medium max-w-[390px]">
            Unindo técnica, cuidado com a raiz e um olhar de marca, crio penteados que valorizam a
            identidade de quem senta na minha cadeira.
          </p>

          <button
            onClick={() => onNavigate('agenda')}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 md:py-2 bg-terracotta md:bg-transparent text-creamlight hover:text-honey font-sans font-bold text-[13px] tracking-[0.04em] uppercase rounded-[3px] transition-colors"
          >
            <span>AGENDAR HORÁRIO</span>
            <span className="text-[14px]">→</span>
          </button>
        </div>
      </section>

      {/* Poster Section with Grid & Portrait (matching mobile height 430px and desktop 700px) */}
      <section className="w-full max-w-[1440px] px-4 md:px-14 pb-8 md:pb-14">
        <div className="relative w-full h-[430px] sm:h-[540px] md:h-[700px] bg-cream rounded-[3px] overflow-hidden flex items-center justify-center">
          {/* Decorative Grid Lines */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <div className="w-full h-full grid grid-cols-6 sm:grid-cols-12 divide-x divide-sand">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={`v-${i}`} className="h-full" />
              ))}
            </div>
            <div className="absolute inset-0 grid grid-rows-6 divide-y divide-sand">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={`h-${i}`} className="w-full" />
              ))}
            </div>
          </div>

          {/* Model Portrait */}
          <div className="relative z-10 w-full max-w-[566px] h-full flex items-center justify-center">
            <img
              src={`${import.meta.env.BASE_URL}images/generated-1.webp`}
              alt="maabraidss Portfolio Portrait"
              className="w-full h-full object-contain object-bottom drop-shadow-md"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = `${import.meta.env.BASE_URL}images/generated-1.png`;
              }}
            />
          </div>
        </div>
      </section>

      {/* Mobile Quick Links (matching Pencil frame a6qWrr in Mobile — Home) */}
      <section className="w-full max-w-[1440px] flex flex-col md:hidden px-5 pb-10">
        <div className="w-full h-[1px] bg-line"></div>
        <button
          onClick={() => onNavigate('trabalhos')}
          className="w-full py-4 flex justify-between items-center text-creamlight hover:text-honey text-sm font-semibold transition-colors"
        >
          <span>Trabalhos &amp; Galeria</span>
          <span className="text-mocha">→</span>
        </button>
        <div className="w-full h-[1px] bg-line"></div>
        <button
          onClick={() => onNavigate('servicos')}
          className="w-full py-4 flex justify-between items-center text-creamlight hover:text-honey text-sm font-semibold transition-colors"
        >
          <span>Serviços &amp; Cuidados</span>
          <span className="text-mocha">→</span>
        </button>
        <div className="w-full h-[1px] bg-line"></div>
        <button
          onClick={() => onNavigate('sobre')}
          className="w-full py-4 flex justify-between items-center text-creamlight hover:text-honey text-sm font-semibold transition-colors"
        >
          <span>Sobre a Trancista</span>
          <span className="text-mocha">→</span>
        </button>
        <div className="w-full h-[1px] bg-line"></div>
        <button
          onClick={() => onNavigate('contato')}
          className="w-full py-4 flex justify-between items-center text-creamlight hover:text-honey text-sm font-semibold transition-colors"
        >
          <span>Contato &amp; Studio</span>
          <span className="text-mocha">→</span>
        </button>
        <div className="w-full h-[1px] bg-line"></div>
      </section>
    </div>
  );
};

export default HomePage;