import {
  IconCreditCard,
  IconMoney,
  IconShield,
  IconTruck,
} from '../ui/Icons';

const METHODS = [
  { title: 'PIX', icon: IconMoney },
  { title: 'Cartão de crédito', icon: IconCreditCard },
  { title: 'Cartão de débito', icon: IconCreditCard },
];

export default function PaymentMethods() {
  return (
    <section aria-labelledby="pagamento-title" className="section-pattern-dark py-24 text-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-gold">
            Formas de pagamento
          </p>
          <h2
            id="pagamento-title"
            className="mt-3 font-[family-name:var(--font-headline)] text-4xl font-extrabold uppercase leading-[0.92] md:text-5xl"
          >
            Simples na compra, leve na rotina.
          </h2>
          <p className="mt-4 max-w-lg text-lg font-medium leading-relaxed text-cream/76">
            Escolha Pix, crédito ou débito na entrega e finalize seu pedido com a forma que for
            mais confortável para você.
          </p>

          <div className="mt-8 grid gap-4">
            {METHODS.map((method) => (
              <div
                key={method.title}
                className="flex items-center gap-4 rounded-[1.5rem] border border-white/12 bg-white/6 px-5 py-4"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand">
                  <method.icon className="h-6 w-6" />
                </span>
                <span className="font-[family-name:var(--font-headline)] text-2xl font-extrabold uppercase leading-none">
                  {method.title}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3 rounded-[1.4rem] border border-gold/20 bg-gold/10 px-5 py-4 text-gold">
            <IconTruck className="h-5 w-5" />
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-cream">
              Pagamento acontece na entrega
            </p>
          </div>
        </div>

        <div className="grid gap-5">
          <img
            src="/imagens/07-09-peca-pelo-app7.webp"
            alt="Imagem original RapChef de pedido pelo WhatsApp"
            loading="lazy"
            decoding="async"
            className="h-full max-h-[23rem] w-full rounded-[2rem] border border-white/10 object-cover shadow-2xl"
          />
          <div className="rounded-[2rem] border border-white/10 bg-white text-charcoal shadow-2xl">
            <div className="p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-cream">
                  <IconShield className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-brand-deep">
                    Compra segura
                  </p>
                  <h3 className="font-[family-name:var(--font-headline)] text-2xl font-extrabold uppercase leading-none text-charcoal">
                    Sem surpresa na finalização.
                  </h3>
                </div>
              </div>
              <p className="mt-4 text-sm font-medium leading-relaxed text-charcoal/70">
                Sem checkout complicado: você conversa com a equipe, monta o pedido e paga só
                quando receber suas marmitas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
