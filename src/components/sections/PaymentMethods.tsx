import {
  IconAlertTriangle,
  IconCheck,
  IconCreditCard,
  IconMoney,
  IconShield,
  IconTruck,
} from '../ui/Icons';
import { MolduraBandeja } from '../ui/BrandElements';

const METHODS = [
  { title: 'PIX', icon: IconMoney, items: ['QR Code na entrega', 'Aprovação instantânea', 'Sem taxas adicionais'] },
  { title: 'Crédito', icon: IconCreditCard, items: ['Maquininha na entrega', 'Todas as bandeiras', 'Sem taxa adicional'] },
  { title: 'Débito', icon: IconCreditCard, items: ['Maquininha na entrega', 'Todas as bandeiras', 'Sem taxas extras'] },
];

const INFO = [
  {
    icon: IconShield,
    title: 'Pedido seguro',
    desc: 'Seus dados de entrega são tratados com total sigilo. O pagamento é realizado apenas presencialmente com nosso entregador.',
  },
  {
    icon: IconMoney,
    title: 'Dica: use PIX',
    desc: 'Pagar com PIX na entrega agiliza o processo e você não precisa se preocupar com maquininhas. Simples e rápido!',
  },
  {
    icon: IconAlertTriangle,
    title: 'Atenção',
    desc: 'No momento não aceitamos parcelamento de pedidos. O pagamento é feito à vista ou no crédito em 1x.',
  },
];

export default function PaymentMethods() {
  return (
    <section
      aria-labelledby="pagamento-title"
      className="border-t border-charcoal/10 bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 space-y-4 text-center">
          <h2
            id="pagamento-title"
            className="font-[family-name:var(--font-headline)] text-3xl font-extrabold uppercase tracking-tight text-charcoal md:text-5xl"
          >
            Formas de <span className="text-brand">pagamento</span>
          </h2>
          <p className="mx-auto max-w-2xl font-medium text-charcoal/60">
            Facilitamos para você: escolha a forma que preferir no ato da entrega e garanta
            sua praticidade.
          </p>
        </div>

        <div className="mb-20">
          <MolduraBandeja className="p-8 md:p-10">
            <h3 className="mb-8 flex items-center justify-center gap-2 font-[family-name:var(--font-headline)] text-xl font-extrabold uppercase text-charcoal">
              <IconTruck className="h-6 w-6 text-brand" />
              Pagamento na entrega
            </h3>
            <div className="grid gap-8 sm:grid-cols-3">
              {METHODS.map((method) => (
                <div key={method.title} className="flex flex-col items-center text-center">
                  <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/25 text-brand-deep">
                    <method.icon className="h-7 w-7" />
                  </span>
                  <h4 className="mb-4 font-[family-name:var(--font-headline)] text-base font-extrabold text-charcoal">
                    {method.title}
                  </h4>
                  <ul className="w-full space-y-2 text-left">
                    {method.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-1.5 text-[11px] font-semibold text-charcoal/60"
                      >
                        <IconCheck className="h-3.5 w-3.5 shrink-0 text-brand" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </MolduraBandeja>
        </div>

        <div className="rounded-[2.5rem] border-2 border-charcoal/10 bg-cream/60 p-8 md:p-12">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand font-bold text-cream">
              i
            </div>
            <h4 className="font-[family-name:var(--font-headline)] text-xl font-extrabold uppercase text-charcoal">
              Informações importantes
            </h4>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {INFO.map((item) => (
              <div key={item.title} className="space-y-3">
                <p className="flex items-center gap-2 font-bold text-charcoal">
                  <item.icon className="h-5 w-5 text-brand" />
                  {item.title}
                </p>
                <p className="text-sm leading-relaxed text-charcoal/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
