---
title: Adding a Token | OhMyUI!
description: Learn how to add a new design token in OhMyUI!. Edit JSON sources, rebuild tokens and use them across Angular, React and Flutter.
head:
  - - meta
    - property: og:title
      content: Adding a Token | OhMyUI!
  - - meta
    - property: og:description
      content: Learn how to add a new design token in OhMyUI!. Edit JSON sources, rebuild tokens and use them across Angular, React and Flutter.
  - - meta
    - property: og:url
      content: https://docs.ui.ohmyopensource.org/guides/adding-a-token
  - - meta
    - name: keywords
      content: add design token, design system tokens, style dictionary workflow, css variables tokens, flutter design tokens, token naming conventions, ohmyui tokens
  - - meta
    - name: twitter:title
      content: Adding a Token | OhMyUI!
  - - meta
    - name: twitter:description
      content: Learn how to add a new design token in OhMyUI!. Edit JSON sources, rebuild tokens and use them across Angular, React and Flutter.
---

# OhMyUI! - Adding a Token

This guide explains how to add a new design token to OhMyUI! - from editing the JSON source to seeing it available in Angular, React and Flutter.

---

## When to add a new token

Before adding a token, ask yourself:

- Does an existing token cover this use case? Check `packages/tokens/build/css/variables.css` for the full list.
- Is this value used in more than one place? If it appears only once, a token is probably overkill.
- Does it represent a design decision that should be consistent across platforms?

If the answer to all three is yes, proceed.

---

## Step 1 - Edit the JSON source file

Token source files live in `packages/tokens/src/`. Open the file that matches the category of your token:

| Category           | File                                  |
| ------------------ | ------------------------------------- |
| Colors             | `packages/tokens/src/colors.json`     |
| Spacing and radius | `packages/tokens/src/spacing.json`    |
| Typography         | `packages/tokens/src/typography.json` |

Add your token following the existing structure. Every token needs a `value` and a `type`:

```json
{
  "color": {
    "brand": {
      "value": "#FF6B6B",
      "type": "color"
    }
  }
}
```

This will generate:

- CSS: `--color-brand: #FF6B6B`
- Dart: `OhMyUITokens.colorBrand = Color(0xFFFF6B6B)`

---

## Step 2 - Rebuild the tokens

From the root of the repository:

```bash
cd packages/tokens
npx style-dictionary build --config sd.config.js
cd ../..
```

This regenerates `build/css/variables.css` and `build/dart/tokens.dart`.

---

## Step 3 - Verify the output

Open `packages/tokens/build/css/variables.css` and confirm your new token appears:

```css
:root {
  --color-brand: #ff6b6b;
  /* ... */
}
```

Open `packages/tokens/build/dart/tokens.dart` and confirm the Dart constant:

```dart
static const colorBrand = Color(0xFFFF6B6B);
```

---

## Step 4 - Use the token in a component

Now you can use your token in any component:

**CSS (Angular / React):**

```css
.my-component {
  background-color: var(--color-brand);
}
```

**Dart (Flutter):**

```dart
color: OhMyUITokens.colorBrand,
```

---

## Step 5 - Commit and push

```bash
git checkout -b feat/add-color-brand-token
git add packages/tokens/src/
git add packages/tokens/build/
git commit -m "feat(tokens): add color-brand token"
git push origin feat/add-color-brand-token
```

Open a Pull Request targeting `dev`.

> Include both the source JSON and the build output in the same commit - reviewers should be able to see exactly what the token compiles to.

---

## Naming conventions

Token names follow a hierarchical structure separated by hyphens:

> `category-subcategory-scale`

Examples:

- `color-primary-500` → category `color`, subcategory `primary`, scale `500`
- `spacing-4` → category `spacing`, scale `4`
- `font-size-md` → category `font`, subcategory `size`, scale `md`

Keep names descriptive but concise. Avoid abbreviations that are not immediately obvious.

---

## Next steps

- [Adding a Component - Angular](/guides/adding-a-component-angular)
- [Adding a Component - React](/guides/adding-a-component-react)
- [Adding a Component - Flutter](/guides/adding-a-component-flutter)
