import { useState } from 'react';

export default function MobileContatoPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '', phone: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className='min-h-screen bg-surface'>
      <header className='sticky top-0 z-50 flex items-center justify-between px-5 py-3 border-b border-ink-subtle'>
        <h1 className='text-lg font-semibold text-ink-light'>Contato</h1>
      </header>
      <main className='pb-16'>
        {sent ? (
          <section className='p-6 max-w-md mx-auto rounded-2xl border border-brand-300 bg-brand-50 text-center'>
            <p className='text-sm font-semibold text-brand-700'>🎉</p>
            <p className='text-sm mt-2 text-brand-700'>Mensagem enviada com sucesso! Voltar :) </p>
          </section>
        ) : (
          <form onSubmit={handleSubmit} noValidate className='space-y-3'>
            <input
              required
              placeholder='Seu nome'
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className='w-full px-4 py-3 rounded-lg border border-ink-subtle bg-white'
              style={{ minHeight: 46 }}
            />
            <input
              type='email'
              required
              placeholder='Seu email'
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className='w-full px-4 py-3 rounded-lg border border-ink-subtle bg-white'
              style={{ minHeight: 46 }}
            />
            <textarea
              rows={2}
              required
              placeholder='Digite sua mensagem'
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className='w-full px-4 py-3 rounded-lg border border-ink-subtle bg-white resize-none'
              style={{ minHeight: 90 }}
            />
            <button
              type='submit'
              className='w-full py-3 rounded-lg bg-brand-600 text-white font-medium'
            >
              Enviar
            </button>
          </form>
        )}
      </main>
    </div>
  );
}
