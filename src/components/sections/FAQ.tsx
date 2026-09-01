import { useState } from 'react';
import { FAQS } from '../../data/content';
import { WhatsAppCTA } from '../ui/WhatsAppCTA';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

function renderAnswer(answer: string, index: number) {
  const lines = answer.split('\n');

  return (
    <div className="space-y-3">
      {lines.map((line, i) => {
        if (line.trim() === '') return <div key={i} className="h-2" />;
        return (
          <p key={i} className="font-medium leading-relaxed text-charcoal/70">
            {line}
          </p>
        );
      })}

      {index === 4 && (
        <div className="pt-4">
          <WhatsAppCTA className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-extrabold uppercase text-white shadow-lg transition hover:scale-105">
            <span>Falar com atendente</span>
            <WhatsAppIcon className="h-5 w-5" label="" />
          </WhatsAppCTA>
        </div>
      )}

      {index === 14 && (
        <div className="pt-4">
          <WhatsAppCTA
            combo="Corporativo / PJ"
            className="inline-flex items-center gap-2 rounded-xl bg-charcoal px-6 py-3 text-sm font-extrabold uppercase text-cream shadow-lg transition hover:bg-charcoal/90"
          >
            <span>WhatsApp corporativo (11)</span>
          </WhatsAppCTA>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative scroll-mt-24 overflow-hidden bg-[#fff8f1] py-24 md:scroll-mt-32"
    >
      <div className="section-dots absolute inset-0 opacity-20" aria-hidden="true" />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 mb-20 space-y-4 text-center">
          <span className="kicker">Tire suas dúvidas antes de pedir</span>
          <h2
            id="faq-title"
            className="font-[family-name:var(--font-headline)] text-4xl font-extrabold uppercase leading-none tracking-tight text-charcoal md:text-6xl"
          >
            Dúvidas <span className="text-brand">frequentes</span>
          </h2>
        </div>

        <div className="relative z-10 space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`overflow-hidden rounded-3xl border transition-colors ${
                  isOpen ? 'border-gold shadow-xl' : 'border-charcoal/10 hover:border-charcoal/30'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  aria-labelledby={`faq-question-${index}`}
                  id={`faq-button-${index}`}
                  className="group flex w-full items-center justify-between bg-white p-7 text-left shadow-[0_12px_30px_rgba(23,25,28,0.04)]"
                >
                  <span
                    id={`faq-question-${index}`}
                    className={`font-[family-name:var(--font-headline)] text-lg font-extrabold uppercase leading-tight transition-colors md:text-xl ${
                      isOpen ? 'text-charcoal' : 'text-charcoal/80 group-hover:text-brand-deep'
                    }`}
                  >
                    {faq.question.replace(/^\d+\.\s*/, '')}
                  </span>
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-500 ${
                      isOpen ? 'rotate-180 bg-gold text-charcoal' : 'bg-charcoal/5 text-charcoal/40'
                    }`}
                    aria-hidden="true"
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d={isOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
                      />
                    </svg>
                  </span>
                </button>

                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-charcoal/10 bg-cream/60 p-8">
                      {renderAnswer(faq.answer, index)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="section-pattern-dark relative z-10 mt-12 rounded-[2rem] p-8 text-center text-cream md:p-10">
          <h3 className="font-[family-name:var(--font-headline)] text-3xl font-extrabold uppercase leading-none">
            Ainda ficou com alguma dúvida?
          </h3>
          <WhatsAppCTA className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand px-8 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-cream transition hover:bg-brand-deep">
            <span>Falar com a RapChef</span>
            <WhatsAppIcon className="h-5 w-5" label="" />
          </WhatsAppCTA>
        </div>
      </div>
    </section>
  );
}
