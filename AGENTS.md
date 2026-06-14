# AGENTS.md

Instructions for AI coding agents working with this codebase.

## Project overview

Stack: **Next.js 15**, **React 19 canary** (for `<ViewTransition>`), Tailwind, Framer Motion, and a custom theme system (light/dark/system + CSS-variable accent colors). Key areas: page transitions, portfolio gallery, theme/settings UI.

## Source code reference (opensrc)

Dependency source is cached globally at `~/.opensrc/` (on Windows: `%USERPROFILE%\.opensrc\`). It is **not** copied into this repo. Use opensrc when you need library internals beyond types — e.g. `AnimatePresence` exit behavior, Next.js App Router patterns, React APIs.

Run `npm run opensrc:fetch` to pre-fetch packages for this project (versions resolved from the lockfile where applicable).

### Packages for this project

| Spec | Use when |
|------|----------|
| `motiondivision/motion` | Page transitions, `AnimatePresence`, layout animations, theme panel motion (Framer Motion lives in this monorepo under `packages/framer-motion`) |
| `next` | App Router, layouts, routing, metadata, View Transitions |
| `react/react` | React 19 `<ViewTransition>`, `startTransition` activation rules |
| `react` | React 19 hooks and APIs (npm package maps to facebook/react monorepo) |

List cached sources: `npx opensrc list`

### Fetching source code

```bash
npm run opensrc:fetch
# or individually:
npx opensrc fetch motiondivision/motion next react
```

### Reading / searching source code

Print the cached path (fetches on cache miss):

```bash
npx opensrc path next
npx opensrc path react
npx opensrc path motiondivision/motion
```

Then read specific files from that path, or search:

```bash
# bash / git bash
rg "AnimatePresence" $(npx opensrc path motiondivision/motion)

# PowerShell
rg "AnimatePresence" (npx opensrc path motiondivision/motion)
```

Framer Motion implementation files: `packages/framer-motion/src/` inside the motion repo path.

### When to use opensrc

- **Use it:** animation/transition bugs, Next.js routing or layout questions, verifying library API behavior.
- **Skip it:** editing project components, static data, theme CSS, copy, or routine UI work in `components/` and `features/`.

Agents can run `opensrc fetch` or `opensrc path` on demand during a task without asking the user first.
