import { REVIEWS } from '../../data/content';
import { useAutoScrollCarousel } from '../../hooks/useAutoScrollCarousel';
import { IconCheck, IconStar } from '../ui/Icons';

/**
 * Prova social — depoimentos de clientes no estilo Google Reviews.
 * Usado logo após o Hero (resumo) e novamente no final (detalhado).
 * Aceita `compact` para exibir menos cards no topo da página.
 */
export default function Reviews({ compact = false }: { compact?: boolean }) {
  const { scrollRef, handlers } = useAutoScrollCarousel(300, 4000, 10000);
  const list = compact ? REVIEWS.slice(0, 4) : REVIEWS;

  return (
      <section
        aria-labelledby={compact ? 'reviews-resumo-title' : 'reviews-title'}
        className={`relative overflow-hidden ${compact ? 'section-pattern-dark py-14' : 'section-pattern-cream py-20'}`}
      >
      {compact && <div className="section-dots-dark absolute inset-0 opacity-30" aria-hidden="true" />}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2
              id={compact ? 'reviews-resumo-title' : 'reviews-title'}
              className={`font-[family-name:var(--font-headline)] font-extrabold uppercase ${
                compact ? 'text-4xl leading-none text-cream md:text-5xl' : 'text-3xl text-charcoal md:text-4xl'
              }`}
            >
              {compact ? (
                <>
                  Quem prova, <span className="text-brand">volta.</span>
                </>
              ) : (
                'Quem provou, recomenda'
              )}
            </h2>
            <div className="mt-2 flex items-center gap-2">
              <span aria-hidden="true" className="flex text-gold">
                {[...Array(5)].map((_, i) => (
                  <IconStar key={i} className="h-5 w-5" />
                ))}
              </span>
              <span className={`font-bold ${compact ? 'text-cream' : 'text-charcoal'}`}>
                4.9/5.0 no Google
              </span>
              <span
                className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] ${
                  compact ? 'bg-gold text-charcoal' : 'bg-charcoal text-cream'
                }`}
              >
                Avaliações reais
              </span>
            </div>
          </div>
          <p className={`max-w-sm text-sm font-medium ${compact ? 'text-cream/70' : 'text-charcoal/60'}`}>
            Histórias de quem trocou a correria por refeições práticas, saborosas e sempre à mão.
          </p>
        </div>

        <div
          ref={scrollRef}
          {...handlers}
          className="scrollbar-hide relative z-10 -mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-6 scroll-smooth md:mx-0 md:px-0"
        >
          {list.map((review) => (
            <article
              key={review.id}
              className={`flex min-w-[300px] snap-start flex-col justify-between rounded-[1.8rem] border bg-white p-7 shadow-[0_18px_40px_rgba(23,25,28,0.1)] md:min-w-[320px] ${
                compact ? 'border-white/15' : 'border-charcoal/10'
              }`}
            >
              <div>
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full text-white shadow-inner ${review.color}`}
                      aria-hidden="true"
                    >
                      {review.initials}
                    </div>
                    <div>
                      <h3 className="font-bold leading-tight text-charcoal">
                        {review.name}
                      </h3>
                      <p className="text-sm text-charcoal/40">{review.time}</p>
                    </div>
                  </div>
                  <div
                    className="flex text-gold"
                    aria-label={`${review.rating} de 5 estrelas`}
                  >
                    {[...Array(review.rating)].map((_, i) => (
                      <IconStar key={i} className="h-4 w-4" />
                    ))}
                  </div>
                </div>
                <p className="mb-4 text-charcoal/70">“{review.comment}”</p>
              </div>
              <div className="flex items-center justify-between border-t border-charcoal/10 pt-4">
                <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-tighter text-charcoal/70">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold text-charcoal">
                    <IconCheck className="h-3.5 w-3.5" />
                  </span>
                  Cliente verificado
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
