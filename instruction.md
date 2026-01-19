# instruction.md — Create the “Improved Order” Workflow (GitHub Actions)

## Goal
Create an **Improved Order** GitHub Actions workflow where:
- Lint runs as a separate job (**Hygiene Check**)
- Unit tests run as a separate job (**Taste Test**)
- A build/cook job runs **only after both pass**
- A deploy/serve job runs **only after cooking finishes**

This demonstrates **parallel jobs + dependency control using `needs`**.

---

## Prerequisites
Before this workflow can work, your project should have these scripts in `package.json`:

- `lint` → `npm run lint`
- `test` → `npm test`
- `deploy` → `npm run deploy`

If your repo doesn’t have these scripts, the pipeline will fail (because computers are very literal and emotionally unavailable).

---
