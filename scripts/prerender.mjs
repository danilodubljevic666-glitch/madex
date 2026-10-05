// Nakon `vite build`, ovaj skript otvara svaku rutu (na oba jezika) u headless
// Chrome-u (preko lokalnog `vite preview` servera), sačeka da React i SEOTags
// odrade svoj posao, i snimi finalni HTML kao statički fajl u dist/.
// Tako crawleri koji ne izvršavaju JavaScript (i oni koji ga izvršavaju
// sporo/nepotpuno) vide pun sadržaj, hreflang i JSON-LD odmah, bez čekanja na React.
import { preview } from 'vite';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { ROUTES, LANGS } from '../src/i18n/routes.js';
import { SITE_URL } from '../src/data/site.js';

const PORT = 4174;
const BASE_URL = `http://localhost:${PORT}`;
const DIST_DIR = path.resolve(process.cwd(), 'dist');

// Sve stranice iz src/i18n/routes.js — navigacija + usluge, na svakom jeziku.
// Početna ('/') ide posljednja: dok ne postoji prerenderovan dist/index.html,
// `vite preview` za svaku rutu vraća čist index.html iz build-a.
const routes = ROUTES.flatMap((route) => LANGS.map((lang) => route.paths[lang])).sort(
  (a, b) => (a === '/') - (b === '/')
);

// Na Vercel-u (i drugim serverless build okruženjima) nema sistemskih
// biblioteka za puppeteer-ov bundlovani Chromium, pa tamo koristimo
// @sparticuz/chromium — Chromium build napravljen baš za takva okruženja.
// Lokalno (dev mašina) koristimo obični puppeteer sa svojim Chromium-om.
async function launchBrowser() {
  if (process.env.VERCEL) {
    const [{ default: chromium }, { default: puppeteerCore }] = await Promise.all([
      import('@sparticuz/chromium'),
      import('puppeteer-core'),
    ]);
    return puppeteerCore.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: true,
    });
  }

  const { default: puppeteer } = await import('puppeteer');
  return puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
}

async function main() {
  console.log(`Prerendering ${routes.length} ruta...`);

  const previewServer = await preview({
    preview: { port: PORT, strictPort: true },
  });

  const browser = await launchBrowser();

  try {
    const page = await browser.newPage();

    for (const route of routes) {
      await page.goto(`${BASE_URL}${route}`, { waitUntil: 'domcontentloaded' });

      // Sačekaj da SEOTags upiše title/meta/hreflang/JSON-LD baš za ovu rutu
      // (canonical se postavlja u istom efektu kao i JSON-LD).
      await page.waitForFunction(
        (expectedCanonical) => {
          const script = document.getElementById('structured-data-script');
          const canonical = document.querySelector('link[rel="canonical"]');
          return script && script.textContent.length > 0 && canonical?.href === expectedCanonical;
        },
        { timeout: 15000 },
        `${SITE_URL}${route}`
      );

      // Priprema HTML-a za hydrateRoot (main.jsx):
      // 1) Susjedni tekst čvorovi (npr. {poziv} {telefon}) bi se u HTML-u spojili
      //    u jedan, pa ih razdvajamo komentarom — isto kao React server render.
      // 2) Oznaka da ovaj HTML odgovara ovoj ruti.
      await page.evaluate((prerenderedPath) => {
        const root = document.getElementById('root');
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
        const textNodes = [];
        while (walker.nextNode()) textNodes.push(walker.currentNode);
        for (const node of textNodes) {
          if (node.previousSibling?.nodeType === Node.TEXT_NODE) {
            node.parentNode.insertBefore(document.createComment(' '), node);
          }
        }
        root.setAttribute('data-prerendered-path', prerenderedPath);
      }, route);

      const html = '<!DOCTYPE html>\n' + (await page.evaluate(() => document.documentElement.outerHTML));

      const outDir = route === '/' ? DIST_DIR : path.join(DIST_DIR, route.slice(1));
      await mkdir(outDir, { recursive: true });
      await writeFile(path.join(outDir, 'index.html'), html, 'utf-8');
      console.log(`  ✓ ${route}`);
    }
  } finally {
    await browser.close();
    await new Promise((resolve) => previewServer.httpServer.close(resolve));
  }

  console.log(`Prerendering gotov — ${routes.length} statičkih HTML fajlova u dist/.`);
}

main().catch((err) => {
  console.error('Prerendering nije uspio:', err);
  process.exit(1);
});
