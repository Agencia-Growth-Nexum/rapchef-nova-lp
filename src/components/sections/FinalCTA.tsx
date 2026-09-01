import { WhatsAppCTA } from '../ui/WhatsAppCTA';

export default function FinalCTA() {
  return (
    <section aria-labelledby="final-cta-title" className="section-pattern-red relative overflow-hidden py-24 text-cream">
      <div className="absolute right-0 top-0 hidden h-full w-[42%] lg:block">
        <img
          src="/imagens/08-02-garanta-comida-semana.webp"
          alt="Imagem original RapChef com marmitas da semana"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover opacity-30"
        />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-gold">
          Peça quando quiser
        </p>
        <h2
          id="final-cta-title"
          className="mx-auto mt-3 max-w-4xl font-[family-name:var(--font-headline)] text-4xl font-extrabold uppercase leading-[0.9] md:text-6xl"
        >
          Comida boa para ganhar tempo de verdade.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg font-medium text-cream/84 md:text-xl">
          Organize a semana, economize tempo e tenha sempre uma refeição de verdade pronta em
          poucos minutos.
        </p>
        <WhatsAppCTA className="mt-8 inline-flex rounded-xl bg-gold px-10 py-5 text-base font-extrabold uppercase tracking-[0.18em] text-charcoal transition hover:bg-gold-soft">
          Quero montar meu pedido
        </WhatsAppCTA>
      </div>
    </section>
  );
}
