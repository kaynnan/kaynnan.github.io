# Design — portfolio redesign (2026-11-23)

## Intent

O usuário rejeitou a versão anterior: tipografia "ruim", arte "ruim", visualmente cansativo.
Ele entregou um app React/Vite completo e pediu para segui-lo **fielmente**, mas com o
**conteúdo dele**. Objetivo: portfólio com personalidade, densidade visual controlada e
identidade de engenheiro sênior — não um template genérico.

## Goals

- Reproduzir estrutura, componentes, estados, layout e estilos do código entregue.
- Substituir todo o conteúdo de exemplo (Ibrahim Memon, Facebook, projetos genéricos) por
  fatos reais de Kaynnan Bardauil Lemes.
- Manter publicação no GitHub Pages a partir da raiz do branch `main`, sem exigir mudança
  de configuração no site do GitHub.

## Non-goals / anti-goals

- Não "melhorar" a paleta, as fontes ou a composição por gosto pessoal.
- Não inventar números, clientes, prêmios ou citações.
- Não transformar em site estático caseiro (isso foi o que falhou antes).
- Não pedir ao usuário para trocar a fonte do GitHub Pages.

## Constraints

- 70 arquivos em `C:\Users\Odoo\Downloads\assets` ↔ `/mnt/c/Users/Odoo/Downloads/assets`;
  todos os 56 arquivos referenciados pelo código existem.
- Fontes `@font-face` apontam para `static.figma.com` (HTTP 200 confirmado).
- Node 24 / npm 11 disponíveis. Vite 8, React 19, Tailwind 4, TypeScript 5.7.
- Repo `kaynnan/kaynnan.github.io`, branch `main`, Pages serve a raiz.

## Approaches

1. **React/Vite fiel, build publicado na raiz (escolhido).** Criar `package.json`,
   `vite.config.ts`, `tsconfig.json`, `index.html`, `src/App.tsx`, `src/index.css`,
   `src/main.tsx`; copiar assets; substituir conteúdo. Build gera `dist/`; um script
   copia `dist/*` para a raiz do repo, que é o que o Pages publica. Mantém componentes e
   estados exatamente como enviados. Custo: fonte e build convivem no mesmo branch.
2. React/Vite + GitHub Actions: build no push, mas exige trocar a fonte do Pages para
   "GitHub Actions" — impossível sem acesso às configurações do repositório. Descartado.
3. Reimplementar em HTML/CSS estático: publicação trivial, mas trai "fielmente esse código"
   e perde os componentes/estados. Descartado.

## Decisões do builder (call explícito)

- **Idioma:** inglês, como no código entregue. O toggle EN/PT da versão anterior sai;
  reintroduzi-lo exigiria duplicar todo o conteúdo e não existe no template.
- **Cards de experiência:** quatro fatos reais — TIS, Ark Solutions, Escodoo, Colégio
  Objetivo. Os títulos do template são substituídos por esses fatos; o texto de apoio é factual.
- **Grid de tecnologias:** 12 tiles. Seis ícones do template correspondem a ferramentas reais
  (React, JavaScript, CSS, Node.js, Express, MongoDB); os outros seis recebem rótulo real
  (Python, Odoo, PostgreSQL, Docker, AWS, Next.js) com tile de iniciais em mono, para não
  atribuir logo errado a ferramenta que ele não usa.
- **Projetos:** dois casos reais — motor ARSEG (TIS/Odoo/Angola) e CBS/IBS em NFS-e
  (Odoo 18/AvaTax/Brasil) — com as descrições do portfólio atual. As duas imagens de
  preview do template são mantidas como visual de produto.
- **Contato:** `kaynnanx1@gmail.com`, com GitHub/LinkedIn/Workana no lugar da linha social
  genérica; mantido o SVG social do template na fileira.
- **Hero:** "Hello! I Am Kaynnan Bardauil Lemes"; manchete no espírito do original,
  trocando "Judges a book by its cover" por "Ships systems that / run in production." —
  mantendo o anel "cover" e a legenda abaixo (texto fechado nas Respostas ao builder check).
- **Sobre:** "I'm a Software Engineer." + "Currently a Senior Full Stack Developer at TIS"
  + bio real (8 anos, Odoo v14–v18, Brasil/Angola).
- **Skill universe / órbitas / beams:** integralmente preservados.

## Respostas ao builder check

1. **Fonte do app:** o usuário colou o código completo na conversa — `App.tsx`, `index.css`,
   `main.tsx`, `package.json`, `tsconfig.json` e a lista de imports. Não existe zip nem
   diretório do app; o builder escreve esses arquivos a partir do texto da conversa. Os 56
   assets referenciados existem em `/mnt/c/Users/Odoo/Downloads/assets` e serão copiados.
2. **Fonte × build:** o app React/Vite fica em `/app/` (com `index.html`, `src/` e configs
   próprios). O build sai em `/app/dist`; um script de publicação copia `app/dist/*` para a
   raiz do repo, substituindo o `index.html` antigo e removendo o `assets/` antigo (CSS/JS da
   versão Taste Skill). Raiz mantém `.nojekyll`, `.gitignore`, `docs/`, `favicon.svg`,
   `DESIGN.md` e o `assets/` recém-gerado pelo Vite. `vite.config.ts` usa `base: './'`.
3. **Experiências (fatos do portfólio atual):**
   - TIS — Odoo Developer — Dec 2025–now — "Regulatory reporting, insurance integrations and
     release automation for the Angolan market."
   - Ark Solutions — Founder — "Discovery, requirements, scoping and solution design for
     client projects."
   - Escodoo — Odoo Developer — Mar 2023–Oct 2026 — "Custom modules for sales, inventory,
     accounting and MRP, real-time integrations and version migrations."
   - Colégio Objetivo — Robotics Teacher — Jan 2022–Nov 2024 — "Taught robotics and
     programming to school students."
4. **Contatos (do portfólio atual):** GitHub `https://github.com/kaynnan`; LinkedIn
   `https://www.linkedin.com/in/kaynnanbardauil`; Workana
   `https://www.workana.com/freelancer/a1292a22656bc7a7d133d85385ff4b7b`; email
   `kaynnanx1@gmail.com`.
5. **Manchete fechada (decisão do builder, corregível):** "Hello! I Am Kaynnan Bardauil
   Lemes"; linha "A Developer who"; h1 em duas linhas "Ships systems that / run in
   <span>production</span>."; legenda do anel "Because if it doesn't run in production, what
   else can?".

## O que fica para o builder

- Copiar assets, montar arquivos, instalar dependências, substituir conteúdo, rodar build,
  publicar e validar no navegador (desktop + mobile).
- Rodar `git commit`/`push` ao final, conforme o usuário pediu em toda a sessão.
