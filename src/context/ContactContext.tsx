import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

export const DEFAULT_COMBO = 'Combo Mensal (20 marmitas)';

export const COMBO_OPTIONS = [
  'Combo Mensal (20 marmitas)',
  'Combo Semanal (5 marmitas)',
  'Marmitas avulsas',
  'Corporativo / PJ',
] as const;

export interface ContactOptions {
  /** Combo pré-selecionado conforme o contexto do CTA. */
  combo?: string;
  /** Mensagem base opcional (reservado para personalizações futuras). */
  baseMessage?: string;
}

interface ContactContextValue {
  isOpen: boolean;
  combo: string;
  baseMessage?: string;
  openContact: (opts?: ContactOptions) => void;
  closeContact: () => void;
}

const ContactContext = createContext<ContactContextValue | null>(null);

export function ContactProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [combo, setCombo] = useState<string>(DEFAULT_COMBO);
  const [baseMessage, setBaseMessage] = useState<string | undefined>(undefined);

  const openContact = useCallback((opts?: ContactOptions) => {
    setCombo(opts?.combo ?? DEFAULT_COMBO);
    setBaseMessage(opts?.baseMessage);
    setIsOpen(true);
  }, []);

  const closeContact = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, combo, baseMessage, openContact, closeContact }),
    [isOpen, combo, baseMessage, openContact, closeContact]
  );

  return <ContactContext.Provider value={value}>{children}</ContactContext.Provider>;
}

export function useContact(): ContactContextValue {
  const ctx = useContext(ContactContext);
  if (!ctx) {
    throw new Error('useContact deve ser usado dentro de <ContactProvider>');
  }
  return ctx;
}
