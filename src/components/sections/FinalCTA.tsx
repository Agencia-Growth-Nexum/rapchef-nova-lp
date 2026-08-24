import { trackContact } from '../../lib/fbq';
import { buildWhatsAppUrl } from '../../lib/whatsapp';

export default function FinalCTA() {
  return (
    <section
      aria-labelledby="final-cta-title"
      className="relative overflow-hidden bg-yellow-400 py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-10"
        aria-hidden="true"
      >
        <span className="text-[12rem] font-black uppercase italic tracking-tighter md:text-[20rem]">
          RAPCHEF
        </span>
      </div>
      <div className="relative z-10 mx-auto max-w-7xl space-y-8 px-4 text-center sm:px-6 lg:px-8">
        <h2
          id="final-cta-title"
          className="text-4xl font-black uppercase italic leading-none text-zinc-900 md:text-7xl"
        >
          Pronto para ganhar
          <br />
          mais tempo?
        </h2>
        <p className="mx-auto max-w-2xl text-xl font-bold text-zinc-800 md:text-2xl">
          Saúde, praticidade e muito sabor. Comece agora a comer bem todos os dias sem
          esforço.
        </p>
        <div className="flex flex-col justify-center gap-6 pt-8 sm:flex-row">
          <a
            href={buildWhatsAppUrl('Olá! Quero garantir minhas marmitas RapChef agora.')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackContact}
            className="rounded-2xl bg-zinc-900 px-12 py-6 text-2xl font-black uppercase italic text-white shadow-2xl transition hover:-translate-y-1 hover:bg-zinc-800"
          >
            Quero minhas marmitas!
          </a>
        </div>
        <p className="pt-4 text-sm font-black uppercase tracking-widest text-zinc-900">
          Entrega rápida · Satisfação garantida
        </p>
      </div>
    </section>
  );
}
