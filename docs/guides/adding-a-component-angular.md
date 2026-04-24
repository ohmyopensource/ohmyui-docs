---
title: Adding a Component - Angular | OhMyUI!
description: Learn how to create a new Angular component in OhMyUI!. Step-by-step guide with tokens, Storybook and project structure.
head:
  - - meta
    - property: og:title
      content: Adding a Component - Angular | OhMyUI!
  - - meta
    - property: og:description
      content: Learn how to create a new Angular component in OhMyUI!. Step-by-step guide with tokens, Storybook and project structure.
  - - meta
    - property: og:url
      content: https://ui.ohmyopensource.org/guides/adding-a-component-angular
  - - meta
    - name: keywords
      content: angular component guide, create angular component, design system angular, storybook angular guide, ui component angular, ohmyui angular
  - - meta
    - name: twitter:title
      content: Adding a Component - Angular | OhMyUI!
  - - meta
    - name: twitter:description
      content: Learn how to create a new Angular component in OhMyUI!. Step-by-step guide with tokens, Storybook and project structure.
---

# OhMyUI! - Adding a Component: Angular

This guide walks you through adding a new component to the Angular package of OhMyUI! from scratch.

---

## Prerequisites

- Repository cloned and dependencies installed - see [Setup](/getting-started/setup)
- Design tokens built - see [Setup](/getting-started/setup)
- Familiarity with Angular standalone components

---

## Step 1 - Generate the component files

Run this command from the root of the repository, replacing `my-component` with the name of your component in kebab-case:

```bash
npx nx generate @nx/angular:component \
  --path=packages/ohmyui-angular/src/lib/my-component \
  --name=my-component \
  --standalone \
  --no-interactive
```

Then move the generated files into their own folder:

```bash
mkdir -p packages/ohmyui-angular/src/lib/my-component
mv packages/ohmyui-angular/src/lib/my-component.ts packages/ohmyui-angular/src/lib/my-component/my-component.ts
mv packages/ohmyui-angular/src/lib/my-component.html packages/ohmyui-angular/src/lib/my-component/my-component.html
mv packages/ohmyui-angular/src/lib/my-component.css packages/ohmyui-angular/src/lib/my-component/my-component.css
mv packages/ohmyui-angular/src/lib/my-component.spec.ts packages/ohmyui-angular/src/lib/my-component/my-component.spec.ts
```

---

## Step 2 - Write the component

Open `my-component.ts` and define your inputs:

```typescript
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ohmyui-my-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-component.html',
  styleUrl: './my-component.css',
})
export class MyComponent {
  @Input() label = '';
}
```

Open `my-component.html` and write the template:

```html
<div class="ohmyui-my-component">{{ label }}</div>
```

Open `my-component.css` and style it using design tokens:

```css
.ohmyui-my-component {
  color: var(--color-primary-500);
  font-size: var(--font-size-md);
  font-family: var(--font-family-sans);
  padding: var(--spacing-4);
  border-radius: var(--radius-md);
}
```

> Always use CSS custom properties - never hardcode colors, spacing or typography values. The full token list is in `packages/tokens/build/css/variables.css`.

---

## Step 3 - Export the component

Open `packages/ohmyui-angular/src/index.ts` and add your export at the bottom:

```typescript
export * from './lib/my-component/my-component';
```

---

## Step 4 - Write the Storybook story

Create `packages/ohmyui-angular/src/lib/my-component/my-component.stories.ts`:

```typescript
import type { Meta, StoryObj } from '@storybook/angular';
import { MyComponent } from './my-component';

const meta: Meta<MyComponent> = {
  title: 'Components/MyComponent',
  component: MyComponent,
  argTypes: {
    label: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<MyComponent>;

export const Default: Story = {
  args: { label: 'Hello OhMyUI!' },
};
```

Add one story per meaningful variant of your component. If your component has a `variant` prop with three options, create three stories.

---

## Step 5 - Verify in Storybook

```bash
npx nx storybook ohmyui-angular
```

Open `http://localhost:6006` and find your component in the sidebar under `Components/MyComponent`. Verify that:

- The component renders correctly
- All variants display as expected
- The controls panel lets you modify props interactively
- Design tokens are applied - no hardcoded values visible in the styles

---

## Step 6 - Commit and push

```bash
git checkout -b feat/my-component-angular
git add .
git commit -m "feat(angular): add MyComponent"
git push origin feat/my-component-angular
```

Open a Pull Request targeting `dev` on GitHub.

---

## Checklist

- [ ] Component files are inside their own folder `lib/my-component/`
- [ ] Selector follows the pattern `ohmyui-my-component`
- [ ] Only design tokens are used - no hardcoded values
- [ ] Component is exported from `src/index.ts`
- [ ] At least one Storybook story exists per variant
- [ ] Component is visible and correct in Storybook
- [ ] Commit message follows the convention `feat(angular): add MyComponent`
- [ ] PR targets `dev`, not `main`

---

## Next steps

- [Adding a Component - React](/guides/adding-a-component-react)
- [Adding a Component - Flutter](/guides/adding-a-component-flutter)
- [Submitting a PR](/guides/submitting-a-pr)
