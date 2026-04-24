---
title: Spacing | OhMyUI!
description: Explore OhMyUI! spacing and radius tokens. Consistent 4px scale for padding, margin and layout across Angular, React and Flutter.
head:
  - - meta
    - property: og:title
      content: Spacing | OhMyUI!
  - - meta
    - property: og:description
      content: Explore OhMyUI! spacing and radius tokens. Consistent 4px scale for padding, margin and layout across Angular, React and Flutter.
  - - meta
    - property: og:url
      content: https://docs.ui.ohmyopensource.org/tokens/spacing
  - - meta
    - name: keywords
      content: spacing tokens, design system spacing, css spacing scale, ui layout spacing, border radius tokens, design system layout, ohmyui tokens
  - - meta
    - name: twitter:title
      content: Spacing | OhMyUI!
  - - meta
    - name: twitter:description
      content: Explore OhMyUI! spacing and radius tokens. Consistent 4px scale for padding, margin and layout across Angular, React and Flutter.
---

# OhMyUI! - Spacing

Spacing tokens are defined in `packages/tokens/src/spacing.json` and used for padding, margin, gap and any other dimensional value in components.

---

## Spacing scale

OhMyUI! uses a base-4 spacing scale. Every value is a multiple of 4px, which ensures visual consistency and alignment across all components.

| Token      | CSS                 | Dart                     | Value  |
| ---------- | ------------------- | ------------------------ | ------ |
| spacing-0  | `var(--spacing-0)`  | `OhMyUITokens.spacing0`  | `0px`  |
| spacing-1  | `var(--spacing-1)`  | `OhMyUITokens.spacing1`  | `4px`  |
| spacing-2  | `var(--spacing-2)`  | `OhMyUITokens.spacing2`  | `8px`  |
| spacing-3  | `var(--spacing-3)`  | `OhMyUITokens.spacing3`  | `12px` |
| spacing-4  | `var(--spacing-4)`  | `OhMyUITokens.spacing4`  | `16px` |
| spacing-5  | `var(--spacing-5)`  | `OhMyUITokens.spacing5`  | `20px` |
| spacing-6  | `var(--spacing-6)`  | `OhMyUITokens.spacing6`  | `24px` |
| spacing-8  | `var(--spacing-8)`  | `OhMyUITokens.spacing8`  | `32px` |
| spacing-10 | `var(--spacing-10)` | `OhMyUITokens.spacing10` | `40px` |
| spacing-12 | `var(--spacing-12)` | `OhMyUITokens.spacing12` | `48px` |
| spacing-16 | `var(--spacing-16)` | `OhMyUITokens.spacing16` | `64px` |
| spacing-20 | `var(--spacing-20)` | `OhMyUITokens.spacing20` | `80px` |
| spacing-24 | `var(--spacing-24)` | `OhMyUITokens.spacing24` | `96px` |

---

## Border radius scale

Border radius tokens control the roundness of component corners.

| Token       | CSS                  | Dart                      | Value    |
| ----------- | -------------------- | ------------------------- | -------- |
| radius-none | `var(--radius-none)` | `OhMyUITokens.radiusNone` | `0px`    |
| radius-sm   | `var(--radius-sm)`   | `OhMyUITokens.radiusSm`   | `4px`    |
| radius-md   | `var(--radius-md)`   | `OhMyUITokens.radiusMd`   | `8px`    |
| radius-lg   | `var(--radius-lg)`   | `OhMyUITokens.radiusLg`   | `12px`   |
| radius-xl   | `var(--radius-xl)`   | `OhMyUITokens.radiusXl`   | `16px`   |
| radius-full | `var(--radius-full)` | `OhMyUITokens.radiusFull` | `9999px` |

---

## Usage guidelines

**Use `spacing-4` as the default padding** for most components - it is the base unit of the scale and provides comfortable touch targets.

**Use `spacing-2` for compact components** like badges and tags where a smaller padding is appropriate.

**Use `radius-md` as the default border radius** for most components. Use `radius-full` for pill-shaped elements like badges and tags.

**Never use arbitrary values** - if none of the existing tokens fit, follow the [Adding a Token](/guides/adding-a-token) guide.

---

## Next steps

- [Typography](/tokens/typography)
- [Adding a Token](/guides/adding-a-token)
