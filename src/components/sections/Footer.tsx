import { BUSINESS } from '../../data/business';
import { smoothScrollTo } from '../../utils/smoothScroll';

const FOOTER_LINKS = [
  { id: 'inicio', label: 'Início' },
  { id: 'cardapio', label: 'Cardápio' },
  { id: 'planos', label: 'Combos' },
  { id: 'contato', label: 'Orçamento' },
  { id: 'faq', label: 'Perguntas' },
];

export default function Footer() {
  return (
    <footer className="section-pattern-dark border-t border-white/8 py-12 text-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[auto_1fr_auto] md:items-center">
          <button
            type="button"
            onClick={() => smoothScrollTo('inicio')}
            className="mx-auto flex items-center gap-4 md:mx-0"
          >
            <img
              src="/imagens/logo.webp"
              alt="RapChef Delivery"
              loading="lazy"
              className="h-16 w-16 rounded-[1.25rem] bg-cream p-1"
            />
            <div className="text-left">
              <p className="font-[family-name:var(--font-headline)] text-2xl font-extrabold uppercase leading-none">
                RapChef
              </p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-cream/60">
                Delivery em São Paulo
              </p>
            </div>
          </button>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-bold uppercase tracking-[0.14em] text-cream/72">
            {FOOTER_LINKS.map((link) => (
              <button key={link.id} type="button" onClick={() => smoothScrollTo(link.id)}>
                {link.label}
              </button>
            ))}
          </div>

          <div className="text-center text-sm font-medium text-cream/70 md:text-right">
            <p>{BUSINESS.whatsappDisplay}</p>
            <p>{BUSINESS.instagramHandle}</p>
            <p>{BUSINESS.area}</p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/8 pt-6 text-center text-xs font-medium uppercase tracking-[0.16em] text-cream/45">
          © {new Date().getFullYear()} RapChef Delivery. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
