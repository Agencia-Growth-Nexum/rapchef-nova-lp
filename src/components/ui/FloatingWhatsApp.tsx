import { useState } from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';

/**
 * Botão flutuante de WhatsApp, sempre visível no canto inferior direito.
 * Dispara o evento "Contact" do Meta Pixel no clique.
 */
export function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    // Firebase/pixel tracking
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Contact');
    }
  };

  return (
    <a
      href="https://wa.me/5511988504312?text=Ol%C3%A1%2C%20vi%20o%20site%20e%20gostaria%20de%20encomendar%20minhas%20marmitas%21"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Encomendar marmitas pelo WhatsApp"
      className="fixed bottom-5 right-5 z-[100] flex items-center gap-3 rounded-full bg-[#25D366] py-3.5 pl-3.5 pr-4 text-white shadow-2xl transition-transform duration-200 hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(37,211,102,0.4)]"
    >
      <WhatsAppIcon className="h-7 w-7 shrink-0" />
      <span
        className={`whitespace-nowrap text-sm font-bold md:text-base transition-all duration-300 ${
          hovered ? 'max-w-[220px] opacity-100' : 'max-w-0 overflow-hidden opacity-0 md:max-w-none md:opacity-100'
        }`}
      >
        Encomende pelo WhatsApp
      </span>
    </a>
  );
}
