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
import { IconCheck } from './components/ui/Icons';
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

export default function App() {
  return (
    <ContactProvider>
      <div className="relative flex min-h-screen flex-col bg-cream">
        <Navbar />
        <main className="flex-grow">
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
            className="scroll-mt-24 bg-charcoal py-24 md:scroll-mt-32"
          >
            <div className="mx-auto grid max-w-5xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
              <div className="space-y-6">
                <h2
                  id="lead-title"
                  className="font-[family-name:var(--font-headline)] text-3xl font-extrabold uppercase leading-tight text-cream md:text-5xl"
                >
                  Receba seu orçamento <span className="text-gold">sem compromisso</span>
                </h2>
                <p className="text-lg font-medium text-cream/80">
                  Preencha seus dados e nosso time te chama no WhatsApp com as opções ideais
                  para você. Sem burocracia, sem compromisso.
                </p>
                <ul className="space-y-3 font-semibold text-cream/80">
                  {LEAD_POINTS.map((point) => (
                    <li key={point} className="flex items-center gap-3">
                      <IconCheck className="h-5 w-5 shrink-0 text-gold" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[2rem] bg-white p-8 shadow-2xl">
                <LeadForm />
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
