# DESIGN.md — Kaynnan Bardauil Lemes

> Histórico: este arquivo descrevia a versão anterior (sem imagens, acento verde-ácido,
> Syne/Figtree). A versão atual segue o sistema Figma entregue pelo usuário, documentado
> em `docs/superpowers/specs/2026-11-23-portfolio-redesign-design.md`.

## Sistema visual atual (Figma)

Portfólio editorial escuro, denso e com personalidade — reproduzido fielmente do código
React/Vite entregue, com conteúdo real de Kaynnan.

### Tokens

| Token | Valor |
| --- | --- |
| `--page` | `#11071f` |
| `--header` | `#1a0b2e` |
| `--purple` | `#7127ba` |
| `--lilac` | `#a362ff` |
| `--project-copy` | `#ccd6f6` |

### Tipografia (Figma)

- `Preahvihear` — corpo e manchetes (`--body-font`).
- `Poppins` Medium/SemiBold — UI, cards e projetos.
- `Plus Jakarta Sans` SemiBold — navegação.
- `PoetsenOne` e `Poor Story` — acentos ocasionais.
- Todas via `@font-face` em `static.figma.com`, com fallback `sans-serif`.

### Componentes

- Header sticky com marca, 3 links e menu mobile.
- Hero com retrato/monograma, seta, manchete e anel "cover".
- 4 cards de experiência com órbitas e botão LEARN MORE.
- Grid de 12 tecnologias e `skill-universe` com planetas, beams e 11 satélites.
- 2 projetos alternados com painel glassmorphism.
- Contato com email e links sociais reais.

### Assets

56 arquivos em `/mnt/c/Users/Odoo/Downloads/assets`, copiados para `app/public/assets` e
publicados em `assets/` na raiz. Nenhum asset inventado; a foto de outra pessoa do template
foi trocada por monograma KBL, e o logo Facebook por texto TIS.
