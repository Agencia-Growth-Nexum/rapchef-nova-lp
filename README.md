# RapChef Landing Page

Landing page de alta conversão para **marmitas congeladas** da RapChef Delivery (São Paulo).

React 19 + Vite 6 + TypeScript + Tailwind CSS v4. Mobile-first, otimizada para SEO,
performance e acessibilidade.

## Stack

- **React 19** + **Vite 6** + **TypeScript**
- **Tailwind CSS v4** via `@tailwindcss/vite` (build local, sem CDN)
- Assets self-hosted em `public/imagens/` (WebP + vídeos otimizados)

## Scripts

```bash
npm install        # instala dependências
npm run dev        # servidor de desenvolvimento (porta 3000)
npm run build      # build de produção para dist/
npm run preview    # pré-visualiza a build
npm run typecheck  # checagem de tipos (tsc --noEmit)
```

## Estrutura

```
src/
  App.tsx                 # monta as seções na ordem de conversão
  index.css               # tokens de design + keyframes + utilities
  main.tsx                # entry point (inicializa Pixel)
  data/                   # business.ts (dados do negócio) + content.ts (cardápio, combos, reviews, FAQ)
  lib/                    # whatsapp.ts, fbq.ts (Meta Pixel)
  hooks/                  # useAutoScrollCarousel
  services/               # leads.ts (Google Apps Script)
  utils/                  # utm.ts, smoothScroll.ts
  components/
    sections/             # Hero, Reviews, Plans, LeadForm, FAQ, Footer, ...
    ui/                   # WhatsAppIcon, FloatingWhatsApp
public/
  imagenes/               # assets otimizados (WebP, mp4)
  favicon.svg, robots.txt, sitemap.xml
```

## Configuração de variáveis de ambiente

Copie `.env.example` para `.env.local`:

| Variável | Descrição |
|---|---|
| `VITE_APPS_SCRIPT_URL` | Endpoint do Google Apps Script que recebe os leads (POST JSON) |
| `VITE_META_PIXEL_ID` | ID do Meta Pixel (deixe vazio para desativar) |

### Google Apps Script (captura de leads)

O formulário (`LeadForm`) envia um POST `no-cors` com o JSON no corpo para
`VITE_APPS_SCRIPT_URL`, depois redireciona ao WhatsApp com a mensagem pré-preenchida
independentemente do sucesso do POST (fire-and-forget).

Exemplo mínimo de Apps Script (`doPost`) que salva em uma planilha:

```js
function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.appendRow([data.timestamp, data.nome, data.whatsapp, data.cep, data.combo, data.page, JSON.stringify(data.utm)]);
  return ContentService.createTextOutput('ok');
}
```

Publicar como **Web App**, acesso "Anyone" / "Anyone with the link", e copiar a URL
para `VITE_APPS_SCRIPT_URL`.

## Deploy (Vercel)

1. Suba o repo para o GitHub.
2. Importe no Vercel (framework detectado: Vite).
3. Configure as variáveis de ambiente (`VITE_APPS_SCRIPT_URL`, `VITE_META_PIXEL_ID`).
4. Defina o domínio (ex: `www.rapchef.com.br`) e o DNS.

`vercel.json` já define `framework`, `outputDirectory`, rewrites SPA, e headers de
cache/segurança. `.nvmrc` fixa o Node 22.

## SEO

- Meta title/description, canonical, Open Graph, Twitter Card
- JSON-LD: `Restaurant` (LocalBusiness) + `FAQPage`
- `sitemap.xml` + `robots.txt`
- Dados reais do negócio em `src/data/business.ts`

## Pré-visualização da build

```bash
python3 serve.py 8000   # serve dist/ com gzip + security headers
```

## Pendências (placeholders a configurar pelo cliente)

- `VITE_APPS_SCRIPT_URL` (endpoint de leads) — placeholder em `.env.example`
- `VITE_META_PIXEL_ID` (Meta Pixel)
- Domínio canônico (`https://www.rapchef.com.br/` em `index.html` / `robots.txt` / `sitemap.xml`)
