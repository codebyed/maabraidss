import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => alert('Entrada bem sucedida!'), 500);
    setLoading(false);
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-surface'>
      <div className='w-full max-w-md p-8 rounded-2xl border border-ink-subtle bg-white shadow-medium'>
        <h1 className='text-2xl font-bold text-ink mb-1'>
          Acesso à plataforma
        </h1>
        <p className='text-sm text-ink light mb-8'>
          Faça login para continuar
        </p>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label className='block text-xs font-medium text-ink mb-1'>
              Email
            </label>
            <input
              type='email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='seu@email.com'
              className='w-full px-4 py-2.5 rounded-lg border border-ink-subtle focus:border-brand-500 focus:outline-none transition-colors'
            />
          </div>
          <div>
            <label className='block text-xs font-medium text-ink mb-1'>
              Senha
            </label>
            <input
              type='password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='••••••••'
              className='w-full px-4 py-2.5 rounded-lg border border-ink-subtle focus:border-brand-500 focus:outline-none transition-colors'
            />
          </div>
          <button
            type='submit'
            disabled={loading}
            className='w-full py-3 rounded-lg bg-brand-600 text-white font-medium hover:bg-brand-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
        <p className='mt-6 text-center text-xs text-ink light'>
          Não tem conta?{' '}
          <a href='#' className='font-semibold underline underline-offset-2 hover:underline'>
            Registrar
          </a>
        </p>
      </div>
    </div>
  );
}
