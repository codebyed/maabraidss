import { useState } from 'react';

export default function MobileHomePage() {
  const [tab, setTab] = useState('início');

  const tabs = [
    { id: 'início', label: 'Início' },
    { id: 'works', label: 'Trabalhos' },
    { id: 'services', label: 'Serviços' },
    { id: 'about', label: 'Sobre' },
    { id: 'contact', label: 'Contato' },
  ];

  return (
    <div className='min-h-screen bg-surface'>
      <div className='flex items-center justify-between px-5 py-3 border-b border-ink-subtle'>
        <h1 className='text-lg font-semibold text-ink-light'>Mobile Home</h1>
        <button className='text-xs text-brand-600 font-semibold'>Menu</button>
      </div>
      <nav className='sticky top-[19px] z-10 flex gap-1 overflow-x-auto px-4 py-3 bg-white rounded-xl border border-ink-subtle'>
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium shrink-0 whitespace-nowrap transition-colors ${
              tab === t.id
                ? 'bg-brand-600 text-white'
                : 'bg-surface-muted text-ink light hover:bg-brand-100'
            }`}
          >
            {t.label}
          </button>
        ))}
      </nav>
      <main>
        {tab === 'início' && (
          <section className='p-5'>
            <h2 className='text-base font-bold text-ink'>Olá, bem-vindo!</h2>
            <p className='mt-2 text-sm leading-relaxed text-ink light'>
              A Brand Studio cria experiências que transformam marcas em memórias.
              Conheça nossos projetos e serviços clicando nos destaques abaixo.
            </p>
          </section>
        )}
        {tab === 'works' && (
          <section className='p-5'>
            <h2 className='text-base font-bold text-ink mb-3'>Nossos projetos</h2>
            <ul className='space-y-3'>
              {[
                { id: '1', title: 'Design SaaS', cat: 'Projetos', link: true },
                { id: '2', title: 'PWA Mobile', cat: 'Projetos', link: false },
                { id: '3', title: 'Landing Page', cat: 'Projetos', link: true },
                { id: '4', title: 'Web Ecommerce', cat: 'Projetos', link: false },
              ].map((it) => (
                <li key={it.id} className='flex items-start gap-3 p-4 rounded-xl border border-ink-subtle'>
                  <span className='text-brand-600 font-bold text-sm shrink-0 mt-0.5'>
                    #{it.id}
                  </span>
                  <div>
                    <span className='font-semibold text-ink block'>{it.title}</span>
                    <span className='text-xs text-ink light'>{it.cat}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )}
        {tab === 'services' && (
          <section className='p-5'>
            <h2 className='text-base font-bold text-ink mb-3'>Nossos serviços</h2>
            <div className='space-y-4'>
              {[
                { icon: '🎨', title: 'Design Web', desc: 'Interfaces responsivas.' },
                { icon: '🔧', title: 'Dev Mobile', desc: 'Apps multiplataforma.' },
                { icon: '💡', title: 'Estratégia', desc: 'Visão para o futuro.' },
                { icon: '📊', title: 'Analytics', desc: 'Insights data-driven.' },
              ].map((s, i) => (
                <div key={i} className='rounded-xl border border-ink-subtle bg-surface-muted p-4'>
                  <div className='text-xl mb-2'>{s.icon}</div>
                  <h3 className='font-semibold text-ink'>{s.title}</h3>
                  <p className='text-xs text-ink light mt-1'>{s.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}
        {tab === 'about' && (
          <section className='p-5'>
            <h2 className='text-base font-bold text-ink mb-3'>Sobre nós</h2>
            <p className='text-sm leading-relaxed text-ink light'>
              A Brand Studio unem visão estratégica e prática criativa para resolver
              desafios complexos de marcas e negócios digitais.
            </p>
          </section>
        )}
        {tab === 'contact' && (
          <section className='p-5'>
            <h2 className='text-base font-bold text-ink mb-3'>Fale conosco</h2>
            <a href='#contact' className='block text-center text-brand-600 font-semibold py-4 hover:underline'>
              Clique aqui para entrar em contato
            </a>
          </section>
        )}
      </main>
    </div>
  );
}
