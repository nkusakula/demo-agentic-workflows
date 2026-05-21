# Demo 3 — Documentation Sync

Push-triggered agent that spots doc drift and opens a PR fixing *only*
the affected doc pages.

## Files

```
.github/workflows/docs-sync.md   # the agentic workflow
src/api.js                       # new signature: createUser(payload)
docs/README.md                   # old signature: createUser(name, email)  ← drifted
```

The drift is intentional — `src/api.js` and `docs/README.md` disagree on
the `createUser` signature and on the return shape.

## Prerequisites

Same as demos 1 and 2.

## Setup

```bash
cp -r demos/03-docs-sync/.github demos/03-docs-sync/src demos/03-docs-sync/docs .
git add .github src docs && git commit -m "Add docs-sync agent + drifted sample"
git push

gh aw compile
git add .github/workflows/docs-sync.lock.yml
git commit -m "Compile docs-sync" && git push
```

## Run the demo

Make a trivial edit to `src/api.js` (e.g. fix a comment typo) and push —
the `on: push` trigger fires the workflow. Alternatively:

```bash
gh workflow run docs-sync.md
```

When the run finishes, open the Pull Requests tab. The agent will open a
single PR, docs-only, rewriting the `createUser` section of `docs/README.md`
to match the current `payload`-based signature.

## What to highlight during the presentation

- **Pattern: DataOps / event-driven.** `on: push` with a `paths:` filter
  means the agent only wakes up when it might have work to do.
- **Scope via `safe-outputs.paths`.** The `paths: ["docs/**"]` allow-list
  makes it physically impossible for this agent to modify `src/`. Perfect
  least-privilege story.
- **Drift is the signal.** The agent is not asked to improve docs; only
  to realign them with code that already shipped.
- **96%** real-world merge rate — docs PRs are low-risk and easy to verify.
