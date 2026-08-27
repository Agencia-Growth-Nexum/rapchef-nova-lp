import { WhatsAppCTA } from '../ui/WhatsAppCTA';
import { CorteDiagonal } from '../ui/BrandElements';

export default function FinalCTA() {
  return (
    <section
      aria-labelledby="final-cta-title"
      className="relative overflow-hidden bg-brand py-24"
    >
      <CorteDiagonal position="top" />
      <CorteDiagonal position="bottom" />

      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-10"
        aria-hidden="true"
      >
        <span className="font-[family-name:var(--font-headline)] text-[12rem] font-extrabold uppercase tracking-tighter text-cream md:text-[20rem]">
          RAPCHEF
        </span>
      </div>
      <div className="relative z-10 mx-auto max-w-7xl space-y-8 px-4 text-center sm:px-6 lg:px-8">
        <h2
          id="final-cta-title"
          className="font-[family-name:var(--font-headline)] text-4xl font-extrabold uppercase leading-none text-cream md:text-7xl"
        >
          Pronto para ganhar
          <br />
          mais tempo?
        </h2>
        <p className="mx-auto max-w-2xl text-xl font-bold text-cream/90 md:text-2xl">
          Saúde, praticidade e muito sabor. Comece agora a comer bem todos os dias sem
          esforço.
        </p>
        <div className="flex flex-col justify-center gap-6 pt-8 sm:flex-row">
          <WhatsAppCTA className="rounded-2xl bg-gold px-12 py-6 font-[family-name:var(--font-headline)] text-2xl font-extrabold uppercase text-charcoal shadow-2xl transition hover:-translate-y-1 hover:bg-gold-soft">
            Quero minhas marmitas!
          </WhatsAppCTA>
        </div>
        <p className="pt-4 text-sm font-extrabold uppercase tracking-widest text-cream/90">
          Entrega rápida · Satisfação garantida
        </p>
      </div>
    </section>
  );
}
