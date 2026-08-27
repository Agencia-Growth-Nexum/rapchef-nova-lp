import { DISHES } from '../../data/content';
import { MolduraBandeja } from '../ui/BrandElements';
import { WhatsAppCTA } from '../ui/WhatsAppCTA';
import { IconChef, IconFire, IconLeaf, IconStar } from '../ui/Icons';

export default function Menu() {
  return (
    <section
      id="cardapio"
      aria-labelledby="cardapio-title"
      className="scroll-mt-24 bg-white py-24 md:scroll-mt-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-2 text-center">
          <h2
            id="cardapio-title"
            className="font-[family-name:var(--font-headline)] text-3xl font-extrabold uppercase tracking-tight text-charcoal md:text-5xl"
          >
            Nosso cardápio
          </h2>
          <div className="mx-auto h-1.5 w-24 rounded-full bg-gold" />
        </div>

        {/* Porções Gourmet vs Fitness */}
        <div className="mx-auto mb-16 max-w-4xl">
          <MolduraBandeja className="p-8 md:p-10">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-charcoal text-gold shadow-lg">
                    <IconChef className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-headline)] text-lg font-extrabold uppercase text-charcoal">
                      Marmitas Gourmet
                    </h3>
                    <p className="font-[family-name:var(--font-headline)] text-2xl font-extrabold text-brand-deep">
                      400g{' '}
                      <span className="text-sm uppercase tracking-tighter">por unidade</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold text-charcoal shadow-lg">
                    <IconLeaf className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-headline)] text-lg font-extrabold uppercase text-charcoal">
                      Marmitas Fitness
                    </h3>
                    <p className="font-[family-name:var(--font-headline)] text-2xl font-extrabold text-brand-deep">
                      300g{' '}
                      <span className="text-sm uppercase tracking-tighter">por unidade</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-charcoal/10 bg-cream/60 p-6">
                <p className="font-bold leading-relaxed text-charcoal/70">
                  <IconStar className="mb-1 mr-1 inline h-4 w-4 text-gold" aria-hidden="true" />
                  Ambas são porções completas e satisfatórias para uma refeição (almoço ou
                  jantar). A maioria das pessoas fica{' '}
                  <span className="underline-deco text-charcoal">muito bem satisfeita</span>{' '}
                  com apenas uma unidade.
                </p>
              </div>
            </div>
          </MolduraBandeja>
        </div>

        <div className="mb-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {DISHES.map((dish) => (
            <MolduraBandeja
              key={dish.id}
              className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="group relative aspect-[4/3] overflow-hidden bg-charcoal/5">
                <img
                  src={dish.image}
                  alt={`Marmita de ${dish.name}`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 text-center">
                <h3 className="mb-4 flex min-h-[3rem] items-center justify-center font-[family-name:var(--font-headline)] text-xl font-extrabold text-charcoal">
                  {dish.name}
                </h3>
                <p className="text-sm font-medium leading-relaxed text-charcoal/60">
                  {dish.description}
                </p>
              </div>
            </MolduraBandeja>
          ))}
        </div>

        <div className="flex flex-col items-center gap-10">
          <div className="flex items-center gap-3 text-sm font-bold text-charcoal sm:text-lg">
            <IconFire className="h-6 w-6 text-brand" aria-hidden="true" />
            <span>
              E muito mais:{' '}
              <span className="text-brand-deep">35 sabores diferentes para você escolher!</span>
            </span>
          </div>
          <WhatsAppCTA className="flex items-center gap-3 rounded-full bg-brand px-12 py-5 font-[family-name:var(--font-headline)] text-xl font-extrabold uppercase text-cream shadow-[0_10px_30px_rgba(215,10,47,0.3)] transition-all hover:scale-105 hover:bg-brand-deep active:scale-95">
            Comprar agora
          </WhatsAppCTA>
        </div>
      </div>
    </section>
  );
}
