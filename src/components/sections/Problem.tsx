import { WhatsAppCTA } from '../ui/WhatsAppCTA';
import { IconX } from '../ui/Icons';

const PROBLEMS = [
  'Gastando fortunas com delivery e refeições improvisadas.',
  'Perdendo tempo cozinhando, limpando e repetindo a mesma rotina cansativa.',
  'Desistindo de comer bem por falta de praticidade no dia a dia.',
];

export default function Problem() {
  return (
    <section
      id="problema"
      aria-labelledby="problema-title"
      className="section-pattern-dark overflow-hidden py-20 text-cream"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-6">
            <span className="inline-flex rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-gold">
              Quem prova, volta
            </span>
            <h2
              id="problema-title"
              className="max-w-lg font-[family-name:var(--font-headline)] text-4xl font-extrabold uppercase leading-[0.9] md:text-5xl"
            >
              Sem tempo para cozinhar não precisa virar <span className="text-brand">pedido sem graça.</span>
            </h2>
            <p className="max-w-xl text-lg font-medium leading-relaxed text-cream/72">
              A RapChef entra exatamente no ponto em que sua rotina trava: quando você quer
              praticidade, mas não quer abrir mão de comer bem.
            </p>
            <ul className="space-y-4">
              {PROBLEMS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-[1.4rem] border border-white/10 bg-white/5 px-4 py-4"
                >
                  <IconX className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span className="font-semibold text-cream/85">{item}</span>
                </li>
              ))}
            </ul>
            <WhatsAppCTA className="inline-flex rounded-xl bg-brand px-8 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-cream shadow-[0_18px_40px_rgba(215,10,47,0.28)] transition hover:bg-brand-deep">
              Quero praticidade agora
            </WhatsAppCTA>
          </div>

          <div className="grid gap-6 xl:grid-cols-[minmax(0,1.12fr)_minmax(320px,0.88fr)]">
            <div className="grid gap-4 md:grid-cols-[minmax(0,0.88fr)_minmax(320px,1.12fr)] md:items-stretch">
              <div className="rounded-[2rem] border border-white/10 bg-white p-6 text-charcoal shadow-2xl md:p-7 lg:p-8">
                <div className="space-y-3">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-brand-deep">
                    Prova social
                  </p>
                  <h3 className="font-[family-name:var(--font-headline)] text-2xl font-extrabold uppercase leading-none">
                    Clientes reais voltam porque a rotina muda.
                  </h3>
                  <p className="text-sm font-medium leading-relaxed text-charcoal/70">
                    Clientes elogiam sabor, praticidade e a sensação de ter a semana resolvida
                    sem depender de delivery caro todos os dias.
                  </p>
                </div>
              </div>
              <div className="grid gap-3 rounded-[2rem] border border-white/10 bg-[#fff8f1] p-3 shadow-2xl md:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)] md:grid-rows-2">
                <div className="col-span-2 overflow-hidden rounded-[1.4rem] md:col-span-1 md:row-span-2 md:min-h-[360px]">
                  <img
                    src="/imagens/screenshot-2.webp"
                    alt="Marmita RapChef pronta para consumo"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="overflow-hidden rounded-[1.4rem] aspect-[4/5] min-h-[190px] md:min-h-[174px]">
                  <img
                    src="/imagens/screenshot-1.webp"
                    alt="Embalagens de marmitas RapChef"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="overflow-hidden rounded-[1.4rem] aspect-[4/5] min-h-[190px] md:min-h-[174px]">
                  <img
                    src="/imagens/screenshot-3.webp"
                    alt="Variedade de pratos RapChef"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            <div className="section-pattern-red grid gap-6 overflow-hidden rounded-[2rem] p-6 text-cream shadow-2xl md:grid-cols-[minmax(0,0.78fr)_minmax(280px,1.22fr)] md:items-center md:p-7">
              <div className="relative z-10 max-w-[16rem] space-y-3 md:max-w-[17rem]">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-gold">
                  Pronto em minutos
                </p>
                <h3 className="font-[family-name:var(--font-headline)] text-3xl font-extrabold uppercase leading-[0.9]">
                  Pedido sem graça, nunca mais.
                </h3>
              </div>

              <div className="min-h-[260px] overflow-hidden rounded-[1.6rem] bg-white/5 p-3 sm:min-h-[320px] md:min-h-[360px]">
                <img
                  src="/imagens/08-02-garanta-comida-semana.webp"
                  alt="Montagem original de marmitas RapChef para a semana"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
