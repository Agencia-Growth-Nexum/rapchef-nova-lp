import { PRICING } from '../../data/business';

const MAIN = [
  {
    title: 'Congelamento rápido',
    main: (
      <>
        Logo após o preparo, as marmitas são congeladas rapidamente, o que{' '}
        <strong className="text-zinc-900">preserva nutrientes, textura e sabor</strong> como
        no momento do cozimento.
      </>
    ),
    footer:
      'Diferente do congelamento caseiro lento, o industrial impede a formação de grandes cristais de gelo que danificam as fibras dos alimentos.',
    icon: '❄️',
  },
  {
    title: 'Zero conservantes',
    main: (
      <>
        Não usamos conservantes artificiais. O próprio congelamento preserva naturalmente os
        alimentos,{' '}
        <strong className="text-zinc-900">mantendo a comida limpa e saudável</strong>.
      </>
    ),
    footer:
      'Sem sódio extra, sem químicos, sem truques. Apenas temperatura controlada fazendo o trabalho de conservação.',
    icon: '🚫',
  },
  {
    title: 'Aquece em 5 minutos',
    main: (
      <>
        No micro-ondas, sua refeição fica pronta em minutos.{' '}
        <strong className="text-zinc-900">Sabor de comida caseira sem esforço</strong>,
        perfeito para rotinas corridas.
      </>
    ),
    footer: 'Textura e temperatura ideais. Parece que acabou de sair do fogão.',
    icon: '⏱️',
  },
];

const QUICK = [
  { icon: '⏱️', title: 'Economize até 10h por semana', desc: 'Sem ir ao mercado, sem cozinhar, sem lavar louça.' },
  { icon: '🏠', title: 'Sabor de comida caseira', desc: 'Receitas tradicionais com sabor de família.' },
  { icon: '💰', title: 'Mais barato que delivery', desc: `R$ 21,90 por marmita. Economize até ${PRICING.monthlySavings}/mês.` },
  { icon: '🍽️', title: '35 sabores diferentes', desc: 'Do virado à paulista ao bacalhau gratinado.' },
  { icon: '🗑️', title: 'Zero desperdício', desc: 'Esquente apenas o que vai comer.' },
  { icon: '⚡', title: '5 minutos e pronto', desc: 'Do congelador ao prato mais rápido que delivery.' },
  { icon: '✨', title: 'Qualidade garantida', desc: 'Marmitas bem servidas, congeladas no pico do frescor.' },
  { icon: '📅', title: 'Flexibilidade total', desc: 'Monte seu pedido como quiser, sem compromisso.' },
];

export default function WhyUs() {
  return (
    <section
      id="por-que"
      aria-labelledby="whyus-title"
      className="bg-[#F0F7FF] py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2
            id="whyus-title"
            className="text-3xl font-black uppercase italic text-zinc-900 md:text-5xl"
          >
            Por que a RapChef é diferente?
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-20 rounded-full bg-yellow-400" />
        </div>

        <div className="mb-20 grid gap-8 md:grid-cols-3">
          {MAIN.map((b, i) => (
            <div
              key={i}
              className="flex flex-col rounded-[2.5rem] border border-white bg-white p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-2xl"
            >
              <span className="mb-6 text-4xl" aria-hidden="true">
                {b.icon}
              </span>
              <h3 className="mb-6 text-2xl font-black text-zinc-900">{b.title}</h3>
              <p className="mb-8 text-lg leading-relaxed text-zinc-500">{b.main}</p>
              <div className="mb-8 mt-auto w-full border-t border-zinc-100" />
              <p className="text-sm italic leading-relaxed text-zinc-400">{b.footer}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {QUICK.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-3xl border border-zinc-100 bg-white p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1"
            >
              <span className="mb-4 text-4xl" aria-hidden="true">
                {item.icon}
              </span>
              <h3 className="mb-3 text-lg font-black leading-tight text-zinc-900">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
