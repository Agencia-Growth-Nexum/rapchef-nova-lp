import { IconCheck } from '../ui/Icons';

const BENEFITS = [
  'Congelamento rápido preserva sabor, textura e nutrientes.',
  'Zero conservantes: comida limpa, prática e confiável.',
  'Pronta em 5 minutos no micro-ondas.',
  'Sabor de comida caseira de verdade.',
  'Até 51% mais barata que delivery recorrente.',
  'Você escolhe o que quer comer e quando quer comer.',
];

export default function WhyUs() {
  return (
    <section id="por-que" aria-labelledby="whyus-title" className="section-pattern-cream py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-brand-deep">
            Por que a RapChef é diferente
          </p>
          <h2
            id="whyus-title"
            className="mt-3 font-[family-name:var(--font-headline)] text-4xl font-extrabold uppercase leading-[0.92] text-charcoal md:text-5xl"
          >
            Mais sabor, menos atrito.
          </h2>
          <ul className="mt-8 space-y-4">
            {BENEFITS.map((benefit) => (
              <li
                key={benefit}
                className="paper-card flex items-start gap-4 rounded-[1.4rem] border border-charcoal/10 bg-white px-5 py-4"
              >
                <IconCheck className="mt-0.5 h-6 w-6 shrink-0 text-brand" />
                <span className="font-semibold text-charcoal/80">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative overflow-hidden rounded-[2.2rem] border border-charcoal/10 bg-white p-4 shadow-[0_28px_70px_rgba(23,25,28,0.1)]">
          <div className="grid gap-3 rounded-[1.7rem] bg-[#fff8f1] p-3 sm:grid-cols-2">
            <img
              src="/imagens/08-02-garanta-comida-semana.webp"
              alt="Imagem original de combo semanal RapChef"
              loading="lazy"
              decoding="async"
              className="h-full min-h-44 w-full rounded-[1.4rem] object-cover"
            />
            <img
              src="/imagens/07-09-peca-pelo-app7.webp"
              alt="Imagem original de pedido RapChef pelo WhatsApp"
              loading="lazy"
              decoding="async"
              className="h-full min-h-44 w-full rounded-[1.4rem] object-cover"
            />
            <img
              src="/imagens/screenshot-3.webp"
              alt="Pratos variados RapChef"
              loading="lazy"
              decoding="async"
              className="h-full min-h-44 w-full rounded-[1.4rem] object-cover"
            />
            <img
              src="/imagens/screenshot-1.webp"
              alt="Marmitas embaladas RapChef"
              loading="lazy"
              decoding="async"
              className="h-full min-h-44 w-full rounded-[1.4rem] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
