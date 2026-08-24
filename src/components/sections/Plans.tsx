import { COMBOS } from '../../data/content';
import { trackContact } from '../../lib/fbq';
import { buildWhatsAppUrl } from '../../lib/whatsapp';

export default function Plans() {
  return (
    <section
      id="planos"
      aria-labelledby="planos-title"
      className="scroll-mt-24 bg-white py-24 text-zinc-900 md:scroll-mt-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 space-y-4 text-center">
          <h2
            id="planos-title"
            className="text-3xl font-black uppercase italic md:text-5xl"
          >
            Nossos <span className="text-[#A30000]">combos</span>
          </h2>
          <p className="mx-auto max-w-2xl font-medium text-zinc-500">
            Produção limitada por semana — garanta seu combo para não ficar sem.
          </p>
          <div className="mx-auto h-1.5 w-20 rounded-full bg-yellow-400" />
        </div>

        <div className="flex flex-col items-stretch justify-center gap-8 md:flex-row md:flex-wrap">
          {COMBOS.map((combo) => (
            <div
              key={combo.id}
              className={`relative flex w-full flex-col rounded-[2.5rem] border-2 p-10 transition-all duration-500 md:max-w-sm lg:max-w-[400px] ${
                combo.popular
                  ? 'z-10 border-[#A30000] bg-white shadow-2xl md:scale-105'
                  : 'border-zinc-100 bg-white shadow-sm hover:shadow-xl'
              }`}
            >
              {combo.popular && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-2xl bg-gradient-to-r from-[#F59E0B] to-[#EF4444] px-8 py-3 text-xs font-black uppercase tracking-widest text-white shadow-lg">
                  Mais popular · Frete grátis
                </div>
              )}

              <div className="mb-8 text-center">
                <h3 className="mb-1 text-3xl font-black uppercase italic">{combo.title}</h3>
                <p className="text-sm font-medium text-zinc-500">{combo.subtitle}</p>
              </div>

              <div className="mb-8 h-px w-full bg-zinc-100" />

              <div className="mb-10 text-center">
                <div className="flex items-start justify-center text-[#8B1A1A]">
                  <span className="mt-2 text-xl font-bold">R$</span>
                  <div className="flex items-baseline">
                    <span className="text-7xl font-black leading-none tracking-tighter">
                      {combo.price}
                    </span>
                    <span className="text-xl font-black italic">{combo.priceFraction}</span>
                  </div>
                </div>
              </div>

              <ul className="mb-12 flex-grow space-y-4">
                {combo.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm font-semibold text-zinc-700"
                  >
                    <span className="text-lg text-[#A30000]" aria-hidden="true">
                      ✓
                    </span>{' '}
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-auto space-y-6">
                <div className="text-center">
                  <p className="text-xl font-black text-zinc-900">{combo.footerText}</p>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#A30000]">
                    {combo.footerSubtext}
                  </p>
                </div>
                <a
                  href={buildWhatsAppUrl(combo.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackContact}
                  className={`block w-full rounded-3xl py-5 text-center text-lg font-black uppercase tracking-wider transition-all active:scale-95 ${
                    combo.popular
                      ? 'bg-[#A30000] text-white shadow-xl hover:bg-[#8B0000]'
                      : 'bg-[#8B0000] text-white hover:bg-zinc-900'
                  }`}
                >
                  {combo.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
