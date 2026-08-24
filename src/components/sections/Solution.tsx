import { useEffect, useRef, useState } from 'react';
import { trackContact } from '../../lib/fbq';
import { buildWhatsAppUrl } from '../../lib/whatsapp';

const VIDEO = '/imagens/rapchef-como-funciona.mp4';

const BENEFITS = [
  {
    title: '35 sabores diferentes',
    desc: 'Do clássico virado à paulista ao bacalhau gratinado. Cardápio variado para nunca enjoar.',
    icon: '🍽️',
  },
  {
    title: 'Preço justo',
    desc: 'R$ 21,90 por marmita. Até 51% mais barato que pedir em aplicativos de entrega.',
    icon: '💰',
  },
  {
    title: '5 minutos no micro',
    desc: 'Mais rápido que esperar o motoboy. Sua refeição gourmet pronta num estalo.',
    icon: '⏱️',
  },
  {
    title: 'Sabor caseiro',
    desc: 'Receitas tradicionais feitas com carinho e temperos naturais, como na casa da vó.',
    icon: '🏠',
  },
  {
    title: 'Congelamento rápido',
    desc: 'Preserva sabor, textura e nutrientes por até 6 meses, sem conservantes.',
    icon: '❄️',
  },
  {
    title: 'Zero desperdício',
    desc: 'Porções exatas de 400g. Você só esquenta o que vai comer, sem sobras na geladeira.',
    icon: '♻️',
  },
];

/**
 * Vídeo que só carrega quando entra no viewport (IntersectionObserver).
 * Evita baixar ~2.4MB antes de o usuário chegar até esta seção.
 */
function LazyVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={visible ? VIDEO : undefined}
      poster="/imagens/05-22-aqui-e-praticidade-post.webp"
      autoPlay={visible}
      loop
      muted
      playsInline
      preload="none"
      className="h-full w-full object-cover"
    />
  );
}

export default function Solution() {
  return (
    <section
      id="solucao"
      aria-labelledby="solucao-title"
      className="bg-yellow-400 py-20 text-zinc-900"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-4xl space-y-4 text-center">
          <h2
            id="solucao-title"
            className="text-3xl font-black uppercase italic leading-tight md:text-6xl"
          >
            A solução definitiva está na{' '}
            <span className="bg-zinc-900 px-3 text-yellow-400">RapChef</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl font-bold opacity-90">
            Unimos a praticidade do ultracongelado com o sabor irresistível da comida
            caseira de verdade.
          </p>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-[9/12] overflow-hidden rounded-[2.5rem] border-4 border-zinc-900 bg-zinc-800 shadow-2xl xl:aspect-square">
              <LazyVideo />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="mb-2 inline-block rounded bg-yellow-400 px-2 py-1 text-xs font-black uppercase tracking-widest text-zinc-900">
                  Veja na prática
                </p>
                <h3 className="text-2xl font-black uppercase italic">
                  Como funciona a RapChef
                </h3>
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {BENEFITS.map((benefit, index) => (
              <div
                key={index}
                className="group rounded-3xl border-2 border-zinc-900/10 bg-zinc-900/5 p-6 transition-all duration-300 hover:border-transparent hover:bg-white hover:shadow-xl"
              >
                <span className="mb-4 inline-block text-4xl transition-transform duration-300 group-hover:scale-125" aria-hidden="true">
                  {benefit.icon}
                </span>
                <h3 className="mb-2 flex items-center gap-2 text-lg font-black uppercase italic">
                  <span className="text-zinc-900" aria-hidden="true">
                    ✓
                  </span>
                  {benefit.title}
                </h3>
                <p className="text-sm font-semibold leading-relaxed text-zinc-800">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex justify-center">
          <a
            href={buildWhatsAppUrl('Olá! Gostaria de saber mais sobre os 35 sabores da RapChef.')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackContact}
            className="flex items-center gap-4 rounded-2xl bg-zinc-900 px-12 py-5 text-xl font-black uppercase italic text-white shadow-2xl transition hover:-translate-y-1 hover:bg-zinc-800"
          >
            Peça pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
