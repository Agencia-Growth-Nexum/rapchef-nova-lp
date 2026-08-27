import { WhatsAppCTA } from '../ui/WhatsAppCTA';
import { IconMapPin } from '../ui/Icons';

const DELIVERY_IMAGE = '/imagens/05-22-aqui-e-praticidade-post.webp';

export default function Delivery() {
  return (
    <section
      aria-labelledby="delivery-title"
      className="overflow-hidden bg-cream py-12 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-charcoal p-6 shadow-2xl md:rounded-[3rem] md:p-12 lg:p-16">
          <div className="pointer-events-none absolute -mr-32 -mt-32 right-0 top-0 h-64 w-64 rounded-full bg-gold/10 blur-[100px]" />
          <div className="pointer-events-none absolute -mb-32 -ml-32 bottom-0 left-0 h-64 w-64 rounded-full bg-brand/15 blur-[100px]" />

          <div className="relative z-10 grid items-center gap-10 md:grid-cols-2 md:gap-12">
            <div className="space-y-8">
              <div className="inline-flex max-w-full items-center gap-3 rounded-full bg-gold p-[1px] shadow-[0_0_25px_rgba(242,180,65,0.3)]">
                <div className="flex items-center gap-2 overflow-hidden rounded-full bg-charcoal px-4 py-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-gold opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
                  </span>
                  <span className="text-[9px] font-extrabold uppercase leading-tight tracking-[0.1em] text-cream md:text-xs md:tracking-[0.15em]">
                    Delivery oficial da franqueadora em São Paulo
                  </span>
                </div>
              </div>

              <h2
                id="delivery-title"
                className="font-[family-name:var(--font-headline)] text-3xl font-extrabold uppercase leading-tight text-cream lg:text-5xl"
              >
                Entrega rápida
                <br />
                <span className="text-gold">&amp; segura</span>
              </h2>
              <p className="max-w-md text-base leading-relaxed text-cream/70 md:text-lg">
                Nossa logística é otimizada para que suas marmitas cheguem intactas. Usamos
                caixas térmicas e gelo seco para garantir o frescor total.
              </p>

              <div className="grid grid-cols-1 gap-6 rounded-3xl border border-charcoal/10 bg-white p-6 shadow-xl sm:grid-cols-3">
                <div>
                  <p className="text-sm font-bold leading-tight text-brand-deep">
                    Frete promocional
                  </p>
                  <p className="text-[10px] font-medium text-charcoal/60">
                    Consulte no WhatsApp
                  </p>
                </div>
                <div className="border-t border-charcoal/10 pt-4 sm:border-x sm:border-t-0 sm:px-4 sm:pt-0">
                  <p className="text-sm font-bold leading-tight text-brand-deep">
                    Embalagem térmica
                  </p>
                  <p className="text-[10px] font-medium text-charcoal/60">
                    Chega 100% congelado
                  </p>
                </div>
                <div className="border-t border-charcoal/10 pt-4 sm:border-t-0 sm:pt-0">
                  <p className="text-sm font-bold leading-tight text-brand-deep">
                    <span className="rounded bg-gold px-1 text-charcoal">Entrega</span>{' '}
                    agendada
                  </p>
                  <p className="text-[10px] font-medium text-charcoal/60">
                    Você escolhe dia e horário
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-cream">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-charcoal shadow-lg shadow-gold/20">
                  <IconMapPin className="h-5 w-5" />
                </div>
                <p className="text-base font-bold md:text-lg">
                  Atendemos São Paulo, ABC e Grande SP
                </p>
              </div>

              <WhatsAppCTA className="inline-block w-full rounded-xl bg-gold px-10 py-4 text-center font-extrabold uppercase tracking-wider text-charcoal shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-gold-soft md:w-auto">
                Chame no WhatsApp
              </WhatsAppCTA>
            </div>

            <div className="relative hidden w-full md:block">
              <div className="relative overflow-hidden rounded-3xl border-2 border-gold/40 shadow-2xl">
                <img
                  src={DELIVERY_IMAGE}
                  alt="Marmitas RapChef prontas e entregues com praticidade"
                  loading="lazy"
                  decoding="async"
                  className="block h-auto w-full object-cover"
                />
              </div>
              <div className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-gold opacity-10 blur-[80px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
