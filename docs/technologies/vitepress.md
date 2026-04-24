---
title: VitePress | OhMyUI!
description: Learn how VitePress powers the OhMyUI! documentation site. Write Markdown docs, configure navigation and build a static site.
head:
  - - meta
    - property: og:title
      content: VitePress | OhMyUI!
  - - meta
    - property: og:description
      content: Learn how VitePress powers the OhMyUI! documentation site. Write Markdown docs, configure navigation and build a static site.
  - - meta
    - property: og:url
      content: https://ui.ohmyopensource.org/technologies/vitepress
  - - meta
    - name: keywords
      content: vitepress, documentation site generator, markdown docs, static site generator, vue docs tool, ohmyui documentation
  - - meta
    - name: twitter:title
      content: VitePress | OhMyUI!
  - - meta
    - name: twitter:description
      content: Learn how VitePress powers the OhMyUI! documentation site. Write Markdown docs, configure navigation and build a static site.
---

# OhMyUI! - VitePress

VitePress is the static site generator used to build the OhMyUI! documentation site. It takes Markdown files and turns them into a fast, searchable documentation website.

You can find VitePress at [vitepress.dev](https://vitepress.dev/).

---

## Why VitePress

Documentation written in Markdown is easy to write, easy to review in pull requests, and easy to keep in sync with the code. VitePress adds navigation, search, syntax highlighting and a clean default theme on top of plain Markdown - without requiring any frontend development knowledge to contribute.

VitePress is built on Vite, the same build tool used by the React package in OhMyUI!, which means it integrates naturally into the existing stack with no additional tooling overhead.

---

## How it works in OhMyUI! Docs

The documentation lives in the `ohmyui-docs` repository. VitePress reads the Markdown files in the `docs/` directory and generates a static website.

```
ohmyui-docs/
├── docs/
│   ├── .vitepress/
│   │   ├── config.mts     ← site configuration, navigation and sidebar
│   │   ├── dist/          ← generated site (gitignored)
│   │   └── cache/         ← build cache (gitignored)
│   ├── index.md           ← home page
│   ├── getting-started/
│   ├── tokens/
│   ├── components/
│   ├── guides/
│   └── technologies/
└── package.json
```

---

## Running the docs locally

```bash
npm run docs:dev
```

This starts a local development server at `http://localhost:5173`. Changes to Markdown files are reflected instantly without reloading the page.

---

## Building for production

```bash
npm run docs:build
```

This generates a static site in `docs/.vitepress/dist/`. The output is a set of HTML, CSS and JavaScript files that can be deployed to any static hosting service.

To preview the production build locally:

```bash
npm run docs:preview
```

---

## Configuration

The site is configured in `docs/.vitepress/config.mts`. The most important parts are:

### Navigation bar

```typescript
nav: [
  { text: 'Getting Started', link: '/getting-started/installation' },
  { text: 'Tokens', link: '/tokens/overview' },
  { text: 'Components', link: '/components/button' },
];
```

Each item in `nav` creates a link in the top navigation bar.

### Sidebar

```typescript
sidebar: {
  '/getting-started/': [
    {
      text: 'Getting Started',
      items: [
        { text: 'Installation', link: '/getting-started/installation' },
        { text: 'Setup', link: '/getting-started/setup' },
      ]
    }
  ]
}
```

The sidebar is defined per section - each key is a path prefix and the value is the sidebar content shown when the user is in that section.

### Search

```typescript
search: {
  provider: 'local';
}
```

VitePress includes a built-in local search engine that indexes all Markdown content. No external service required.

---

## Writing documentation

### Frontmatter

Every Markdown file can have a frontmatter block at the top that controls page-level settings:

```markdown
---
title: My Page Title
description: A brief description for SEO
---

# My Page Title
```

### Code blocks

Always specify the language for syntax highlighting:

````markdown
```typescript
const foo = 'bar';
```
````

````markdown
```bash
npm install @ohmyopensource/ohmyui-angular
```
````

### Links

Use relative links between pages:

```markdown
See the [Installation guide](/getting-started/installation) for more details.
```

### Callouts

VitePress supports callout containers for tips, warnings and danger notices:

```markdown
::: tip
This is a helpful tip.
:::

::: warning
Pay attention to this.
:::

::: danger
This will break things.
:::
```

---

## Adding a new page

1. Create a new Markdown file in the appropriate directory:

```bash
touch docs/components/input.md
```

2. Add the page to the sidebar in `docs/.vitepress/config.mts`:

```typescript
'/components/': [
  {
    text: 'Components',
    items: [
      { text: 'Button', link: '/components/button' },
      { text: 'Badge', link: '/components/badge' },
      { text: 'Input', link: '/components/input' }, // add this
    ]
  }
]
```

3. Write the content in the Markdown file.
4. Verify with `npm run docs:dev`.
5. Commit and push.

---

## Deployment

The documentation is deployed automatically to Vercel on every push to `main`. Vercel detects VitePress and runs `npm run docs:build` automatically.

The production site is available at [ui.ohmyopensource.org](https://ui.ohmyopensource.org).

---

## Further reading

- [VitePress official documentation](https://vitepress.dev/)
- [VitePress Markdown extensions](https://vitepress.dev/guide/markdown)
- [VitePress configuration reference](https://vitepress.dev/reference/site-config)
