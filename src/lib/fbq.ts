declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: { push: (args: unknown[]) => void; queue: unknown[] };
  }
}

const PIXEL_ID: string | undefined = import.meta.env.VITE_META_PIXEL_ID as
  | string
  | undefined;

/**
 * Inicializa o Meta Pixel se VITE_META_PIXEL_ID estiver configurado.
 * O snippet no <head> define o stub `window.fbq`; aqui registramos o Pixel ID
 * e disparamos o PageView inicial.
 */
export function initPixel(): void {
  if (!PIXEL_ID || !window.fbq) return;
  window.fbq('init', PIXEL_ID);
  window.fbq('track', 'PageView');
}

/** Dispara o evento `Lead` do Meta Pixel (após submit do formulário). */
export function trackLead(data?: Record<string, unknown>): void {
  if (!PIXEL_ID || !window.fbq) return;
  window.fbq('track', 'Lead', data);
}

/** Dispara o evento `Contact` do Meta Pixel (cliques em links do WhatsApp). */
export function trackContact(): void {
  if (!PIXEL_ID || !window.fbq) return;
  window.fbq('track', 'Contact');
}
