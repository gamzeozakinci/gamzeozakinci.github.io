# Portfolio Site

Plain HTML/CSS/JS portfolio for Gamze Ozakinci (QA Engineer).

## Structure

- `index.html` — page content
- `css/style.css` — styling (pixel-art theme, two-column layout: sticky profile card + content)
- `js/script.js` — footer year and active-section highlight in the sidebar nav

## Still to fill in

- 2 remaining project card slots in **Projects** (Gratis.com card is done; still need
  the Selenium+Cucumber, Appium, and REST Assured+JMeter projects mentioned in the
  Gratis README's "4-part portfolio" note — pick 2, or add a 3rd card)

## Working notes

- `css/style.css` is linked with a `?v=` query string for cache-busting — bump it
  (e.g. `?v=3`) whenever you change the CSS and don't see the update reflected,
  since browsers can cache the plain filename aggressively

- LinkedIn and GitHub URLs are filled in (Contact section)
- Gratis.com project card is summarized from that repo's README.md and TEST_CASES.md
  (30 test cases, 7 areas, 3 suites, 6 smoke tests) — update it if the project changes

## Run locally

Just open `index.html` in a browser, or serve it:

```bash
npx serve .
```

## Deploy to GitHub Pages

1. Push this folder to a GitHub repo (private repo is fine — the repo's *code*
   stays private, but note that GitHub Pages itself will be publicly viewable
   at its URL unless you're on a paid GitHub plan with Pages access control).
2. In the repo: **Settings → Pages → Source → Deploy from a branch**, pick
   `main` and `/ (root)`.
3. Your site will be live at `https://<username>.github.io/<repo-name>/`.
