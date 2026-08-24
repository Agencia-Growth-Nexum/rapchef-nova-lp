import { trackContact } from '../../lib/fbq';
import { smoothScrollTo } from '../../utils/smoothScroll';

const VIDEO = '/imagens/marmita-01-compress.mp4';
const POSTER = '/imagens/marmita-01-poster.webp';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-zinc-900 pt-16 lg:py-32"
    >
      {/* Vídeo único: renderizado apenas no desktop, com poster de fallback.
          preload="metadata" evita baixar o vídeo inteiro até o usuário interagir. */}
      <div className="absolute inset-0 hidden lg:block" aria-hidden="true">
        <video
          src={VIDEO}
          poster={POSTER}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
      </div>

      {/* Fallback mobile: imagem estática (poster) — evita baixar 500KB de vídeo no mobile */}
      <div className="absolute inset-0 lg:hidden" aria-hidden="true">
        <img
          src={POSTER}
          alt=""
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-8">
        <div className="lg:flex lg:items-center lg:gap-12">
          <div className="space-y-8 lg:w-3/5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-block rounded bg-yellow-400 px-3 py-1 text-xs font-black uppercase tracking-widest text-zinc-900">
                Entrega em SP · Grande SP · ABC
              </span>
              <span className="inline-flex items-center gap-1.5 rounded bg-white/10 px-3 py-1 text-xs font-bold text-white">
                <span aria-hidden="true" className="text-yellow-400">
                  ★★★★★
                </span>
                4.9/5.0 no Google
              </span>
            </div>

            <h1 className="text-5xl font-black uppercase italic leading-tight text-white drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)] md:text-6xl lg:text-7xl">
              Comida de verdade, pronta em{' '}
              <span className="text-yellow-400">5 minutos</span>
            </h1>

            <p className="max-w-lg text-lg font-medium text-zinc-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] md:text-xl">
              Marmitas gourmet e fitness congeladas com sabor de comida caseira.
              Entregamos em casa e você paga até 51% menos que delivery.
            </p>

            <ul className="space-y-3 font-semibold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              <li className="flex items-center gap-2">
                <span className="text-yellow-400" aria-hidden="true">
                  ✓
                </span>{' '}
                35 sabores — da feijoada ao bacalhau gratinado
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-400" aria-hidden="true">
                  ✓
                </span>{' '}
                R$ 21,90 por refeição — até 51% mais barato que delivery
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-400" aria-hidden="true">
                  ✓
                </span>{' '}
                Zero conservantes · validade de 6 meses no freezer
              </li>
            </ul>

            <div className="flex flex-col gap-4 pt-2 sm:flex-row">
              <a
                href="https://wa.me/5511988504312?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20garantir%20minhas%20marmitas."
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackContact}
                className="animate-bright-pulse flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-8 py-4 text-center text-lg font-black uppercase text-zinc-900 shadow-[0_15px_40px_rgba(0,0,0,0.6)] transition hover:bg-yellow-500"
              >
                Garantir pelo WhatsApp
              </a>
              <a
                href="#planos"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo('planos');
                }}
                className="flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-white/5 px-8 py-4 text-center text-lg font-black uppercase text-white backdrop-blur transition hover:bg-white/15"
              >
                Ver Combos
              </a>
            </div>

            {/* Destaque da oferta principal perto do hero */}
            <div className="inline-flex flex-wrap items-center gap-2 rounded-2xl border border-yellow-400/40 bg-black/40 px-4 py-3 text-sm font-bold text-yellow-300 backdrop-blur">
              <span aria-hidden="true">🔥</span>
              <span>
                Combo Mensal (20 marmitas) com{' '}
                <span className="uppercase text-yellow-400">frete grátis</span> —
                R$ 438
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
