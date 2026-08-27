import type { ReactNode } from 'react';

/**
 * Elementos gráficos do sistema de marca RapChef (Estudo de Marca · Agosto 2026).
 * Inspirados na embalagem da marmita: bandeja de cantos arredondados com borda
 * carvão, etiquetas douradas, corte diagonal vermelho e selo de ação do logo.
 */

interface BaseProps {
  className?: string;
}

/** Card com cantos arredondados + borda carvão (2px) + fundo branco. */
export function MolduraBandeja({
  className = '',
  children,
  tone = 'charcoal',
}: BaseProps & { children: ReactNode; tone?: 'charcoal' | 'brand' }) {
  const border = tone === 'brand' ? 'border-brand' : 'border-charcoal';
  return (
    <div className={`rounded-3xl border-2 bg-white ${border} ${className}`}>
      {children}
    </div>
  );
}

/** Pílula dourada/creme com texto uppercase bold pequeno (categorias e tags). */
export function EtiquetaQuente({
  text,
  children,
  variant = 'gold',
  className = '',
}: BaseProps & {
  text?: string;
  children?: ReactNode;
  variant?: 'gold' | 'cream';
}) {
  const palette =
    variant === 'gold'
      ? 'bg-gold text-charcoal'
      : 'bg-cream text-charcoal';
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.15em] ${palette} ${className}`}
    >
      {text ?? children}
    </span>
  );
}

/**
 * Faixa SVG vermelha (#D70A2F) com corte diagonal conectando fotografia e conteúdo.
 * `position` controla o lado (topo/rodapé). `preserveAspectRatio="none"` estica
 * a diagonal conforme a largura da seção.
 */
export function CorteDiagonal({
  position = 'bottom',
  color = '#D70A2F',
  className = '',
  heightClass = 'h-12 md:h-20',
}: BaseProps & {
  position?: 'top' | 'bottom';
  color?: string;
  heightClass?: string;
}) {
  const points =
    position === 'top'
      ? '0,0 100,0 100,100 0,40'
      : '0,100 100,100 100,60 0,0';
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 ${
        position === 'top' ? 'top-0' : 'bottom-0'
      } ${heightClass} ${className}`}
    >
      <polygon points={points} fill={color} />
    </svg>
  );
}

/** Logo dentro de base sólida circular vermelha. Tamanhos sm/md. */
export function SeloAcao({
  size = 'md',
  className = '',
}: BaseProps & { size?: 'sm' | 'md' }) {
  const dim = size === 'sm' ? 'h-12 w-12 p-1' : 'h-20 w-20 p-2';
  return (
    <div
      className={`flex items-center justify-center rounded-full bg-brand shadow-[0_10px_30px_rgba(215,10,47,0.35)] ${dim} ${className}`}
    >
      <img
        src="/imagens/logo.webp"
        alt=""
        loading="lazy"
        decoding="async"
        className="h-full w-full rounded-full object-contain"
      />
    </div>
  );
}
