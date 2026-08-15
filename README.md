# Olea Luxury Apartments — static website

A photo-first, responsive static site for Olea Luxury Apartments in Skala Marion, Thassos.

## Files

- `index.html` — page structure and copy
- `styles.css` — all styling and responsive layout
- `script.js` — hero slideshow, mobile menu, gallery lightbox, sticky header
- `images/` — put the final property photos here

## Adding the real photos

The page currently uses tasteful placeholders so it works immediately.

The easiest approach is to replace the placeholder sections with `<img>` elements, or add background images in `styles.css`.

For example:

```css
.hero-1 {
  background: url("images/exterior.jpg") center / cover no-repeat;
}
```

Then do the same for `.hero-2`, `.hero-3`, and the gallery/feature sections.

## Before publishing

1. Replace placeholder copy with the exact approved listing information.
2. Replace the sample Booking.com button with the aunt's actual listing URL.
3. Replace the sample email address with the real contact details.
4. Update the amenity list to match the property exactly.
5. Add real photos and meaningful `alt` text if converting placeholders to `<img>` tags.
6. Add a favicon and social preview image if desired.

## Hosting

This is plain HTML/CSS/JS. It can be hosted on GitHub Pages, Netlify, Vercel, Cloudflare Pages, or any normal web host. No server or database is required.


## Privacy / GDPR preparation

The package now includes:
- `privacy.html`
- `cookies.html`
- a cookie banner with equally prominent accept/reject choices
- a cookie settings dialog
- necessary preference storage only
- no optional analytics script enabled

Before publishing, replace all `[BRACKETED]` legal/controller details and verify the actual hosting/CDN, fonts, analytics, maps, embeds, contact forms, and external services used. The legal pages are templates and should be reviewed for the owner's exact circumstances.
