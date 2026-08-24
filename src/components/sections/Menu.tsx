import { DISHES } from '../../data/content';
import { trackContact } from '../../lib/fbq';
import { buildWhatsAppUrl } from '../../lib/whatsapp';

export default function Menu() {
  return (
    <section
      id="cardapio"
      aria-labelledby="cardapio-title"
      className="scroll-mt-24 bg-[#FFFCEB] py-24 md:scroll-mt-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-2 text-center">
          <h2
            id="cardapio-title"
            className="text-3xl font-black uppercase italic tracking-tight text-zinc-900 md:text-5xl"
          >
            Nosso cardápio
          </h2>
          <div className="mx-auto h-1.5 w-24 rounded-full bg-yellow-400" />
        </div>

        {/* Porções Gourmet vs Fitness */}
        <div className="mx-auto mb-16 max-w-4xl">
          <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-yellow-400/30 bg-white p-8 shadow-xl md:p-10">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-900 text-2xl text-yellow-400 shadow-lg">
                    <span aria-hidden="true">🍱</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-black uppercase italic text-zinc-900">
                      Marmitas Gourmet
                    </h4>
                    <p className="text-2xl font-black text-[#8B1A1A]">
                      400g{' '}
                      <span className="text-sm uppercase tracking-tighter">por unidade</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-2xl text-zinc-900 shadow-lg">
                    <span aria-hidden="true">💪</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-black uppercase italic text-zinc-900">
                      Marmitas Fitness
                    </h4>
                    <p className="text-2xl font-black text-[#8B1A1A]">
                      300g{' '}
                      <span className="text-sm uppercase tracking-tighter">por unidade</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-zinc-100 bg-zinc-50 p-6">
                <p className="font-bold leading-relaxed text-zinc-600">
                  <span className="text-yellow-600" aria-hidden="true">
                    ★
                  </span>{' '}
                  Ambas são porções completas e satisfatórias para uma refeição (almoço ou
                  jantar). A maioria das pessoas fica{' '}
                  <span className="underline-deco text-zinc-900">muito bem satisfeita</span>{' '}
                  com apenas uma unidade.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {DISHES.map((dish) => (
            <article
              key={dish.id}
              className="flex flex-col overflow-hidden rounded-3xl border border-zinc-100 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-xl"
            >
              <div className="group relative aspect-[4/3] overflow-hidden bg-zinc-100">
                <img
                  src={dish.image}
                  alt={`Marmita de ${dish.name}`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-1 flex-col p-8 text-center">
                <h3 className="mb-4 flex min-h-[3rem] items-center justify-center text-xl font-bold text-zinc-900">
                  {dish.name}
                </h3>
                <p className="text-sm font-medium leading-relaxed text-zinc-500">
                  {dish.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="flex flex-col items-center gap-10">
          <div className="flex items-center gap-3 text-sm font-bold text-[#A85A00] sm:text-lg">
            <span aria-hidden="true" className="text-2xl">
              🌍
            </span>
            <span>
              E muito mais:{' '}
              <span className="text-[#8B1A1A]">35 sabores diferentes para você escolher!</span>
            </span>
          </div>
          <a
            href={buildWhatsAppUrl('Olá! Gostaria de ver o cardápio completo e fazer meu pedido.')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackContact}
            className="flex items-center gap-3 rounded-full bg-[#A30000] px-12 py-5 text-xl font-black uppercase text-white shadow-[0_10px_30px_rgba(163,0,0,0.3)] transition-all hover:scale-105 hover:bg-[#8B0000] active:scale-95"
          >
            Comprar agora
          </a>
        </div>
      </div>
    </section>
  );
}
