import { useEffect, useState } from 'react';
import { smoothScrollTo } from '../../utils/smoothScroll';
import { trackContact } from '../../lib/fbq';

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
      className="transition hover:text-yellow-400"
    >
      {link.label}
    </a>
  );

  return (
    <nav
      className={`sticky top-0 z-50 bg-zinc-900 text-white transition-all duration-300 ${
        isScrolled ? 'shadow-xl' : 'shadow-lg'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'h-16 md:h-20' : 'h-24 md:h-28'
          }`}
        >
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
              smoothScrollTo('inicio');
            }}
            className="flex items-center"
          >
            <img
              src="/imagens/logo.webp"
              alt="RapChef Delivery — marmitas congeladas em São Paulo"
              className={`w-auto object-contain py-1 transition-all duration-300 ${
                isScrolled ? 'h-12 md:h-14' : 'h-16 md:h-20'
              }`}
            />
          </a>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6 text-sm font-bold uppercase tracking-wider">
              {LINKS.map(navLink)}
            </div>
          </div>

          <div className="hidden md:block">
            <a
              href="https://wa.me/5511988504312?text=Ol%C3%A1%2C%20quero%20fazer%20meu%20pedido%20de%20marmitas."
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackContact}
              className="rounded-full bg-yellow-400 px-6 py-2.5 text-sm font-black uppercase text-zinc-900 transition hover:bg-yellow-500"
            >
              Peça Agora
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
              className="p-2 text-yellow-400"
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
        className={`md:hidden overflow-hidden bg-zinc-800 transition-all duration-300 ${
          isOpen ? 'max-h-72 border-t border-zinc-700' : 'max-h-0'
        }`}
      >
        <div className="space-y-2 px-4 py-4 text-sm font-bold uppercase">
          {LINKS.map(navLink)}
        </div>
      </div>
    </nav>
  );
}
