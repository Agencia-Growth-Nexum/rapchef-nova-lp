import { trackContact } from '../../lib/fbq';
import { buildWhatsAppUrl } from '../../lib/whatsapp';

const DELIVERY_IMAGE = '/imagens/05-22-aqui-e-praticidade-post.webp';

export default function Delivery() {
  return (
    <section
      aria-labelledby="delivery-title"
      className="overflow-hidden bg-zinc-50 py-12 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#121214] p-6 shadow-2xl md:rounded-[3rem] md:p-12 lg:p-16">
          <div className="pointer-events-none absolute -mr-32 -mt-32 right-0 top-0 h-64 w-64 rounded-full bg-yellow-400/10 blur-[100px]" />
          <div className="pointer-events-none absolute -mb-32 -ml-32 bottom-0 left-0 h-64 w-64 rounded-full bg-amber-600/10 blur-[100px]" />

          <div className="relative z-10 grid items-center gap-10 md:grid-cols-2 md:gap-12">
            <div className="space-y-8">
              <div className="inline-flex max-w-full items-center gap-3 rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 p-[1px] shadow-[0_0_25px_rgba(251,191,36,0.3)]">
                <div className="flex items-center gap-2 overflow-hidden rounded-full bg-zinc-900 px-4 py-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-yellow-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-500" />
                  </span>
                  <span className="text-[9px] font-black uppercase leading-tight tracking-[0.1em] text-white md:text-xs md:tracking-[0.15em]">
                    Delivery oficial da franqueadora em São Paulo
                  </span>
                </div>
              </div>

              <h2
                id="delivery-title"
                className="text-3xl font-black uppercase italic leading-tight text-white lg:text-5xl"
              >
                Entrega rápida
                <br />
                <span className="text-yellow-400">&amp; segura</span>
              </h2>
              <p className="max-w-md text-base leading-relaxed text-zinc-400 md:text-lg">
                Nossa logística é otimizada para que suas marmitas cheguem intactas. Usamos
                caixas térmicas e gelo seco para garantir o frescor total.
              </p>

              <div className="grid grid-cols-1 gap-6 rounded-3xl border border-zinc-100 bg-white p-6 shadow-xl sm:grid-cols-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl" aria-hidden="true">
                    🚚
                  </span>
                  <div>
                    <p className="text-sm font-bold leading-tight text-[#8B1A1A]">
                      Frete promocional
                    </p>
                    <p className="text-[10px] font-medium text-zinc-500">
                      Consulte no WhatsApp
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 border-t border-zinc-100 pt-4 sm:border-x sm:border-t-0 sm:px-4 sm:pt-0">
                  <span className="text-3xl" aria-hidden="true">
                    ❄️
                  </span>
                  <div>
                    <p className="text-sm font-bold leading-tight text-[#8B1A1A]">
                      Embalagem térmica
                    </p>
                    <p className="text-[10px] font-medium text-zinc-500">
                      Chega 100% congelado
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 border-t border-zinc-100 pt-4 sm:border-t-0 sm:pt-0">
                  <span className="text-3xl" aria-hidden="true">
                    📅
                  </span>
                  <div>
                    <p className="text-sm font-bold leading-tight text-[#8B1A1A]">
                      <span className="rounded bg-yellow-400 px-1 text-zinc-900">
                        Entrega
                      </span>{' '}
                      agendada
                    </p>
                    <p className="text-[10px] font-medium text-zinc-500">
                      Você escolhe dia e horário
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-white">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-zinc-900 shadow-lg shadow-yellow-400/20">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <p className="text-base font-bold md:text-lg">
                  Atendemos São Paulo, ABC e Grande SP
                </p>
              </div>

              <a
                href={buildWhatsAppUrl('Olá! Gostaria de verificar a taxa de entrega para o meu CEP.')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackContact}
                className="inline-block w-full rounded-xl bg-white px-10 py-4 text-center font-black uppercase tracking-wider text-zinc-900 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 md:w-auto"
              >
                Chame no WhatsApp
              </a>
            </div>

            <div className="relative hidden w-full md:block">
              <div className="relative overflow-hidden rounded-3xl border-[3px] border-[#4d442e] shadow-2xl">
                <img
                  src={DELIVERY_IMAGE}
                  alt="Marmitas RapChef prontas e entregues com praticidade"
                  loading="lazy"
                  decoding="async"
                  className="block h-auto w-full object-cover"
                />
              </div>
              <div className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-yellow-400 opacity-10 blur-[80px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
