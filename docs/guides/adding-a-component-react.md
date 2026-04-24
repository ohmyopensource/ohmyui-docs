---
title: Adding a Component - React | OhMyUI!
description: Learn how to create a new React component in OhMyUI!. Step-by-step guide with TypeScript, CSS modules, tokens and Storybook setup.
head:
  - - meta
    - property: og:title
      content: Adding a Component - React | OhMyUI!
  - - meta
    - property: og:description
      content: Learn how to create a new React component in OhMyUI!. Step-by-step guide with TypeScript, CSS modules, tokens and Storybook setup.
  - - meta
    - property: og:url
      content: https://ui.ohmyopensource.org/guides/adding-a-component-react
  - - meta
    - name: keywords
      content: react component guide, create react component, design system react, storybook react guide, css modules react, ui component react, ohmyui react
  - - meta
    - name: twitter:title
      content: Adding a Component - React | OhMyUI!
  - - meta
    - name: twitter:description
      content: Learn how to create a new React component in OhMyUI!. Step-by-step guide with TypeScript, CSS modules, tokens and Storybook setup.
---

# OhMyUI! - Adding a Component: React

This guide walks you through adding a new component to the React package of OhMyUI! from scratch.

---

## Prerequisites

- Repository cloned and dependencies installed - see [Setup](/getting-started/setup)
- Design tokens built - see [Setup](/getting-started/setup)
- Familiarity with React functional components and TypeScript

---

## Step 1 - Create the component folder and files

Create the folder and files manually - React does not have a generator like Angular:

```bash
mkdir -p packages/ohmyui-react/src/lib/my-component
touch packages/ohmyui-react/src/lib/my-component/my-component.tsx
touch packages/ohmyui-react/src/lib/my-component/my-component.module.css
touch packages/ohmyui-react/src/lib/my-component/my-component.stories.tsx
```

---

## Step 2 - Write the component

Open `my-component.tsx`:

```tsx
import styles from './my-component.module.css';

export type MyComponentVariant = 'primary' | 'secondary';

export interface MyComponentProps {
  label?: string;
  variant?: MyComponentVariant;
}

export function MyComponent({
  label = '',
  variant = 'primary',
}: MyComponentProps) {
  return (
    <div
      className={`${styles['ohmyui-my-component']} ${styles[`ohmyui-my-component--${variant}`]}`}
    >
      {label}
    </div>
  );
}

export default MyComponent;
```

Open `my-component.module.css`:

```css
.ohmyui-my-component {
  font-family: var(--font-family-sans);
  font-size: var(--font-size-md);
  padding: var(--spacing-4);
  border-radius: var(--radius-md);
}

.ohmyui-my-component--primary {
  background-color: var(--color-primary-500);
  color: var(--color-neutral-0);
}

.ohmyui-my-component--secondary {
  background-color: var(--color-neutral-100);
  color: var(--color-neutral-900);
}
```

> Always use CSS custom properties - never hardcode colors, spacing or typography values. The full token list is in `packages/tokens/build/css/variables.css`.

---

## Step 3 - Export the component

Open `packages/ohmyui-react/src/index.ts` and add your export:

```typescript
export * from './lib/my-component/my-component';
```

---

## Step 4 - Write the Storybook story

Open `my-component.stories.tsx`:

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { MyComponent } from './my-component';

const meta: Meta<typeof MyComponent> = {
  title: 'Components/MyComponent',
  component: MyComponent,
  argTypes: {
    label: { control: 'text' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof MyComponent>;

export const Primary: Story = {
  args: { label: 'Hello OhMyUI!', variant: 'primary' },
};

export const Secondary: Story = {
  args: { label: 'Hello OhMyUI!', variant: 'secondary' },
};
```

Add one story per meaningful variant of your component.

---

## Step 5 - Verify in Storybook

```bash
npx nx storybook ohmyui-react
```

Open `http://localhost:6006` and find your component in the sidebar under `Components/MyComponent`. Verify that:

- The component renders correctly
- All variants display as expected
- The controls panel lets you modify props interactively
- Design tokens are applied - no hardcoded values visible in the styles

---

## Step 6 - Commit and push

```bash
git checkout -b feat/my-component-react
git add .
git commit -m "feat(react): add MyComponent"
git push origin feat/my-component-react
```

Open a Pull Request targeting `dev` on GitHub.

---

## Checklist

- [ ] Component files are inside their own folder `lib/my-component/`
- [ ] CSS uses module classes - no global class names
- [ ] Only design tokens are used - no hardcoded values
- [ ] Component is exported from `src/index.ts`
- [ ] At least one Storybook story exists per variant
- [ ] Component is visible and correct in Storybook
- [ ] Commit message follows the convention `feat(react): add MyComponent`
- [ ] PR targets `dev`, not `main`

---

## Next steps

- [Adding a Component - Flutter](/guides/adding-a-component-flutter)
- [Submitting a PR](/guides/submitting-a-pr)
