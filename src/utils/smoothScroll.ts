/**
 * Rolagem suave com offset para compensar a barra de navegação fixa.
 * @param id ID do elemento de destino (sem o #).
 * @param offset Espaço extra em pixels a partir do topo.
 */
export function smoothScrollTo(id: string, offset = 80): void {
  if (typeof window === 'undefined') return;
  const element = document.getElementById(id);
  if (!element) return;
  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
}
