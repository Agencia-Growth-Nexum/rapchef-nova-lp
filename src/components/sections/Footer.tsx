import { BUSINESS, PRICING } from '../../data/business';
import { smoothScrollTo } from '../../utils/smoothScroll';
import { trackContact } from '../../lib/fbq';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

const FOOTER_LINKS = [
  { id: 'inicio', label: 'Início' },
  { id: 'cardapio', label: 'Cardápio' },
  { id: 'planos', label: 'Planos' },
  { id: 'como-funciona', label: 'Como Funciona' },
  { id: 'faq', label: 'Dúvidas' },
];

export default function Footer() {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    smoothScrollTo(id);
  };

  return (
    <footer className="border-t border-zinc-800 bg-zinc-900 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 text-zinc-400 md:grid-cols-4">
          <div className="space-y-4">
            <img
              src="/imagens/logo.webp"
              alt="RapChef Delivery logo"
              loading="lazy"
              className="h-16 w-auto object-contain"
            />
            <p className="text-sm">
              Comida de verdade, pronta em 5 minutos. Praticidade, sabor e qualidade desde
              {` ${BUSINESS.since}`}.
            </p>
            <div className="flex gap-3">
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da RapChef"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E1306C] text-white shadow-lg transition hover:opacity-80"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://wa.me/5511988504312"
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackContact}
                aria-label="WhatsApp da RapChef"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#25D366] text-white shadow-lg transition hover:opacity-80"
              >
                <WhatsAppIcon className="h-5 w-5" label="" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-white">
              Links rápidos
            </h4>
            <ul className="space-y-2 text-sm">
              {FOOTER_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleNav(e, link.id)}
                    className="transition hover:text-yellow-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-white">
              Contato
            </h4>
            <ul className="space-y-2 text-sm">
              <li>{BUSINESS.whatsappDisplay}</li>
              <li>{BUSINESS.city}</li>
              <li>{BUSINESS.instagramHandle}</li>
              <li>{BUSINESS.area}</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-white">
              Sobre
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Pagamento na entrega</li>
              <li>PIX · Crédito · Débito</li>
              <li>Marmitas gourmet (400g)</li>
              <li>Marmitas fitness (300g)</li>
              <li>Validade de {PRICING.validadeMeses} meses no freezer</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 space-y-2 border-t border-zinc-800 pt-8 text-center text-xs text-zinc-600">
          <p>© {new Date().getFullYear()} RAPCHEF DELIVERY. TODOS OS DIREITOS RESERVADOS.</p>
        </div>
      </div>
    </footer>
  );
}
