import { smoothScrollTo } from '../../utils/smoothScroll';
import { SeloAcao } from '../ui/BrandElements';
import { WhatsAppCTA } from '../ui/WhatsAppCTA';
import {
  IconCheck,
  IconFire,
  IconStar,
  IconTruck,
  IconWhatsApp,
} from '../ui/Icons';

const VIDEO = '/imagens/marmita-01-compress.mp4';
const POSTER = '/imagens/marmita-01-poster.webp';

const BULLETS = [
  '35 sabores — da feijoada ao bacalhau gratinado',
  'R$ 21,90 por refeição — até 51% mais barato que delivery',
  'Zero conservantes · validade de 6 meses no freezer',
];

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-cream">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
          {/* Conteúdo */}
          <div className="space-y-7">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-charcoal px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-cream">
                <IconTruck className="h-3.5 w-3.5 text-gold" />
                Entrega em SP · Grande SP · ABC
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-charcoal/15 bg-white px-3 py-1.5 text-xs font-bold text-charcoal">
                <span className="flex text-gold" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <IconStar key={i} className="h-3.5 w-3.5" />
                  ))}
                </span>
                4.9/5.0 no Google
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-headline)] text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-charcoal md:text-6xl lg:text-7xl">
              Comida de verdade, pronta em{' '}
              <span className="text-brand">5 minutos</span>
            </h1>

            <p className="max-w-lg text-lg font-medium text-charcoal/70 md:text-xl">
              Marmitas gourmet e fitness congeladas com sabor de comida caseira.
              Entregamos em casa e você paga até 51% menos que delivery.
            </p>

            <ul className="space-y-3 font-semibold text-charcoal">
              {BULLETS.map((bullet) => (
                <li key={bullet} className="flex items-center gap-3">
                  <IconCheck className="h-5 w-5 shrink-0 text-brand" />
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-4 pt-1 sm:flex-row">
              <WhatsAppCTA className="animate-bright-pulse flex items-center justify-center gap-2 rounded-xl bg-gold px-8 py-4 text-center text-lg font-extrabold uppercase text-charcoal shadow-[0_15px_40px_rgba(242,180,65,0.45)] transition hover:bg-[#E5A33A]">
                <IconWhatsApp className="h-6 w-6" />
                Garantir pelo WhatsApp
              </WhatsAppCTA>
              <a
                href="#planos"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo('planos');
                }}
                className="flex items-center justify-center gap-2 rounded-xl border-2 border-charcoal bg-white/60 px-8 py-4 text-center text-lg font-extrabold uppercase text-charcoal transition hover:bg-charcoal hover:text-cream"
              >
                Ver Combos
              </a>
            </div>

            {/* Destaque da oferta principal */}
            <div className="inline-flex flex-wrap items-center gap-2 rounded-2xl border border-gold/50 bg-white/70 px-4 py-3 text-sm font-bold text-charcoal">
              <IconFire className="h-5 w-5 text-brand" />
              <span>
                Combo Mensal (20 marmitas) com{' '}
                <span className="uppercase text-brand-deep">frete grátis</span> — R$ 438
              </span>
            </div>
          </div>

          {/* Mídia — comida protagonista */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border-2 border-charcoal bg-charcoal shadow-[0_30px_80px_rgba(23,25,28,0.28)] lg:aspect-[5/4]">
              {/* Mobile: imagem estática (poster) — evita baixar o vídeo no mobile */}
              <img
                src={POSTER}
                alt="Marmita RapChef gourmet pronta para aquecer"
                fetchPriority="high"
                className="h-full w-full object-cover lg:hidden"
              />
              {/* Desktop: vídeo leve com overlay claro.
                  Callback ref força muted=true e dispara play() — o React não
                  reflete o atributo `muted` no DOM, o que bloqueia o autoplay. */}
              <video
                ref={(el) => {
                  if (el) {
                    el.muted = true;
                    el.play().catch(() => {});
                  }
                }}
                src={VIDEO}
                poster={POSTER}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="hidden h-full w-full object-cover lg:block"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/45 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block rounded-full bg-gold px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-charcoal">
                  Sabor de comida caseira
                </span>
              </div>
            </div>

            <SeloAcao
              size="md"
              className="absolute -left-5 -top-5 hidden md:flex"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
