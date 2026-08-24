import { BUSINESS } from '../data/business';

/**
 * Constrói a URL do WhatsApp com texto pré-preenchido.
 * @param text Mensagem a ser enviada.
 */
export function buildWhatsAppUrl(text: string): string {
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(text)}`;
}
