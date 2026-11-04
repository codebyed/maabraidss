import React, { useState } from 'react';

interface TrabalhosPageProps {
  onNavigate?: (tab: string) => void;
}

interface ProjectCard {
  id: string;
  name: string;
  category: string;
  meta: string;
  image: string;
  filter: string;
}

export const TrabalhosPage: React.FC<TrabalhosPageProps> = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState<ProjectCard | null>(null);

  const filters = ['Todos', 'Box Braids', 'Nagô', 'Torcional', 'Noivas'];

  const projects: ProjectCard[] = [
    {
      id: 'aurora',
      name: 'Aurora',
      category: 'Box Braids',
      meta: 'BOX BRAIDS · 2025',
      image: '/images/generated-2.png',
      filter: 'Box Braids',
    },
    {
      id: 'raizes',
      name: 'Raízes',
      category: 'Nagô',
      meta: 'NAGÔ · 2024',
      image: '/images/generated-5.png',
      filter: 'Nagô',
    },
    {
      id: 'mare',
      name: 'Maré',
      category: 'Torcional',
      meta: 'TORCIONAL · 2025',
      image: '/images/generated-7.png',
      filter: 'Torcional',
    },
    {
      id: 'semente',
      name: 'Semente',
      category: 'Infantil',
      meta: 'INFANTIL · 2024',
      image: '/images/generated-6.png',
      filter: 'Infantil',
    },
    {
      id: 'terra',
      name: 'Terra',
      category: 'Noivas',
      meta: 'NOIVA · 2025',
      image: '/images/generated-4.png',
      filter: 'Noivas',
    },
    {
      id: 'dueto',
      name: 'Dueto',
      category: 'Box Braids',
      meta: 'CROCHET · 2024',
      image: '/images/generated-3.png',
      filter: 'Box Braids',
    },
  ];

  const filteredProjects =
    activeFilter === 'Todos'
      ? projects
      : projects.filter((p) => p.filter === activeFilter);

  return (
    <div className="w-full flex flex-col items-center bg-espresso min-h-screen">
      <div className="w-full max-w-[1440px] px-6 md:px-14 pt-10 md:pt-16 pb-20">
        {/* Page Title & Eyebrow */}
        <div className="flex flex-col gap-5">
          <span className="text-[12px] text-honey font-sans font-bold tracking-[0.14em] uppercase">
            TRABALHOS SELECIONADOS
          </span>
          <h1 className="text-6xl sm:text-8xl md:text-[116px] leading-[0.92] text-creamlight font-display uppercase tracking-tight select-none">
            GALERIA
          </h1>

          {/* Lead & Filters */}
          <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 pt-2 pb-6 border-b border-line/50">
            <p className="text-[14px] leading-[22px] text-latte font-sans font-medium max-w-[420px]">
              Uma seleção de penteados criados no studio entre 2023 e 2025. Cada trança carrega uma
              história, um tempo de cuidado e um desenho único.
            </p>

            {/* Chips */}
            <div className="flex flex-row items-center gap-2 overflow-x-auto max-w-full pb-1.5 shrink-0 no-scrollbar">
              {filters.map((filter) => {
                const isActive = activeFilter === filter;
                return (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-2 rounded-[3px] text-[12px] font-sans font-semibold shrink-0 transition-all ${
                      isActive
                        ? 'bg-cream text-espresso shadow-soft scale-105'
                        : 'text-latte border border-line hover:border-sand hover:text-creamlight'
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 md:pt-12">
          {filteredProjects.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedProject(item)}
              className="group flex flex-col gap-3.5 cursor-pointer select-none"
            >
              {/* Photo Card */}
              <div className="relative w-full h-[380px] sm:h-[470px] overflow-hidden rounded-[3px] bg-sand/10">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-espresso/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3 py-1.5 bg-espresso/80 text-creamlight text-[11px] font-bold tracking-widest uppercase rounded-[3px]">
                    Ver detalhes ↗
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="w-full flex flex-row justify-between items-end px-0.5">
                <span className="text-[30px] font-display uppercase tracking-tight text-creamlight group-hover:text-honey transition-colors">
                  {item.name}
                </span>
                <span className="text-[11px] font-sans font-bold tracking-[0.1em] text-mocha uppercase">
                  {item.meta}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-espresso border border-line rounded-[3px] max-w-2xl w-full p-6 flex flex-col gap-4 relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center pb-2 border-b border-line">
              <div>
                <h3 className="text-3xl font-display uppercase text-creamlight">{selectedProject.name}</h3>
                <span className="text-xs text-honey font-bold uppercase">{selectedProject.meta}</span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-creamlight hover:text-honey text-2xl font-bold p-1"
              >
                ✕
              </button>
            </div>
            <div className="w-full h-[460px] rounded-[3px] overflow-hidden bg-sand/20">
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrabalhosPage;
