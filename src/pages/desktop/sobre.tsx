import React from 'react';

interface SobrePageProps {
  onNavigate?: (tab: string) => void;
}

export const SobrePage: React.FC<SobrePageProps> = ({ onNavigate }) => {
  const steps = [
    {
      num: '01',
      title: 'Escuta',
      desc: 'Conversamos sobre rotina, formato do rosto e referências antes de qualquer traço.',
    },
    {
      num: '02',
      title: 'Desenho',
      desc: 'Defino o mapa das tranças, tensão e espessura ideais para o seu fio.',
    },
    {
      num: '03',
      title: 'Trança',
      desc: 'Execução em ambiente tranquilo, com pausas para café e alongamento.',
    },
  ];

  return (
    <div className="w-full flex flex-col items-center bg-espresso min-h-screen">
      <div className="w-full max-w-[1440px] px-6 md:px-14 pt-10 md:pt-16 pb-20">
        {/* Intro Split */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16 pb-16">
          {/* Text Column */}
          <div className="flex-1 max-w-[560px] flex flex-col gap-6">
            <span className="text-[12px] text-honey font-sans font-bold tracking-[0.14em] uppercase">
              SOBRE A TRANCISTA
            </span>
            <h1 className="text-5xl sm:text-7xl md:text-[92px] leading-[0.92] text-creamlight font-display uppercase tracking-tight select-none">
              TRANÇAR<br />É CUIDADO
            </h1>
            <p className="text-[14px] leading-[24px] text-latte font-sans font-medium">
              Meu nome é Núbia e há dez anos eu tranço cabelos crespos no mesmo studio no Maranhão.
              Comecei trançando as amigas na cozinha de casa e hoje recebo pessoas de todo o Brasil
              que vêm buscar um penteado que dure, proteja o fio e conte um pouco de quem são.
            </p>
            <p className="text-[14px] leading-[24px] text-latte font-sans font-medium">
              Meu trabalho une leitura de formato do rosto, tensão correta na raiz e um cuidado
              quase de joalheria com cada parte. Nada de pressa: cada agenda recebe no máximo duas
              pessoas por dia, para que o tempo de cada trança seja respeitado.
            </p>

            {/* Signature */}
            <div className="flex items-center gap-3.5 pt-3">

              <span className="text-[12px] text-creamlight font-sans font-semibold tracking-wider">
                maabraidss · Trancista desde 2015
              </span>
            </div>
          </div>

          {/* About Photo */}
          <div className="w-full lg:w-[470px] h-[480px] sm:h-[600px] shrink-0 rounded-[3px] overflow-hidden bg-sand/10 shadow-medium relative">
            <img
              src={`${import.meta.env.BASE_URL}images/generated-8.png`}
              alt="Núbia no Studio"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute bottom-4 right-4 bg-espresso/80 text-creamlight px-3 py-1 rounded-[3px] text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm">
              Studio Maranhão · MA
            </div>
          </div>
        </div>

        {/* Process Section (Como Funciona) */}
        <section className="w-full bg-cream text-espresso rounded-[3px] p-8 md:p-14 flex flex-col gap-10 shadow-medium">
          <span className="text-[12px] text-terracotta font-sans font-bold tracking-[0.14em] uppercase">
            COMO FUNCIONA
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col gap-3">
                <span className="text-[44px] leading-none font-display text-terracotta">
                  {step.num}
                </span>
                <h3 className="text-[30px] leading-none font-display uppercase tracking-tight text-espresso">
                  {step.title}
                </h3>
                <p className="text-[13px] leading-[21px] text-mocha font-sans font-medium">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-[#D9C7B1] flex justify-between items-center">
            <span className="text-xs text-mocha font-medium">
              Pronta para viver essa experiência?
            </span>
            <button
              onClick={() => onNavigate?.('agenda')}
              className="px-6 py-3 bg-espresso hover:bg-[#332015] text-creamlight text-[12px] font-bold rounded-[3px] tracking-wider uppercase transition-colors"
            >
              Agendar agora →
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SobrePage;