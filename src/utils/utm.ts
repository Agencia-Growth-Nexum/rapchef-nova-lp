export interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

const STORAGE_KEY = 'rapchef_utm';

/**
 * Captura os parâmetros utm_* da URL atual e os persiste em sessionStorage.
 * Permite anexar a origem da campanha ao payload do formulário e aos links.
 */
export function captureUtm(): UtmParams {
  if (typeof window === 'undefined') return {};

  const params: UtmParams = {};
  const url = new URL(window.location.href);
  (['source', 'medium', 'campaign', 'term', 'content'] as const).forEach((key) => {
    const value = url.searchParams.get(`utm_${key}`);
    if (value) params[`utm_${key}`] = value;
  });

  try {
    if (Object.keys(params).length > 0) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(params));
    }
  } catch {
    /* sessionStorage indisponível — ignora */
  }

  return params;
}

/** Recupera os UTM persistidos em sessionStorage (ou captura da URL). */
export function getUtm(): UtmParams {
  if (typeof window === 'undefined') return {};
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as UtmParams;
  } catch {
    /* fallback */
  }
  return captureUtm();
}

/** Converte UTM em query string (para anexar a links). */
export function utmToQuery(utm: UtmParams): string {
  const parts = Object.entries(utm)
    .filter(([, v]) => Boolean(v))
    .map(([k, v]) => `${k}=${encodeURIComponent(v as string)}`);
  return parts.length > 0 ? `?${parts.join('&')}` : '';
}
