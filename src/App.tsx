import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LinkBio } from './pages/LinkBio';
import { HomePage } from './pages/desktop/home';
import { TrabalhosPage } from './pages/desktop/trabalhos';
import { ServicosPage } from './pages/desktop/servicos';
import { SobrePage } from './pages/desktop/sobre';
import { ContatoPage } from './pages/desktop/contato';
import { AgendaPage } from './pages/desktop/agenda';

export function App() {
  // A página de Link na Bio é a página principal / inicial por padrão
  const [currentTab, setCurrentTab] = useState<string>('bio');

  // Rola até o topo suavemente ao trocar de página
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentTab]);

  const handleNavigate = (tab: string) => {
    setCurrentTab(tab);
  };

  return (
    <div className="min-h-screen bg-espresso text-creamlight flex flex-col font-sans selection:bg-terracotta selection:text-creamlight">
      {/* Quando na página principal (Link na Bio) */}
      {currentTab === 'bio' ? (
        <main className="flex-1 w-full flex items-center justify-center">
          <LinkBio onNavigate={handleNavigate} />
        </main>
      ) : (
        <>
          {/* Header de navegação para as páginas secundárias */}
          <Header currentTab={currentTab} onNavigate={handleNavigate} />

          {/* Roteamento das páginas internas */}
          <main className="flex-1 w-full">
            {currentTab === 'home' && <HomePage onNavigate={handleNavigate} />}
            {currentTab === 'trabalhos' && <TrabalhosPage onNavigate={handleNavigate} />}
            {currentTab === 'servicos' && <ServicosPage onNavigate={handleNavigate} />}
            {currentTab === 'sobre' && <SobrePage onNavigate={handleNavigate} />}
            {currentTab === 'contato' && <ContatoPage />}
            {currentTab === 'agenda' && <AgendaPage onNavigate={handleNavigate} />}
          </main>

          {/* Rodapé com navegação rápida de volta */}
          <Footer onNavigate={handleNavigate} />
        </>
      )}
    </div>
  );
}

export default App;
