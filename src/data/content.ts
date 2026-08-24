import { Dish, Combo, Review, FAQItem } from '../types';

// Caminhos locais (self-hosted WebP em public/imagens/)
export const DISHES: Dish[] = [
  {
    id: 1,
    name: 'Feijoada',
    description:
      'Feijão, arroz, couve, lombo defumado, paio, carne seca, linguiça calabresa, bacon, cebola e temperos naturais.',
    image: '/imagens/pratos/feijoada.webp',
    category: 'Tradicional',
  },
  {
    id: 2,
    name: 'Estrogonofe de Carne',
    description:
      'Arroz, batata, carne bovina, creme de leite, champignon, ketchup e temperos naturais.',
    image: '/imagens/pratos/estrogonofe-de-carne.webp',
    category: 'Carne',
  },
  {
    id: 3,
    name: 'Lasanha Bolonhesa',
    description:
      'Massa para lasanha, molho de tomate, carne bovina, queijo mussarela, presunto e temperos.',
    image: '/imagens/pratos/lasanha-bolonhesa.webp',
    category: 'Massas',
  },
  {
    id: 4,
    name: 'Bobó de Frango',
    description:
      'Arroz, mandioca, frango, leite de coco, leite de vaca, cebola, salsa e temperos.',
    image: '/imagens/pratos/bobo-de-frango.webp',
    category: 'Frango',
  },
  {
    id: 5,
    name: 'Bacalhau Gratinado',
    description:
      'Arroz, brócolis, leite de vaca, Catupiry, bacalhau, azeitona, cebola e temperos.',
    image: '/imagens/pratos/bacalhau-gratinado.webp',
    category: 'Peixes',
  },
  {
    id: 6,
    name: 'Virado à Paulista',
    description:
      'Arroz, carne suína, feijão, couve, farinha de mandioca, linguiça calabresa, bacon e temperos.',
    image: '/imagens/pratos/virado-a-paulista.webp',
    category: 'Tradicional',
  },
  {
    id: 7,
    name: 'Escondidinho de Frango',
    description:
      'Mandioca, frango, Catupiry, leite de vaca, cebola, alho e temperos naturais.',
    image: '/imagens/pratos/escondidinho-de-frango.webp',
    category: 'Frango',
  },
  {
    id: 8,
    name: 'Hambúrguer Parmegiana de Carne',
    description:
      'Arroz, batata, carne bovina, molho de tomate, queijo mussarela, cebola e temperos.',
    image: '/imagens/pratos/hamburguer-parmegiana-de-carne.webp',
    category: 'Carne',
  },
];

export const COMBOS: Combo[] = [
  {
    id: 1,
    title: 'Combo Semanal',
    subtitle: '5 marmitas para a semana',
    price: '109',
    priceFraction: ',50',
    footerText: 'R$ 109,50',
    footerSubtext: '5 marmitas · R$ 21,90 cada',
    items: [
      '5 marmitas gourmet ou fitness',
      'Você escolhe entre os 35 sabores',
      'R$ 21,90 por marmita',
      'Economia de 25% vs delivery',
    ],
    cta: 'Garantir Combo Semanal',
    message: 'Olá! Gostaria de garantir o Combo Semanal (5 marmitas).',
  },
  {
    id: 2,
    title: 'Combo Mensal',
    subtitle: '20 marmitas + frete grátis',
    price: '438',
    priceFraction: ',00',
    footerText: 'R$ 438,00',
    footerSubtext: 'Frete grátis · R$ 21,90 cada',
    popular: true,
    items: [
      '20 marmitas gourmet ou fitness',
      'Você escolhe entre os 35 sabores',
      'Frete GRÁTIS em toda a entrega',
      'Economia de R$ 362/mês vs delivery',
    ],
    cta: 'Garantir Combo Mensal',
    message:
      'Olá! Gostaria de garantir o Combo Mensal (20 marmitas) com Frete Grátis.',
  },
];

