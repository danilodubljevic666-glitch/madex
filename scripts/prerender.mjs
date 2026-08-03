// Nakon `vite build`, ovaj skript otvara svaku rutu u headless Chrome-u
// (preko lokalnog `vite preview` servera), sačeka da React i SEOTags
// odrade svoj posao, i snimi finalni HTML kao statički fajl u dist/.
// Tako crawleri koji ne izvršavaju JavaScript (i oni koji ga izvršavaju
// sporo/nepotpuno) vide pun sadržaj i JSON-LD odmah, bez čekanja na React.
import { preview } from 'vite';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { services } from '../src/data/services.js';

const PORT = 4174;
const BASE_URL = `http://localhost:${PORT}`;
const DIST_DIR = path.resolve(process.cwd(), 'dist');

const routes = ['/', ...services.map((s) => `/${s.slug}`)];

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
      const url = `${BASE_URL}${route}`;
      await page.goto(url, { waitUntil: 'domcontentloaded' });

      // Sačekaj da SEOTags upiše title/meta/JSON-LD u <head>
      await page.waitForFunction(
        () => {
          const script = document.getElementById('structured-data-script');
          return script && script.textContent.length > 0;
        },
        { timeout: 15000 }
      );

      const html = '<!DOCTYPE html>\n' + (await page.content());

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
