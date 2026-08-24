const METHODS = [
  { title: 'PIX', icon: '💎', items: ['QR Code na entrega', 'Aprovação instantânea', 'Sem taxas adicionais'] },
  { title: 'Crédito', icon: '💳', items: ['Maquininha na entrega', 'Todas as bandeiras', 'Sem taxa adicional'] },
  { title: 'Débito', icon: '🏦', items: ['Maquininha na entrega', 'Todas as bandeiras', 'Sem taxas extras'] },
];

export default function PaymentMethods() {
  return (
    <section
      aria-labelledby="pagamento-title"
      className="border-t border-zinc-100 bg-zinc-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 space-y-4 text-center">
          <h2
            id="pagamento-title"
            className="text-3xl font-black uppercase italic tracking-tight text-zinc-900 md:text-5xl"
          >
            Formas de <span className="text-[#A30000]">pagamento</span>
          </h2>
          <p className="mx-auto max-w-2xl font-medium text-zinc-500">
            Facilitamos para você: escolha a forma que preferir no ato da entrega e garanta
            sua praticidade.
          </p>
        </div>

        <div className="mb-20">
          <h3 className="mb-8 flex items-center justify-center gap-2 text-xl font-black uppercase italic text-zinc-800">
            <span aria-hidden="true" className="text-2xl">
              🚚
            </span>{' '}
            Pagamento na entrega
          </h3>
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-1 lg:grid-cols-3">
            {METHODS.map((method, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center rounded-3xl border border-zinc-100 bg-white p-6 text-center shadow-sm transition-transform hover:-translate-y-1"
              >
                <span className="mb-4 text-3xl" aria-hidden="true">
                  {method.icon}
                </span>
                <h4 className="mb-4 text-base font-bold text-zinc-900">{method.title}</h4>
                <ul className="w-full space-y-2 text-left">
                  {method.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-1.5 text-[11px] font-semibold text-zinc-500"
                    >
                      <span className="text-emerald-500" aria-hidden="true">
                        ✓
                      </span>{' '}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2.5rem] border border-blue-100 bg-[#F0F7FF] p-8 md:p-12">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500 font-bold text-white">
              i
            </div>
            <h4 className="text-xl font-black uppercase italic text-[#001D3D]">
              Informações importantes
            </h4>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-3">
              <p className="flex items-center gap-2 font-bold text-zinc-900">
                <span aria-hidden="true">🔒</span> Pedido seguro
              </p>
              <p className="text-sm leading-relaxed text-zinc-500">
                Seus dados de entrega são tratados com total sigilo. O pagamento é realizado
                apenas presencialmente com nosso entregador.
              </p>
            </div>
            <div className="space-y-3">
              <p className="flex items-center gap-2 font-bold text-zinc-900">
                <span aria-hidden="true">💡</span> Dica: use PIX
              </p>
              <p className="text-sm leading-relaxed text-zinc-500">
                Pagar com PIX na entrega agiliza o processo e você não precisa se preocupar
                com maquininhas. Simples e rápido!
              </p>
            </div>
            <div className="space-y-3">
              <p className="flex items-center gap-2 font-bold text-zinc-900">
                <span aria-hidden="true">⚠️</span> Atenção
              </p>
              <p className="text-sm leading-relaxed text-zinc-500">
                No momento não aceitamos parcelamento de pedidos. O pagamento é feito à vista
                ou no crédito em 1x.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
