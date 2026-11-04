import React, { useState } from 'react';

export const ContatoPage: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    servico: 'Box Braids',
    dataPreferencia: '',
    mensagem: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Format WhatsApp message
    const msg = `Olá Núbia! Me chamo ${formData.nome}. Gostaria de agendar o serviço de *${formData.servico}*. Data de preferência: ${formData.dataPreferencia || 'A combinar'}. Mensagem: ${formData.mensagem || 'Gostaria de mais informações.'}`;
    const url = `https://wa.me/5511988881234?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="w-full flex flex-col items-center bg-espresso min-h-screen">
      <div className="w-full max-w-[1440px] px-6 md:px-14 pt-10 md:pt-16 pb-20">
        {/* Intro */}
        <div className="flex flex-col gap-5">
          <span className="text-[12px] text-honey font-sans font-bold tracking-[0.14em] uppercase">
            AGENDAMENTOS
          </span>
          <h1 className="text-6xl sm:text-8xl md:text-[116px] leading-[0.92] text-creamlight font-display uppercase tracking-tight select-none">
            VAMOS<br />CONVERSAR
          </h1>
          <p className="text-[14px] leading-[22px] text-latte font-sans font-medium max-w-[520px] pb-4">
            Preencha o formulário e eu retorno no WhatsApp em até 24h com horários e o valor exato
            do seu penteado.
          </p>
        </div>

        {/* Content: Form + Studio Info */}
        <div className="w-full flex flex-col lg:flex-row gap-12 pt-8">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex-1 flex flex-col gap-6 bg-[#2C1C14] border border-line p-5 sm:p-8 md:p-10 rounded-[3px]"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-latte tracking-wider uppercase">
                  Seu Nome *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Como prefere ser chamada?"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="bg-espresso border border-line focus:border-honey rounded-[3px] px-4 py-3 text-creamlight text-sm outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-latte tracking-wider uppercase">
                  WhatsApp com DDD *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(11) 99999-9999"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="bg-espresso border border-line focus:border-honey rounded-[3px] px-4 py-3 text-creamlight text-sm outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-latte tracking-wider uppercase">
                  Serviço Desejado
                </label>
                <select
                  value={formData.servico}
                  onChange={(e) => setFormData({ ...formData, servico: e.target.value })}
                  className="bg-espresso border border-line focus:border-honey rounded-[3px] px-4 py-3 text-creamlight text-sm outline-none transition-colors"
                >
                  <option value="Box Braids">Box Braids (R$ 480)</option>
                  <option value="Nagô / Cornrows">Nagô / Cornrows (R$ 260)</option>
                  <option value="Torcional">Torcional (R$ 340)</option>
                  <option value="Crochet Braids">Crochet Braids (R$ 300)</option>
                  <option value="Infantil">Infantil (R$ 180)</option>
                  <option value="Noiva">Noiva (R$ 690)</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-latte tracking-wider uppercase">
                  Data de Preferência
                </label>
                <input
                  type="date"
                  value={formData.dataPreferencia}
                  onChange={(e) => setFormData({ ...formData, dataPreferencia: e.target.value })}
                  className="bg-espresso border border-line focus:border-honey rounded-[3px] px-4 py-3 text-creamlight text-sm outline-none transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-latte tracking-wider uppercase">
                Observações ou Dúvidas
              </label>
              <textarea
                rows={4}
                placeholder="Conte sobre o comprimento do cabelo, se tem referências específicas, etc."
                value={formData.mensagem}
                onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                className="bg-espresso border border-line focus:border-honey rounded-[3px] px-4 py-3 text-creamlight text-sm outline-none transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-3 py-4 bg-terracotta hover:bg-[#c25830] text-creamlight text-[13px] font-bold rounded-[3px] tracking-wider uppercase transition-colors"
            >
              <span>Enviar via WhatsApp</span>
              <span className="text-base">→</span>
            </button>

            {submitted && (
              <p className="text-xs text-honey text-center font-medium">
                Redirecionando para o WhatsApp do studio...
              </p>
            )}
          </form>

          {/* Studio Info Sidebar */}
          <div className="w-full lg:w-[380px] shrink-0 flex flex-col gap-6">
            <div className="bg-cream text-espresso p-8 rounded-[3px] flex flex-col gap-6 shadow-medium">
              <span className="text-[11px] text-terracotta font-sans font-bold tracking-[0.14em] uppercase">
                STUDIO MAABRAIDSS
              </span>

              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-bold text-mocha uppercase tracking-wider">Localização</span>
                <p className="text-sm font-medium text-espresso leading-relaxed">
                  Rua das Palmeiras, 128<br />
                  Maranhão · MA
                </p>
              </div>

              <div className="w-full h-[1px] bg-[#D9C7B1]"></div>

              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-bold text-mocha uppercase tracking-wider">Horários</span>
                <p className="text-sm font-medium text-espresso leading-relaxed">
                  Terça a Sexta: 9h às 19h<br />
                  Sábado: 8h às 16h<br />
                  <span className="text-xs text-terracotta font-semibold">Atendimento exclusivo com hora marcada</span>
                </p>
              </div>

              <div className="w-full h-[1px] bg-[#D9C7B1]"></div>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold text-mocha uppercase tracking-wider">Canais Diretos</span>
                <a
                  href="https://wa.me/5511988881234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-espresso hover:text-terracotta transition-colors"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-whatsapp"></span>
                  WhatsApp: (11) 98888-1234
                </a>
                <a
                  href="https://instagram.com/maabrainds"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-espresso hover:text-terracotta transition-colors"
                >
                  Instagram: @maabrainds
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContatoPage;
