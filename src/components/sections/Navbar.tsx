import { useEffect, useState } from 'react';
import { smoothScrollTo } from '../../utils/smoothScroll';
import { WhatsAppCTA } from '../ui/WhatsAppCTA';

const LINKS = [
  { id: 'inicio', label: 'Início' },
  { id: 'cardapio', label: 'Cardápio' },
  { id: 'planos', label: 'Planos' },
  { id: 'como-funciona', label: 'Como Funciona' },
  { id: 'faq', label: 'Dúvidas' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLink = (link: { id: string; label: string }) => (
    <a
      key={link.id}
      href={`#${link.id}`}
      onClick={(e) => {
        e.preventDefault();
        setIsOpen(false);
        smoothScrollTo(link.id);
      }}
      className="font-[family-name:var(--font-body)] transition hover:text-gold"
    >
      {link.label}
    </a>
  );

  return (
    <nav
      className={`sticky top-0 z-50 border-b border-cream/10 bg-charcoal/96 text-cream backdrop-blur transition-all duration-300 ${
        isScrolled ? 'shadow-[0_18px_45px_rgba(0,0,0,0.32)]' : 'shadow-lg'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between gap-4 transition-all duration-300 ${
            isScrolled ? 'h-16 md:h-[4.5rem]' : 'h-20 md:h-24'
          }`}
        >
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
              smoothScrollTo('inicio');
            }}
            className="flex items-center gap-3"
          >
            <div className="rounded-[1.35rem] bg-cream p-1.5 shadow-[0_8px_20px_rgba(0,0,0,0.2)]">
              <img
                src="/imagens/logo.webp"
                alt="RapChef Delivery — marmitas congeladas em São Paulo"
                className={`w-auto rounded-[1rem] object-contain transition-all duration-300 ${
                  isScrolled ? 'h-10 md:h-11' : 'h-12 md:h-14'
                }`}
              />
            </div>
          </a>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6 text-[11px] font-extrabold uppercase tracking-[0.18em] text-cream/90">
              {LINKS.map(navLink)}
            </div>
          </div>

          <div className="hidden md:block">
            <WhatsAppCTA className="rounded-xl bg-brand px-5 py-3 text-xs font-extrabold uppercase tracking-[0.18em] text-cream shadow-[0_12px_30px_rgba(215,10,47,0.35)] transition hover:-translate-y-0.5 hover:bg-brand-deep">
              Pedir agora
            </WhatsAppCTA>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
              className="rounded-xl border border-cream/10 bg-white/5 p-2 text-gold"
            >
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden bg-charcoal/98 transition-all duration-300 ${
          isOpen ? 'max-h-80 border-t border-cream/20' : 'max-h-0'
        }`}
      >
        <div className="space-y-3 px-4 py-4 text-sm font-bold uppercase tracking-[0.12em]">
          {LINKS.map(navLink)}
          <WhatsAppCTA className="block w-full rounded-xl bg-brand px-5 py-3 text-center text-xs font-extrabold uppercase tracking-[0.18em] text-cream">
            Pedir agora
          </WhatsAppCTA>
        </div>
      </div>
    </nav>
  );
}
