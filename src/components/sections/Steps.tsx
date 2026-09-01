import { IconChef, IconFire, IconSnowflake, IconTruck } from '../ui/Icons';

const STEPS = [
  { title: 'Escolha seus pratos', desc: 'Selecione as refeições ideais para sua rotina.', icon: IconChef },
  { title: 'A gente entrega', desc: 'Receba tudo congelado e bem acondicionado.', icon: IconTruck },
  { title: 'Congele e aproveite', desc: 'Organize sua semana com validade longa no freezer.', icon: IconSnowflake },
  { title: 'Aqueça e saboreie', desc: 'Em poucos minutos, a refeição está pronta.', icon: IconFire },
];

export default function Steps() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="steps-title"
      className="section-pattern-cream scroll-mt-24 py-24 md:scroll-mt-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-brand-deep">
            Como funciona
          </p>
          <h2
            id="steps-title"
            className="mt-3 font-[family-name:var(--font-headline)] text-4xl font-extrabold uppercase text-charcoal md:text-5xl"
          >
            Rápido de resolver.
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <article
              key={step.title}
              className="paper-card relative rounded-[1.8rem] border border-charcoal/10 bg-white p-6 text-center"
            >
              <span className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-charcoal text-gold">
                <step.icon className="h-7 w-7" />
              </span>
              <p className="text-[2.5rem] font-[family-name:var(--font-headline)] font-extrabold leading-none text-brand">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-headline)] text-2xl font-extrabold uppercase leading-none text-charcoal">
                {step.title}
              </h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-charcoal/68">
                {step.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
