---
title: First Component | OhMyUI!
description: Learn how to build your first component in OhMyUI!. Step-by-step guide covering tokens, Angular, React, Flutter and Storybook workflow.
head:
  - - meta
    - property: og:title
      content: First Component | OhMyUI!
  - - meta
    - property: og:description
      content: Learn how to build your first component in OhMyUI!. Step-by-step guide covering tokens, Angular, React, Flutter and Storybook workflow.
  - - meta
    - property: og:url
      content: https://ui.ohmyopensource.org/getting-started/first-component
  - - meta
    - name: keywords
      content: create component guide, design system tutorial, angular component guide, react component guide, flutter component guide, storybook workflow, ohmyui
  - - meta
    - name: twitter:title
      content: First Component | OhMyUI!
  - - meta
    - name: twitter:description
      content: Learn how to build your first component in OhMyUI!. Step-by-step guide covering tokens, Angular, React, Flutter and Storybook workflow.
---

# OhMyUI! - First Component

This page walks you through creating your first component in OhMyUI! from scratch, end to end. You will create a simple `Tag` component for all three platforms.

By the end of this page you will understand the full workflow - from defining a token to seeing the component in Storybook.

---

## The workflow at a glance

1. Define or reuse tokens => packages/tokens/src/
1. Rebuild tokens => npx style-dictionary build
1. Create the component => packages/ohmyui-angular/ or ohmyui-react/ or ohmyui_flutter/
1. Write the story => component.stories.ts / .tsx
1. Verify in Storybook => npx nx storybook ohmyui-angular
1. Commit and push => open a Pull Request targeting dev

---

## Step 1 - Check the available tokens

Before writing any code, open `packages/tokens/build/css/variables.css` and look at what is available. For our `Tag` component we will use:

- `--color-primary-500` - background color
- `--color-neutral-0` - text color
- `--font-size-xs` - font size
- `--font-weight-medium` - font weight
- `--spacing-1` and `--spacing-3` - padding
- `--radius-full` - border radius

Always use existing tokens before adding new ones. If you need a value that does not exist yet, see the [Adding a Token](/guides/adding-a-token) guide first.

---

## Step 2 - Angular

### Generate the files

```bash
npx nx generate @nx/angular:component \
  --path=packages/ohmyui-angular/src/lib/tag \
  --name=tag \
  --standalone \
  --no-interactive
```

Move the generated files into their folder:

```bash
mkdir -p packages/ohmyui-angular/src/lib/tag
mv packages/ohmyui-angular/src/lib/tag.ts packages/ohmyui-angular/src/lib/tag/tag.ts
mv packages/ohmyui-angular/src/lib/tag.html packages/ohmyui-angular/src/lib/tag/tag.html
mv packages/ohmyui-angular/src/lib/tag.css packages/ohmyui-angular/src/lib/tag/tag.css
mv packages/ohmyui-angular/src/lib/tag.spec.ts packages/ohmyui-angular/src/lib/tag/tag.spec.ts
```

### Write the component

`tag.ts`:

```typescript
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ohmyui-tag',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tag.html',
  styleUrl: './tag.css',
})
export class TagComponent {
  @Input() label = '';
}
```

`tag.html`:

```html
<span class="ohmyui-tag">{{ label }}</span>
```

`tag.css`:

```css
.ohmyui-tag {
  display: inline-flex;
  align-items: center;
  background-color: var(--color-primary-500);
  color: var(--color-neutral-0);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  padding: var(--spacing-1) var(--spacing-3);
  border-radius: var(--radius-full);
}
```

### Export the component

Open `packages/ohmyui-angular/src/index.ts` and add:

```typescript
export * from './lib/tag/tag';
```

### Write the story

Create `packages/ohmyui-angular/src/lib/tag/tag.stories.ts`:

```typescript
import type { Meta, StoryObj } from '@storybook/angular';
import { TagComponent } from './tag';

const meta: Meta<TagComponent> = {
  title: 'Components/Tag',
  component: TagComponent,
  argTypes: {
    label: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<TagComponent>;

export const Default: Story = {
  args: { label: 'Design System' },
};
```

### Verify in Storybook

```bash
npx nx storybook ohmyui-angular
```

Open `http://localhost:6006` and find `Components/Tag` in the sidebar.

---

## Step 3 - React

Create `packages/ohmyui-react/src/lib/tag/tag.tsx`:

```tsx
import styles from './tag.module.css';

export interface TagProps {
  label?: string;
}

export function Tag({ label = '' }: TagProps) {
  return <span className={styles['ohmyui-tag']}>{label}</span>;
}

export default Tag;
```

Create `packages/ohmyui-react/src/lib/tag/tag.module.css`:

```css
.ohmyui-tag {
  display: inline-flex;
  align-items: center;
  background-color: var(--color-primary-500);
  color: var(--color-neutral-0);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  padding: var(--spacing-1) var(--spacing-3);
  border-radius: var(--radius-full);
}
```

Create `packages/ohmyui-react/src/lib/tag/tag.stories.tsx`:

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './tag';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    label: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: { label: 'Design System' },
};
```

Export in `packages/ohmyui-react/src/index.ts`:

```typescript
export * from './lib/tag/tag';
```

---

## Step 4 - Flutter

Create `packages/ohmyui_flutter/lib/src/components/tag/tag.dart`:

```dart
import 'package:flutter/material.dart';
import '../../tokens/tokens.dart';

class OhMyUITag extends StatelessWidget {
  final String label;

  const OhMyUITag({
    super.key,
    required this.label,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(
        horizontal: OhMyUITokens.spacing3,
        vertical: OhMyUITokens.spacing1,
      ),
      decoration: BoxDecoration(
        color: OhMyUITokens.colorPrimary500,
        borderRadius: BorderRadius.circular(OhMyUITokens.radiusFull),
      ),
      child: Text(
        label,
        style: const TextStyle(
          color: OhMyUITokens.colorNeutral0,
          fontSize: OhMyUITokens.fontSizeXs,
          fontWeight: OhMyUITokens.fontWeightMedium,
        ),
      ),
    );
  }
}
```

Export in `packages/ohmyui_flutter/lib/ohmyui_flutter.dart`:

```dart
export 'src/components/tag/tag.dart';
```

Run analysis and tests:

```bash
cd packages/ohmyui_flutter
flutter analyze
flutter test
```

---

## Step 5 - Commit and push

```bash
git checkout -b feat/tag-component
git add .
git commit -m "feat: add Tag component for Angular, React and Flutter"
git push origin feat/tag-component
```

Then open a Pull Request targeting `dev` on GitHub.

---

## Next steps

- [Understanding the token system](/tokens/overview)
- [Adding a token](/guides/adding-a-token)
- [Submitting a PR](/guides/submitting-a-pr)
