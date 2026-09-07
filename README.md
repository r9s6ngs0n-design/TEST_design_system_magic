# Scael.ai — sales funnel

Single-page sales funnel for Scael.ai. Static HTML/CSS/JS — no build step;
open `index.html` or serve the folder with any static host.

## Swap in real assets

- **Booking link** — edit the `BOOKING_URL` constant at the top of
  `script.js` (e.g. your Calendly URL). Every CTA on the page updates.
- **Client creative (6 slots)** — in `index.html`, inside each
  `<figure class="proof-slot">`, replace the `<div class="slot-fill">…</div>`
  with an `<img>` or `<video>`. The frame keeps its size; layout won't move.
- **Results dashboards (2 slots)** — same swap, in the "Scale" section.
  These must be real screenshots — don't fake them.
- **Client logos** — replace each `<li class="logo-slot">` text with an
  `<img>` of the logo.
- **Privacy link** — footer `<a class="foot-link">` placeholder.

## Files

- `index.html` — page structure and copy; the two pieces of generated brand
  artwork (hero atmosphere, divider glow) are inlined as data URIs on the
  decorative `<img>` tags
- `styles.css` — design system (palette tokens at the top of `:root`)
- `script.js` — booking-link wiring, scroll reveal, magnetic CTAs
