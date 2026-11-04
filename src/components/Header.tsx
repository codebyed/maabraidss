import React, { useState } from 'react';

interface HeaderProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'bio', label: 'Início (Bio)' },
    { id: 'home', label: 'Portfólio' },
    { id: 'trabalhos', label: 'Galeria' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'contato', label: 'Contato' },
  ];

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full flex flex-col bg-espresso z-50 border-b border-line/40 sticky top-0 backdrop-blur-md bg-espresso/95">
      <div className="w-full flex flex-row justify-between items-center px-5 sm:px-8 md:px-14 py-4 md:py-6">
        {/* Brand (clicks back to principal Link na Bio) */}
        <button
          onClick={() => handleItemClick('bio')}
          className="flex items-center text-left group focus:outline-none"
          title="Voltar à página principal (Link na Bio)"
        >
          <span className="text-lg sm:text-xl text-creamlight font-display uppercase tracking-wider group-hover:text-honey transition-colors select-none">
            maabraidss
          </span>
        </button>

        {/* Desktop Nav (hidden on mobile) */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`text-[13px] font-sans transition-colors hover:text-honey focus:outline-none ${
                  isActive
                    ? 'text-honey font-bold border-b border-honey pb-0.5'
                    : 'text-creamlight font-medium'
                } ${item.id === 'bio' ? 'text-sand font-semibold' : ''}`}
              >
                {item.label}
              </button>
            );
          })}

          {/* CTA Agendamento */}
          <button
            onClick={() => handleItemClick('agenda')}
            className="inline-flex items-center gap-2 px-4 py-2 bg-terracotta hover:bg-[#c25830] text-creamlight text-[12px] font-bold rounded-[3px] tracking-wider transition-colors shadow-soft"
          >
            AGENDAR
          </button>
        </nav>

        {/* Mobile Menu Button (matching Pencil mobile header: 38x38 button) */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => handleItemClick('agenda')}
            className="px-3 py-1.5 bg-terracotta text-creamlight text-[11px] font-bold rounded-[3px] tracking-wider uppercase"
          >
            Agendar
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-[38px] h-[38px] rounded-[3px] border border-line flex items-center justify-center text-creamlight hover:border-sand focus:outline-none transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? (
              <span className="text-lg font-bold leading-none">✕</span>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Dropdown */}
      {mobileMenuOpen && (
        <div className="w-full bg-[#1c120c] border-b border-line px-5 py-6 flex flex-col gap-3 md:hidden animate-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`w-full py-3 px-4 rounded-[3px] text-left text-sm font-semibold transition-colors flex justify-between items-center ${
                  isActive
                    ? 'bg-espresso text-honey border-l-2 border-honey'
                    : 'text-creamlight hover:bg-espresso/50'
                }`}
              >
                <span>{item.label}</span>
                <span className="text-xs text-mocha">→</span>
              </button>
            );
          })}

          <button
            onClick={() => handleItemClick('agenda')}
            className="w-full mt-2 py-3.5 bg-terracotta text-creamlight text-xs font-bold rounded-[3px] uppercase tracking-wider text-center"
          >
            Agendar Horário Online
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
