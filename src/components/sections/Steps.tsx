import { IconArrowRight, IconChef, IconFire, IconSnowflake, IconTruck } from '../ui/Icons';

const STEPS = [
  { title: 'Escolha seus pratos', desc: 'Selecione entre 35 opções deliciosas do nosso catálogo.', icon: IconChef },
  { title: 'Nós entregamos', desc: 'Receba no conforto da sua casa em embalagens térmicas especiais.', icon: IconTruck },
  { title: 'Armazene no freezer', desc: 'Mantenha congelado para garantir a validade de 6 meses e o frescor.', icon: IconSnowflake },
  { title: 'Aqueça e saboreie', desc: 'Apenas 5 minutos no micro-ondas e sua refeição gourmet está pronta!', icon: IconFire },
];

export default function Steps() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="steps-title"
      className="scroll-mt-24 bg-cream py-20 md:scroll-mt-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="steps-title"
          className="mb-16 text-center font-[family-name:var(--font-headline)] text-3xl font-extrabold uppercase text-charcoal md:text-4xl"
        >
          Como funciona? É vapt-vupt!
        </h2>
        <div className="grid gap-10 md:grid-cols-4">
          {STEPS.map((step, index) => (
            <div key={index} className="relative space-y-4 text-center">
              <div className="mx-auto flex h-20 w-20 -rotate-3 items-center justify-center rounded-2xl bg-charcoal text-gold shadow-lg transition hover:rotate-0">
                <step.icon className="h-9 w-9" />
              </div>
              <span
                className="block font-[family-name:var(--font-headline)] text-5xl font-extrabold leading-none text-gold"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-[family-name:var(--font-headline)] text-xl font-extrabold uppercase text-charcoal">
                {step.title}
              </h3>
              <p className="text-charcoal/60">{step.desc}</p>
              {index < 3 && (
                <div
                  className="absolute -right-4 top-10 hidden text-2xl text-gold lg:block"
                  aria-hidden="true"
                >
                  <IconArrowRight className="h-6 w-6" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
