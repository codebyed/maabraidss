import { useState } from 'react';

export default function MobileTrabalhosPage() {
  const [filter, setFilter] = useState('all');

  const filters = ['all', 'web', 'mobile', 'branding'];
  const list = [
    { id: 'web', title: 'Projeto Design SaaS', year: '2026', thumb: 'https://picsum.photos/seed/saas/200/120' },
    { id: 'mobile', title: 'PWA Mobile App', year: '2024', thumb: '' },
    { id: 'web', title: 'Landing Page Conversão', year: '2024', thumb: '' },
    { id: 'branding', title: 'Brand Identity Nova', year: '2023', thumb: '' },
  ];

  return (
    <div className='min-h-screen bg-surface'>
      <header className='sticky top-0 z-50 flex items-center justify-between px-5 py-3 border-b border-ink-subtle'>
        <h1 className='text-lg font-semibold text-ink-light'>Trabalhos</h1>
        <div className='flex gap-1'>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded-full text-xs font-medium shrink-0 whitespace-nowrap transition-colors capitalize ${
                filter === f
                  ? 'bg-brand-600 text-white'
                  : 'bg-surface-muted text-ink light hover:bg-brand-100'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </header>
      <main>
        <section>
          <h2 className='text-base font-bold text-ink mb-3'>Nossos projetos recentes</h2>
        </section>
        <div className='grid grid-cols-1 gap-3 pb-8'>
          {list.map((item, i) => (
            <a
              key={i}
              href='#'
              className={`flex items-center gap-3 rounded-xl overflow-hidden border border-ink-subtle hover:shadow-medium transition-shadow group`}
            >
              <img
                src={item.thumb || `https://picsum.photos/seed/project${i}/120/80`}
                alt={item.title}
                className='w-28 h-18 object-cover rounded-lg shrink-0'
              />
              <div className='min-w-0 flex-1'>
                <h3 className='font-medium text-ink truncate group-hover:text-brand-600'>
                  {item.title}
                </h3>
                <p className='text-xs text-ink light mt-0.5'>{item.year}</p>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