export const REVIEWS: (Review & {
  color: string;
  initials: string;
  time: string;
})[] = [
  {
    id: 1,
    name: 'Marcelo Silva',
    rating: 5,
    comment:
      'Fiquei impressionado com o sabor. O tempero é caseiro de verdade e as porções são muito bem servidas. Economizei muito tempo na minha semana.',
    initials: 'MS',
    color: 'bg-orange-500',
    time: '1 mês atrás',
  },
  {
    id: 2,
    name: 'Juliana Andrade',
    rating: 5,
    comment:
      'Excelente atendimento do início ao fim. Entregaram no prazo combinado. A comida é maravilhosa e os temperos são naturais como eu pedi.',
    initials: 'JA',
    color: 'bg-blue-500',
    time: '2 meses atrás',
  },
  {
    id: 3,
    name: 'Ricardo Oliveira',
    rating: 5,
    comment:
      'Recomendo muito! A RapChef faz um trabalho impecável. Atendimento transparente e preço justo pelo que entregam.',
    initials: 'RO',
    color: 'bg-green-500',
    time: '3 semanas atrás',
  },
  {
    id: 4,
    name: 'Fernanda Costa',
    rating: 5,
    comment:
      'As marmitas fitness me ajudaram muito na dieta. São saborosas e não parecem comida de dieta sem graça. Nota 10!',
    initials: 'FC',
    color: 'bg-purple-500',
    time: '1 semana atrás',
  },
  {
    id: 5,
    name: 'Bruno Santos',
    rating: 5,
    comment:
      'Praticidade total. O sistema de aquecimento não deixa a comida aguada. A feijoada é a melhor que já comi.',
    initials: 'BS',
    color: 'bg-red-500',
    time: '5 dias atrás',
  },
  {
    id: 6,
    name: 'Patrícia Lima',
    rating: 5,
    comment:
      'A variedade do cardápio é o diferencial. Todo mês tem novidade e nunca enjoo. Entrega sempre pontual em São Paulo.',
    initials: 'PL',
    color: 'bg-yellow-600',
    time: '2 semanas atrás',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'Vocês entregam na minha cidade?',
    answer:
      'Atendemos São Paulo, Grande São Paulo e ABC.\n\nAs marmitas chegam em embalagem térmica especial que mantém tudo 100% congelado. Consulte o frete promocional no WhatsApp.',
  },
  {
    question: 'Vocês têm loja física? Posso retirar no local?',
    answer:
      'Sim, trabalhamos com retirada.\n\nSomos Delivery Oficial da franqueadora em São Paulo.',
  },
  {
    question: 'Qual o pedido mínimo?',
    answer:
      'O pedido mínimo é de R$ 50,00, que equivale a 3 marmitas.\n\nVocê pode montar seu pedido ou escolher um dos nossos combos: Semanal (5 unidades por R$ 109,50) ou Mensal (20 unidades por R$ 438,00 com frete grátis).',
  },
  {
    question: 'Posso escolher os sabores que quiser?',
    answer:
      'SIM! Em todos os combos, VOCÊ ESCOLHE quais sabores quer entre os 35 disponíveis no cardápio.\n\nQuer 3 feijoadas e 2 estrogonofes? Pode! Quer variar todos os dias? Também pode! Total liberdade de escolha.',
  },
  {
    question: 'Como faço minha compra? Qual o passo a passo?',
    answer:
      'Para garantir suas marmitas de forma rápida e segura, o processo é feito diretamente via WhatsApp com nosso time de atendimento. Basta clicar no botão abaixo:',
  },
  {
    question: 'Comida congelada perde sabor e nutrientes?',
    answer:
      'NÃO! Usamos congelamento industrial rápido, que preserva 100% do sabor, textura, nutrientes e frescor.\n\nÉ como pausar o tempo no melhor momento da comida. Quando você aquece, fica exatamente como recém-preparada. Não usamos conservantes químicos — o próprio congelamento preserva tudo naturalmente.',
  },
  {
    question: 'Como faço para esquentar?',
    answer:
      'Super simples:\n1. Retire a marmita do congelador\n2. Remova a tampa plástica (para o vapor sair)\n3. Coloque no micro-ondas por 5 minutos em potência alta\n4. Está pronta para consumo!\n\nA embalagem é própria para micro-ondas e vai direto do congelador para o micro-ondas. Mais rápido que esperar 1 hora do delivery!',
  },
  {
    question: 'Qual o prazo de validade?',
    answer:
      'As marmitas duram até 180 dias (6 meses) no congelador.\n\nTodas vêm com etiquetas contendo data de fabricação e validade. Você pode estocar tranquilo sem pressa!',
  },
  {
    question: 'Qual o tamanho das porções?',
    answer:
      '• Marmitas Gourmet: 400g por unidade\n• Marmitas Fitness: 300g por unidade\n\nAmbas são porções completas e satisfatórias para uma refeição (almoço ou jantar). A maioria das pessoas fica bem satisfeita com uma unidade.',
  },
  {
    question: 'Vocês têm opções veganas, low carb, zero carb ou para diabéticos?',
    answer:
      'NÃO. Vamos ser diretos:\n\n❌ Não temos opções veganas\n❌ Não temos opções low carb ou zero carb\n❌ Não temos linha específica para diabéticos\n❌ Não personalizamos pratos (somos distribuidores, não fabricamos)\n\n✅ O que temos: 7 opções da linha Fitness (mais leves, controladas), mas não são low/zero carb.',
  },
  {
    question: 'Quais formas de pagamento aceitam?',
    answer:
      '🚚 Pagamento Na Entrega:\n• PIX — QR Code na entrega, sem taxas\n• Cartão de Crédito — Maquininha na entrega, sem taxa\n• Cartão de Débito — Todas as bandeiras, sem taxas\n\n⚠️ Importante: Não parcelamos pagamentos.',
  },
  {
    question: 'Quanto vou economizar comparado ao delivery?',
    answer:
      'Economia significativa:\n\n• Delivery comum: R$ 35 a 45 por refeição\n• RapChef: R$ 21,90 por refeição\n• Você economiza até 51% por refeição!\n\nEm um mês (20 refeições):\nDelivery = R$ 800 | RapChef = R$ 438 | Economia de R$ 362/mês',
  },
  {
    question: 'Vocês fornecem informações nutricionais?',
    answer:
      'Sim, todas as marmitas vêm com etiquetas contendo informações nutricionais completas: calorias, carboidratos, proteínas, gorduras, sódio, etc.\n\nSe você tem alguma restrição específica, entre em contato antes de pedir.',
  },
  {
    question: 'Qual o prazo de entrega?',
    answer:
      'A entrega é a combinar, o que for melhor para sua necessidade. Você escolhe o melhor dia e horário para receber seu pedido.',
  },
  {
    question: 'Atendem empresas ou pedidos para PJ?',
    answer:
      'SIM! Atendemos empresas que querem oferecer marmitas para seus colaboradores.\n\nEntre em contato pelo WhatsApp (11) 98850-4312 para solicitar um orçamento personalizado corporativo.',
  },
];
