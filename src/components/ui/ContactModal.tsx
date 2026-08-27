import { useEffect, useRef, useState, type FormEvent } from 'react';
import { buildWhatsAppUrl } from '../../lib/whatsapp';
import { trackLead } from '../../lib/fbq';
import { COMBO_OPTIONS, useContact } from '../../context/ContactContext';
import { IconX } from './Icons';

function onlyDigits(value: string): string {
  return value.replace(/\D/g, '');
}

/** Formata como telefone BR: (11) 98850-4312 */
function formatPhone(value: string): string {
  const d = onlyDigits(value).slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INPUT_CLASS =
  'w-full rounded-xl border-2 border-charcoal/15 bg-white px-4 py-3 text-charcoal transition focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30';
const LABEL_CLASS = 'mb-1 block text-sm font-bold text-charcoal';
const ERROR_CLASS = 'mt-1 text-xs font-semibold text-brand';

export function ContactModal() {
  const { isOpen, closeContact, combo: preselectedCombo } = useContact();

  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [cidade, setCidade] = useState('');
  const [combo, setCombo] = useState<string>(preselectedCombo);

  const nameRef = useRef<HTMLInputElement>(null);

  // Reseta os campos sempre que o modal abre com um novo contexto.
  useEffect(() => {
    if (isOpen) {
      setNome('');
      setWhatsapp('');
      setEmail('');
      setCidade('');
      setCombo(preselectedCombo);
    }
  }, [isOpen, preselectedCombo]);

  // Foco no primeiro campo ao abrir.
  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => nameRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  // Fecha com Escape e trava o scroll do body enquanto aberto.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeContact();
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, closeContact]);

  if (!isOpen) return null;

  const nomeOk = nome.trim().length >= 2;
  const phoneDigits = onlyDigits(whatsapp);
  const whatsappOk = phoneDigits.length >= 10 && phoneDigits.length <= 11;
  const emailOk = EMAIL_RE.test(email.trim());
  const cidadeOk = cidade.trim().length > 0;
  const isValid = nomeOk && whatsappOk && emailOk && cidadeOk;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValid) return;

    const msg = `Olá! Sou ${nome.trim()}, aqui de ${cidade.trim()}, gostaria de saber mais sobre ${combo} que vocês preparam e entregam. Poderia me passar mais informações?`;

    trackLead({ content_name: combo });
    window.open(buildWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
    closeContact();
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-end justify-center bg-charcoal/60 backdrop-blur-sm sm:items-center sm:p-4"
      onClick={closeContact}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        className="max-h-[92vh] w-full max-w-md overflow-y-auto rounded-t-3xl bg-white p-6 shadow-2xl sm:rounded-3xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <h2
              id="contact-modal-title"
              className="font-[family-name:var(--font-headline)] text-2xl font-extrabold uppercase leading-tight text-charcoal"
            >
              Quase lá!
            </h2>
            <p className="mt-1 text-sm font-medium text-charcoal/60">
              Para uma melhor experiência e contato personalizado, preencha seus dados.
            </p>
          </div>
          <button
            type="button"
            onClick={closeContact}
            aria-label="Fechar"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-charcoal/5 text-charcoal transition hover:bg-charcoal/10"
          >
            <IconX className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div>
            <label htmlFor="cm-nome" className={LABEL_CLASS}>
              Nome
            </label>
            <input
              id="cm-nome"
              ref={nameRef}
              type="text"
              autoComplete="name"
              placeholder="Maria da Silva"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className={INPUT_CLASS}
            />
            {nome.length > 0 && !nomeOk && (
              <p className={ERROR_CLASS}>Informe seu nome.</p>
            )}
          </div>

          <div>
            <label htmlFor="cm-whatsapp" className={LABEL_CLASS}>
              WhatsApp com DDD
            </label>
            <input
              id="cm-whatsapp"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="(11) 98850-4312"
              value={whatsapp}
              onChange={(e) => setWhatsapp(formatPhone(e.target.value))}
              className={INPUT_CLASS}
            />
            {whatsapp.length > 0 && !whatsappOk && (
              <p className={ERROR_CLASS}>Informe um WhatsApp válido com DDD.</p>
            )}
          </div>

          <div>
            <label htmlFor="cm-email" className={LABEL_CLASS}>
              E-mail
            </label>
            <input
              id="cm-email"
              type="email"
              autoComplete="email"
              placeholder="voce@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={INPUT_CLASS}
            />
            {email.length > 0 && !emailOk && (
              <p className={ERROR_CLASS}>Informe um e-mail válido.</p>
            )}
          </div>

          <div>
            <label htmlFor="cm-cidade" className={LABEL_CLASS}>
              Cidade
            </label>
            <input
              id="cm-cidade"
              type="text"
              autoComplete="address-level2"
              placeholder="São Paulo"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              className={INPUT_CLASS}
            />
            {cidade.length > 0 && !cidadeOk && (
              <p className={ERROR_CLASS}>Informe sua cidade.</p>
            )}
          </div>

          <div>
            <label htmlFor="cm-combo" className={LABEL_CLASS}>
              O que você procura?
            </label>
            <select
              id="cm-combo"
              value={combo}
              onChange={(e) => setCombo(e.target.value)}
              className={INPUT_CLASS}
            >
              {COMBO_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={!isValid}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-4 font-[family-name:var(--font-headline)] text-lg font-extrabold uppercase text-cream shadow-lg transition hover:bg-brand-deep disabled:cursor-not-allowed disabled:opacity-60"
          >
            Iniciar conversa
          </button>

          <p className="text-center text-xs text-charcoal/60">
            Ao continuar, você será redirecionado ao WhatsApp com seus dados preenchidos.
          </p>
        </form>
      </div>
    </div>
  );
}
