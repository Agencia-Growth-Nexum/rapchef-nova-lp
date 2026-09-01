import { WhatsAppCTA } from '../ui/WhatsAppCTA';
import {
  IconChef,
  IconClock,
  IconHome,
  IconLeaf,
  IconMoney,
  IconSnowflake,
} from '../ui/Icons';

const BENEFITS = [
  {
    title: 'Congelamento rápido',
    desc: 'Preserva sabor, textura e nutrientes sem depender de conservantes.',
    icon: IconSnowflake,
  },
  {
    title: 'Ingredientes de verdade',
    desc: 'Receitas com perfil caseiro, tempero equilibrado e preparo que dá vontade de repetir.',
    icon: IconLeaf,
  },
  {
    title: 'Pronta em 5 minutos',
    desc: 'Sai do freezer direto para o micro-ondas e resolve a refeição.',
    icon: IconClock,
  },
  {
    title: 'Sabor de rotina boa',
    desc: 'Variedade suficiente para não enjoar e manter a semana organizada.',
    icon: IconHome,
  },
  {
    title: 'Mais escolha',
    desc: 'Você monta seu mix conforme a sua semana, seu apetite e sua meta.',
    icon: IconChef,
  },
  {
    title: 'Mais economia',
    desc: 'Custa menos que delivery recorrente e reduz desperdício.',
    icon: IconMoney,
  },
];

export default function Solution() {
  return (
    <section
      id="solucao"
      aria-labelledby="solucao-title"
      className="section-pattern-dark overflow-hidden py-24 text-cream"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-gold">
            Fácil de escolher, rápido de resolver
          </p>
          <h2
            id="solucao-title"
            className="mx-auto mt-3 max-w-4xl font-[family-name:var(--font-headline)] text-4xl font-extrabold uppercase leading-[0.9] md:text-5xl"
          >
            O sabor que <span className="text-brand">facilita sua rotina.</span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.06fr_0.94fr]">
          <div className="grid gap-6">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white p-2 text-charcoal shadow-2xl sm:p-3">
              <div className="aspect-[4/5] min-h-[360px] overflow-hidden rounded-[1.6rem] sm:aspect-[16/10] lg:aspect-[5/6] lg:min-h-[460px] xl:aspect-[4/5]">
                <img
                  src="/imagens/05-22-aqui-e-praticidade-post.webp"
                  alt="Imagem original RapChef destacando praticidade no dia a dia"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white p-6 text-charcoal shadow-2xl lg:p-7">
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {BENEFITS.map((benefit) => (
                  <div key={benefit.title} className="rounded-[1.4rem] border border-charcoal/10 bg-[#fff8f1] p-5">
                    <benefit.icon className="mb-3 h-6 w-6 text-brand" />
                    <h3 className="font-[family-name:var(--font-headline)] text-xl font-extrabold uppercase leading-none text-charcoal">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-charcoal/70">
                      {benefit.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <article className="section-pattern-red flex flex-col justify-between rounded-[2rem] p-8 text-cream shadow-2xl">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-gold">
                Escolha inteligente
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-headline)] text-4xl font-extrabold uppercase leading-[0.9]">
                Mais praticidade com cara de comida feita de verdade.
              </h3>
              <p className="mt-4 text-base font-medium leading-relaxed text-cream/80">
                Combine variedade, economia e preparo rápido para ter almoço e jantar prontos
                ao longo da semana sem abrir mão de sabor.
              </p>
            </div>

            <WhatsAppCTA className="mt-8 inline-flex rounded-xl bg-gold px-7 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-charcoal transition hover:bg-gold-soft">
              Peça pelo WhatsApp
            </WhatsAppCTA>
          </article>
        </div>
      </div>
    </section>
  );
}
