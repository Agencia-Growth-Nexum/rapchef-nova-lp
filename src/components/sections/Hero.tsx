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

const MINI_STATS = [
  'Comida caseira',
  'Pronta em 5 min',
  'Pagamento na entrega',
];

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-cream">
      <div className="section-slash-bottom" aria-hidden="true" />
      <div className="absolute inset-y-0 right-0 hidden w-[44vw] bg-brand lg:block" aria-hidden="true" />
      <div className="absolute inset-y-0 left-0 hidden w-[40vw] section-dots opacity-30 lg:block" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 pb-18 pt-8 sm:px-6 lg:px-8 lg:pb-28 lg:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] lg:gap-12">
          {/* Conteúdo */}
          <div className="relative z-10 space-y-7">
            <div className="flex flex-wrap items-center gap-2">
              <span className="kicker bg-charcoal text-cream">
                <IconTruck className="h-3.5 w-3.5 text-gold" />
                Entrega em SP · Grande SP · ABC
              </span>
              <span className="kicker">
                <span className="flex text-gold" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <IconStar key={i} className="h-3.5 w-3.5" />
                  ))}
                </span>
                4.9/5.0 no Google
              </span>
            </div>

            <h1 className="max-w-xl font-[family-name:var(--font-headline)] text-[3.2rem] font-extrabold uppercase leading-[0.88] tracking-tight text-charcoal sm:text-[4.2rem] lg:text-[5.4rem]">
              Comida de
              <br />
              verdade,
              <br />
              pronta pra{' '}
              <span className="text-brand">salvar seu dia.</span>
            </h1>

            <p className="max-w-lg text-lg font-semibold leading-relaxed text-charcoal/72 md:text-xl">
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
              <WhatsAppCTA className="flex items-center justify-center gap-2 rounded-xl bg-brand px-8 py-4 text-center text-base font-extrabold uppercase tracking-[0.14em] text-cream shadow-[0_18px_40px_rgba(215,10,47,0.35)] transition hover:-translate-y-0.5 hover:bg-brand-deep">
                <IconWhatsApp className="h-6 w-6" />
                Montar meu pedido
              </WhatsAppCTA>
              <a
                href="#planos"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo('planos');
                }}
                className="flex items-center justify-center gap-2 rounded-xl border-2 border-charcoal bg-white/82 px-8 py-4 text-center text-base font-extrabold uppercase tracking-[0.14em] text-charcoal transition hover:bg-charcoal hover:text-cream"
              >
                Ver Combos
              </a>
            </div>

            <div className="grid max-w-xl grid-cols-1 gap-3 pt-1 sm:grid-cols-3">
              {MINI_STATS.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.4rem] border border-charcoal/10 bg-white/78 px-4 py-3 text-center text-xs font-extrabold uppercase tracking-[0.12em] text-charcoal shadow-[0_12px_24px_rgba(23,25,28,0.06)] backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Destaque da oferta principal */}
            <div className="inline-flex flex-wrap items-center gap-2 rounded-2xl border border-gold/50 bg-white/78 px-4 py-3 text-sm font-bold text-charcoal shadow-[0_16px_35px_rgba(23,25,28,0.07)]">
              <IconFire className="h-5 w-5 text-brand" />
              <span>
                Combo Mensal (30 refeições) com{' '}
                <span className="uppercase text-brand-deep">frete grátis</span> — R$ 477
              </span>
            </div>
          </div>

          {/* Mídia — comida protagonista */}
          <div className="relative lg:pl-6">
            <div className="relative aspect-[4/4.25] overflow-hidden rounded-[2.2rem] border-2 border-charcoal bg-charcoal shadow-[0_32px_90px_rgba(23,25,28,0.26)] lg:aspect-[5/4.7]">
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
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-transparent to-transparent" />
              <div className="absolute inset-y-0 left-0 w-10 bg-brand lg:w-14" aria-hidden="true" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                <span className="inline-block rounded-full bg-gold px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-charcoal">
                  Sabor de comida caseira
                </span>
                <div className="hidden rounded-full border-2 border-gold bg-charcoal/88 px-4 py-3 text-center text-[0.62rem] font-extrabold uppercase tracking-[0.16em] text-cream shadow-xl sm:block">
                  Qualidade validada<br />
                  <span className="text-gold">sabor de verdade</span>
                </div>
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
