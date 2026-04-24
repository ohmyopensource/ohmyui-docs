# Submitting a Pull Request

This guide explains how to submit your work correctly to OhMyUI!. Following this process ensures your contribution is reviewed and merged as smoothly as possible.

---

## Before you open a PR

Make sure everything is ready:

**For Angular and React:**

- [ ] Storybook runs without errors - `npx nx storybook ohmyui-angular` or `npx nx storybook ohmyui-react`
- [ ] The component is visible and correct in Storybook
- [ ] All variants are covered by stories
- [ ] No hardcoded values - only design tokens

**For Flutter:**

- [ ] `flutter analyze` passes with no errors
- [ ] `flutter test` passes with no errors
- [ ] All variants are covered by tests

**For all platforms:**

- [ ] The component is exported from `index.ts` or `ohmyui_flutter.dart`
- [ ] The commit history is clean and meaningful
- [ ] No secrets, credentials or `.env` files are included

---

## Branch naming

Always create a new branch from `dev`, never from `main`:

```bash
git checkout dev
git pull origin dev
git checkout -b feat/my-component-angular
```

Branch naming convention:

| Type           | Pattern                        | Example                     |
| -------------- | ------------------------------ | --------------------------- |
| New component  | `feat/component-name-platform` | `feat/input-angular`        |
| Bug fix        | `fix/description`              | `fix/button-disabled-state` |
| Token addition | `feat/token-name`              | `feat/color-brand-token`    |
| Documentation  | `docs/description`             | `docs/badge-component-page` |

---

## Commit convention

Follow the [Conventional Commits](https://www.conventionalcommits.org/) standard used across all OhMyOpenSource! projects:

```
feat(angular): add Input component
feat(react): add Input component
feat(flutter): add Input widget
feat(tokens): add color-brand token
fix(angular): fix Button disabled hover state
docs: add Input component page
```

Full reference: [OhMyOpenSource! Commit Conventions](https://github.com/ohmyopensource/ohmyopensource-guidelines/blob/main/git/commit-conventions.md)

---

## Opening the PR

Push your branch and open a Pull Request on GitHub:

```bash
git push origin feat/my-component-angular
```

Then go to the repository on GitHub and open a Pull Request targeting **`dev`**, not `main`.

Fill in the PR template completely:

- **Problem** - what does this PR add or fix?
- **Solution** - how did you solve it?
- **Changes** - list the main changes
- **Testing** - how can the reviewer verify it?
- **Checklist** - tick every item that applies

---

## What happens after you open the PR

1. A maintainer will review your PR - usually within a few days
2. You may receive review comments requesting changes
3. Address every comment - either fix the code or explain why you disagree
4. Once approved, the maintainer will merge your PR into `dev`
5. Periodically, `dev` is merged into `main` and the changes go live

---

## Common mistakes to avoid

**Targeting `main` instead of `dev`** - always check the base branch before opening the PR.

**Hardcoded values** - `color: #6366f1` instead of `color: var(--color-primary-500)`. Reviewers will always catch this.

**Missing story or test** - a component without a story (Angular/React) or a test (Flutter) will not be merged.

**Large PRs** - if you are adding a component for all three platforms, consider opening three separate PRs. Smaller PRs are reviewed faster.

**Dirty commit history** - squash fixup commits before pushing. A history of `fix`, `fix2`, `fix again` is not acceptable.

---

## Need help?

If you are stuck, open a [Question issue](https://github.com/ohmyopensource/ohmyui/issues/new?template=question.md) on GitHub and describe what you are trying to do.

---

## Next steps

- [Adding a Token](/guides/adding-a-token)
- [Style Dictionary](/technologies/style-dictionary)
- [Storybook](/technologies/storybook)
