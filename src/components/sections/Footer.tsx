import { BUSINESS, PRICING } from '../../data/business';
import { smoothScrollTo } from '../../utils/smoothScroll';
import { WhatsAppCTA } from '../ui/WhatsAppCTA';
import { IconInstagram, IconWhatsApp } from '../ui/Icons';

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
    <footer className="border-t border-cream/10 bg-charcoal py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 text-cream/60 md:grid-cols-4">
          <div className="space-y-4">
            <img
              src="/imagens/logo.webp"
              alt="RapChef Delivery logo"
              loading="lazy"
              className="h-16 w-auto rounded-full object-contain"
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
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream transition hover:bg-gold hover:text-charcoal"
              >
                <IconInstagram className="h-5 w-5" />
              </a>
              <WhatsAppCTA
                aria-label="WhatsApp da RapChef"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream transition hover:bg-gold hover:text-charcoal"
              >
                <IconWhatsApp className="h-5 w-5" />
              </WhatsAppCTA>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-cream">
              Links rápidos
            </h4>
            <ul className="space-y-2 text-sm">
              {FOOTER_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleNav(e, link.id)}
                    className="transition hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-cream">
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
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-cream">
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

        <div className="mt-12 space-y-2 border-t border-cream/10 pt-8 text-center text-xs text-cream/40">
          <p>© {new Date().getFullYear()} RAPCHEF DELIVERY. TODOS OS DIREITOS RESERVADOS.</p>
        </div>
      </div>
    </footer>
  );
}
