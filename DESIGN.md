# DESIGN.md — Kaynnan Bardauil Lemes

Sistema visual do portfólio. Editorial técnico, dark-first, sem formas lúdicas e sem stock.
A referência de composição é a escala tipográfica de portfólios de designers premiados
(Typewolf), executada aqui com identidade própria.

## 1. Atmosphere

Uma interface de engenheiro madura: fundo quase preto, tipografia enorme, acento único
verde-ácido, hairlines e bordas secas. Sem blobs, sem gradientes pastel, sem ilustrações
"fofas", sem cartões arredondados. O peso visual vem da escala do texto e do contraste.

## 2. Tokens

| Token | Dark (padrão) | Light (toggle) |
| --- | --- | --- |
| `--p-bg` | `#0b0d10` | `#f2f0ea` |
| `--p-surface` | `#14171c` | `#e7e4dc` |
| `--p-ink` | `#f2f1ec` | `#111318` |
| `--p-muted` | `#a3a7b0` | `#52565d` |
| `--p-accent` | `#c8ff2e` | `#4a6b00` |
| `--p-accent-ink` | `#0b0d10` | `#f2f0ea` |
| `--hair` | `rgba(242,241,236,.14)` | `rgba(17,19,24,.16)` |

O acento aparece apenas na manchete, no botão principal e no estado ativo. Nunca em
fundos grandes.

## 3. Typography

- **Display/UI:** `Syne` 700–800, tracking `-0.03em` a `-0.055em`. Manchete do hero
  `clamp(46px, 6.6vw, 96px)`.
- **Texto:** `Figtree` 400–500, line-height 1.55–1.65.
- **Labels/tech:** `JetBrains Mono` 13px, sentence case (nunca caixa alta).

## 4. Components

- Nav mínima: marca small, EN/PT, toggle de tema e um único botão principal.
- Botões: raio `2px`, preenchimento sólido no primário, seta `→`. Sem ghost/gradiente.
- Cards: `2px` de raio, 1px hairline, fundo de superfície com variação alternada nos
  cards de trabalho; miniatura de artwork no chip.
- Imagens de apoio: artwork SVG original, em camada `opacity .38`, dessaturada,
  `object-fit: cover`, sem legenda. Nunca foto de banco.
- Grão estático em `html::before`, opacidade `.028`.

## 5. Layout

Geometria validada pela Taste Skill: seções em 1 ou 2 telas exatas, `--h` por seção,
respiro controlado, nenhuma seção vizinha atravessando o tile. No phone, serviços e
processo ocupam 2 telas; trabalho é comprimido para caber em 2.

## 6. Motion

Entrada única do hero; hover de links com sublinhado desenhado e seta que avança 4px;
sem scroll-reveal, sem parallax. `prefers-reduced-motion` desliga transições.

## 7. Tema

Dark é o padrão. O botão de lua alterna para o tema papel e persiste em `localStorage`.

## 8. Conteúdo

Odoo v14–v18, fiscal brasileiro (NF-e, NFS-e, SPED, CBS/IBS), integrações REST/SOAP,
PostgreSQL, React/Next.js, Unreal. Contatos reais no rodapé. Todo o artwork é original
e pode ser usado com este site; créditos em `credits.html`.
