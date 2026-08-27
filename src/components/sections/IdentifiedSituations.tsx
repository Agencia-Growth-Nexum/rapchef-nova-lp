import { MolduraBandeja } from '../ui/BrandElements';
import { IconChef, IconLeaf, IconMoney, IconShield } from '../ui/Icons';

const SITUATIONS = [
  {
    icon: IconChef,
    text: 'Vive pedindo fast-food por falta de tempo para cozinhar?',
  },
  {
    icon: IconLeaf,
    text: 'Vê os vegetais estragarem na geladeira toda semana?',
  },
  {
    icon: IconShield,
    text: 'Sente culpa por não conseguir manter uma dieta saudável?',
  },
  {
    icon: IconMoney,
    text: 'Gasta mais de R$ 800 por mês com apps de delivery?',
  },
];

export default function IdentifiedSituations() {
  return (
    <section
      aria-labelledby="situacoes-title"
      className="relative overflow-hidden bg-cream py-24"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2
            id="situacoes-title"
            className="font-[family-name:var(--font-headline)] text-3xl font-extrabold uppercase leading-tight text-charcoal md:text-5xl"
          >
            Você se identifica com alguma dessas{' '}
            <span className="text-brand-deep">situações?</span>
          </h2>
        </div>

        <div className="mb-16 grid gap-8 md:grid-cols-2">
          {SITUATIONS.map((item) => (
            <MolduraBandeja key={item.text} className="p-8">
              <div className="flex items-center gap-6">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gold/20 text-brand-deep">
                  <item.icon className="h-8 w-8" />
                </span>
                <p className="text-xl font-bold text-charcoal/80">{item.text}</p>
              </div>
            </MolduraBandeja>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-[2.5rem] bg-charcoal p-8 text-center shadow-2xl md:p-12">
          <div className="relative z-10 mx-auto max-w-3xl space-y-6">
            <h3 className="font-[family-name:var(--font-headline)] text-2xl font-extrabold uppercase leading-tight text-cream md:text-3xl">
              A verdade é: <span className="text-gold">a culpa não é sua.</span>
            </h3>
            <p className="text-lg font-medium text-cream/80 md:text-xl">
              A RapChef foi criada para que você recupere o controle do seu tempo sem abrir
              mão da saúde e do prazer de comer bem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
