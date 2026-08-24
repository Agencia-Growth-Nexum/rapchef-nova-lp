# RapChef Landing Page — Relatório de Acessibilidade (WCAG 2.2 AA)

## Checklist

### Semântica e landmarks
- [x] `<header>` (Navbar), `<main>`, `<footer>`, `<nav>`, `<section>`, `<article>`
- [x] Cada `<section>` com `aria-labelledby` apontando para seu heading
- [x] Um único `<h1>` (Hero); hierarquia h1→h2→h3 sem pular níveis

### Navegação por teclado
- [x] Todos os interativos são `<button>`/`<a>` focáveis
- [x] `:focus-visible` global (outline 3px vermelho vinho)
- [x] `aria-expanded`/`aria-controls` no FAQ e no menu mobile
- [x] Skip-link implícito (first focusable = logo → nav; aceitável para LP de 1 página)

### Contraste (4.5:1 texto normal)
- [x] Texto zinc-500 sobre branco/zinc-50 (contraste adequado)
- [x] Texto branco sobre zinc-900 (hero/footer)
- [x] Amarelo #FACC15 com texto zinc-900 (alta relação de contraste)

### Formulários (LeadForm)
- [x] `<label htmlFor>` ligado a cada input
- [x] `autocomplete` (name, tel, postal-code)
- [x] `role="status" aria-live="polite"` para mensagens de erro
- [x] `noValidate` + validação custom em JS (sem popups nativos conflitantes)
- [x] `aria-label` em ícones/ações

### Motion
- [x] `@media (prefers-reduced-motion: reduce)` desativa animações/transições
- [x] Animações decorativas com `aria-hidden="true"`

### Imagens
- [x] Todas as imagens informativas com `alt` descritivo
- [x] Imagens decorativas com `alt=""`/`aria-hidden`

### Touch targets
- [x] Botões/links com padding ≥ 44px de altura
- [x] WhatsApp flutuante com alvo amplo

### Emojis decorativos
- [x] Ícones/emojis decorativos com `aria-hidden="true"`

## Notas
- O botão de WhatsApp flutuante esconde o texto em telas pequenas (max-w-0) mas mantém
  `aria-label` acessível.
- O menu mobile usa `aria-expanded` e fecha ao navegar.
