# Typography

Typography tokens are defined in `packages/tokens/src/typography.json` and cover font family, size, weight and line height.

---

## Font family

| Token            | CSS                       | Dart | Value                            |
| ---------------- | ------------------------- | ---- | -------------------------------- |
| font-family-sans | `var(--font-family-sans)` | -    | `'Inter', system-ui, sans-serif` |
| font-family-mono | `var(--font-family-mono)` | -    | `'JetBrains Mono', monospace`    |

> Font family tokens are not available in Flutter because Flutter manages fonts through `pubspec.yaml` and `TextTheme`, not CSS variables. Use the Flutter font system directly for font families.

---

## Font size

| Token         | CSS                    | Dart                       | Value  |
| ------------- | ---------------------- | -------------------------- | ------ |
| font-size-xs  | `var(--font-size-xs)`  | `OhMyUITokens.fontSizeXs`  | `12px` |
| font-size-sm  | `var(--font-size-sm)`  | `OhMyUITokens.fontSizeSm`  | `14px` |
| font-size-md  | `var(--font-size-md)`  | `OhMyUITokens.fontSizeMd`  | `16px` |
| font-size-lg  | `var(--font-size-lg)`  | `OhMyUITokens.fontSizeLg`  | `18px` |
| font-size-xl  | `var(--font-size-xl)`  | `OhMyUITokens.fontSizeXl`  | `20px` |
| font-size-2xl | `var(--font-size-2xl)` | `OhMyUITokens.fontSize2xl` | `24px` |
| font-size-3xl | `var(--font-size-3xl)` | `OhMyUITokens.fontSize3xl` | `30px` |
| font-size-4xl | `var(--font-size-4xl)` | `OhMyUITokens.fontSize4xl` | `36px` |

---

## Font weight

| Token                | CSS                           | Dart                              | Value |
| -------------------- | ----------------------------- | --------------------------------- | ----- |
| font-weight-regular  | `var(--font-weight-regular)`  | `OhMyUITokens.fontWeightRegular`  | `400` |
| font-weight-medium   | `var(--font-weight-medium)`   | `OhMyUITokens.fontWeightMedium`   | `500` |
| font-weight-semibold | `var(--font-weight-semibold)` | `OhMyUITokens.fontWeightSemibold` | `600` |
| font-weight-bold     | `var(--font-weight-bold)`     | `OhMyUITokens.fontWeightBold`     | `700` |

---

## Line height

| Token                   | CSS                              | Dart | Value  |
| ----------------------- | -------------------------------- | ---- | ------ |
| font-line-height-tight  | `var(--font-line-height-tight)`  | -    | `1.25` |
| font-line-height-normal | `var(--font-line-height-normal)` | -    | `1.5`  |
| font-line-height-loose  | `var(--font-line-height-loose)`  | -    | `1.75` |

> Line height tokens are not available in Flutter because Flutter uses `height` multiplier inside `TextStyle` which works differently from CSS line-height. Use Flutter's native `TextStyle.height` property directly.

---

## Usage guidelines

**Use `font-size-md` as the default body size** - it corresponds to 16px which is the standard comfortable reading size for most interfaces.

**Use `font-weight-medium` for interactive elements** like buttons and labels. Use `font-weight-semibold` for headings and emphasis. Reserve `font-weight-bold` for strong emphasis only.

**Use `font-family-sans` for all UI text** and `font-family-mono` only for code snippets, terminal output or technical content.

**Use `font-line-height-normal` as the default** for body text. Use `font-line-height-tight` for headings and compact UI elements.

---

## Loading fonts

Typography tokens reference Inter and JetBrains Mono but do not load them automatically. You are responsible for loading the fonts in your project.

**Angular / React - add to your global CSS:**

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono&display=swap');
```

**Flutter - add to `pubspec.yaml`:**

```yaml
flutter:
  fonts:
    - family: Inter
      fonts:
        - asset: assets/fonts/Inter-Regular.ttf
          weight: 400
        - asset: assets/fonts/Inter-Medium.ttf
          weight: 500
        - asset: assets/fonts/Inter-SemiBold.ttf
          weight: 600
        - asset: assets/fonts/Inter-Bold.ttf
          weight: 700
```

---

## Next steps

- [Adding a Token](/guides/adding-a-token)
- [Button component](/components/button)
