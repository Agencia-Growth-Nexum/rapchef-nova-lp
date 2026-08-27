import { useActionState } from 'react';
import { submitLead } from '../../services/leads';
import { getUtm } from '../../utils/utm';
import { buildWhatsAppUrl } from '../../lib/whatsapp';
import { trackLead } from '../../lib/fbq';

type FormState = { error?: string } | null;

interface LeadFormProps {
  /** Classe CSS adicional para o container (permite variar o layout). */
  className?: string;
}

const COMBO_OPTIONS = [
  { value: 'combo-mensal', label: 'Combo Mensal (20 marmitas) — frete grátis' },
  { value: 'combo-semanal', label: 'Combo Semanal (5 marmitas)' },
  { value: 'avulso', label: 'Marmitas avulsas' },
  { value: 'corporativo', label: 'Corporativo / PJ' },
];

/** Remove tudo que não é dígito. */
function onlyDigits(value: string): string {
  return value.replace(/\D/g, '');
}

/** Formata como telefone BR: (11) 98850-4312 */
function formatPhone(value: string): string {
  const d = onlyDigits(value).slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10)
    return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

/** Formata como CEP: 01234-567 */
function formatCep(value: string): string {
  const d = onlyDigits(value).slice(0, 8);
  if (d.length <= 5) return d;
  return `${d.slice(0, 5)}-${d.slice(5)}`;
}

export default function LeadForm({ className = '' }: LeadFormProps) {
  const [state, formAction, isPending] = useActionState(
    async (_prev: FormState, formData: FormData) => {
      const nome = String(formData.get('nome') ?? '').trim();
      const whatsapp = onlyDigits(String(formData.get('whatsapp') ?? ''));
      const cep = onlyDigits(String(formData.get('cep') ?? ''));
      const combo = String(formData.get('combo') ?? 'combo-mensal');

      // Validações client-side
      if (nome.length < 2) return { error: 'Informe seu nome.' };
      if (whatsapp.length < 10 || whatsapp.length > 11)
        return { error: 'Informe um WhatsApp válido com DDD.' };
      if (cep.length !== 8)
        return { error: 'Informe um CEP válido (8 dígitos).' };

      // Monta payload com UTM
      const utm = getUtm();
      const payload = {
        nome,
        whatsapp,
        cep,
        combo,
        page: typeof window !== 'undefined' ? window.location.href : '',
        utm,
        timestamp: new Date().toISOString(),
      };

      // Fire-and-forget para o Google Apps Script
      void submitLead(payload);

      // Dispara evento Lead do Meta Pixel
      trackLead({ content_name: combo });

      // Redireciona para WhatsApp com mensagem pré-preenchida
      const msg = `Olá! Me chamo ${nome}. Gostaria de pedir marmitas RapChef (${combo}). Meu CEP é ${cep}.`;
      const url = buildWhatsAppUrl(msg);
      window.open(url, '_blank', 'noopener,noreferrer');

      return null;
    },
    null
  );

  return (
    <div className={className}>
      <form action={formAction} noValidate className="space-y-5">
        <div>
          <label htmlFor="lead-nome" className="mb-1 block text-sm font-bold text-charcoal">
            Seu nome
          </label>
          <input
            id="lead-nome"
            name="nome"
            type="text"
            autoComplete="name"
            required
            placeholder="Maria da Silva"
            className="w-full rounded-xl border-2 border-charcoal/15 bg-white px-4 py-3 text-charcoal transition focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
          />
        </div>

        <div>
          <label htmlFor="lead-whatsapp" className="mb-1 block text-sm font-bold text-charcoal">
            WhatsApp com DDD
          </label>
          <input
            id="lead-whatsapp"
            name="whatsapp"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            placeholder="(11) 98850-4312"
            onChange={(e) => {
              e.currentTarget.value = formatPhone(e.currentTarget.value);
            }}
            className="w-full rounded-xl border-2 border-charcoal/15 bg-white px-4 py-3 text-charcoal transition focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
          />
        </div>

        <div>
          <label htmlFor="lead-cep" className="mb-1 block text-sm font-bold text-charcoal">
            Seu CEP
          </label>
          <input
            id="lead-cep"
            name="cep"
            type="text"
            inputMode="numeric"
            autoComplete="postal-code"
            required
            placeholder="01234-567"
            onChange={(e) => {
              e.currentTarget.value = formatCep(e.currentTarget.value);
            }}
            className="w-full rounded-xl border-2 border-charcoal/15 bg-white px-4 py-3 text-charcoal transition focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
          />
        </div>

        <div>
          <label htmlFor="lead-combo" className="mb-1 block text-sm font-bold text-charcoal">
            O que deseja?
          </label>
          <select
            id="lead-combo"
            name="combo"
            defaultValue="combo-mensal"
            className="w-full rounded-xl border-2 border-charcoal/15 bg-white px-4 py-3 text-charcoal transition focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
          >
            {COMBO_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {state?.error && (
          <p
            role="status"
            aria-live="polite"
            className="rounded-lg bg-brand/10 px-4 py-3 text-sm font-bold text-brand-deep"
          >
            {state.error}
          </p>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="w-full rounded-xl bg-brand px-6 py-4 font-[family-name:var(--font-headline)] text-lg font-extrabold uppercase text-cream shadow-lg transition hover:bg-brand-deep disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending ? 'Enviando…' : 'Receber meu orçamento'}
        </button>
        <p className="text-center text-xs text-charcoal/60">
          Ao enviar, você será redirecionado ao WhatsApp para finalizar. Seus dados são
          usados apenas para o atendimento.
        </p>
      </form>
    </div>
  );
}
