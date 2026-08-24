import type { UtmParams } from '../utils/utm';

/**
 * Serviço de captura de leads (Google Apps Script).
 *
 * PLACEHOLDER: substitua APPS_SCRIPT_URL pelo endpoint real do Google Apps Script.
 * O Apps Script deve receber o payload JSON e salvar em uma planilha.
 *
 * O request usa `mode: "no-cors"` + `Content-Type: text/plain;charset=utf-8`
 * para evitar preflight CORS. A resposta é ignorada (fire-and-forget).
 */

const APPS_SCRIPT_URL: string | undefined = import.meta.env
  .VITE_APPS_SCRIPT_URL as string | undefined;

export interface LeadPayload {
  nome: string;
  whatsapp: string;
  cep: string;
  combo: string;
  page: string;
  utm?: UtmParams;
  timestamp: string;
}

/**
 * Envia um lead para o Google Apps Script (fire-and-forget).
 * Não lança erros — falhas são silenciosas por design.
 * Retorna `true` se a requisição foi disparada.
 */
export async function submitLead(payload: LeadPayload): Promise<boolean> {
  if (!APPS_SCRIPT_URL) {
    // Endpoint não configurado: loga para debug, mas não bloqueia o fluxo.
    console.warn('[leads] VITE_APPS_SCRIPT_URL não configurado. Lead:', payload);
    return false;
  }

  try {
    await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload),
    });
    return true;
  } catch (err) {
    console.error('[leads] Falha ao enviar lead:', err);
    return false;
  }
}
