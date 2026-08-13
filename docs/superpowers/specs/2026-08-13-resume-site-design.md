# Personal resume site (rokon-uddin.github.io) — Design

## Purpose

Turn the currently-empty `rokon-uddin.github.io` GitHub Pages repo into a single-page personal resume/portfolio site for Mohammed Rokon Uddin (Senior iOS Engineer), built from the content of his resume PDF and tailored for the web (contact info curated for public exposure, independent apps linked to their live App Store listings).

## Deployment

- Site is built with **Jekyll** via GitHub Pages' `github-pages` gem, deployed by `.github/workflows/jekyll-gh-pages.yml` on push to `main`.
- `.github/workflows/static.yml` is deleted — it deploys the raw repo as static files and would conflict with the Jekyll build (both target the same `pages` deployment concurrency group).
- A `Gemfile` pins the `github-pages` gem so `bundle exec jekyll serve` locally matches what GitHub Pages actually runs.

## Page structure (single scrolling page)

In order, top to bottom:

1. **Header** — name "Mohammed Rokon Uddin", title "Senior iOS Engineer", location "Dhaka, Bangladesh (GMT+6)", and contact links: email (`shoaib.rokon@gmail.com`), LinkedIn (`rokonuddin`), GitHub (`rokon-uddin`), and the third social handle from the resume (`shoaib-rokon` — X/Threads-style handle, rendered as a generic link since the platform isn't labeled on the PDF). **No phone number** — omitted from the public site for privacy (still on the PDF resume for direct sharing).
2. **Sticky nav** — anchor links to jump to About, Experience, Projects, Apps, Skills, Education. Collapses to a toggle on narrow viewports.
3. **About / Profile** — the resume's profile paragraph verbatim (10+ years, SwiftUI/TCA/Clean Architecture/Swift Concurrency, performance + leadership track record, independent AI-powered iOS apps).
4. **Experience** — two entries, most recent first:
   - **Specialized Engineer I, Brain Station 23** (10/2024–present, Dhaka) — 5 bullets: leading a 34-engineer mobile team; re-architected legacy iOS codebase with Clean Architecture; ~4× faster app load time via Swift Structured Concurrency; improved runtime efficiency via structured thread/background management; standardized code quality via SwiftLint/SwiftFormat; defined scalable system architecture and mentored engineers.
   - **Senior Software Engineer II, Monstarlab Bangladesh Ltd.** (06/2017–06/2024, Dhaka) — 5 bullets: scaled a 16-engineer mobile team delivering multiple high-impact iOS apps; introduced TCA/Clean Architecture/MVVM-C; drove modern iOS adoption reducing tech debt; improved app stability/performance; mentored developers and enforced best practices.
5. **Featured projects** — two entries:
   - **MyGP (Grameenphone) iOS App** (10/2024–Present) — 20M+ MAU; ~35–45% API latency reduction; ~4× faster launch/screen load; ~15–20% higher payment success rate (bKash/Nagad/card); crash-free sessions ~96%→99%+; ~30% fewer redundant API calls.
   - **Museum of the Future (MOTF)** — interactive app with real-time indoor positioning (BlueGPS); TCA + Clean Architecture; ~30–40% faster dev velocity via SPM modularization; ~25% lower location-update latency; >99% crash-free sessions.
6. **Independent iOS apps** — three entries, each with a live App Store link:
   - **PixPerfect – Inpaint with AI** — on-device AI object-removal photo editor (Core ML + Vision): freehand brush, precision loupe, lasso, AI object detection/segmentation, background reconstruction, privacy-first (no uploads/account), undo/redo, mosaic, full-res export, subscription/lifetime Pro. Link: `https://apps.apple.com/us/app/pixperfect-inpaint-with-ai/id6775405253`
   - **CleanShot – AI Photo Cleaner** — on-device photo cleanup: detects duplicates, similar images, screenshots, notes, blurry/low-quality photos, bulk cleanup, full-screen review, quality scoring, scan progress/cancellation, haptics, localization, App Store monetization. Link: `https://apps.apple.com/us/app/cleanshot-ai-photo-cleaner/id6775141807`
   - **QuranWords: Flashcard** — multilingual vocabulary app: frequency-ranked Quranic vocabulary, spaced repetition, word-level audio, verse context, root-word study, six quiz modes, daily goals/streaks/XP/achievements/reminders, 8 app languages, multiple Arabic script styles. Link: `https://apps.apple.com/us/app/quranwords-flashcard/id6794572370`
7. **Skills** — eight categories exactly as grouped in the resume: Languages & Frameworks; Backend & Integration; Data & Performance; AI & Developer Productivity; Architecture & Engineering; Testing & Quality; Product & Delivery; Tools.
8. **Education** — B.Sc. in Computer Science and Engineering, American International University – Dhaka, 2015.
9. **Awards** — The Mountain Mover of Monstarlab (Monstarlab Bangladesh Ltd., 2020); Microsoft Imagine Cup National Champion (Microsoft Bangladesh, 2014).
10. **Footer** — repeats contact links; simple copyright line.

## Visual style

Minimal/clean: neutral background (white/near-white), one accent color for links/highlights, system font stack (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`), generous whitespace, no external font/CDN dependencies (keeps the page fast and dependency-free). No dark-mode toggle in this iteration — out of scope unless requested later.

## Technical approach

- **Data-driven content**: `_data/experience.yml`, `_data/projects.yml`, `_data/apps.yml`, `_data/skills.yml`, `_data/education.yml`, `_data/awards.yml` hold the structured content above. `index.html` (with Jekyll front matter, `layout: default`) loops over each via Liquid `{% for %}` — adding a bullet or an App Store link later is a YAML edit, not an HTML edit.
- **Layout**: `_layouts/default.html` provides the HTML shell (head, meta tags, nav include, footer include). `_includes/nav.html` and `_includes/footer.html` factor out the repeated header/footer contact links so they're written once.
- **Styling**: single hand-written `assets/css/style.css`, mobile-first, no CSS framework.
- **JS**: one small vanilla-JS file (`assets/js/main.js`) only for the mobile nav toggle (show/hide the anchor-link menu on narrow viewports). No JS framework, no build step beyond Jekyll's own.
- **`_config.yml`**: site title, description (used for the `<title>`/meta description), and any Jekyll settings needed for GitHub Pages (e.g. `plugins`, if any are required — none anticipated for this scope).

## File structure

```
_config.yml
Gemfile
index.html
_layouts/default.html
_includes/nav.html
_includes/footer.html
_data/experience.yml
_data/projects.yml
_data/apps.yml
_data/skills.yml
_data/education.yml
_data/awards.yml
assets/css/style.css
assets/js/main.js
```

`.github/workflows/static.yml` is removed as part of this work.

## Testing / verification

No unit tests — this is a static content site with no business logic. Verification is:
- `bundle exec jekyll serve` builds and runs locally without errors.
- Visual check of every section's content against the resume/this spec.
- Responsive check at mobile, tablet, and desktop widths.
- All external links (email `mailto:`, LinkedIn, GitHub, the three App Store links) resolve to the correct destination.
- Anchor-nav links scroll to the correct section.

## Out of scope

- Dark mode / theme toggle.
- Blog or additional pages beyond the single resume page.
- Downloadable PDF resume link (not requested).
- Analytics/tracking.
