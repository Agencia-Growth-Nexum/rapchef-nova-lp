import { IconCheck } from '../ui/Icons';

const BENEFITS = [
  'Congelamento rápido que preserva sabor, textura e nutrientes',
  'Zero conservantes — comida limpa e saudável',
  'Pronto em 5 minutos no micro-ondas',
  'Sabor de comida caseira de verdade',
  'Até 51% mais barato que delivery — economize até R$ 362/mês',
  '35 sabores para nunca enjoar',
  'Zero desperdício — esquente só o que vai comer',
  'Monte seu pedido como quiser, sem compromisso',
];

export default function WhyUs() {
  return (
    <section
      id="por-que"
      aria-labelledby="whyus-title"
      className="bg-cream py-24"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2
            id="whyus-title"
            className="font-[family-name:var(--font-headline)] text-3xl font-extrabold uppercase text-charcoal md:text-5xl"
          >
            Por que a RapChef é diferente?
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-20 rounded-full bg-gold" />
        </div>

        <ul className="space-y-4">
          {BENEFITS.map((benefit) => (
            <li
              key={benefit}
              className="flex items-start gap-4 rounded-2xl border border-charcoal/10 bg-white px-6 py-4"
            >
              <IconCheck className="mt-0.5 h-6 w-6 shrink-0 text-brand" />
              <span className="text-lg font-semibold text-charcoal/80">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
