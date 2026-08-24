import { useAutoScrollCarousel } from '../../hooks/useAutoScrollCarousel';
import { trackContact } from '../../lib/fbq';
import { buildWhatsAppUrl } from '../../lib/whatsapp';

const GALLERY = [
  { src: '/imagens/screenshot-2.webp', alt: 'Galeria RapChef: marmita gourmet pronta' },
  { src: '/imagens/screenshot-1.webp', alt: 'Galeria RapChef: embalagens de marmitas' },
  { src: '/imagens/08-02-garanta-comida-semana.webp', alt: 'Garanta comida para a semana com RapChef' },
  { src: '/imagens/screenshot-3.webp', alt: 'Galeria RapChef: variedade de pratos' },
  { src: '/imagens/07-09-peca-pelo-app7.webp', alt: 'Peça suas marmitas pelo WhatsApp' },
  { src: '/imagens/05-22-aqui-e-praticidade-post.webp', alt: 'Aqui é só praticidade com RapChef' },
];

export default function Problem() {
  const { scrollRef, handlers } = useAutoScrollCarousel(280, 3500, 10000);

  return (
    <section
      id="problema"
      aria-labelledby="problema-title"
      className="overflow-hidden bg-zinc-900 py-20 text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div className="relative order-2 md:order-1">
            <div
              ref={scrollRef}
              {...handlers}
              className="scrollbar-hide -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 scroll-smooth md:mx-0 md:px-0"
            >
              {GALLERY.map((img, index) => (
                <div
                  key={img.src}
                  className="relative min-w-[85%] snap-start overflow-hidden rounded-3xl border-2 border-zinc-800 shadow-2xl md:min-w-[90%]"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/5] w-full object-cover md:aspect-square"
                  />
                </div>
              ))}
            </div>
            <p className="mt-2 text-center text-[10px] font-bold uppercase tracking-widest text-zinc-500 md:text-left">
              Deslize para ver mais fotos
            </p>
            {/* decorative arrow, hidden from AT */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 animate-bounce items-center justify-center rounded-full bg-yellow-400 font-black text-zinc-900 shadow-lg md:hidden"
            >
              ➜
            </span>
          </div>

          <div className="order-1 space-y-6 md:order-2">
            <h2
              id="problema-title"
              className="text-3xl font-black uppercase italic leading-tight md:text-4xl"
            >
              Cansado de <span className="underline-deco text-red-500">perder tempo</span> na
              cozinha?
            </h2>
            <p className="text-xl text-zinc-400">
              Sabemos como é difícil manter uma alimentação saudável com a rotina pesada.
              No final do dia, você acaba:
            </p>
            <ul className="mb-8 space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-xl font-bold text-red-500" aria-hidden="true">
                  ✕
                </span>
                <span>Gastando fortunas com delivery de fast food.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl font-bold text-red-500" aria-hidden="true">
                  ✕
                </span>
                <span>Perdendo horas limpando louça e cozinhando.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl font-bold text-red-500" aria-hidden="true">
                  ✕
                </span>
                <span>Desperdiçando alimentos que estragam na geladeira.</span>
              </li>
            </ul>
            <a
              href={buildWhatsAppUrl('Olá! Quero acabar com o desperdício e pedir marmitas RapChef.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackContact}
              className="inline-block rounded-xl bg-[#25D366] px-8 py-4 font-black uppercase italic tracking-wider text-white shadow-xl transition hover:bg-[#128C7E]"
            >
              Quero praticidade agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
