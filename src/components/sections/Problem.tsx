import { useAutoScrollCarousel } from '../../hooks/useAutoScrollCarousel';
import { WhatsAppCTA } from '../ui/WhatsAppCTA';
import { IconX } from '../ui/Icons';

const GALLERY = [
  { src: '/imagens/screenshot-2.webp', alt: 'Galeria RapChef: marmita gourmet pronta', fit: 'cover' },
  { src: '/imagens/screenshot-1.webp', alt: 'Galeria RapChef: embalagens de marmitas', fit: 'cover' },
  { src: '/imagens/08-02-garanta-comida-semana.webp', alt: 'Garanta comida para a semana com RapChef', fit: 'contain' },
  { src: '/imagens/screenshot-3.webp', alt: 'Galeria RapChef: variedade de pratos', fit: 'contain' },
  { src: '/imagens/07-09-peca-pelo-app7.webp', alt: 'Peça suas marmitas pelo WhatsApp', fit: 'contain' },
];

const PROBLEMS = [
  'Gastando fortunas com delivery de fast food.',
  'Perdendo horas limpando louça e cozinhando.',
  'Desperdiçando alimentos que estragam na geladeira.',
];

export default function Problem() {
  const { scrollRef, handlers } = useAutoScrollCarousel(280, 3500, 10000);

  return (
    <section
      id="problema"
      aria-labelledby="problema-title"
      className="overflow-hidden bg-charcoal py-20 text-cream"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div className="relative order-2 md:order-1">
            <div
              ref={scrollRef}
              {...handlers}
              className="scrollbar-hide -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 scroll-smooth md:mx-0 md:px-0"
            >
              {GALLERY.map((img) => (
                <div
                  key={img.src}
                  className="relative min-w-[85%] snap-start overflow-hidden rounded-3xl border-2 border-cream/15 shadow-2xl md:min-w-[90%]"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    className={`aspect-[4/5] w-full md:aspect-square ${img.fit === 'cover' ? 'object-cover' : 'bg-cream/10 object-contain'}`}
                  />
                </div>
              ))}
            </div>
            <p className="mt-2 text-center text-[10px] font-bold uppercase tracking-widest text-cream/50 md:text-left">
              Deslize para ver mais fotos
            </p>
          </div>

          <div className="order-1 space-y-6 md:order-2">
            <h2
              id="problema-title"
              className="font-[family-name:var(--font-headline)] text-3xl font-extrabold uppercase leading-tight md:text-4xl"
            >
              Cansado de <span className="underline-deco text-brand">perder tempo</span> na
              cozinha?
            </h2>
            <p className="text-xl text-cream/70">
              Sabemos como é difícil manter uma alimentação saudável com a rotina pesada.
              No final do dia, você acaba:
            </p>
            <ul className="mb-8 space-y-4">
              {PROBLEMS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 text-brand" aria-hidden="true">
                    <IconX className="h-5 w-5" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <WhatsAppCTA className="inline-block rounded-xl bg-[#25D366] px-8 py-4 font-extrabold uppercase tracking-wider text-white shadow-xl transition hover:bg-[#128C7E]">
              Quero praticidade agora
            </WhatsAppCTA>
          </div>
        </div>
      </div>
    </section>
  );
}
