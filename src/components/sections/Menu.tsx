import { DISHES } from '../../data/content';
import { WhatsAppCTA } from '../ui/WhatsAppCTA';

const CATEGORY_BADGES = ['Marmitas gourmet 400g', 'Marmitas fitness 300g'];

export default function Menu() {
  return (
    <section
      id="cardapio"
      aria-labelledby="cardapio-title"
      className="scroll-mt-24 bg-[#fff8f1] py-24 md:scroll-mt-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-brand-deep">
            Seu cardápio, do seu jeito
          </p>
          <h2
            id="cardapio-title"
            className="mx-auto mt-3 max-w-4xl font-[family-name:var(--font-headline)] text-4xl font-extrabold uppercase leading-[0.92] text-charcoal md:text-5xl"
          >
            Escolha suas refeições.
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {CATEGORY_BADGES.map((item, index) => (
              <span
                key={item}
                className={`rounded-full px-5 py-3 text-xs font-extrabold uppercase tracking-[0.14em] ${
                  index === 0
                    ? 'bg-brand text-cream shadow-[0_12px_25px_rgba(215,10,47,0.22)]'
                    : 'border border-charcoal/12 bg-white text-charcoal'
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {DISHES.map((dish) => (
            <article
              key={dish.id}
              className="paper-card overflow-hidden rounded-[1.9rem] border border-charcoal/10 bg-white"
            >
              <div className="relative">
                <img
                  src={dish.image}
                  alt={`Marmita de ${dish.name}`}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-[family-name:var(--font-headline)] text-2xl font-extrabold uppercase leading-none text-charcoal">
                  {dish.name}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-charcoal/68">
                  {dish.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] border border-brand/10 bg-white p-6 text-center shadow-[0_24px_60px_rgba(23,25,28,0.08)] md:p-8">
          <p className="text-base font-semibold text-charcoal/72">
            Monte seu combo com os seus favoritos e descubra mais de 35 sabores para variar a
            semana sem cair na mesmice.
          </p>
          <WhatsAppCTA className="mt-6 inline-flex rounded-xl bg-brand px-8 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-cream transition hover:bg-brand-deep">
            Ver cardápio completo
          </WhatsAppCTA>
        </div>
      </div>
    </section>
  );
}
