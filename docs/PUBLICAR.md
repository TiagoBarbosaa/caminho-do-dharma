# Como publicar o Caminho do Dharma

## Vercel (recomendado)

### Configuração já incluída no projeto

- `vercel.json` — usa **npm** (não pnpm), output em `dist/public`, SPA rewrite
- `package.json` sem `packageManager` pnpm (evita erro 254)
- Build: só o frontend Vite (`npm run build`)

### Passos

1. Extraia o zip e abra a pasta no terminal.
2. (Opcional local) `npm install --legacy-peer-deps` e `npm run build` para testar.
3. No [vercel.com](https://vercel.com): **Add New Project** → importe o repositório **ou** use CLI:

```bash
npm i -g vercel
cd caminho-do-dharma
vercel
```

4. Se o painel perguntar:
   - **Install Command:** `npm install --legacy-peer-deps`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist/public`

5. Deploy → abra a URL HTTPS → Instalar app (PWA).

### Erro: `pnpm install` exited with 254

**Causa:** o Vercel detectava pnpm pelo `packageManager` / `pnpm-lock.yaml`.

**Correção neste zip:**
- Campo `packageManager` removido
- `pnpm-lock.yaml` renomeado para `.bak`
- `vercel.json` força `npm install --legacy-peer-deps`

Se ainda aparecer pnpm no log:
1. Project Settings → General → **Framework Preset:** Other
2. Build & Development Settings → sobrescreva Install Command para:
   `npm install --legacy-peer-deps`
3. Redeploy.

---

## Netlify

- Build: `npm run build`
- Publish: `dist/public`
- SPA: redirect `/*` → `/index.html` (status 200)

---

## Checklist

- [ ] HTTPS ativo  
- [ ] `/audio/*.mp3` carregam  
- [ ] Rotas internas não dão 404 no refresh  
- [ ] PWA instalável  

---

## GitHub Pages

Sim — funciona bem (app 100% estático).

### Passo a passo

1. Crie um repositório no GitHub (ex.: `caminho-do-dharma`).
2. Envie o código:
   ```bash
   git init
   git add .
   git commit -m "Caminho do Dharma"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/caminho-do-dharma.git
   git push -u origin main
   ```
3. No repositório: **Settings → Pages**:
   - Source: **GitHub Actions**
4. O workflow `.github/workflows/deploy-pages.yml` roda no push.
5. URL final: `https://SEU_USUARIO.github.io/caminho-do-dharma/`

### Importante

| Situação | O que fazer |
|----------|-------------|
| Repo `usuario.github.io` | Em `deploy-pages.yml`, use `VITE_BASE: /` |
| Repo com outro nome | Já usa `VITE_BASE: /nome-do-repo/` automaticamente |
| Refresh em rota | `404.html` copia o `index.html` (SPA) |
| Áudios / PWA | Caminhos relativos — funcionam sob o subpath |

### Build local simulando Pages

```bash
VITE_BASE=/caminho-do-dharma/ npm run build
npx serve dist/public
```
