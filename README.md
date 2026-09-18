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

Rute su definisane u [`src/App.jsx`](src/App.jsx):

- `/` — jednostranična početna
- `/usluge`, `/o-nama`, `/kontakt`, `/porucite` — samostalne stranice iz navigacije
- po jedna stranica za svaku uslugu iz [`src/data/services.js`](src/data/services.js)

Svaka ruta dobija svoj `title`, `description`, `canonical` i JSON-LD preko
[`SEOTags`](src/components/SEOTags.jsx). Nakon `vite build`, skripta
[`scripts/prerender.mjs`](scripts/prerender.mjs) otvara svaku rutu u headless Chrome-u i
snima gotov HTML u `dist/`, pa crawleri ne čekaju JavaScript.

**Kada dodaješ novu rutu:** dodaj je u `src/App.jsx`, u `staticRoutes` u
`scripts/prerender.mjs` i u [`public/sitemap.xml`](public/sitemap.xml).

## Deploy

Vercel build komanda je `npm run build`. Rewrite u [`vercel.json`](vercel.json) preskače
`/api`, a statički fajlovi iz `dist/` imaju prednost nad rewrite-om — zato se prerenderovane
stranice serviraju kakve jesu.
