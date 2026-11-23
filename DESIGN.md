# DESIGN.md — Kaynnan Bardauil Lemes

Portfólio editorial técnico, dark-first, **sem nenhum arquivo de imagem**. Todo visual é
desenhado em CSS, tipografia e código.

## 1. Atmosphere

Uma interface de engenheiro sênior: fundo quase preto, grid sutil, acento verde-ácido,
manchete gigante e um terminal com código real. Sem fotos, sem ilustrações, sem blobs,
sem gradientes decorativos suaves. A competência aparece na estrutura, não no enfeitamento.

## 2. Tokens

| Token | Dark (padrão) | Light (toggle) |
| --- | --- | --- |
| `--p-bg` | `#0b0d10` | `#f2f0ea` |
| `--p-surface` | `#14171c` | `#e7e4dc` |
| `--p-ink` | `#f2f1ec` | `#111318` |
| `--p-muted` | `#a3a7b0` | `#52565d` |
| `--p-accent` | `#c8ff2e` | `#4a6b00` |

## 3. Typography

- `Syne` 700–800 para display, tracking negativo; hero `clamp(32px, 6.6vw, 96px)`.
- `Figtree` para texto corrido.
- `JetBrains Mono` para rótulos, status e código.

## 4. Visual system (image-free)

- `.texture` — grade CSS com linhas verticais e diagonais em `--hair`/acento.
- `.field` — painel de fundo com grade noatro da seção de trabalho.
- `.wire` — pequeno diagrama CSS nos cards de processo.
- `.terminal` — janela de código com sintaxe real (Python/Odoo).
- `.status` — linha de comando com disponibilidade e stack.
- Cards com raio `2px`, hairline e variação alternada de fundo.

## 5. Motion

`word-highlight` (skill) na seção de processo: a declaração acende palavra por palavra
conforme a rolagem. Sem scroll-reveal de cards, sem parallax, sem efeitos de imagem.

## 6. Tema e conteúdo

Dark é o padrão; o toggle leva ao tema papel e persiste em `localStorage`. Conteúdo real:
Odoo v14–v18, fiscal brasileiro, integrações REST/SOAP, PostgreSQL, React/Next.js, Unreal.
Contatos reais no rodapé. Nenhum dado inventado.
