---
title: Button | OhMyUI!
description: Open source Button component for Angular, React and Flutter. Three variants, three sizes and disabled state, all built with design tokens.
head:
  - - meta
    - property: og:title
      content: Button | OhMyUI!
  - - meta
    - property: og:description
      content: Open source Button component for Angular, React and Flutter. Three variants, three sizes and disabled state, all built with design tokens.
  - - meta
    - property: og:url
      content: https://ui.ohmyopensource.org/components/button
  - - meta
    - name: keywords
      content: button component, angular button, react button, flutter button, ohmyui, design system, open source ui
  - - meta
    - name: twitter:title
      content: Button | OhMyUI!
  - - meta
    - name: twitter:description
      content: Open source Button component for Angular, React and Flutter. Three variants, three sizes and disabled state, all built with design tokens.
---

# OhMyUI! - Button

The Button is the primary interactive element in OhMyUI!. It supports three variants, three sizes and a disabled state.

---

## Variants

| Variant     | Description                                                               |
| ----------- | ------------------------------------------------------------------------- |
| `primary`   | Main call to action. Use for the most important action on a page.         |
| `secondary` | Secondary action. Use alongside a primary button for alternative actions. |
| `ghost`     | Low-emphasis action. Use for tertiary actions or in dense UI areas.       |

---

## Sizes

| Size | Padding     | Font size |
| ---- | ----------- | --------- |
| `sm` | `4px 12px`  | `14px`    |
| `md` | `8px 16px`  | `16px`    |
| `lg` | `12px 24px` | `18px`    |

---

## Angular

### Import

```typescript
import { ButtonComponent } from '@ohmyopensource/ohmyui-angular';
```

### Usage

```html
<ohmyui-button label="Click me" />
<ohmyui-button label="Click me" variant="secondary" />
<ohmyui-button label="Click me" variant="ghost" />
<ohmyui-button label="Click me" size="sm" />
<ohmyui-button label="Click me" size="lg" />
<ohmyui-button label="Click me" [disabled]="true" />
```

### API

| Input      | Type                                  | Default     | Description         |
| ---------- | ------------------------------------- | ----------- | ------------------- |
| `label`    | `string`                              | `''`        | The button text     |
| `variant`  | `'primary' \| 'secondary' \| 'ghost'` | `'primary'` | Visual style        |
| `size`     | `'sm' \| 'md' \| 'lg'`                | `'md'`      | Button size         |
| `disabled` | `boolean`                             | `false`     | Disables the button |

---

## React

### Import

```typescript
import { Button } from '@ohmyopensource/ohmyui-react';
```

### Usage

```tsx
<Button label="Click me" />
<Button label="Click me" variant="secondary" />
<Button label="Click me" variant="ghost" />
<Button label="Click me" size="sm" />
<Button label="Click me" size="lg" />
<Button label="Click me" disabled />
```

### API

| Prop       | Type                                  | Default     | Description         |
| ---------- | ------------------------------------- | ----------- | ------------------- |
| `label`    | `string`                              | `''`        | The button text     |
| `variant`  | `'primary' \| 'secondary' \| 'ghost'` | `'primary'` | Visual style        |
| `size`     | `'sm' \| 'md' \| 'lg'`                | `'md'`      | Button size         |
| `disabled` | `boolean`                             | `false`     | Disables the button |
| `onClick`  | `() => void`                          | -           | Click handler       |

---

## Flutter

### Import

```dart
import 'package:ohmyui_flutter/ohmyui_flutter.dart';
```

### Usage

```dart
OhMyUIButton(label: 'Click me')
OhMyUIButton(label: 'Click me', variant: OhMyUIButtonVariant.secondary)
OhMyUIButton(label: 'Click me', variant: OhMyUIButtonVariant.ghost)
OhMyUIButton(label: 'Click me', size: OhMyUIButtonSize.sm)
OhMyUIButton(label: 'Click me', size: OhMyUIButtonSize.lg)
OhMyUIButton(label: 'Click me', disabled: true)
```

### API

| Parameter   | Type                  | Default    | Description         |
| ----------- | --------------------- | ---------- | ------------------- |
| `label`     | `String`              | required   | The button text     |
| `variant`   | `OhMyUIButtonVariant` | `.primary` | Visual style        |
| `size`      | `OhMyUIButtonSize`    | `.md`      | Button size         |
| `disabled`  | `bool`                | `false`    | Disables the button |
| `onPressed` | `VoidCallback?`       | `null`     | Tap handler         |

---

## Tokens used

| Token                                                                 | Usage                                |
| --------------------------------------------------------------------- | ------------------------------------ |
| `--color-primary-500`                                                 | Primary background                   |
| `--color-primary-600`                                                 | Primary hover background             |
| `--color-primary-50`                                                  | Secondary and ghost hover background |
| `--color-neutral-0`                                                   | Primary text color                   |
| `--font-family-sans`                                                  | Font family                          |
| `--font-weight-medium`                                                | Font weight                          |
| `--radius-md`                                                         | Border radius                        |
| `--spacing-1` `--spacing-2` `--spacing-3` `--spacing-4` `--spacing-6` | Padding by size                      |
| `--font-size-sm` `--font-size-md` `--font-size-lg`                    | Font size by size                    |

---

## Next steps

- [Badge](/components/badge)
- [Adding a Component - Angular](/guides/adding-a-component-angular)
