# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Recriar fielmente o portfólio React/Vite entregue pelo usuário, com o conteúdo real de Kaynnan, e publicá-lo na raiz do `main` do `kaynnan.github.io`.

**Architecture:** App React 19 + Vite 8 + Tailwind 4 + TypeScript 5.7 em `/app/`. Build com `base: './'` gera `/app/dist`; script de publicação copia o build para a raiz do repo, onde o GitHub Pages serve. Fonte e artefato publicado convivem no mesmo branch.

**Tech Stack:** React 19, react-dom 19, Vite 8, `@vitejs/plugin-react` 6, Tailwind 4, `@tailwindcss/vite` 4, TypeScript 5.7, Node 24.

**Spec:** `docs/superpowers/specs/2026-11-23-portfolio-redesign-design.md`

## Global Constraints

- Código-fonte do app: `App.tsx`, `index.css`, `main.tsx`, `package.json`, `tsconfig.json` — todos colados na conversa pelo usuário; reproduzir estrutura e estilos exatamente.
- Assets: 56 arquivos referenciados, todos presentes em `/mnt/c/Users/Odoo/Downloads/assets`; copiar para `/app/public/assets` e manter `const A = "/assets"`.
- Fontes: `@font-face` com as 6 URLs `static.figma.com/font/...` do código original (HTTP 200 confirmado).
- Paleta: `--page #11071f`, `--header #1a0b2e`, `--purple #7127ba`, `--lilac #a362ff`, `--project-copy #ccd6f6`.
- Conteúdo: somente fatos reais — ver spec, seção "Respostas ao builder check".
- Idioma: inglês; sem toggle EN/PT.
- Publicação: raiz do branch `main`, com `.nojekyll` preservado.
- Sem invenção de números, clientes, prêmios ou citações.

## Review Focus

- Build com `base: './'`: URLs relativas no `index.html` publicado — verificação no Task 4 com `grep` por `src="/assets` no HTML gerado (deve ser `./assets`).
- Fontes Figma bloqueadas ou com CORS: verificação no Task 4 com `document.fonts.check` no navegador; fallback legível se falhar.
- 56 assets: verificação no Task 1 com loop `test -f` sobre a lista de nomes do código.
- Responsividade 320/390/900: verificação no Task 4 com screenshots e `document.documentElement.scrollWidth <= innerWidth`.
- Conteúdo vazando do template: verificação no Task 2 com `grep -ri` por "Ibrahim|Facebook|Example Project|Spotify" em `/app/src` (zero ocorrências).

---

### Task 1: Scaffold e assets

**Files:**
- Create: `app/package.json`, `app/tsconfig.json`, `app/vite.config.ts`, `app/index.html`, `app/src/main.tsx`
- Create: `app/public/assets/` (56 arquivos copiados)

**Interfaces:**
- Produces: `npm run dev` e `npm run build` funcionando em `/app`; `base: './'` no `vite.config.ts`; entry `src/main.tsx` renderizando `<App />` em `#root` com `React.StrictMode`.

- [ ] **Step 1: Escrever configs e entry exatamente como no código entregue**

`package.json`: nome `figma-make-app`, `private: true`, `type: module`, scripts `dev/build/preview/format`, dependências e devDependencies com as versões do código do usuário.
`tsconfig.json`: copiar `compilerOptions` e `include` do código entregue.
`vite.config.ts`: `defineConfig({ plugins: [react(), tailwindcss()], base: './' })`.
`index.html`: `<div id="root"></div>` + `<script type="module" src="/src/main.tsx"></script>`.
`src/main.tsx`: código exato do usuário (createRoot + StrictMode).

- [ ] **Step 2: Copiar os assets e verificar os 56 nomes**

Run: `cp /mnt/c/Users/Odoo/Downloads/assets/* app/public/assets/` e, para cada nome referenciado no código (`251bb.png`, `5d777.svg`, `9de93.svg`, `b51ae.svg`, `3d229.png`, `d7219.png`, `206b3.png`, `eead5.svg`, os 12 de tecnologias, os 11 satélites, os 6 beams, 4 orbits, planet/haze/logo e os 2 SVGs de fundo), rodar `test -f`.
Expected: zero arquivos faltando.

- [ ] **Step 3: Instalar e verificar o build vazio**

Run: `cd app && npm install && npm run build`
Expected: build conclui; `app/dist/index.html` existe.

- [ ] **Step 4: Commit**

```bash
git add app && git commit -m "feat: scaffold React portfolio app with assets"
```

---

### Task 2: App.tsx com conteúdo real

**Files:**
- Create: `app/src/App.tsx`

**Interfaces:**
- Consumes: `A = "/assets"`, arrays `experiences`, `technologies`, `satellites` do código entregue.
- Produces: default export `App`; componentes internos `ExperienceCard({item,index})`, `Project({reverse,image,imageClass})`; estados `expanded` (card), `open` (projeto), `menuOpen` (header); `useEffect` com listener `hashchange` fechando o menu.

- [ ] **Step 1: Escrever a estrutura do componente com o conteúdo da spec**

Copiar a estrutura JSX do código entregue seção por seção — `site-header`, `hero` (`portrait-wrap`, `hello-arrow`, `hero-statement` com `cover-ring` e `cover-caption`, `about`), `experience`, `skills` (`technology-list` + `skill-universe` com beams/orbits/planet/satellites), `projects` (dois `<Project>`), `contact`.

