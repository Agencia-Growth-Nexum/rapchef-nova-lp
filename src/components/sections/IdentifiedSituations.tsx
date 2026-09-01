import { IconChef, IconLeaf, IconMoney, IconShield } from '../ui/Icons';

const SITUATIONS = [
  {
    icon: IconChef,
    text: 'Quer praticidade sem abrir mão do sabor de comida de verdade.',
  },
  {
    icon: IconLeaf,
    text: 'Precisa de refeições organizadas para a semana sem desperdício.',
  },
  {
    icon: IconShield,
    text: 'Busca uma solução confiável, com armazenamento simples e preparo rápido.',
  },
  {
    icon: IconMoney,
    text: 'Quer gastar menos do que gastaria pedindo delivery todos os dias.',
  },
];

export default function IdentifiedSituations() {
  return (
    <section
      aria-labelledby="situacoes-title"
      className="section-pattern-cream overflow-hidden py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-brand-deep">
            Seu ritmo, seu jeito
          </p>
          <h2
            id="situacoes-title"
            className="mx-auto mt-3 max-w-3xl font-[family-name:var(--font-headline)] text-4xl font-extrabold uppercase leading-[0.92] text-charcoal md:text-5xl"
          >
            Seu cardápio, <span className="text-brand">do seu jeito.</span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {SITUATIONS.map((item) => (
            <article
              key={item.text}
              className="paper-card rounded-[1.8rem] border border-charcoal/10 bg-white p-6"
            >
              <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-cream shadow-[0_12px_25px_rgba(215,10,47,0.22)]">
                <item.icon className="h-6 w-6" />
              </span>
              <p className="text-base font-bold leading-relaxed text-charcoal/80">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] border border-brand/15 bg-[#fff8f1] p-8 text-center md:p-10">
          <h3 className="font-[family-name:var(--font-headline)] text-3xl font-extrabold uppercase text-charcoal">
            A RapChef resolve a rotina sem sacrificar o sabor.
          </h3>
          <p className="mx-auto mt-4 max-w-3xl text-lg font-medium leading-relaxed text-charcoal/72">
            Você escolhe os pratos, organiza a semana e deixa sempre uma refeição boa pronta
            quando o dia apertar.
          </p>
        </div>
      </div>
    </section>
  );
}
