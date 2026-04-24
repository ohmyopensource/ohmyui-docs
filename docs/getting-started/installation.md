---
title: Installation | OhMyUI!
description: Install OhMyUI! for Angular, React and Flutter. Quick setup guide with npm, tokens and usage examples to get started fast.
head:
  - - meta
    - property: og:title
      content: Installation | OhMyUI!
  - - meta
    - property: og:description
      content: Install OhMyUI! for Angular, React and Flutter. Quick setup guide with npm, tokens and usage examples to get started fast.
  - - meta
    - property: og:url
      content: https://ui.ohmyopensource.org/getting-started/installation
  - - meta
    - name: keywords
      content: ohmyui installation, install design system, angular ui install, react ui install, flutter ui install, npm ui library, design tokens setup
  - - meta
    - name: twitter:title
      content: Installation | OhMyUI!
  - - meta
    - name: twitter:description
      content: Install OhMyUI! for Angular, React and Flutter. Quick setup guide with npm, tokens and usage examples to get started fast.
---

# OhMyUI! - Installation

OhMyUI! is a monorepo containing design tokens and UI components for Angular, React and Flutter. This page explains how to install the packages in your project.

---

## Prerequisites

Before installing, make sure you have:

- [Node.js](https://nodejs.org/) v22 or higher
- [npm](https://www.npmjs.com/) v10 or higher
- [Flutter SDK](https://flutter.dev/docs/get-started/install) - only if using Flutter components

---

## Angular

Install the Angular package:

```bash
npm install @ohmyopensource/ohmyui-angular
```

Import the component you need directly in your standalone component:

```typescript
import { ButtonComponent } from '@ohmyopensource/ohmyui-angular';

@Component({
  imports: [ButtonComponent],
  template: `<ohmyui-button label="Click me" />`,
})
export class AppComponent {}
```

Add the token stylesheet to your `styles.css` or `angular.json`:

```css
@import '@ohmyopensource/ohmyui-angular/tokens/variables.css';
```

---

## React

Install the React package:

```bash
npm install @ohmyopensource/ohmyui-react
```

Import the component and the token stylesheet:

```tsx
import { Button } from '@ohmyopensource/ohmyui-react';
import '@ohmyopensource/ohmyui-react/tokens/variables.css';

export function App() {
  return <Button label="Click me" />;
}
```

---

## Flutter

Add the package to your `pubspec.yaml`:

```yaml
dependencies:
  ohmyui_flutter:
    git:
      url: https://github.com/ohmyopensource/ohmyui
      path: packages/ohmyui_flutter
```

Then run:

```bash
flutter pub get
```

Import and use the widget:

```dart
import 'package:ohmyui_flutter/ohmyui_flutter.dart';

OhMyUIButton(
  label: 'Click me',
  variant: OhMyUIButtonVariant.primary,
)
```

---

## Next steps

- [Setup your development environment](/getting-started/setup)
- [Create your first component](/getting-started/first-component)
