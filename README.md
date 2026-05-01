# poliksena_portfolio

Portfolio and blog built with Next.js 15, a Figma-driven design token system, and MDX content.

## Stack

| Layer         | Tool                                               |
| ------------- | -------------------------------------------------- |
| Framework     | Next.js 15 (App Router, static export)             |
| Language      | TypeScript (strict)                                |
| Styling       | Tailwind CSS v4 (CSS-first config)                 |
| Fonts         | Inter, JetBrains Mono, Lora via `next/font/google` |
| Content       | MDX via `next-mdx-remote/rsc` + `gray-matter`      |
| Dark mode     | `next-themes` + CSS custom properties              |
| Linting       | ESLint + Prettier + Husky pre-commit hooks         |
| Design source | Figma via MCP (`@figma/mcp`)                       |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
portfolio/
├── content/
│   ├── blog/          # Blog posts (.mdx)
│   └── work/          # Portfolio projects (.mdx)
├── scripts/
│   └── build-tokens.mjs   # Generates tokens.css + tokens.ts from tokens.json
├── src/
│   ├── app/           # Next.js App Router pages and layouts
│   ├── design-system/
│   │   ├── components/    # UI primitives (Button, Card, Tag, Typography…)
│   │   ├── hooks/         # useMediaQuery, useLocalStorage
│   │   ├── layouts/       # Header, Footer, PageLayout
│   │   └── utils/         # cn(), formatDate()
│   └── lib/
│       ├── content.ts         # MDX file reader + frontmatter parser
│       ├── content.types.ts   # Frontmatter TypeScript interfaces
│       └── mdx-components.tsx # MDX element → styled component map
└── tokens/
    ├── tokens.json    # Source of truth (W3C Design Token format)
    ├── tokens.css     # Generated CSS custom properties
    └── tokens.ts      # Generated TypeScript constants
```

## Design tokens

All visual values — color, typography, spacing, radius, shadow, motion — live in `tokens/tokens.json`. The CSS and TypeScript files are generated from it.

```bash
# After editing tokens.json or updating from Figma:
npm run tokens
```

Never edit `tokens.css` or `tokens.ts` directly.

## Content

Add MDX files to `content/blog/` or `content/work/`. Required frontmatter:

```yaml
---
title: Post title
description: One-line summary
date: 2024-03-15
tags: [tag-one, tag-two]
draft: false
---
```

Set `draft: true` to exclude a post from all listings without deleting it.

## Figma MCP

See [FIGMA_SETUP.md](./FIGMA_SETUP.md) for the full workflow to connect Figma and extract design tokens.

Quick start:

1. Add `FIGMA_ACCESS_TOKEN` as an environment secret in Ona
2. Open `.vscode/mcp.json` — the MCP server starts automatically
3. Ask the AI: _"List all local color styles in Figma file `<FILE_ID>`"_
4. Update `tokens/tokens.json` with extracted values
5. Run `npm run tokens`

## Commands

| Command                | Description                                |
| ---------------------- | ------------------------------------------ |
| `npm run dev`          | Start dev server                           |
| `npm run build`        | Production build                           |
| `npm run tokens`       | Regenerate token CSS + TS from tokens.json |
| `npm run type-check`   | TypeScript check (no emit)                 |
| `npm run lint`         | ESLint                                     |
| `npm run format`       | Prettier (write)                           |
| `npm run format:check` | Prettier (check only)                      |

## Deployment

The site is fully static (`generateStaticParams` on all dynamic routes). Deploy to any static host:

- **Vercel**: connect the repo, zero config needed
- **Netlify**: `npm run build`, publish `out/` (add `output: 'export'` to `next.config.ts` first)
- **GitHub Pages**: same as Netlify

Set `NEXT_PUBLIC_SITE_URL` to your production domain for correct sitemap and OG URLs.
