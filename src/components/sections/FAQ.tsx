import { useState } from 'react';
import { FAQS } from '../../data/content';
import { trackContact } from '../../lib/fbq';
import { buildWhatsAppUrl } from '../../lib/whatsapp';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

function renderAnswer(answer: string, index: number) {
  const lines = answer.split('\n');

  return (
    <div className="space-y-3">
      {lines.map((line, i) => {
        if (line.trim() === '') return <div key={i} className="h-2" />;
        return (
          <p key={i} className="font-medium leading-relaxed text-zinc-600">
            {line}
          </p>
        );
      })}

      {index === 4 && (
        <div className="pt-4">
          <a
            href={buildWhatsAppUrl('Olá! Gostaria de fazer meu pedido de marmitas.')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackContact}
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-black uppercase text-white shadow-lg transition hover:scale-105"
          >
            <span>Falar com atendente</span>
            <WhatsAppIcon className="h-5 w-5" label="" />
          </a>
        </div>
      )}

      {index === 14 && (
        <div className="pt-4">
          <a
            href={buildWhatsAppUrl('Olá! Gostaria de um orçamento corporativo para minha empresa.')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackContact}
            className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-6 py-3 text-sm font-black uppercase text-white shadow-lg transition hover:bg-zinc-800"
          >
            <span>WhatsApp corporativo (11)</span>
          </a>
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
      className="scroll-mt-24 bg-white py-24 md:scroll-mt-32"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 space-y-4 text-center">
          <h2
            id="faq-title"
            className="text-3xl font-black uppercase italic leading-none tracking-tight text-zinc-900 md:text-5xl"
          >
            Dúvidas <span className="text-yellow-500">frequentes</span>
          </h2>
          <div className="mx-auto h-2 w-24 rounded-full bg-zinc-900" />
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`overflow-hidden rounded-3xl border-2 transition-colors ${
                  isOpen ? 'border-yellow-400 shadow-xl' : 'border-zinc-100 hover:border-zinc-300'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  aria-labelledby={`faq-question-${index}`}
                  id={`faq-button-${index}`}
                  className="group flex w-full items-center justify-between bg-white p-7 text-left"
                >
                  <span
                    id={`faq-question-${index}`}
                    className={`text-lg font-black uppercase italic leading-tight transition-colors md:text-xl ${
                      isOpen ? 'text-zinc-900' : 'text-zinc-800 group-hover:text-yellow-600'
                    }`}
                  >
                    {faq.question.replace(/^\d+\.\s*/, '')}
                  </span>
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-500 ${
                      isOpen ? 'rotate-180 bg-yellow-400 text-zinc-900' : 'bg-zinc-100 text-zinc-400'
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
                    <div className="border-t border-zinc-100 bg-zinc-50 p-8">
                      {renderAnswer(faq.answer, index)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 rounded-[2.5rem] border-2 border-dashed border-yellow-200 bg-yellow-50 p-10 text-center">
          <h3 className="mb-4 text-2xl font-black uppercase italic text-zinc-900">
            Ainda tem alguma dúvida?
          </h3>
          <p className="mb-8 font-bold text-zinc-600">
            Nossa equipe está pronta para te ajudar no atendimento humano.
          </p>
          <a
            href={buildWhatsAppUrl('Olá! Gostaria de fazer meu pedido de marmitas.')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackContact}
            className="inline-flex items-center gap-3 rounded-2xl bg-[#25D366] px-10 py-5 text-lg font-black uppercase italic text-white shadow-2xl transition hover:scale-105"
          >
            Falar no WhatsApp agora
          </a>
        </div>
      </div>
    </section>
  );
}
