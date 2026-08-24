import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Hook que implementa auto-scroll em carrossel horizontal com pausa na interação.
 * Lógica extraída para evitar duplicação entre Problem e Reviews.
 *
 * @param step Pixels a percorrer por avanço automático.
 * @param intervalMs Intervalo entre avanços automáticos.
 * @param pauseMs Tempo de pausa após interação manual (mouse/touch).
 */
export function useAutoScrollCarousel(
  step: number,
  intervalMs = 3500,
  pauseMs = 10000
) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let interval: ReturnType<typeof setInterval>;

    const tick = () => {
      if (isInteracting) return;
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScroll - 5) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: step, behavior: 'smooth' });
      }
    };

    interval = setInterval(tick, intervalMs);
    return () => clearInterval(interval);
  }, [isInteracting, step, intervalMs]);

  const pause = useCallback(() => {
    setIsInteracting(true);
    const t = setTimeout(() => setIsInteracting(false), pauseMs);
    return () => clearTimeout(t);
  }, [pauseMs]);

  const handlers = {
    onMouseEnter: () => setIsInteracting(true),
    onMouseLeave: () => setIsInteracting(false),
    onTouchStart: pause,
  };

  return { scrollRef, handlers };
}
