---
title: Style Dictionary | OhMyUI!
description: Learn how Style Dictionary powers OhMyUI! design tokens. Convert JSON tokens into CSS variables and Flutter constants automatically.
head:
  - - meta
    - property: og:title
      content: Style Dictionary | OhMyUI!
  - - meta
    - property: og:description
      content: Learn how Style Dictionary powers OhMyUI! design tokens. Convert JSON tokens into CSS variables and Flutter constants automatically.
  - - meta
    - property: og:url
      content: https://ui.ohmyopensource.org/technologies/style-dictionary
  - - meta
    - name: keywords
      content: style dictionary, design tokens build tool, css variables generator, flutter tokens generator, design system automation, ohmyui tokens pipeline
  - - meta
    - name: twitter:title
      content: Style Dictionary | OhMyUI!
  - - meta
    - name: twitter:description
      content: Learn how Style Dictionary powers OhMyUI! design tokens. Convert JSON tokens into CSS variables and Flutter constants automatically.
---

# OhMyUI! - Style Dictionary

Style Dictionary is the tool that powers the OhMyUI! token system. It takes token definitions written in JSON and compiles them into platform-specific output formats - CSS variables for Angular and React, and Dart constants for Flutter.

Style Dictionary was created by Amazon and is open source. You can find it at [storybook.js.org](https://amzn.github.io/style-dictionary/).

---

## Why Style Dictionary

Without Style Dictionary, you would need to manually keep three files in sync:

- A CSS file with custom properties for Angular and React
- A Dart file with constants for Flutter
- The original JSON definitions

Change a color in one place and you have to remember to update the other two. Style Dictionary eliminates this problem entirely - you change the JSON once and rebuild, and every platform gets the updated value automatically.

---

## How it works in OhMyUI!

```
packages/tokens/
├── src/
│   ├── colors.json       ← you edit these
│   ├── spacing.json
│   └── typography.json
├── build/
│   ├── css/
│   │   └── variables.css ← Style Dictionary generates this
│   └── dart/
│       └── tokens.dart   ← Style Dictionary generates this
└── sd.config.js          ← tells Style Dictionary what to do
```

The configuration file `sd.config.js` defines two platforms - `css` and `dart` - each with its own output format and destination path.

---

## The token format

Every token in the JSON source files has the same structure:

```json
{
  "category": {
    "name": {
      "value": "the actual value",
      "type": "the token type"
    }
  }
}
```

The `type` field tells Style Dictionary how to transform the value for each platform. Common types are `color`, `dimension`, `fontFamily`, `fontWeight` and `number`.

**Example - a color token:**

```json
{
  "color": {
    "primary": {
      "500": {
        "value": "#6366f1",
        "type": "color"
      }
    }
  }
}
```

This compiles to:

```css
/* CSS */
--color-primary-500: #6366f1;
```

```dart
// Dart
static const colorPrimary500 = Color(0xFF6366F1);
```

Notice how Style Dictionary automatically converts the hex color to the `Color(0xFF...)` format that Flutter expects. This is called a **transform** - Style Dictionary applies different transforms for each platform.

---

## The configuration file

```javascript
// sd.config.js
export default {
  source: ['src/**/*.json'], // read all JSON files in src/
  platforms: {
    css: {
      transformGroup: 'css', // apply the standard CSS transforms
      buildPath: 'build/css/', // output directory
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables', // wrap everything in :root { }
        },
      ],
    },
    dart: {
      transformGroup: 'flutter', // apply the standard Flutter transforms
      buildPath: 'build/dart/',
      files: [
        {
          destination: 'tokens.dart',
          format: 'flutter/class.dart', // wrap everything in a Dart class
        },
      ],
    },
  },
};
```

---

## Transform groups

A transform group is a set of transformations applied to token values before they are written to the output file. Style Dictionary includes built-in transform groups for the most common platforms:

| Transform group | Platform       | What it does                                                   |
| --------------- | -------------- | -------------------------------------------------------------- |
| `css`           | Angular, React | Converts values to CSS-compatible formats, wraps in `:root {}` |
| `flutter`       | Flutter        | Converts colors to `Color(0xFF...)`, converts sizes to doubles |

---

## Building the tokens

Run this command from the `packages/tokens` directory:

```bash
npx style-dictionary build --config sd.config.js
```

Or from the root of the repository:

```bash
cd packages/tokens && npx style-dictionary build --config sd.config.js && cd ../..
```

You must rebuild every time you modify a token source file. The build output in `packages/tokens/build/` is committed to the repository so that components can reference it without running the build first.

---

## Adding a new token type

If you need a token type that does not fit into the existing categories, create a new JSON file in `packages/tokens/src/`:

```bash
touch packages/tokens/src/shadows.json
```

Then add your tokens following the same structure:

```json
{
  "shadow": {
    "sm": {
      "value": "0 1px 3px rgba(0,0,0,0.12)",
      "type": "shadow"
    }
  }
}
```

Style Dictionary will pick it up automatically on the next build because `sd.config.js` uses a glob pattern `src/**/*.json`.

---

## Further reading

- [Style Dictionary official documentation](https://styledictionary.com/)
- [Style Dictionary GitHub repository](https://github.com/amzn/style-dictionary)
- [OhMyUI! Adding a Token guide](/guides/adding-a-token)
