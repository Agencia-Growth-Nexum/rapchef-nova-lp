import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Reviews from './components/sections/Reviews';
import Problem from './components/sections/Problem';
import IdentifiedSituations from './components/sections/IdentifiedSituations';
import Solution from './components/sections/Solution';
import Steps from './components/sections/Steps';
import Menu from './components/sections/Menu';
import WhyUs from './components/sections/WhyUs';
import Plans from './components/sections/Plans';
import Delivery from './components/sections/Delivery';
import PaymentMethods from './components/sections/PaymentMethods';
import LeadForm from './components/sections/LeadForm';
import FAQ from './components/sections/FAQ';
import FinalCTA from './components/sections/FinalCTA';
import Footer from './components/sections/Footer';
import { IconCheck, IconClock, IconShield, IconWhatsApp } from './components/ui/Icons';
import { ContactProvider } from './context/ContactContext';
import { ContactModal } from './components/ui/ContactModal';

/**
 * Hierarquia de conversão otimizada:
 * Hero → Prova social → Problem → IdentifiedSituations → Solution (vídeo) →
 * Steps → Menu → WhyUs → Plans → Delivery → PaymentMethods → LeadForm →
 * FAQ → CTA final → Footer
 */
const LEAD_POINTS = [
  'Resposta rápida no WhatsApp',
  'Montamos seu pedido com você',
  'Pagamento apenas na entrega',
];

const LEAD_FEATURES = [
  { icon: IconClock, text: 'Atendimento rápido' },
  { icon: IconShield, text: 'Sem compromisso' },
  { icon: IconWhatsApp, text: 'Contato humanizado' },
];

export default function App() {
  return (
    <ContactProvider>
      <div className="relative flex min-h-screen flex-col bg-cream">
        <a href="#main-content" className="skip-link">
          Pular para o conteúdo
        </a>
        <Navbar />
        <main id="main-content" className="flex-grow">
          <Hero />
          <Reviews compact />
          <Problem />
          <IdentifiedSituations />
          <Solution />
          <Steps />
          <Menu />
          <WhyUs />
          <Plans />
          <Delivery />
          <PaymentMethods />
          {/* Captura de leads */}
          <section
            id="contato"
            aria-labelledby="lead-title"
            className="section-pattern-cream scroll-mt-24 py-24 md:scroll-mt-32"
          >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="grid items-center gap-10 rounded-[2rem] border border-charcoal/10 bg-white p-5 shadow-[0_35px_80px_rgba(23,25,28,0.12)] lg:grid-cols-[0.95fr_1.05fr] lg:p-8">
                <div className="section-pattern-red relative overflow-hidden rounded-[1.75rem] p-8 text-cream lg:p-10">
                  <img
                    src="/imagens/07-09-peca-pelo-app7.webp"
                    alt="Imagem original de pedido RapChef pelo celular"
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-y-0 right-0 hidden h-full w-[46%] object-cover opacity-35 lg:block"
                  />
                  <div className="relative z-10 space-y-6">
                    <span className="inline-flex rounded-full bg-gold px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-charcoal">
                      Receba seu orçamento
                    </span>
                    <h2
                      id="lead-title"
                      className="font-[family-name:var(--font-headline)] text-4xl font-extrabold uppercase leading-[0.92] text-shadow-soft md:text-5xl"
                    >
                      Sem compromisso e com atendimento real.
                    </h2>
                    <p className="max-w-md text-base font-medium text-cream/80 md:text-lg">
                      Você preenche em menos de 1 minuto e nossa equipe te chama no
                      WhatsApp com a combinação ideal para sua rotina.
                    </p>
                    <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                      {LEAD_FEATURES.map((item) => (
                        <div
                          key={item.text}
                          className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm"
                        >
                          <item.icon className="mb-2 h-5 w-5 text-gold" />
                          <p className="text-sm font-bold uppercase leading-tight">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                    <ul className="space-y-3 font-semibold text-cream/85">
                      {LEAD_POINTS.map((point) => (
                        <li key={point} className="flex items-center gap-3">
                          <IconCheck className="h-5 w-5 shrink-0 text-gold" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="rounded-[1.75rem] border border-charcoal/10 bg-[#fff8f1] p-6 md:p-8">
                  <div className="mb-6">
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-brand-deep">
                      Resposta rápida
                    </p>
                    <h3 className="mt-2 font-[family-name:var(--font-headline)] text-3xl font-extrabold uppercase leading-none text-charcoal">
                      Receba seu orçamento agora
                    </h3>
                  </div>
                  <LeadForm />
                </div>
              </div>
            </div>
          </section>
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
        <ContactModal />
      </div>
    </ContactProvider>
  );
}
