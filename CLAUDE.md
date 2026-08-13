# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository state

This is `rokon-uddin.github.io`, a GitHub Pages site. As of now the repository contains no site content — only a README and two deployment workflows. There is no build tooling, package manager, linter, or test suite configured yet.

## Deployment

Two GitHub Actions workflows are both configured to deploy to GitHub Pages on every push to `main`:

- `.github/workflows/jekyll-gh-pages.yml` — builds the repo root with Jekyll (`actions/jekyll-build-pages`) and deploys `_site`.
- `.github/workflows/static.yml` — deploys the entire repo root as static content, with no build step.

Only one of these should remain once real site content is added — running both against the same push is redundant and they will race for the `pages` deployment concurrency group. Confirm with the user which approach (Jekyll vs. plain static) they intend before adding content or removing either workflow.
