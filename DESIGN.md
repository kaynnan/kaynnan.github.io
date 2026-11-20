# DESIGN.md — Kaynnan Bardauil Lemes

Design system do portfólio. Identidade própria, inspirada na linguagem visual de
portfólios editoriais expressivos (referência de textura, escala e movimento:
`itssharl.ee`; referência de tipografia: `typewolf.com/portfolio-sites`).
**Não é uma cópia**: shapes, composição, copy, conteúdo e paleta são originais.

## 1. Visual theme & atmosphere

Técnico, porém tátil. Uma tela de trabalho clara com grão fino, formas orgânicas
macias em gradientes pastel recortadas pelas bordas, e tipografia grande e
geométrica no centro. A sensação é de um estúdio de design: preciso nos detalhes,
solto na composição. Sem gradientes escuros de "SaaS", sem sombras duras, sem
cartões genéricos.

## 2. Colors & roles

| Token | Valor (light) | Valor (dark) | Papel |
| --- | --- | --- | --- |
| `--bg` | `#f3f2f9` | `#121426` | fundo com textura de grão |
| `--ink` | `#606887` | `#e8e9f5` | texto principal, links, manchetes |
| `--ink-strong` | `#383e5c` | `#ffffff` | manchetes, segmentos em negrito |
| `--ink-soft` | `#7d849f` | `#a9afcb` | metadados, labels |
| `--line` | `rgba(96,104,135,.22)` | `rgba(232,233,245,.22)` | hairlines |
| `--surface` | `#eaebf4` | `#1c1f36` | painéis, cards |
| `--blob-mint` | `#a8f0d0 → #d9f7a8` | `#39c9a0 → #8ad94f` | forma 1 |
| `--blob-peach` | `#ffd6c4 → #ffeaa8` | `#e07a5f → #d9a441` | forma 2 |
| `--blob-blue` | `#c3c8f7 → #a8e6ef` | `#6a72d8 → #3fa6c4` | forma 3 |
| `--blob-rose` | `#f3c4e6 → #c9c8f7` | `#c25f9e → #6a72d8` | forma 4 |

Contraste: texto pequeno nunca abaixo de 4.5:1; use `--ink-strong` quando
`--ink` não alcançar. O grão é uma camada `position:fixed; pointer-events:none`
com ruído SVG em data-URI, opacidade baixa (0.03–0.06).

## 3. Typography

- **Display / interface:** `Syne` (Google Fonts), pesos 500–800, tracking
  `-0.03em` em manchetes. É a voz do site: larga, geométrica, com personalidade.
- **Texto:** `Figtree`, 400–500, line-height 1.55–1.65.
- **Micro / técnica:** `JetBrains Mono`, 12–13px, para labels e metadados.

Escala (desktop / phone): hero 72–96 / 40–48; h2 44 / 30; h3 24 / 20;
lead 20 / 18; body 16; label 13. Segmentos em negrito dentro da manchete são
usados uma vez por tela, nunca em toda ela.

## 4. Components

- **Nav:** uma barra mínima e fixa; marca pequena à esquerda; à direita,
  EN/PT, botão de tema (lua/sol) e menu. Sem caixas, sem fundo distinto.
- **Links:** sublinhado desenhado (borda inferior de 1–2px com leve curva ou
  `text-decoration` animado), seta `→` nos links de ação. Nada de botões
  preenchidos competindo entre si; no máximo um por tela.
- **Blobs:** `border-radius` orgânico (valores diferentes por forma, ex.
  `62% 38% 51% 49% / 45% 55% 45% 55%`), `filter: blur(0)` + highlight interno
  suave (`box-shadow: inset 8px 12px 40px rgba(255,255,255,.45)`), gradiente
  pastel. Nunca sombra externa, nunca borda. Dois ou três no hero, um ou dois
  espalhados pelo resto da página; nunca a mesma composição duas vezes.
- **Cards:** fundo `--surface`, raio 20–24px, hairline, sem sombra. Um único
  estilo de card em todo o site.
- **Footer:** fechamento tipográfico grande, links utilitários, linha de
  créditos das fotografias.

## 5. Layout principles

- Margem lateral generosa no desktop (até 160px em telas largas), 24px no phone.
- Hero central e não convencional: manchete ocupa o meio, blobs a recortam nas
  bordas; o texto nunca fica ilegível sobre um blob (use áreas calmas ou fundo
  sólido atrás do texto).
- Uma ideia por seção. Seções com respiro: 120–160px de padding vertical no
  desktop, 80–96px no phone.
- Grid de 12 colunas no desktop; no phone, uma coluna.

## 6. Motion

- Entrada única do hero: manchete sobe 12–20px em ~700ms, com as linhas
  defasadas; blobs entram com escala sutil (1.04 → 1). Sem fade de seção ao
  rolar, sem parallax de texto.
- Hover: link sublinhado "desenha", blob flutua 2–3px, card sobe 2px.
  Durações 150–250ms, `cubic-bezier(.2,.8,.2,1)`.
- `prefers-reduced-motion`: tudo parado e visível; nenhum conteúdo escondido.

## 7. Dark mode

Alternância por `data-theme="dark"` no `<html>`, persistida em `localStorage`.
As mesmas formas e hierarquia, com fundo azul-ardósia profundo, texto claro e
blobs mais saturados. Respeita `prefers-color-scheme` na primeira visita.

## 8. Do's and Don'ts

**Do:** grão sutil; manchetes grandes e confiantes; blobs com brilho interno;
links com seta; contraste verificado; português e inglês em pé de igualdade.

**Don't:** copiar as formas, o texto ou a composição da referência; usar
Inter/Roboto/Poppins/Space Grotesk; gradientes escuros de SaaS; cartões com
sombra; ícones genéricos de "nuvem"; texto de preenchimento; fotos sem crédito.

## 9. Content & credits

Conteúdo real: Odoo v14–v18, fiscal brasileiro (NF-e, NFS-e, SPED, CBS/IBS),
integrações REST/SOAP, PostgreSQL, React/Next.js, Unreal Engine. Contatos
reais no rodapé. Fotografias de stand-in vêm do Wikimedia Commons (CC0 / CC BY
/ domínio público) e são creditadas em `credits.html`; uma única linha de
crédito no rodapé.
