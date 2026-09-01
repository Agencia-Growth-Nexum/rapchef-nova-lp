import { WhatsAppCTA } from '../ui/WhatsAppCTA';
import { IconMapPin } from '../ui/Icons';

const ITEMS = [
  'Pedido bem embalado em caixas e bolsas térmicas.',
  'Entrega combinada para encaixar na sua rotina.',
  'Chega pronto para ir ao freezer sem complicação.',
];

export default function Delivery() {
  return (
    <section aria-labelledby="delivery-title" className="section-pattern-red overflow-hidden py-24 text-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="relative order-2 lg:order-1">
            <img
              src="/imagens/05-22-aqui-e-praticidade-post.webp"
              alt="Imagem original RapChef de marmitas prontas com foco em praticidade"
              loading="lazy"
              decoding="async"
              className="w-full rounded-[2rem] border border-white/12 bg-black/10 shadow-2xl"
            />
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-gold">
              Entrega rápida e segura
            </p>
            <h2
              id="delivery-title"
              className="mt-3 font-[family-name:var(--font-headline)] text-4xl font-extrabold uppercase leading-[0.92] md:text-5xl"
            >
              Do pedido ao seu freezer, sem fricção.
            </h2>
            <p className="mt-4 max-w-xl text-lg font-medium leading-relaxed text-cream/82">
              Embalamos tudo para chegar 100% congelado, bem protegido e pronto para entrar no
              seu freezer sem bagunçar sua agenda.
            </p>

            <div className="mt-8 grid gap-4">
              {ITEMS.map((item) => (
                <div key={item} className="rounded-[1.4rem] border border-white/12 bg-white/8 px-5 py-4 backdrop-blur-sm">
                  <p className="font-semibold text-cream/90">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3 text-gold">
              <IconMapPin className="h-5 w-5" />
              <span className="text-sm font-extrabold uppercase tracking-[0.14em] text-cream">
                Atendemos São Paulo, ABC e Grande SP
              </span>
            </div>

            <WhatsAppCTA className="mt-8 inline-flex rounded-xl bg-white px-8 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-brand transition hover:bg-[#fff2e4]">
              Fazer meu pedido
            </WhatsAppCTA>
          </div>
        </div>
      </div>
    </section>
  );
}
