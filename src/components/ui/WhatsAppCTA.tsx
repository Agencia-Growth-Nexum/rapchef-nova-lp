import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { useContact } from '../../context/ContactContext';

/**
 * Botão que intercepta CTAs de WhatsApp e abre o popup de contato
 * em vez de ir direto ao wa.me. Aceita as mesmas classes/children do
 * elemento original, com um `combo` opcional pré-selecionado.
 */
interface WhatsAppCTAProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'type'> {
  combo?: string;
  baseMessage?: string;
  children: ReactNode;
}

export function WhatsAppCTA({
  combo,
  baseMessage,
  children,
  ...rest
}: WhatsAppCTAProps) {
  const { openContact } = useContact();
  return (
    <button
      type="button"
      onClick={() => openContact({ combo, baseMessage })}
      {...rest}
    >
      {children}
    </button>
  );
}
