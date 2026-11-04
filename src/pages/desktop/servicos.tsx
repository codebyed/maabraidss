import React from 'react';

interface ServicosPageProps {
  onNavigate?: (tab: string) => void;
}

interface ServiceItem {
  name: string;
  desc: string;
  time: string;
  price: string;
}

export const ServicosPage: React.FC<ServicosPageProps> = ({ onNavigate }) => {
  const services: ServiceItem[] = [
    {
      name: 'Box Braids',
      desc: 'Tranças soltas clássicas, do ombro ao quadril',
      time: '4–6h',
      price: 'R$ 480',
    },
    {
      name: 'Nagô / Cornrows',
      desc: 'Desenho geométrico rente ao couro cabeludo',
      time: '2–3h',
      price: 'R$ 260',
    },
    {
      name: 'Torcional',
      desc: 'Twists com acabamento natural e movimento',
      time: '3–4h',
      price: 'R$ 340',
    },
    {
      name: 'Crochet Braids',
      desc: 'Instalação com cabelo aplicado e volume imediato',
      time: '2h',
      price: 'R$ 300',
    },
    {
      name: 'Infantil',
      desc: 'Tranças leves para crianças de até 12 anos',
      time: '1h30',
      price: 'R$ 180',
    },
    {
      name: 'Noiva',
      desc: 'Penteado de trança com teste incluso',
      time: '3h',
      price: 'R$ 690',
    },
  ];

  const includes = [
    'Lavagem com produtos sem sulfato',
    'Hidratação e nutrição do fio',
    'Finalização e acabamento',
    'Consulta de formato e referências',
    'Café, chá e boa conversa',
  ];

  return (
    <div className="w-full flex flex-col items-center bg-espresso min-h-screen">
      <div className="w-full max-w-[1440px] px-6 md:px-14 pt-10 md:pt-16 pb-20">
        {/* Page Title */}
        <div className="flex flex-col gap-5">
          <span className="text-[12px] text-honey font-sans font-bold tracking-[0.14em] uppercase">
            SERVIÇOS &amp; VALORES
          </span>
          <h1 className="text-6xl sm:text-8xl md:text-[116px] leading-[0.92] text-creamlight font-display uppercase tracking-tight select-none">
            CUIDADOS
          </h1>
          <p className="text-[14px] leading-[22px] text-latte font-sans font-medium max-w-[560px] pb-4">
            Tranças feitas com tempo, técnica e produtos que respeitam o fio. Todos os serviços
            incluem lavagem, hidratação e finalização no studio.
          </p>
        </div>

        {/* Content Area: Table + Aside */}
        <div className="w-full flex flex-col lg:flex-row gap-12 pt-8">
          {/* Price Table */}
          <div className="flex-1 flex flex-col">
            <div className="w-full h-[1px] bg-line"></div>

            {services.map((service, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6 group hover:bg-[#2c1c14] px-2 rounded-[3px] transition-colors">
                  {/* Name & Desc */}
                  <div className="flex-1 flex flex-col gap-1.5">
                    <h3 className="text-2xl sm:text-[34px] leading-[36px] font-display text-creamlight uppercase tracking-tight group-hover:text-honey transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-[13px] leading-[20px] text-latte font-sans font-medium">
                      {service.desc}
                    </p>
                  </div>

                  {/* Time & Price */}
                  <div className="flex items-center gap-6 self-end sm:self-center">
                    <span className="text-[13px] text-mocha font-sans font-semibold text-right min-w-[60px]">
                      {service.time}
                    </span>
                    <span className="text-[17px] text-honey font-sans font-bold text-right min-w-[90px]">
                      {service.price}
                    </span>
                    <button
                      onClick={() => onNavigate?.('agenda')}
                      className="hidden sm:inline-flex text-[11px] font-bold text-creamlight bg-terracotta/80 hover:bg-terracotta px-3 py-1.5 rounded-[3px] uppercase tracking-wider transition-colors"
                    >
                      Agendar
                    </button>
                  </div>
                </div>
                <div className="w-full h-[1px] bg-line"></div>
              </div>
            ))}
          </div>

          {/* Aside: Sempre Incluso */}
          <aside className="w-full lg:w-[360px] shrink-0 h-fit bg-cream text-espresso p-8 rounded-[3px] flex flex-col gap-6 shadow-medium">
            <span className="text-[11px] text-terracotta font-sans font-bold tracking-[0.14em] uppercase">
              SEMPRE INCLUSO
            </span>

            {/* List */}
            <ul className="flex flex-col gap-3.5">
              {includes.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <svg
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[15px] h-[15px] shrink-0 mt-0.5 text-terracotta"
                  >
                    <path
                      d="M11.5 3.5L5.5 10.5L2.5 7.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[13px] leading-[20px] text-espresso font-sans font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="w-full h-[1px] bg-[#D9C7B1]"></div>

            <p className="text-[12px] leading-[19px] text-mocha font-sans font-medium">
              Sinal de 30% para reservar a data. Reagendamento gratuito até 24h antes.
            </p>

            <button
              onClick={() => onNavigate?.('agenda')}
              className="w-full flex items-center justify-center gap-2.5 px-5 py-4 bg-espresso hover:bg-[#332015] text-creamlight text-[12px] font-bold rounded-[3px] tracking-wider uppercase transition-all"
            >
              <span>RESERVAR DATA</span>
              <span className="text-[14px]">→</span>
            </button>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ServicosPage;
