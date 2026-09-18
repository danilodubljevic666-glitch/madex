import { existsSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Vercel serverless funkcije iz api/ ne postoje u Vite dev/preview serveru,
// pa ih ovdje mountujemo kao middleware — tako kontakt forma radi i lokalno,
// bez `vercel dev`. U produkciji ovaj kod ne učestvuje; tamo Vercel sam
// pokreće api/contact.js.
const localApiPlugin = () => {
  const middleware = (server) => async (req, res, next) => {
    const route = (req.url || '').split('?')[0].replace(/^\/+|\/+$/g, '');
    const file = path.resolve(process.cwd(), 'api', `${route}.js`);

    if (!route || !existsSync(file)) return next();

    // Tijelo zahtjeva (Vercel ga parsira sam, pa radimo isto)
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    const raw = Buffer.concat(chunks).toString('utf-8');
    try {
      req.body = raw ? JSON.parse(raw) : {};
    } catch {
      req.body = raw;
    }

    // Minimalni Express-like odgovor kakav Vercel funkcije očekuju
    res.status = (code) => {
      res.statusCode = code;
      return res;
    };
    res.json = (payload) => {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(payload));
      return res;
    };

    try {
      // U dev serveru koristimo Vite loader (hot reload funkcije),
      // a u preview serveru običan dinamički import.
      const mod = server.ssrLoadModule
        ? await server.ssrLoadModule(file)
        : await import(pathToFileURL(file).href);
      await mod.default(req, res);
    } catch (err) {
      console.error(`[local-api] greška u /api/${route}:`, err);
      res.status(500).json({ error: 'Greška servera (lokalni API).' });
    }
  };

  return {
    name: 'local-api',
    config: (_, { mode }) => {
      // API ključevi nisu VITE_ varijable, pa ih ručno ubacujemo u process.env
      // da bi ih serverless funkcija vidjela i lokalno.
      const env = loadEnv(mode, process.cwd(), '');
      for (const key of ['RESEND_API_KEY', 'CONTACT_FROM', 'CONTACT_TO']) {
        if (env[key] && !process.env[key]) process.env[key] = env[key];
      }
    },
    // Hook ne smije ništa da vrati — vraćena funkcija bi se tumačila
    // kao "post" hook i Vite bi je pozvao bez argumenata.
    configureServer(server) {
      server.middlewares.use('/api', middleware(server));
    },
    configurePreviewServer(server) {
      server.middlewares.use('/api', middleware(server));
    },
  };
};

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    localApiPlugin(),
  ],
});
