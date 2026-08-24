# RapChef Landing Page — Deploy no Vercel

## Pré-requisitos
- Repo no GitHub com o código deste projeto (commit `bc52541`).
- Conta no Vercel (GitHub App autorizado).

## Passo a passo

1. **Push do repo** para o GitHub.
2. No Vercel, **Add New → Project** → importe o repo.
3. O Vercel detecta **Vite** automaticamente (via `vercel.json` com `"framework": "vite"`).
4. Em **Environment Variables**, adicione:
   - `VITE_APPS_SCRIPT_URL` (endpoint do Google Apps Script)
   - `VITE_META_PIXEL_ID` (ID do Meta Pixel)
5. **Deploy** — o build usa `npm run build` e saída `dist/`.

## Configuração já incluída (`vercel.json`)
- `rewrites`: catch-all para SPA (`/(.*)` → `/index.html`)
- Headers de cache imutável para `/imagens/` e `/_astro/`
- Security headers (nosniff, frame DENY, referrer-policy)
- `.nvmrc` fixa Node 22

## Domínio
- Adicione o domínio (ex: `www.rapchef.com.br`) em **Settings → Domains**.
- Configure o DNS conforme instruído pelo Vercel.
- Atualize o **canonical** e os links em `index.html`, `robots.txt` e `sitemap.xml`
  (atualmente com placeholder `https://www.rapchef.com.br/`).

## Smoke tests pós-deploy
```bash
curl -I https://SEU-DOMINIO/            # 200 + security headers
curl -I https://SEU-DOMINIO/imagens/logo.webp   # 200 + cache imutável
curl -I https://SEU-DOMINIO/qualquer-rota       # 200 (SPA fallback)
```
- Rodar Lighthouse (Performance/A11y/Best Practices/SEO).
- Testar o formulário de lead (submit → WhatsApp) em produção.

## Env de produção (secretos)
- `VITE_APPS_SCRIPT_URL` e `VITE_META_PIXEL_ID` são build-time (prefixo `VITE_`).
  Configurar no Vercel antes do deploy de produção.
