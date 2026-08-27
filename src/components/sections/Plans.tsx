import { COMBOS } from '../../data/content';
import { EtiquetaQuente, MolduraBandeja } from '../ui/BrandElements';
import { WhatsAppCTA } from '../ui/WhatsAppCTA';
import { IconCheck } from '../ui/Icons';

export default function Plans() {
  return (
    <section
      id="planos"
      aria-labelledby="planos-title"
      className="scroll-mt-24 bg-white py-24 text-charcoal md:scroll-mt-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 space-y-4 text-center">
          <h2
            id="planos-title"
            className="font-[family-name:var(--font-headline)] text-3xl font-extrabold uppercase md:text-5xl"
          >
            Nossos <span className="text-brand">combos</span>
          </h2>
          <p className="mx-auto max-w-2xl font-medium text-charcoal/60">
            Produção limitada por semana — garanta seu combo para não ficar sem.
          </p>
          <div className="mx-auto h-1.5 w-20 rounded-full bg-gold" />
        </div>

        <div className="flex flex-col items-stretch justify-center gap-8 md:flex-row md:flex-wrap">
          {COMBOS.map((combo) => (
            <MolduraBandeja
              key={combo.id}
              tone={combo.popular ? 'brand' : 'charcoal'}
              className={`relative flex w-full flex-col p-10 transition-all duration-500 md:max-w-sm lg:max-w-[400px] ${
                combo.popular ? 'shadow-2xl md:scale-105' : 'shadow-sm hover:shadow-xl'
              }`}
            >
              {combo.popular && (
                <EtiquetaQuente
                  variant="gold"
                  className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap px-6 py-2 shadow-lg"
                >
                  Mais popular · Frete grátis
                </EtiquetaQuente>
              )}

              <div className="mb-8 text-center">
                <h3 className="mb-1 font-[family-name:var(--font-headline)] text-3xl font-extrabold uppercase">
                  {combo.title}
                </h3>
                <p className="text-sm font-medium text-charcoal/60">{combo.subtitle}</p>
              </div>

              <div className="mb-8 h-px w-full bg-charcoal/10" />

              <div className="mb-10 text-center">
                <div className="flex items-start justify-center text-brand-deep">
                  <span className="mt-2 font-[family-name:var(--font-headline)] text-xl font-bold">
                    R$
                  </span>
                  <div className="flex items-baseline">
                    <span className="font-[family-name:var(--font-headline)] text-7xl font-extrabold leading-none tracking-tighter">
                      {combo.price}
                    </span>
                    <span className="font-[family-name:var(--font-headline)] text-xl font-extrabold">
                      {combo.priceFraction}
                    </span>
                  </div>
                </div>
              </div>

              <ul className="mb-12 flex-grow space-y-4">
                {combo.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm font-semibold text-charcoal/80"
                  >
                    <IconCheck className="h-5 w-5 shrink-0 text-brand" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-auto space-y-6">
                <div className="text-center">
                  {combo.footerText && (
                    <p className="font-[family-name:var(--font-headline)] text-xl font-extrabold text-charcoal">
                      {combo.footerText}
                    </p>
                  )}
                  {combo.footerSubtext && (
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-deep">
                      {combo.footerSubtext}
                    </p>
                  )}
                </div>
                <WhatsAppCTA
                  combo={
                    combo.popular
                      ? 'Combo Mensal (20 marmitas)'
                      : 'Combo Semanal (5 marmitas)'
                  }
                  className={`block w-full rounded-3xl py-5 text-center font-[family-name:var(--font-headline)] text-lg font-extrabold uppercase tracking-wider transition-all active:scale-95 ${
                    combo.popular
                      ? 'bg-brand text-cream shadow-xl hover:bg-brand-deep'
                      : 'bg-charcoal text-cream hover:bg-charcoal/90'
                  }`}
                >
                  {combo.cta}
                </WhatsAppCTA>
              </div>
            </MolduraBandeja>
          ))}
        </div>
      </div>
    </section>
  );
}
