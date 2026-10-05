# Štamparija MADEX — sajt

React + Vite sajt sa prerenderovanim stranicama (SEO) i serverless kontakt formom na Vercelu.

## Pokretanje

```bash
npm install
npm run dev      # http://localhost:5173 — uključuje i /api rute
npm run build    # vite build + prerender svih ruta u dist/
npm run preview  # pregled produkcijskog builda
npm run lint
```

## Environment varijable

Lokalno se čitaju iz `.env.local` (nije u gitu — vidi `.env.example`).
Iste varijable moraju postojati i na Vercelu: **Project → Settings → Environment Variables**.

| Varijabla | Opis |
|---|---|
| `RESEND_API_KEY` | API ključ sa [resend.com](https://resend.com) — bez njega forma vraća grešku |
| `CONTACT_FROM` | Pošiljalac, npr. `Sajt MADEX <kontakt@stamparijamadex.com>` |
| `CONTACT_TO` | Primalac; više adresa odvojiti zarezom |

**Važno:** `CONTACT_FROM` mora biti sa domena verifikovanog u Resend-u. Dok domen nije
verifikovan, jedini dozvoljeni pošiljalac je `onboarding@resend.dev`, a mejl tada stiže
samo na adresu vlasnika Resend naloga.

## Kontakt forma

- Frontend: [`src/components/ContactForm.jsx`](src/components/ContactForm.jsx) — validira polja i šalje `POST /api/contact`
- Backend: [`api/contact.js`](api/contact.js) — Vercel serverless funkcija, šalje mejl preko Resend-a

Zaštite: validacija i na klijentu i na serveru, ograničenja dužine polja, escapovanje HTML-a
prije ubacivanja u mejl, honeypot polje (`website`) protiv botova i `replyTo` sa adresom
pošiljaoca, pa se na upit odgovara direktno iz mejl klijenta.

Vite dev i preview server pokreću `api/*.js` kao middleware (plugin `local-api` u
[`vite.config.js`](vite.config.js)), pa forma radi lokalno bez `vercel dev`.

## Stranice i SEO

Sajt postoji na dva jezika — **crnogorski/srpski** na korijenu (`/usluge`) i **engleski**
pod `/en` (`/en/services`). Sve putanje na oba jezika su na jednom mjestu:
[`src/i18n/routes.js`](src/i18n/routes.js). Iz njega rade React rute
([`src/App.jsx`](src/App.jsx)), prebacivač jezika ME/EN, hreflang tagovi, prerender i sitemap.

- `/` i `/en` — početna
- `/usluge`, `/o-nama`, `/kontakt`, `/porucite` (i `/en/services`, `/en/about`, `/en/contact`, `/en/order`)
- po jedna stranica za svaku uslugu na oba jezika (npr. `/brendiranje-vozila-niksic` ↔ `/en/vehicle-wrapping-niksic`)

Svaka ruta dobija svoj `title`, `description`, `canonical`, `hreflang` (sr, en, x-default),
`<html lang>` i JSON-LD preko [`SEOTags`](src/components/SEOTags.jsx). `npm run build`:

1. `vite build`
2. [`scripts/sitemap.mjs`](scripts/sitemap.mjs) — generiše `dist/sitemap.xml` sa svim rutama i hreflang vezama
3. [`scripts/prerender.mjs`](scripts/prerender.mjs) — otvara svaku rutu u headless Chrome-u i snima
   gotov HTML u `dist/`; React ga u browseru samo hidrira (`hydrateRoot` u [`src/main.jsx`](src/main.jsx))

## Prevodi

| Šta | Gdje |
|---|---|
| Navigacija, forme, footer, sekcije početne | [`src/i18n/ui.js`](src/i18n/ui.js) — ključevi `sr` i `en` |
| Tekstovi stranica (o nama, kontakt...) | objekat `CONTENT` na vrhu svake stranice u `src/pages/` |
| Usluge (srpski) | [`src/data/services.js`](src/data/services.js) |
| Usluge (engleski + engleski URL) | [`src/data/services.en.js`](src/data/services.en.js) |
| Adresa, telefoni, radno vrijeme, schema | [`src/data/site.js`](src/data/site.js) |

Jezik se čita iz URL-a hook-om [`useLanguage`](src/i18n/useLanguage.js): `const { lang, t, to } = useLanguage()`.

**Nova usluga:** dodaj je u `services.js`, prevod (sa engleskim `slug`-om) u `services.en.js` i ikonu u
[`src/data/serviceIcons.js`](src/data/serviceIcons.js). Rute, sitemap i prerender je pokupe same.

**Nova stranica:** dodaj putanje u `PAGE_PATHS` u `src/i18n/routes.js` i stranicu u `PAGES` u `src/App.jsx`.

## Dizajn

Vizuelni jezik prati CMYK boje iz logotipa (`ink-cyan`, `ink-magenta`, `ink-yellow` u
[`src/index.css`](src/index.css)). Dekorativni vektori (paser-krst, crop marke, halftone raster,
CMYK traka i rozeta) su u [`src/components/Decor.jsx`](src/components/Decor.jsx), a animacija
pri skrolovanju u [`Reveal`](src/components/Reveal.jsx). Sve animacije se gase kod korisnika koji
u sistemu imaju uključeno "smanji pokrete" (`prefers-reduced-motion`).

Fotografije se koriste kao `.webp` (originalni `.jpg` su ostali u `public/`). OG slike za dijeljenje
linkova su `public/og-image.jpg` (ME) i `public/og-image-en.jpg` (EN), 1200×630.

## Deploy

Vercel build komanda je `npm run build`. Rewrite u [`vercel.json`](vercel.json) preskače
`/api`, a statički fajlovi iz `dist/` imaju prednost nad rewrite-om — zato se prerenderovane
stranice serviraju kakve jesu.
