const STEPS = [
  { title: 'Escolha seus pratos', desc: 'Selecione entre 35 opções deliciosas do nosso catálogo.', icon: '🖱️' },
  { title: 'Nós entregamos', desc: 'Receba no conforto da sua casa em embalagens térmicas especiais.', icon: '🚚' },
  { title: 'Armazene no freezer', desc: 'Mantenha congelado para garantir a validade de 6 meses e o frescor.', icon: '❄️' },
  { title: 'Aqueça e saboreie', desc: 'Apenas 5 minutos no micro-ondas e sua refeição gourmet está pronta!', icon: '😋' },
];

export default function Steps() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="steps-title"
      className="scroll-mt-24 bg-zinc-50 py-20 md:scroll-mt-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="steps-title"
          className="mb-16 text-center text-3xl font-black uppercase italic text-zinc-900 md:text-4xl"
        >
          Como funciona? É vapt-vupt!
        </h2>
        <div className="grid gap-10 md:grid-cols-4">
          {STEPS.map((step, index) => (
            <div key={index} className="relative space-y-4 text-center">
              <div className="mx-auto flex h-20 w-20 -rotate-3 items-center justify-center rounded-2xl bg-yellow-400 text-4xl shadow-lg transition hover:rotate-0">
                <span aria-hidden="true">{step.icon}</span>
              </div>
              <h3 className="text-xl font-black uppercase italic text-zinc-900">
                {step.title}
              </h3>
              <p className="text-zinc-600">{step.desc}</p>
              {index < 3 && (
                <div
                  className="absolute -right-4 top-10 hidden text-3xl text-yellow-400 lg:block"
                  aria-hidden="true"
                >
                  ➜
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
