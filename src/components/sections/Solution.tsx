import { useEffect, useRef, useState } from 'react';
import { WhatsAppCTA } from '../ui/WhatsAppCTA';
import {
  IconChef,
  IconClock,
  IconHome,
  IconLeaf,
  IconMoney,
  IconSnowflake,
} from '../ui/Icons';

const VIDEO = '/imagens/rapchef-como-funciona.mp4';

const BENEFITS = [
  {
    title: '35 sabores diferentes',
    desc: 'Do clássico virado à paulista ao bacalhau gratinado. Cardápio variado para nunca enjoar.',
    icon: IconChef,
  },
  {
    title: 'Preço justo',
    desc: 'R$ 21,90 por marmita. Até 51% mais barato que pedir em aplicativos de entrega.',
    icon: IconMoney,
  },
  {
    title: '5 minutos no micro',
    desc: 'Mais rápido que esperar o motoboy. Sua refeição gourmet pronta num estalo.',
    icon: IconClock,
  },
  {
    title: 'Sabor caseiro',
    desc: 'Receitas tradicionais feitas com carinho e temperos naturais, como na casa da vó.',
    icon: IconHome,
  },
  {
    title: 'Congelamento rápido',
    desc: 'Preserva sabor, textura e nutrientes por até 6 meses, sem conservantes.',
    icon: IconSnowflake,
  },
  {
    title: 'Zero desperdício',
    desc: 'Porções exatas de 400g. Você só esquenta o que vai comer, sem sobras na geladeira.',
    icon: IconLeaf,
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

  // Quando o vídeo se torna visível, o `src` é setado e o autoplay não dispara
  // sozinho. Força muted=true (não refletido pelo React) e dispara play().
  useEffect(() => {
    if (visible && ref.current) {
      const el = ref.current;
      el.muted = true;
      const t = setTimeout(() => el.play().catch(() => {}), 50);
      return () => clearTimeout(t);
    }
  }, [visible]);

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
      className="bg-white py-20 text-charcoal"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-4xl space-y-4 text-center">
          <h2
            id="solucao-title"
            className="font-[family-name:var(--font-headline)] text-3xl font-extrabold uppercase leading-tight md:text-6xl"
          >
            A solução definitiva está na{' '}
            <span className="text-brand">RapChef</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl font-bold text-charcoal/70">
            Unimos a praticidade do ultracongelado com o sabor irresistível da comida
            caseira de verdade.
          </p>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-[9/12] overflow-hidden rounded-[2.5rem] border-2 border-charcoal bg-charcoal shadow-2xl xl:aspect-square">
              <LazyVideo />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-cream">
                <p className="mb-2 inline-block rounded-full bg-gold px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-charcoal">
                  Veja na prática
                </p>
                <h3 className="font-[family-name:var(--font-headline)] text-2xl font-extrabold uppercase">
                  Como funciona a RapChef
                </h3>
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="group rounded-3xl border-2 border-charcoal/10 bg-cream/60 p-6 transition-all duration-300 hover:border-transparent hover:bg-white hover:shadow-xl"
              >
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/25 text-brand-deep transition-transform duration-300 group-hover:scale-110">
                  <benefit.icon className="h-6 w-6" />
                </span>
                <h3 className="mb-2 text-lg font-extrabold uppercase">
                  {benefit.title}
                </h3>
                <p className="text-sm font-semibold leading-relaxed text-charcoal/70">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex justify-center">
          <WhatsAppCTA className="flex items-center gap-4 rounded-2xl bg-charcoal px-12 py-5 text-xl font-extrabold uppercase text-cream shadow-2xl transition hover:-translate-y-1 hover:bg-charcoal/90">
            Peça pelo WhatsApp
          </WhatsAppCTA>
        </div>
      </div>
    </section>
  );
}
