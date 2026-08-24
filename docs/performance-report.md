# RapChef Landing Page — Relatório de Performance

## Build (Vite 6.4.3)

| Artefato | Tamanho | Gzip |
|---|---|---|
| `index.html` | 8.28 kB | 2.76 kB |
| `index-*.css` | 46.51 kB | 8.50 kB |
| `index-*.js` | 252.58 kB | 76.43 kB |
| **Total dist/** | **4.4 MB** | — |

> O JS (76 kB gzip) é o bundle do React 19 + app. Como a LP é interativa (formulário,
> FAQ, carrosséis), o React é necessário; landing estáticas puras teriam 0 kB, mas aqui o
> trade-off é aceitável para as funcionalidades de conversão.

## Core Web Vitals (estimativa de design)

- **LCP < 2.5s**: Hero usa poster WebP (61 kB) no mobile e vídeo `preload="metadata"`
  no desktop; imagens têm `width/height` implícitas via `aspect-*`.
- **INP < 200ms**: JS defasado (module), sem animações contínuas em SVG, eventos com
  listeners não-inline (CSP-friendly).
- **CLS < 0.1**: todas as imagens têm `aspect-*`/dimensões fixas; `font-display: swap`.

## Otimizações aplicadas

1. **Vídeos otimizados** (ffmpeg):
   - `marmita-01` 4.6 MB → **502 kB** (720p, CRF 30, faststart)
   - `rapchef-como-funciona` 4.3 MB → **2.4 MB** (540p, CRF 30)
   - Hero: **1 vídeo** (antes 3 do mesmo arquivo) + poster WebP no mobile
2. **Imagens → WebP**: logo (52k→11k), screenshots, posts e 8 pratos (~180k→~65k cada).
3. **Lazy loading**: vídeo da Solution via IntersectionObserver; imagens abaixo do fold
   com `loading="lazy" decoding="async"`.
4. **Fontes**: só Inter (weights 400–900) com preconnect; nenhum peso morto.
5. **Google Fonts preconnect** no head.

## Bundle analysis

- CSS 8.5 kB gzip (< 15 kB ✓)
- HTML 2.76 kB gzip (~67% compressão)
- Nenhum recurso externo pesado (apenas Google Fonts + Meta Pixel).
