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
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp';

/**
 * Hierarquia de conversão otimizada:
 * Hero → Prova social → Problem → IdentifiedSituations → Solution (vídeo) →
 * Steps → Menu → WhyUs → Plans → Delivery → PaymentMethods → LeadForm →
 * Reviews detalhado → FAQ → CTA final → Footer → WhatsApp flutuante
 */
export default function App() {
  return (
    <div className="relative flex min-h-screen flex-col bg-zinc-50">
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
          className="scroll-mt-24 bg-zinc-900 py-24 md:scroll-mt-32"
        >
          <div className="mx-auto grid max-w-5xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div className="space-y-6">
              <h2
                id="lead-title"
                className="text-3xl font-black uppercase italic leading-tight text-white md:text-5xl"
              >
                Receba seu orçamento <span className="text-yellow-400">sem compromisso</span>
              </h2>
              <p className="text-lg font-medium text-zinc-300">
                Preencha seus dados e nosso time te chama no WhatsApp com as opções ideais
                para você. Sem burocracia, sem compromisso.
              </p>
              <ul className="space-y-3 font-semibold text-zinc-300">
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400" aria-hidden="true">✓</span> Resposta rápida no WhatsApp
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400" aria-hidden="true">✓</span> Montamos seu pedido com você
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400" aria-hidden="true">✓</span> Pagamento apenas na entrega
                </li>
              </ul>
            </div>
            <div className="rounded-[2rem] bg-white p-8 shadow-2xl">
              <LeadForm />
            </div>
          </div>
        </section>
        <Reviews />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
