// Generiše dist/sitemap.xml iz src/i18n/routes.js — svaka stranica na oba
// jezika, sa hreflang vezama (xhtml:link) ka svim jezičkim verzijama.
// Pokreće se u `npm run build`, pa se sitemap nikad ne razilazi sa rutama.
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { ROUTES, LANGS, LOCALE, DEFAULT_LANG, PAGE_PATHS } from '../src/i18n/routes.js';
import { SITE_URL } from '../src/data/site.js';

const DIST_DIR = path.resolve(process.cwd(), 'dist');
const today = new Date().toISOString().slice(0, 10);

const PRIORITY = { home: '1.0', services: '0.9', order: '0.9', about: '0.8', contact: '0.8' };

const url = (p) => `${SITE_URL}${p}`;

const entries = ROUTES.flatMap((route) =>
  LANGS.map((lang) => {
    const alternates = [
      ...LANGS.map((l) => `    <xhtml:link rel="alternate" hreflang="${LOCALE[l].hreflang}" href="${url(route.paths[l])}" />`),
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${url(route.paths[DEFAULT_LANG])}" />`,
    ];
    // Engleska verzija dobija nešto niži prioritet od srpske (glavno tržište)
    const base = Number(PRIORITY[route.key] ?? '0.9');
    const priority = (lang === DEFAULT_LANG ? base : base - 0.1).toFixed(1);

    // Redoslijed je propisan šemom sitemaps.org: loc, lastmod, changefreq, priority,
    // pa tek onda elementi iz drugih namespace-a (xhtml:link za hreflang).
    return [
      '  <url>',
      `    <loc>${url(route.paths[lang])}</loc>`,
      `    <lastmod>${today}</lastmod>`,
      '    <changefreq>monthly</changefreq>',
      `    <priority>${priority}</priority>`,
      ...alternates,
      '  </url>',
    ].join('\n');
  })
);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`;

await mkdir(DIST_DIR, { recursive: true });
await writeFile(path.join(DIST_DIR, 'sitemap.xml'), xml, 'utf-8');
console.log(`Sitemap: ${entries.length} URL-ova → dist/sitemap.xml (početna: ${url(PAGE_PATHS.home[DEFAULT_LANG])})`);
