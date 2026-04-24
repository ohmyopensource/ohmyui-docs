---
title: Colors | OhMyUI!
description: Explore OhMyUI! color tokens. Primary, neutral and semantic palettes available as CSS variables and Dart constants for consistent UI design.
head:
  - - meta
    - property: og:title
      content: Colors | OhMyUI!
  - - meta
    - property: og:description
      content: Explore OhMyUI! color tokens. Primary, neutral and semantic palettes available as CSS variables and Dart constants for consistent UI design.
  - - meta
    - property: og:url
      content: https://ui.ohmyopensource.org/tokens/colors
  - - meta
    - name: keywords
      content: color tokens, design system colors, css variables colors, dart color constants, ui color palette, semantic colors, ohmyui tokens
  - - meta
    - name: twitter:title
      content: Colors | OhMyUI!
  - - meta
    - name: twitter:description
      content: Explore OhMyUI! color tokens. Primary, neutral and semantic palettes available as CSS variables and Dart constants for consistent UI design.
---

# OhMyUI! - Colors

Colors are defined in `packages/tokens/src/colors.json` and compiled automatically to CSS variables and Dart constants.

---

## Primary

The primary palette is the main brand color of OhMyUI!. Use it for interactive elements like buttons, links and focused states.

| Token       | CSS                        | Dart                           | Value     |
| ----------- | -------------------------- | ------------------------------ | --------- |
| primary-50  | `var(--color-primary-50)`  | `OhMyUITokens.colorPrimary50`  | `#eef2ff` |
| primary-100 | `var(--color-primary-100)` | `OhMyUITokens.colorPrimary100` | `#e0e7ff` |
| primary-200 | `var(--color-primary-200)` | `OhMyUITokens.colorPrimary200` | `#c7d2fe` |
| primary-300 | `var(--color-primary-300)` | `OhMyUITokens.colorPrimary300` | `#a5b4fc` |
| primary-400 | `var(--color-primary-400)` | `OhMyUITokens.colorPrimary400` | `#818cf8` |
| primary-500 | `var(--color-primary-500)` | `OhMyUITokens.colorPrimary500` | `#6366f1` |
| primary-600 | `var(--color-primary-600)` | `OhMyUITokens.colorPrimary600` | `#4f46e5` |
| primary-700 | `var(--color-primary-700)` | `OhMyUITokens.colorPrimary700` | `#4338ca` |
| primary-800 | `var(--color-primary-800)` | `OhMyUITokens.colorPrimary800` | `#3730a3` |
| primary-900 | `var(--color-primary-900)` | `OhMyUITokens.colorPrimary900` | `#312e81` |

---

## Neutral

The neutral palette is used for text, backgrounds, borders and surfaces.

| Token        | CSS                         | Dart                            | Value     |
| ------------ | --------------------------- | ------------------------------- | --------- |
| neutral-0    | `var(--color-neutral-0)`    | `OhMyUITokens.colorNeutral0`    | `#ffffff` |
| neutral-50   | `var(--color-neutral-50)`   | `OhMyUITokens.colorNeutral50`   | `#f9fafb` |
| neutral-100  | `var(--color-neutral-100)`  | `OhMyUITokens.colorNeutral100`  | `#f3f4f6` |
| neutral-200  | `var(--color-neutral-200)`  | `OhMyUITokens.colorNeutral200`  | `#e5e7eb` |
| neutral-300  | `var(--color-neutral-300)`  | `OhMyUITokens.colorNeutral300`  | `#d1d5db` |
| neutral-400  | `var(--color-neutral-400)`  | `OhMyUITokens.colorNeutral400`  | `#9ca3af` |
| neutral-500  | `var(--color-neutral-500)`  | `OhMyUITokens.colorNeutral500`  | `#6b7280` |
| neutral-600  | `var(--color-neutral-600)`  | `OhMyUITokens.colorNeutral600`  | `#4b5563` |
| neutral-700  | `var(--color-neutral-700)`  | `OhMyUITokens.colorNeutral700`  | `#374151` |
| neutral-800  | `var(--color-neutral-800)`  | `OhMyUITokens.colorNeutral800`  | `#1f2937` |
| neutral-900  | `var(--color-neutral-900)`  | `OhMyUITokens.colorNeutral900`  | `#111827` |
| neutral-1000 | `var(--color-neutral-1000)` | `OhMyUITokens.colorNeutral1000` | `#000000` |

---

## Semantic

Semantic colors communicate meaning - success, warning, error. Use them consistently so users always know what they mean.

| Token       | CSS                        | Dart                           | Value     |
| ----------- | -------------------------- | ------------------------------ | --------- |
| success-500 | `var(--color-success-500)` | `OhMyUITokens.colorSuccess500` | `#22c55e` |
| success-700 | `var(--color-success-700)` | `OhMyUITokens.colorSuccess700` | `#15803d` |
| warning-500 | `var(--color-warning-500)` | `OhMyUITokens.colorWarning500` | `#f59e0b` |
| warning-700 | `var(--color-warning-700)` | `OhMyUITokens.colorWarning700` | `#b45309` |
| error-500   | `var(--color-error-500)`   | `OhMyUITokens.colorError500`   | `#ef4444` |
| error-700   | `var(--color-error-700)`   | `OhMyUITokens.colorError700`   | `#b91c1c` |

---

## Usage guidelines

**Use 500 as the default** for any color - it is the primary shade of each palette. Use lighter shades (50–400) for backgrounds and hover states, darker shades (600–900) for text on light backgrounds and pressed states.

**Never use neutral-1000 for body text** - use neutral-900 instead for better readability. Reserve neutral-1000 for decorative elements only.

**Semantic colors are not decorative** - only use success, warning and error when you are communicating that specific meaning. Do not use `--color-success-500` as a decorative green.

---

## Adding a new color

If you need a color that does not exist, follow the [Adding a Token](/guides/adding-a-token) guide. Do not add one-off hardcoded values to component files.

---

## Next steps

- [Spacing](/tokens/spacing)
- [Typography](/tokens/typography)
