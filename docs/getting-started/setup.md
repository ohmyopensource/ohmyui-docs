---
title: Setup | OhMyUI!
description: Set up your local environment for OhMyUI!. Install dependencies, build tokens and run Storybook for Angular, React and Flutter.
head:
  - - meta
    - property: og:title
      content: Setup | OhMyUI!
  - - meta
    - property: og:description
      content: Set up your local environment for OhMyUI!. Install dependencies, build tokens and run Storybook for Angular, React and Flutter.
  - - meta
    - property: og:url
      content: https://docs.ui.ohmyopensource.org/getting-started/setup
  - - meta
    - name: keywords
      content: ohmyui setup, local development setup, design system development, storybook setup, angular storybook, react storybook, flutter ui development
  - - meta
    - name: twitter:title
      content: Setup | OhMyUI!
  - - meta
    - name: twitter:description
      content: Set up your local environment for OhMyUI!. Install dependencies, build tokens and run Storybook for Angular, React and Flutter.
---

# OhMyUI! - Setup

This page explains how to set up your local development environment to contribute to OhMyUI! or to run the project locally.

---

## Clone the repository

```bash
git clone https://github.com/ohmyopensource/ohmyui.git
cd ohmyui
```

---

## Install dependencies

```bash
npm install
```

---

## Build the design tokens

The design tokens must be built before running Storybook. This step compiles the JSON token files into CSS variables and Dart constants.

```bash
cd packages/tokens
npx style-dictionary build --config sd.config.js
cd ../..
```

You only need to do this once, or whenever you modify the token source files in `packages/tokens/src/`.

---

## Run Storybook

Storybook is the development environment for Angular and React components. It lets you see and interact with every component in isolation.

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

## Run Flutter analysis and tests

For Flutter components, there is no visual development environment yet. Use the following commands to verify your work:

```bash
cd packages/ohmyui_flutter
flutter analyze
flutter test
```

Both commands must pass with no errors before opening a Pull Request.

---

## Project structure

```
ohmyui/
├── packages/
│   ├── tokens/          => Token source files (JSON) and build output
│   ├── ohmyui-angular/  => Angular components and Storybook config
│   ├── ohmyui-react/    => React components and Storybook config
│   └── ohmyui_flutter/  => Flutter widgets and tests
├── .github/             => PR template, issue templates, CODEOWNERS
├── CONTRIBUTING.md      => Contribution rules
└── README.md            => Quick reference
```

---

## Next steps

- [Create your first component](/getting-started/first-component)
- [Understand the token system](/tokens/overview)
