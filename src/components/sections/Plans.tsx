import { COMBOS } from '../../data/content';
import { WhatsAppCTA } from '../ui/WhatsAppCTA';
import { IconCheck } from '../ui/Icons';

export default function Plans() {
  return (
    <section
      id="planos"
      aria-labelledby="planos-title"
      className="section-pattern-dark scroll-mt-24 py-24 text-cream md:scroll-mt-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-gold">
            Nossos combos
          </p>
          <h2
            id="planos-title"
            className="mt-3 font-[family-name:var(--font-headline)] text-4xl font-extrabold uppercase md:text-5xl"
          >
            Escolha o ritmo ideal.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {COMBOS.map((combo) => (
            <article
              key={combo.id}
              className={`rounded-[2rem] border p-8 shadow-2xl ${
                combo.popular
                  ? 'border-gold bg-brand text-cream'
                  : 'border-white/12 bg-[#fff8f1] text-charcoal'
              }`}
            >
              {combo.popular && (
                <span className="mb-5 inline-flex rounded-full bg-gold px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-charcoal">
                  Mais vantajoso
                </span>
              )}
              <p className={`text-sm font-extrabold uppercase tracking-[0.16em] ${combo.popular ? 'text-gold' : 'text-brand-deep'}`}>
                {combo.title}
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-headline)] text-5xl font-extrabold uppercase leading-none">
                {combo.subtitle}
              </h3>
              <div className="mt-8">
                <p className={`font-[family-name:var(--font-headline)] text-7xl font-extrabold leading-none ${combo.popular ? 'text-white' : 'text-charcoal'}`}>
                  {combo.price}
                  <span className="text-2xl">{combo.priceFraction}</span>
                </p>
                <p className={`mt-2 text-sm font-bold uppercase tracking-[0.12em] ${combo.popular ? 'text-cream/80' : 'text-charcoal/60'}`}>
                  {combo.footerSubtext || combo.footerText || 'Escolha os sabores que quiser'}
                </p>
              </div>
              <ul className="mt-8 space-y-3">
                {combo.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-semibold">
                    <IconCheck className={`mt-0.5 h-5 w-5 shrink-0 ${combo.popular ? 'text-gold' : 'text-brand'}`} />
                    <span className={combo.popular ? 'text-cream/88' : 'text-charcoal/78'}>{item}</span>
                  </li>
                ))}
              </ul>
              <WhatsAppCTA
                combo={combo.popular ? 'Combo Mensal (30 refeições)' : 'Combo Semanal (10 refeições)'}
                className={`mt-8 inline-flex w-full justify-center rounded-xl px-6 py-4 text-sm font-extrabold uppercase tracking-[0.18em] transition ${
                  combo.popular
                    ? 'bg-gold text-charcoal hover:bg-gold-soft'
                    : 'bg-charcoal text-cream hover:bg-charcoal/92'
                }`}
              >
                {combo.popular ? 'Quero o mensal' : 'Escolher semanal'}
              </WhatsAppCTA>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
