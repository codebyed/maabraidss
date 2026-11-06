import React, { useState } from 'react';

interface AgendaPageProps {
  onNavigate?: (tab: string) => void;
}

interface ServiceOption {
  id: string;
  name: string;
  desc: string;
  time: string;
  price: number;
}

export const AgendaPage: React.FC<AgendaPageProps> = ({ onNavigate }) => {
  const [step, setStep] = useState<number>(1);

  // Form State
  const [selectedService, setSelectedService] = useState<ServiceOption>({
    id: 'box-braids',
    name: 'Box Braids',
    desc: 'Tranças soltas clássicas, do ombro ao quadril',
    time: '4–6h',
    price: 480,
  });

  const [selectedDate, setSelectedDate] = useState<string>('2026-07-16');
  const [selectedTime, setSelectedTime] = useState<string>('13:30');

  const [clientData, setClientData] = useState({
    nome: '',
    whatsapp: '',
    instagram: '',
    observacoes: '',
  });

  const [pixCopied, setPixCopied] = useState(false);

  const services: ServiceOption[] = [
    {
      id: 'box-braids',
      name: 'Box Braids',
      desc: 'Tranças soltas clássicas, do ombro ao quadril',
      time: '4–6h',
      price: 480,
    },
    {
      id: 'nago',
      name: 'Nagô / Cornrows',
      desc: 'Desenho geométrico rente ao couro cabeludo',
      time: '2–3h',
      price: 260,
    },
    {
      id: 'torcional',
      name: 'Torcional',
      desc: 'Twists com acabamento natural e movimento',
      time: '3–4h',
      price: 340,
    },
    {
      id: 'crochet',
      name: 'Crochet Braids',
      desc: 'Instalação com cabelo aplicado e volume imediato',
      time: '2h',
      price: 300,
    },
    {
      id: 'infantil',
      name: 'Infantil',
      desc: 'Tranças leves para crianças de até 12 anos',
      time: '1h30',
      price: 180,
    },
    {
      id: 'noiva',
      name: 'Noiva',
      desc: 'Penteado de trança com teste incluso',
      time: '3h',
      price: 690,
    },
  ];

  const times = ['09:00', '13:30', '16:00'];

  const sinalAmount = Math.round(selectedService.price * 0.3);
  const remainingAmount = selectedService.price - sinalAmount;

  const handleCopyPix = () => {
    navigator.clipboard?.writeText?.('pix@maabraidss.com.br');
    setPixCopied(true);
    setTimeout(() => setPixCopied(false), 2500);
  };

  const stepsList = [
    { num: 1, title: 'Serviço', sub: `${selectedService.name} · R$ ${selectedService.price}` },
    { num: 2, title: 'Data e hora', sub: `${selectedDate ? 'Qua 16 jul' : 'A escolher'} · ${selectedTime}` },
    { num: 3, title: 'Dados', sub: clientData.nome || 'Seus dados pessoais' },
    { num: 4, title: 'Pagamento', sub: `Sinal R$ ${sinalAmount}` },
    { num: 5, title: 'Confirmação', sub: 'Agendamento concluído' },
  ];

  return (
    <div className="w-full flex justify-center bg-espresso min-h-screen py-6 md:py-12 px-4">
      {/* Container Frame mimicking kwaX3 */}
      <div className="w-full max-w-[1280px] bg-cream text-espresso rounded-[3px] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[750px]">
        {/* Mobile Compact Progress Bar (matching Pencil mobile booking frames) */}
        <div className="md:hidden w-full bg-espresso text-creamlight p-4 flex flex-col gap-3 border-b border-line">
          <div className="flex justify-between items-center">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => onNavigate?.('bio')}
            >
              <span className="text-xs font-display uppercase tracking-wider text-creamlight">
                maabraidss
              </span>
            </div>
            <span className="text-[11px] text-honey font-bold uppercase tracking-wider">
              {step <= 4 ? `Etapa 0${step} de 04` : 'Concluído'}
            </span>
          </div>

          {/* Stepper Dots Row */}
          <div className="grid grid-cols-4 gap-1.5">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className={`h-1.5 rounded-full transition-all ${
                  step >= num ? 'bg-terracotta' : 'bg-line'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Left Stepper Panel (Desktop) */}
        <aside className="hidden md:flex w-[320px] bg-espresso text-creamlight p-8 md:p-9 flex-col justify-between shrink-0">
          <div className="flex flex-col gap-8">
            {/* Brand */}
            <div
              className="flex items-center gap-2.5 cursor-pointer"
              onClick={() => onNavigate?.('bio')}
            >
              <div className="w-[36px] h-[22px] bg-creamlight rounded-[3px] flex items-center justify-center font-display text-[11px] text-espresso font-bold">
                MB
              </div>
              <span className="text-[15px] font-display uppercase tracking-wider text-creamlight">
                maabraidss
              </span>
            </div>

            {/* Stepper Steps */}
            <div className="flex flex-col gap-6">
              {stepsList.map((s) => {
                const isCompleted = step > s.num;
                const isCurrent = step === s.num;
                return (
                  <div
                    key={s.num}
                    onClick={() => {
                      if (isCompleted) setStep(s.num);
                    }}
                    className={`flex items-center gap-3.5 ${
                      isCompleted ? 'cursor-pointer opacity-90 hover:opacity-100' : ''
                    }`}
                  >
                    <div
                      className={`w-[30px] h-[30px] rounded-[3px] flex items-center justify-center font-bold text-xs transition-colors shrink-0 ${
                        isCompleted
                          ? 'bg-terracotta text-creamlight'
                          : isCurrent
                          ? 'bg-creamlight text-espresso'
                          : 'border border-line text-mocha'
                      }`}
                    >
                      {isCompleted ? '✓' : `0${s.num}`}
                    </div>
                    <div className="flex flex-col">
                      <span
                        className={`text-[13px] font-bold ${
                          isCurrent ? 'text-creamlight' : isCompleted ? 'text-sand' : 'text-mocha'
                        }`}
                      >
                        {s.title}
                      </span>
                      <span className="text-[10px] text-latte truncate max-w-[200px]">
                        {s.sub}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-6 border-t border-line text-[11px] text-mocha">
            Dúvidas no agendamento?<br />
            <a
              href="https://wa.me/5511988881234"
              target="_blank"
              rel="noopener noreferrer"
              className="text-honey hover:underline font-semibold"
            >
              Fale no WhatsApp →
            </a>
          </div>
        </aside>

        {/* Right Content Panel */}
        <main className="flex-1 p-6 md:p-12 flex flex-col justify-between bg-cream">
          {/* STEP 1: Escolha do Serviço */}
          {step === 1 && (
            <div className="flex flex-col gap-6 animate-in fade-in duration-200">
              <div>
                <span className="text-[11px] text-terracotta font-bold tracking-widest uppercase">
                  ETAPA 01 DE 04
                </span>
                <h2 className="text-3xl md:text-4xl font-display uppercase tracking-tight text-espresso mt-1">
                  Selecione o Serviço
                </h2>
                <p className="text-sm text-mocha mt-1">
                  Todos os atendimentos incluem lavagem prévia e hidratação profunda.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {services.map((srv) => {
                  const isSelected = selectedService.id === srv.id;
                  return (
                    <div
                      key={srv.id}
                      onClick={() => setSelectedService(srv)}
                      className={`p-5 rounded-[3px] border cursor-pointer transition-all flex flex-col justify-between gap-3 ${
                        isSelected
                          ? 'border-terracotta bg-[#EBD8C3] shadow-soft ring-1 ring-terracotta'
                          : 'border-[#D9C7B1] bg-white/60 hover:bg-white'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <h4 className="font-display text-xl uppercase tracking-tight text-espresso">
                          {srv.name}
                        </h4>
                        <span className="text-sm font-bold text-terracotta">
                          R$ {srv.price}
                        </span>
                      </div>
                      <p className="text-xs text-mocha leading-relaxed">{srv.desc}</p>
                      <div className="flex justify-between items-center pt-2 border-t border-[#D9C7B1]/50 text-[11px] text-mocha font-semibold">
                        <span>Duração estimada:</span>
                        <span>{srv.time}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: Data e Hora */}
          {step === 2 && (
            <div className="flex flex-col gap-6 animate-in fade-in duration-200">
              <div>
                <span className="text-[11px] text-terracotta font-bold tracking-widest uppercase">
                  ETAPA 02 DE 04
                </span>
                <h2 className="text-3xl md:text-4xl font-display uppercase tracking-tight text-espresso mt-1">
                  Data e Horário
                </h2>
                <p className="text-sm text-mocha mt-1">
                  Atendemos apenas até 2 clientes por dia para garantir exclusividade e dedicação total.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                {/* Data Selector */}
                <div className="flex flex-col gap-3">
                  <label className="text-xs font-bold text-espresso uppercase tracking-wider">
                    Escolha o dia
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    min="2026-07-01"
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="p-3.5 bg-white border border-[#D9C7B1] rounded-[3px] font-sans text-espresso text-sm outline-none focus:border-terracotta"
                  />
                  <span className="text-[11px] text-mocha">
                    Studio funciona de Terça a Sábado.
                  </span>
                </div>

                {/* Horários */}
                <div className="flex flex-col gap-3">
                  <label className="text-xs font-bold text-espresso uppercase tracking-wider">
                    Turno / Horário
                  </label>
                  <div className="flex flex-col gap-2.5">
                    {times.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setSelectedTime(t)}
                        className={`py-3 px-4 rounded-[3px] border text-left text-sm font-semibold transition-all flex justify-between items-center ${
                          selectedTime === t
                            ? 'bg-terracotta text-creamlight border-terracotta shadow-soft'
                            : 'bg-white border-[#D9C7B1] text-espresso hover:border-terracotta'
                        }`}
                      >
                        <span>{t}</span>
                        <span className="text-xs opacity-80">
                          {t === '09:00' ? 'Manhã' : t === '13:30' ? 'Início da tarde' : 'Fim da tarde'}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Dados Pessoais */}
          {step === 3 && (
            <div className="flex flex-col gap-6 animate-in fade-in duration-200">
              <div>
                <span className="text-[11px] text-terracotta font-bold tracking-widest uppercase">
                  ETAPA 03 DE 04
                </span>
                <h2 className="text-3xl md:text-4xl font-display uppercase tracking-tight text-espresso mt-1">
                  Seus Dados
                </h2>
                <p className="text-sm text-mocha mt-1">
                  Informações para alinharmos os detalhes e confirmação da sua cadeira.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-espresso uppercase">Nome Completo *</label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome"
                    value={clientData.nome}
                    onChange={(e) => setClientData({ ...clientData, nome: e.target.value })}
                    className="p-3.5 bg-white border border-[#D9C7B1] rounded-[3px] text-sm text-espresso outline-none focus:border-terracotta"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-espresso uppercase">WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="(00) 00000-0000"
                    value={clientData.whatsapp}
                    onChange={(e) => setClientData({ ...clientData, whatsapp: e.target.value })}
                    className="p-3.5 bg-white border border-[#D9C7B1] rounded-[3px] text-sm text-espresso outline-none focus:border-terracotta"
                  />
                </div>

                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label className="text-xs font-bold text-espresso uppercase">Instagram (opcional)</label>
                  <input
                    type="text"
                    placeholder="@seu.perfil"
                    value={clientData.instagram}
                    onChange={(e) => setClientData({ ...clientData, instagram: e.target.value })}
                    className="p-3.5 bg-white border border-[#D9C7B1] rounded-[3px] text-sm text-espresso outline-none focus:border-terracotta"
                  />
                </div>

                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label className="text-xs font-bold text-espresso uppercase">Observações sobre o cabelo</label>
                  <textarea
                    rows={3}
                    placeholder="Comprimento atual, se já usa tranças, cor desejada do jumbo..."
                    value={clientData.observacoes}
                    onChange={(e) => setClientData({ ...clientData, observacoes: e.target.value })}
                    className="p-3.5 bg-white border border-[#D9C7B1] rounded-[3px] text-sm text-espresso outline-none focus:border-terracotta resize-none"
                  ></textarea>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Pagamento do Sinal */}
          {step === 4 && (
            <div className="flex flex-col gap-6 animate-in fade-in duration-200">
              <div>
                <span className="text-[11px] text-terracotta font-bold tracking-widest uppercase">
                  ETAPA 04 DE 04
                </span>
                <h2 className="text-3xl md:text-4xl font-display uppercase tracking-tight text-espresso mt-1">
                  Reserva &amp; Sinal
                </h2>
                <p className="text-sm text-mocha mt-1">
                  Para garantir sua data e materiais exclusivos, solicitamos um sinal de 30%.
                </p>
              </div>

              {/* Summary Card */}
              <div className="bg-white p-6 rounded-[3px] border border-[#D9C7B1] flex flex-col gap-4">
                <div className="flex justify-between items-center pb-3 border-b border-[#D9C7B1]">
                  <div>
                    <h4 className="font-display text-xl uppercase text-espresso">{selectedService.name}</h4>
                    <span className="text-xs text-mocha">{selectedDate} às {selectedTime}</span>
                  </div>
                  <span className="text-lg font-bold text-espresso">R$ {selectedService.price}</span>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <span className="text-espresso font-semibold">Sinal de Reserva (30% via Pix):</span>
                  <span className="text-base font-bold text-terracotta">R$ {sinalAmount}</span>
                </div>

                <div className="flex justify-between items-center text-xs text-mocha">
                  <span>Restante no dia do atendimento:</span>
                  <span>R$ {remainingAmount} (Cartão ou Pix)</span>
                </div>
              </div>

              {/* Pix Key Card */}
              <div className="bg-[#EBD8C3] p-5 rounded-[3px] border border-terracotta flex flex-col gap-3">
                <span className="text-xs font-bold text-espresso uppercase tracking-wider">
                  Chave Pix (E-mail):
                </span>
                <div className="flex items-center justify-between gap-3 bg-white p-3 rounded-[3px] border border-[#D9C7B1]">
                  <code className="text-xs font-mono text-espresso font-semibold truncate">
                    pix@maabraidss.com.br
                  </code>
                  <button
                    onClick={handleCopyPix}
                    className="px-3 py-1.5 bg-espresso text-creamlight text-xs font-bold rounded-[3px] hover:bg-[#332015] shrink-0 transition-colors"
                  >
                    {pixCopied ? 'Copiado!' : 'Copiar'}
                  </button>
                </div>
                <p className="text-[11px] text-mocha leading-relaxed">
                  Após realizar a transferência, clique em "Confirmar Reserva" para enviar o comprovante diretamente para a Núbia.
                </p>
              </div>
            </div>
          )}

          {/* STEP 5: Sucesso / Confirmação */}
          {step === 5 && (
            <div className="flex flex-col items-center text-center gap-6 py-8 animate-in fade-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-sage flex items-center justify-center text-white text-3xl font-bold shadow-soft">
                ✓
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs text-terracotta font-bold uppercase tracking-widest">
                  AGENDAMENTO REGISTRADO
                </span>
                <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight text-espresso">
                  Quase Tudo Pronto!
                </h2>
                <p className="text-sm text-mocha max-w-md mx-auto">
                  Recebemos seus dados para o serviço de <strong>{selectedService.name}</strong> em{' '}
                  <strong>{selectedDate}</strong> às <strong>{selectedTime}</strong>.
                </p>
              </div>

              <div className="w-full max-w-md bg-white p-6 rounded-[3px] border border-[#D9C7B1] text-left text-sm flex flex-col gap-3">
                <div className="flex justify-between">
                  <span className="text-mocha">Cliente:</span>
                  <span className="font-semibold text-espresso">{clientData.nome || 'Cliente'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-mocha">WhatsApp:</span>
                  <span className="font-semibold text-espresso">{clientData.whatsapp || 'Informado'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-mocha">Sinal:</span>
                  <span className="font-semibold text-terracotta">R$ {sinalAmount}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                <a
                  href={`https://wa.me/5511988881234?text=${encodeURIComponent(
                    `Olá Núbia! Realizei o agendamento de *${selectedService.name}* para *${selectedDate} às ${selectedTime}*. Meu nome é ${clientData.nome}. Segue o comprovante do sinal de R$ ${sinalAmount}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-4 bg-whatsapp hover:bg-[#20ba59] text-white font-bold rounded-[3px] text-sm uppercase tracking-wider text-center shadow-soft transition-colors"
                >
                  Confirmar no WhatsApp →
                </a>

                <button
                  onClick={() => {
                    setStep(1);
                    onNavigate?.('home');
                  }}
                  className="py-4 px-6 border border-line text-espresso font-semibold text-sm rounded-[3px] hover:bg-white transition-colors"
                >
                  Voltar ao Início
                </button>
              </div>
            </div>
          )}

          {/* Stepper Navigation Buttons */}
          {step < 5 && (
            <div className="w-full flex justify-between items-center pt-8 border-t border-[#D9C7B1] mt-8">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-5 py-2.5 border border-[#D9C7B1] hover:border-espresso text-espresso text-xs font-bold rounded-[3px] uppercase tracking-wider transition-colors"
                >
                  ← Voltar
                </button>
              ) : (
                <div></div>
              )}

              <button
                type="button"
                onClick={() => {
                  if (step === 3 && !clientData.nome) {
                    alert('Por favor, informe seu nome.');
                    return;
                  }
                  setStep(step + 1);
                }}
                className="px-8 py-3.5 bg-terracotta hover:bg-[#c25830] text-creamlight text-xs font-bold rounded-[3px] uppercase tracking-wider transition-all shadow-soft"
              >
                {step === 4 ? 'Confirmar Reserva →' : 'Avançar →'}
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AgendaPage;
