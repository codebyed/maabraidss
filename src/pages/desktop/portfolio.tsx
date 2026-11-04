import { useState } from 'react';

export default function PortfolioPage() {
  const [active, setActive] = useState('trabalhos');

  const sections = [
    { id: 'trabalhos', label: 'Trabalhos' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'contato', label: 'Contato' },
  ];

  return (
    <div className='min-h-screen bg-surface'>
      <header className='sticky top-0 z-50 flex items-center justify-between px-6 py-4 border-b border-ink-subtle'>
        <h1 className='text-xl font-semibold text-ink-light'>Portfolio</h1>
        <nav className='flex gap-1'>
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                active === s.id
                  ? 'bg-brand-600 text-white'
                  : 'bg-surface-muted hover:bg-brand-100'
              }`}
            >
              {s.label}
            </button>
          ))}
        </nav>
      </header>
      <main className='max-w-5xl mx-auto px-6 py-10'>
        {active === 'trabalhos' && <ArquivoProjetos />}
        {active === 'servicos' && <ServicosInline />}
        {active === 'sobre' && <SobreInline />}
        {active === 'contato' && (
          <div className='rounded-2xl border border-ink-subtle bg-white p-8'>
            <p className='text-sm text-ink'>Para voltar ao contato, acesse o link abaixo:</p>
            <a href='#contact' className='inline-block mt-3 text-brand-600 font-semibold hover:underline'>
              Contato →
            </a>
          </div>
        )}
      </main>
    </div>
  );
}

function ArquivoProjetos() {
  const projects = [
    { title: 'Aplicação SaaS', desc: 'Plataforma de gestão para startups' },
    { title: 'Landing Page', desc: 'Página de alto conversão' },
    { title: 'PWA para Tablets', desc: 'Experiência fluida em todo dispositivo' },
  ];
  return (
    <section>
      <h2 className='text-2xl font-bold text-ink mb-6'>Projetos realizados</h2>
      <ul className='space-y-5'>
        {projects.map((p, i) => (
          <li
            key={i}
            className='flex items-start gap-5 p-6 rounded-xl border border-ink-subtle bg-surface-muted transition-shadow group'
          >
            <span className='text-3xl shrink-0 mt-1'>0{i + 1}</span>
            <div>
              <h3 className='font-semibold text-ink group-hover:text-brand-600'>
                {p.title}
              </h3>
              <p className='text-sm text-ink light mt-1'>{p.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ServicosInline() {
  const items = [
    { icon: '🎨', title: 'Design Web', desc: 'Interfaces responsivas e intuitivas.' },
    { icon: '🔧', title: 'Dev Mobile', desc: 'Apps modernos multiplataforma.' },
    { icon: '💡', title: 'Estratégia', desc: 'Visão de futuro para sua marca.' },
  ];
  return (
    <section>
      <h2 className='text-2xl font-bold text-ink mb-6'>Serviços em destaque</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {items.map((it, i) => (
          <div key={i} className='rounded-2xl border border-ink-subtle bg-surface-muted p-6'>
            <div className='text-3xl mb-3'>{it.icon}</div>
            <h3 className='font-semibold text-ink'>{it.title}</h3>
            <p className='text-sm text-ink light mt-2'>{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SobreInline() {
  return (
    <section className='max-w-3xl'>
      <h2 className='text-2xl font-bold text-ink mb-4'>Sobre nós</h2>
      <p className='text-sm leading-relaxed text-ink light'>
        A Brand Studio combina visão estratégica e prática criativa para resolver
        desafios complexos de marcas, produtos e negócios digitais.
      </p>
    </section>
  );
}
