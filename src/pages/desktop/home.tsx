import React, { useState } from 'react';

interface HomePageProps {
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

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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

      {/* FAQ Section */}
      <section className="w-full max-w-[1440px] px-4 md:px-14 pb-10 md:pb-14">
        <div className="w-full bg-cream text-espresso rounded-[3px] p-6 sm:p-10 md:p-12 flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <span className="text-[11px] text-terracotta font-sans font-bold tracking-[0.14em] uppercase">
              PERGUNTAS FREQUENTES
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl leading-[0.95] font-display uppercase tracking-tight select-none">
              TIRE SUAS DÚVIDAS
            </h2>
          </div>

          <div className="flex flex-col">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={item.q} className="border-t border-[#D9C7B1]">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="w-full py-5 flex items-start justify-between gap-6 text-left group"
                  >
                    <span className="font-sans font-semibold text-[15px] md:text-base text-espresso group-hover:text-terracotta transition-colors">
                      {item.q}
                    </span>
                    <span
                      className={`text-terracotta text-xl leading-none shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-60 opacity-100 pb-5' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-sm leading-relaxed text-mocha max-w-[720px]">
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
            <div className="border-t border-[#D9C7B1]" />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-sm text-mocha font-medium">
              Não encontrou sua dúvida? Fala comigo no WhatsApp.
            </p>
            <button
              type="button"
              onClick={() => onNavigate('contato')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-terracotta hover:bg-[#c25830] text-creamlight text-[12px] font-bold tracking-wider uppercase rounded-[3px] transition-colors"
            >
              Falar no WhatsApp
              <span aria-hidden="true">→</span>
            </button>
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