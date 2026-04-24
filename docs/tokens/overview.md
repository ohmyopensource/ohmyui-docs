---
title: Design Tokens | OhMyUI!
description: Learn how design tokens work in OhMyUI!. Centralized values for colors, spacing and typography shared across Angular, React and Flutter.
head:
  - - meta
    - property: og:title
      content: Design Tokens | OhMyUI!
  - - meta
    - property: og:description
      content: Learn how design tokens work in OhMyUI!. Centralized values for colors, spacing and typography shared across Angular, React and Flutter.
  - - meta
    - property: og:url
      content: https://ui.ohmyopensource.org/tokens/overview
  - - meta
    - name: keywords
      content: design tokens, design system tokens, style dictionary tokens, css variables design system, flutter design tokens, cross platform ui tokens, ohmyui
  - - meta
    - name: twitter:title
      content: Design Tokens | OhMyUI!
  - - meta
    - name: twitter:description
      content: Learn how design tokens work in OhMyUI!. Centralized values for colors, spacing and typography shared across Angular, React and Flutter.
---

# OhMyUI! - Design Tokens

Design tokens are the foundation of OhMyUI!. They are the single source of truth for all visual values - colors, spacing, typography - used across every platform.

---

## What is a design token?

A design token is a named value that represents a design decision. Instead of writing `#6366F1` directly in your CSS or Dart code, you write `--color-primary-500` or `OhMyUITokens.colorPrimary500`. The actual value lives in one place and propagates everywhere automatically.

This means:

- Change a color once => it updates in Angular, React and Flutter simultaneously
- No hardcoded values scattered across the codebase
- A consistent visual language across all platforms

---

## How tokens work in OhMyUI!

Tokens are defined as JSON files in `packages/tokens/src/`. A tool called **Style Dictionary** reads those files and compiles them into platform-specific output formats.

```
packages/tokens/
├── src/
│   ├── colors.json       <= token definitions
│   ├── spacing.json
│   └── typography.json
├── build/
│   ├── css/
│   │   └── variables.css <= compiled for Angular and React
│   └── dart/
│       └── tokens.dart   <= compiled for Flutter
└── sd.config.js          <= Style Dictionary configuration
```

Every time you modify a token source file, you must rebuild:

```bash
cd packages/tokens
npx style-dictionary build --config sd.config.js
```

For a deep dive into how Style Dictionary works, see the [Style Dictionary](/technologies/style-dictionary) technology page.

---

## Token categories

| Category                         | Description                               | Example               |
| -------------------------------- | ----------------------------------------- | --------------------- |
| [Colors](/tokens/colors)         | Brand, semantic and neutral colors        | `--color-primary-500` |
| [Spacing](/tokens/spacing)       | Padding, margin and gap values            | `--spacing-4`         |
| [Typography](/tokens/typography) | Font family, size, weight and line height | `--font-size-md`      |

---

## Using tokens

### In Angular and React (CSS)

Tokens are available as CSS custom properties on `:root`. Use them anywhere in your stylesheets:

```css
.my-component {
  background-color: var(--color-primary-500);
  padding: var(--spacing-4);
  font-size: var(--font-size-md);
  border-radius: var(--radius-md);
}
```

### In Flutter (Dart)

Tokens are available as static constants on the `OhMyUITokens` class:

```dart
Container(
  padding: const EdgeInsets.all(OhMyUITokens.spacing4),
  color: OhMyUITokens.colorPrimary500,
  child: Text(
    'Hello',
    style: TextStyle(
      fontSize: OhMyUITokens.fontSizeMd,
      fontWeight: OhMyUITokens.fontWeightMedium,
    ),
  ),
)
```

---

## Rules

- **Never hardcode values** - always use a token
- **Never modify the build output** - edit the JSON source files and rebuild
- **Reuse before adding** - check existing tokens before creating new ones
- **If you need a new token** - follow the [Adding a Token](/guides/adding-a-token) guide

---

## Next steps

- [Colors](/tokens/colors)
- [Spacing](/tokens/spacing)
- [Typography](/tokens/typography)
- [Adding a Token](/guides/adding-a-token)
