---
title: Storybook | OhMyUI!
description: Learn how Storybook is used in OhMyUI! to build, test and document Angular and React components in isolated environments.
head:
  - - meta
    - property: og:title
      content: Storybook | OhMyUI!
  - - meta
    - property: og:description
      content: Learn how Storybook is used in OhMyUI! to build, test and document Angular and React components in isolated environments.
  - - meta
    - property: og:url
      content: https://ui.ohmyopensource.org/technologies/storybook
  - - meta
    - name: keywords
      content: storybook, ui component testing, angular storybook, react storybook, design system documentation, component playground, ohmyui
  - - meta
    - name: twitter:title
      content: Storybook | OhMyUI!
  - - meta
    - name: twitter:description
      content: Learn how Storybook is used in OhMyUI! to build, test and document Angular and React components in isolated environments.
---

# OhMyUI! - Storybook

Storybook is the development environment and documentation tool for Angular and React components in OhMyUI!. It provides an isolated environment where you can build, view and interact with every component independently from the rest of the application.

You can find Storybook at [storybook.js.org](https://storybook.js.org/).

---

## Why Storybook

When developing UI components, the natural instinct is to build them inside a real application. This creates several problems - you need to navigate to the right page, set up the right state, and deal with the rest of the application interfering with what you are trying to build.

Storybook solves this by giving every component its own isolated sandbox. You can see every variant, every state and every size of a component in one place, without running the full application.

For a design system like OhMyUI!, Storybook also serves as living documentation - it shows exactly what every component looks like and how it behaves, and it stays in sync with the code automatically because it reads the components directly.

---

## How it works in OhMyUI!

OhMyUI! has two separate Storybook instances - one for Angular and one for React. Each lives inside its respective package:

```
packages/
├── ohmyui-angular/
│   └── .storybook/
│       ├── main.ts        ← Storybook configuration
│       ├── preview.ts     ← global decorators and parameters
│       └── preview-head.html ← loads design token CSS
└── ohmyui-react/
└── .storybook/
├── main.ts
├── preview.ts
└── preview-head.html
```

The `preview-head.html` file loads the compiled token CSS file so that all CSS custom properties are available inside Storybook:

```html
<link rel="stylesheet" href="/tokens/variables.css" />
```

---

## Running Storybook

**Angular:**

```bash
npx nx storybook ohmyui-angular
```

**React:**

```bash
npx nx storybook ohmyui-react
```

Storybook opens automatically at `http://localhost:6006`.

---

## Stories

A story is a single named state of a component. You write stories in a `.stories.ts` (Angular) or `.stories.tsx` (React) file alongside the component.

Every story file has the same structure:

```typescript
import type { Meta, StoryObj } from '@storybook/angular'; // or @storybook/react
import { MyComponent } from './my-component';

// Meta defines the component and its controls
const meta: Meta<MyComponent> = {
  title: 'Components/MyComponent', // path in the sidebar
  component: MyComponent,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<MyComponent>;

// Each named export is a story - a specific state of the component
export const Primary: Story = {
  args: { variant: 'primary', label: 'Click me' },
};

export const Secondary: Story = {
  args: { variant: 'secondary', label: 'Click me' },
};

export const Disabled: Story = {
  args: { variant: 'primary', label: 'Click me', disabled: true },
};
```

---

## The Storybook UI

When you open Storybook in the browser you see three main areas:

**Sidebar** - on the left, shows all components organized by the `title` field in the meta object. The path `Components/MyComponent` creates a `Components` group with `MyComponent` inside.

**Canvas** - the main area, shows the rendered component for the selected story. This is the isolated sandbox.

**Controls panel** - at the bottom, shows all the props defined in `argTypes`. You can modify them in real time and see the component update immediately in the canvas.

---

## ArgTypes and controls

ArgTypes define how each prop appears in the Controls panel. The `control` field determines the type of input:

| Control type | When to use                       | Example                |
| ------------ | --------------------------------- | ---------------------- |
| `text`       | String props                      | `label`, `placeholder` |
| `boolean`    | Boolean props                     | `disabled`, `loading`  |
| `select`     | Props with a fixed set of options | `variant`, `size`      |
| `number`     | Numeric props                     | `count`, `max`         |
| `color`      | Color props                       | `backgroundColor`      |

---

## Writing good stories

**One story per meaningful variant** - if your component has three variants, write three stories. Do not write one story with all variants on the same canvas.

**Use descriptive story names** - `Primary`, `Secondary`, `Disabled`, `Loading` are good names. `Story1`, `Test`, `Default2` are not.

**Cover edge cases** - write a story for the disabled state, the empty state, the maximum length label, and any other state a developer might need to see.

**Keep args minimal** - only pass the props that are relevant to that specific story. Let the defaults handle everything else.

---

## Storybook and design tokens

Design tokens are loaded globally in `preview-head.html` and are available to all components in Storybook. This means your CSS custom properties work exactly the same in Storybook as they do in the real application.

If you add a new token and rebuild with Style Dictionary, it is immediately available in Storybook without any additional configuration.

---

## Further reading

- [Storybook official documentation](https://storybook.js.org/docs)
- [Writing stories](https://storybook.js.org/docs/writing-stories)
- [ArgTypes reference](https://storybook.js.org/docs/api/arg-types)
- [OhMyUI! Adding a Component - Angular](/guides/adding-a-component-angular)
- [OhMyUI! Adding a Component - React](/guides/adding-a-component-react)
