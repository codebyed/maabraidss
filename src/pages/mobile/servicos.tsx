export default function MobileServicosPage() {
  const services = [
    { icon: '🎨', title: 'Design Web', desc: 'Interfaces responsivas e intuitivas.' },
    { icon: '🔧', title: 'Dev Mobile', desc: 'Apps modernos multiplataforma.' },
    { icon: '💡', title: 'Estratégia', desc: 'Visão para o futuro da marca.' },
    { icon: '📊', title: 'Analytics', desc: 'Insights data-driven para tomada decisão.' },
  ];

  return (
    <div className='min-h-screen bg-surface'>
      <header className='sticky top-0 z-50 flex items-center justify-between px-5 py-3 border-b border-ink-subtle'>
        <h1 className='text-lg font-semibold text-ink-light'>Serviços</h1>
      </header>
      <main>
        <section>
          <h2 className='text-base font-bold text-ink mb-3'>Quem somos</h2>
          <p className='text-sm leading-relaxed text-ink light mt-2 mb-8'>
            Combine visão estratégica e prática criativa para resolver desafios de
            marcas e negócios digitais com impacto mensurável.
          </p>
        </section>
        <div className='grid grid-cols-1 gap-3 pb-8'>
          {services.map((s, i) => (
            <div
              key={i}
              className='flex items-center gap-4 rounded-xl border border-ink-subtle p-4'
            >
              <span className='text-xl shrink-0'>{s.icon}</span>
              <div className='min-w-0 flex-1'>
                <h3 className='font-semibold text-ink'>{s.title}</h3>
                <p className='text-xs text-ink light mt-1'>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
