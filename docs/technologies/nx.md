---
title: Nx | OhMyUI!
description: Learn how Nx powers the OhMyUI! monorepo. Manage Angular, React and Flutter packages with tasks, caching and project graphs.
head:
  - - meta
    - property: og:title
      content: Nx | OhMyUI!
  - - meta
    - property: og:description
      content: Learn how Nx powers the OhMyUI! monorepo. Manage Angular, React and Flutter packages with tasks, caching and project graphs.
  - - meta
    - property: og:url
      content: https://ui.ohmyopensource.org/technologies/nx
  - - meta
    - name: keywords
      content: nx monorepo, nx workspace, monorepo tooling, angular react flutter monorepo, nx caching, project graph nx, ohmyui architecture
  - - meta
    - name: twitter:title
      content: Nx | OhMyUI!
  - - meta
    - name: twitter:description
      content: Learn how Nx powers the OhMyUI! monorepo. Manage Angular, React and Flutter packages with tasks, caching and project graphs.
---

# OhMyUI! - Nx

Nx is the monorepo management tool used in OhMyUI!. It provides a structured way to organize multiple packages in a single repository, with built-in support for running tasks, caching build results and managing dependencies between packages.

You can find Nx at [nx.dev](https://nx.dev/).

---

## Why Nx

OhMyUI! contains three separate packages - Angular, React and Flutter - plus the tokens package. Without a monorepo tool, managing these packages would mean:

- Running commands manually in each package directory
- No shared configuration between packages
- No understanding of which packages depend on which
- No caching - every build runs from scratch every time

Nx solves all of these problems. It understands the structure of the repository, knows which packages depend on which, and can run tasks across all packages with a single command.

---

## How it works in OhMyUI!

Nx is configured through two files at the root of the repository:

```
ohmyui/
├── nx.json          ← global Nx configuration
├── package.json     ← root workspace dependencies
└── packages/
├── tokens/
│   └── project.json    ← tokens package configuration
├── ohmyui-angular/
│   └── project.json    ← Angular package configuration
└── ohmyui-react/
└── project.json    ← React package configuration
```

Each `project.json` file defines the targets (tasks) available for that package - `build`, `test`, `storybook`, `lint` and so on.

---

## Key concepts

### Projects

A project is any package in the `packages/` directory that has a `project.json` file. Nx treats each project as an independent unit with its own set of targets.

### Targets

A target is a task you can run on a project. Common targets in OhMyUI! are:

| Target            | Description                         |
| ----------------- | ----------------------------------- |
| `build`           | Compile the package                 |
| `test`            | Run unit tests                      |
| `lint`            | Run ESLint                          |
| `storybook`       | Start Storybook in development mode |
| `build-storybook` | Build Storybook for production      |

### Executors

An executor is the implementation of a target - it defines how the task actually runs. Nx provides built-in executors for Angular, React, Storybook and many other tools. For the tokens package, we use the `nx:run-commands` executor to run the Style Dictionary CLI.

---

## Common commands

### Run a target on a specific project

```bash
npx nx <target> <project>
```

Examples:

```bash
npx nx storybook ohmyui-angular    # start Angular Storybook
npx nx storybook ohmyui-react      # start React Storybook
npx nx build ohmyui-angular        # build Angular package
npx nx build ohmyui-react          # build React package
npx nx build tokens                # rebuild design tokens
npx nx lint ohmyui-angular         # lint Angular package
npx nx test ohmyui-angular         # run Angular tests
```

### Run a target on all projects

```bash
npx nx run-many --target=<target>
```

Examples:

```bash
npx nx run-many --target=build      # build all packages
npx nx run-many --target=lint       # lint all packages
npx nx run-many --target=test       # test all packages
```

### Show project details

```bash
npx nx show project <project>
```

This opens a web page showing all targets, dependencies and configuration for the specified project.

### View the project graph

```bash
npx nx graph
```

This opens an interactive visualization of all projects and their dependencies in the browser.

---

## Caching

Nx caches the results of every task. If you run `npx nx build ohmyui-angular` and nothing has changed since the last build, Nx skips the build entirely and restores the cached output in milliseconds.

The cache is stored in `.nx/cache/` which is listed in `.gitignore` - it is a local cache and is never committed to the repository.

---

## Adding a new package

When you add a new package to the monorepo, you need to create a `project.json` in the package directory so Nx recognizes it. For JavaScript packages generated with Nx generators, this file is created automatically. For manually created packages like `ohmyui_flutter`, you create it yourself.

Example `project.json` for a simple package:

```json
{
  "name": "my-package",
  "projectType": "library",
  "root": "packages/my-package",
  "targets": {
    "build": {
      "executor": "nx:run-commands",
      "options": {
        "command": "your build command here",
        "cwd": "packages/my-package"
      }
    }
  }
}
```

---

## Further reading

- [Nx official documentation](https://nx.dev/getting-started/intro)
- [Nx project configuration reference](https://nx.dev/reference/project-configuration)
- [Nx executors reference](https://nx.dev/concepts/executors-and-configurations)
