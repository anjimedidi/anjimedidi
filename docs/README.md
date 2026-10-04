# Anjaneya Medidi — engineering portfolio

A responsive, dependency-free portfolio inspired by semiconductor laboratory interfaces. Original implementation; no reference-site assets or code copied.

## Put it in your GitHub Pages repository

1. Back up your existing repository files.
2. Copy `index.html`, `style.css`, `script.js`, `favicon.svg` and `.nojekyll` to the folder GitHub Pages publishes (usually the repository root).
3. Commit and push. In **Settings → Pages**, choose **Deploy from a branch**, select your branch and the appropriate publishing folder.
4. Your existing project URL can remain `https://anjimedidi.github.io/anjimedidi/`.

No npm, build command, external fonts or backend required. Relative asset paths work under GitHub Pages project directories. Do not upload the ZIP itself as your website.

## Preview locally

Run `python3 -m http.server 8000` inside this folder and open `http://localhost:8000`. You can also open `index.html` directly.

## Customize before publishing

- Edit biography, toolkit, research and contact links in `index.html`.
- Contact currently links to GitHub and your existing portfolio. Replace the second link with your verified LinkedIn URL or `mailto:` address.
- The research link searches IEEE Xplore; replace it with exact publication URLs and validated titles when available.
- Project details live in the `records` object in `script.js`. Replace development directions with actual case studies, screenshots, measured results and direct repository links as you publish them.
- No resume PDF was supplied. Add your PDF and a download link if desired.
- Adjust colors in `style.css` under `:root`.

## Included behavior

Brief non-blocking boot overlay, responsive navigation, active section tracking, SVG clock waveform, accessible native project dialogs, reduced-motion support, keyboard focus styling and skip navigation. Core content remains available when JavaScript is disabled.

## Content integrity

No fabricated metrics, completed-project claims, publication years or confidential work examples are included. The synthesis project is marked in development; other lab records are clearly labeled as development or learning directions. Confirm all personal and professional descriptions before publication.