Substituir todo o conteúdo pelos fatos da spec:
- hero: "Hello! I Am Kaynnan Bardauil Lemes"; designer → "A Developer who"; h1 `Ships systems that<br/>by its <span>production</span>.` — ajustar para "Ships systems that / run in <span>production</span>." mantendo `<br/>` e `<span>`; legenda "Because if it doesn't run in production, what else can?".
- about: "I'm a Software Engineer." + cursor; designation "Currently, I'm a Senior Full Stack Developer at TIS"; bio real (8 anos, Odoo v14–v18, Brasil/Angola).
- 4 experiences com títulos/períodos/textos da spec.
- 12 technologies: React, JavaScript, CSS, Node.js, Express, MongoDB com os ícones originais; Python, Odoo, PostgreSQL, Docker, AWS, Next.js com tile de iniciais (sem ícone, para não atribuir logo errado).
- projetos: "ARSEG reporting engine" e "CBS/IBS on service invoices", descrições reais; manter `d7219.png` e `206b3.png`, `reverse` no segundo.
- contato: email `kaynnanx1@gmail.com`, links reais de GitHub/LinkedIn/Workana, fileira social com `eead5.svg`.

- [ ] **Step 2: Verificar que nenhum conteúdo do template sobrou**

Run: `grep -riE 'Ibrahim|Facebook|Spotify|Example Project|Take your client onboard' app/src || true`
Expected: nenhuma linha.

- [ ] **Step 3: Verificar tipos e build**

Run: `cd app && npx tsc --noEmit && npm run build`
Expected: sem erros de tipo; build conclui.

- [ ] **Step 4: Commit**

```bash
git add app/src/App.tsx && git commit -m "feat: port portfolio components with real content"
```

---

### Task 3: index.css fiel

**Files:**
- Create: `app/src/index.css`

**Interfaces:**
- Consumes: estrutura de classes de `App.tsx` (`.portfolio-shell`, `.site-header`, `.hero-intro`, `.portrait-wrap`, `.experience-grid`, `.experience-card`, `.technology-list`, `.skill-universe`, `.project`, `.project-description`, `.contact`, etc.).
- Produces: estilos completos para desktop (1198px), `@media (max-width:900px)` e `(max-width:560px)`, `prefers-reduced-motion`.

- [ ] **Step 1: Copiar o CSS integralmente do código entregue**

Incluir: `@import "tailwindcss"`, os 6 `@font-face` com URLs Figma, `@layer base`, `:root` com as variáveis exatas, `.portfolio-shell` com os 3 radial-gradients, todos os blocos de `.site-header` até `.social-row`, os dois breakpoints e o bloco `prefers-reduced-motion`. Única mudança permitida: adicionar regra para o tile de iniciais das 6 tecnologias sem ícone (`.technology .tech-label { font-family: var(--poppins-semibold); font-size: 12px; color: #fff; }`).

- [ ] **Step 2: Verificar build e ausência de CSS órfão**

Run: `cd app && npm run build && grep -c 'figma.com/font' app/dist/assets/*.css`
Expected: build conclui; pelo menos 6 ocorrências de URL de fonte.

- [ ] **Step 3: Commit**

```bash
git add app/src/index.css && git commit -m "feat: port faithful visual system and responsive styles"
```

---

### Task 4: Publicação na raiz e validação no navegador

**Files:**
- Create: `app/scripts/publish.mjs`
- Modify: `app/package.json` (script `publish:site`)
- Delete: `index.html` antigo, `assets/` antigo (CSS/JS da versão Taste Skill), `credits.html`, `favicon.svg` do template antigo se substituído pelo build.
- Keep: `.nojekyll`, `.gitignore`, `docs/`, `DESIGN.md`.

**Interfaces:**
- Consumes: `app/dist/` do Task 3.
- Produces: `index.html` e `assets/` na raiz do repo, servidos pelo GitHub Pages; `npm run publish:site` reproduz a publicação.

- [ ] **Step 1: Escrever o script de publicação**

`app/scripts/publish.mjs`: apaga raiz `index.html` e raiz `assets/`; copia recursivamente `app/dist/*` para a raiz; não apaga `.git`, `.nojekyll`, `.gitignore`, `docs/`, `DESIGN.md`, `app/`. Imprime os arquivos publicados.

- [ ] **Step 2: Rodar build + publicação e checar URLs relativas**

Run: `cd app && npm run build && npm run publish:site && grep -o 'src="[^"]*"' index.html | head`
Expected: `src="./assets/index-*.js"` (relativo), nunca `/assets/index-*.js`.

- [ ] **Step 3: Validar no navegador (desktop e mobile)**

Subir `python3 -m http.server` na raiz; com playwright-cli: abrir, checar console sem erros, `document.documentElement.scrollWidth <= innerWidth` em 1440/390/320, screenshots das seções hero/experience/skills/projects/contact, `document.fonts.check('16px "Poppins:Medium"')`.
Expected: zero erros de console; sem scroll horizontal; fontes carregadas; conteúdo real visível.

- [ ] **Step 4: Commit e push**

```bash
git add -A && git commit -m "feat: publish React portfolio to GitHub Pages root" && git push origin HEAD
```

---

## Self-review

- Spec coverage: projeto React fiel (Tasks 1–3), conteúdo real (Task 2), publicação raiz (Task 4), assets/fontes (Tasks 1 e 3), restrições de não-invenção (Task 2 step 2), decisões de idioma/ícones/manchete (Task 2 step 1). Sem lacunas.
- Estilos do usuário preservados integralmente no Task 3; única exceção documentada (tile de iniciais).
- Nomes consistentes: `A`, `App`, `ExperienceCard`, `Project`, `expanded`, `open`, `menuOpen`, `--page`, `--header`, `--purple`, `--lilac`, `--project-copy`.
- Review Focus coberto por verificações explícitas em Tasks 1, 2 e 4.
