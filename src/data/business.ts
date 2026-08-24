// Dados reais do negócio RapChef — centralizados para fácil manutenção.

export const BUSINESS = {
  name: 'RapChef Delivery',
  whatsapp: '5511988504312',
  whatsappDisplay: '(11) 98850-4312',
  instagram: 'https://www.instagram.com/rapchef.deliverysp/',
  instagramHandle: '@rapchef.deliverysp',
  city: 'São Paulo, SP',
  area: 'SP, Grande São Paulo e ABC',
  since: 2020,
  rating: '4.9/5.0',
} as const;

export const PRICING = {
  unit: 'R$ 21,90',
  comboWeekly: 'R$ 109,50', // 5 marmitas
  comboMonthly: 'R$ 438,00', // 20 marmitas + frete grátis
  monthlySavings: 'R$ 362', // 800 - 438
  savingsPct: 'até 51%',
  validadeDias: 180,
  validadeMeses: 6,
} as const;

export const SEO = {
  domain: 'https://www.rapchef.com.br/',
} as const;
