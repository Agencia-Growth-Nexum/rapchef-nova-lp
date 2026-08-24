const SITUATIONS = [
  { icon: '🍕', text: 'Vive pedindo fast-food por falta de tempo para cozinhar?' },
  { icon: '🥦', text: 'Vê os vegetais estragarem na geladeira toda semana?' },
  { icon: '😰', text: 'Sente culpa por não conseguir manter uma dieta saudável?' },
  { icon: '💸', text: 'Gasta mais de R$ 800 por mês com apps de delivery?' },
];

export default function IdentifiedSituations() {
  return (
    <section
      aria-labelledby="situacoes-title"
      className="relative overflow-hidden bg-zinc-50 py-24"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2
            id="situacoes-title"
            className="text-3xl font-black uppercase italic leading-tight text-zinc-900 md:text-5xl"
          >
            Você se identifica com alguma dessas{' '}
            <span className="underline-deco text-yellow-500">situações?</span>
          </h2>
        </div>

        <div className="mb-16 grid gap-8 md:grid-cols-2">
          {SITUATIONS.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-6 rounded-2xl border border-zinc-100 bg-white p-8 shadow-sm"
            >
              <span className="shrink-0 text-4xl" aria-hidden="true">
                {item.icon}
              </span>
              <p className="text-xl font-bold text-zinc-700">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-yellow-400 bg-zinc-900 p-8 text-center shadow-2xl md:p-12">
          <div className="relative z-10 mx-auto max-w-3xl space-y-6">
            <h3 className="text-2xl font-black uppercase italic leading-tight text-white md:text-3xl">
              A verdade é: <span className="text-yellow-400">a culpa não é sua.</span>
            </h3>
            <p className="text-lg font-medium text-zinc-300 md:text-xl">
              A RapChef foi criada para que você recupere o controle do seu tempo sem abrir
              mão da saúde e do prazer de comer bem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
