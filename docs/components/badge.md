# Badge

The Badge is a small label used to communicate status, category or count. It supports five semantic variants and two sizes.

---

## Variants

| Variant   | Description                                              |
| --------- | -------------------------------------------------------- |
| `success` | Positive state - completed, active, approved             |
| `warning` | Cautionary state - pending, expiring, attention needed   |
| `error`   | Negative state - failed, rejected, critical              |
| `info`    | Informational state - in progress, neutral notice        |
| `neutral` | No semantic meaning - use for tags, categories or labels |

---

## Sizes

| Size | Padding    | Font size |
| ---- | ---------- | --------- |
| `sm` | `4px 8px`  | `12px`    |
| `md` | `4px 12px` | `14px`    |

---

## Angular

### Import

```typescript
import { BadgeComponent } from '@ohmyopensource/ohmyui-angular';
```

### Usage

```html
<ohmyui-badge label="Success" variant="success" />
<ohmyui-badge label="Warning" variant="warning" />
<ohmyui-badge label="Error" variant="error" />
<ohmyui-badge label="Info" variant="info" />
<ohmyui-badge label="Neutral" variant="neutral" />
<ohmyui-badge label="Small" variant="success" size="sm" />
```

### API

| Input     | Type                                                       | Default     | Description    |
| --------- | ---------------------------------------------------------- | ----------- | -------------- |
| `label`   | `string`                                                   | `''`        | The badge text |
| `variant` | `'success' \| 'warning' \| 'error' \| 'info' \| 'neutral'` | `'neutral'` | Semantic style |
| `size`    | `'sm' \| 'md'`                                             | `'md'`      | Badge size     |

---

## React

### Import

```typescript
import { Badge } from '@ohmyopensource/ohmyui-react';
```

### Usage

```tsx
<Badge label="Success" variant="success" />
<Badge label="Warning" variant="warning" />
<Badge label="Error" variant="error" />
<Badge label="Info" variant="info" />
<Badge label="Neutral" variant="neutral" />
<Badge label="Small" variant="success" size="sm" />
```

### API

| Prop      | Type                                                       | Default     | Description    |
| --------- | ---------------------------------------------------------- | ----------- | -------------- |
| `label`   | `string`                                                   | `''`        | The badge text |
| `variant` | `'success' \| 'warning' \| 'error' \| 'info' \| 'neutral'` | `'neutral'` | Semantic style |
| `size`    | `'sm' \| 'md'`                                             | `'md'`      | Badge size     |

---

## Flutter

### Import

```dart
import 'package:ohmyui_flutter/ohmyui_flutter.dart';
```

### Usage

```dart
OhMyUIBadge(label: 'Success', variant: OhMyUIBadgeVariant.success)
OhMyUIBadge(label: 'Warning', variant: OhMyUIBadgeVariant.warning)
OhMyUIBadge(label: 'Error', variant: OhMyUIBadgeVariant.error)
OhMyUIBadge(label: 'Info', variant: OhMyUIBadgeVariant.info)
OhMyUIBadge(label: 'Neutral', variant: OhMyUIBadgeVariant.neutral)
OhMyUIBadge(label: 'Small', variant: OhMyUIBadgeVariant.success, size: OhMyUIBadgeSize.sm)
```

### API

| Parameter | Type                 | Default    | Description    |
| --------- | -------------------- | ---------- | -------------- |
| `label`   | `String`             | required   | The badge text |
| `variant` | `OhMyUIBadgeVariant` | `.neutral` | Semantic style |
| `size`    | `OhMyUIBadgeSize`    | `.md`      | Badge size     |

---

## Tokens used

| Token                                     | Usage              |
| ----------------------------------------- | ------------------ |
| `--color-success-700`                     | Success text color |
| `--color-warning-700`                     | Warning text color |
| `--color-error-700`                       | Error text color   |
| `--color-primary-700`                     | Info text color    |
| `--color-neutral-700`                     | Neutral text color |
| `--color-primary-100`                     | Info background    |
| `--color-neutral-100`                     | Neutral background |
| `--font-family-sans`                      | Font family        |
| `--font-weight-medium`                    | Font weight        |
| `--radius-full`                           | Border radius      |
| `--spacing-1` `--spacing-2` `--spacing-3` | Padding by size    |
| `--font-size-xs` `--font-size-sm`         | Font size by size  |

---

## Usage guidelines

**Use semantic variants consistently** - a green badge should always mean success, never decoration.

**Keep labels short** - one or two words maximum. Badges are not paragraphs.

**Do not use badges for actions** - they are purely informational. For interactive elements use a Button.

---

## Next steps

- [Adding a Component - Angular](/guides/adding-a-component-angular)
- [Adding a Component - React](/guides/adding-a-component-react)
- [Adding a Component - Flutter](/guides/adding-a-component-flutter)
