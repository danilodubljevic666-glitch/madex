// Jedino mjesto gdje su definisane putanje na oba jezika.
// Koriste ga React rute, prebacivač jezika, hreflang tagovi u SEOTags,
// prerender skripta i generator sitemap-a — zato ovdje nema JSX-a.
import { services } from '../data/services.js';
import { servicesEn } from '../data/services.en.js';

export const LANGS = ['sr', 'en'];
export const DEFAULT_LANG = 'sr';

// hreflang / <html lang> / og:locale vrijednosti po jeziku
export const LOCALE = {
  sr: { htmlLang: 'sr-Latn-ME', hreflang: 'sr', og: 'sr_ME' },
  en: { htmlLang: 'en', hreflang: 'en', og: 'en_US' },
};

// Stranice iz glavne navigacije
export const PAGE_PATHS = {
  home: { sr: '/', en: '/en' },
  services: { sr: '/usluge', en: '/en/services' },
  about: { sr: '/o-nama', en: '/en/about' },
  contact: { sr: '/kontakt', en: '/en/contact' },
  order: { sr: '/porucite', en: '/en/order' },
};

// Sve rute sajta: svaka ima putanju na svakom jeziku.
export const ROUTES = [
  ...Object.entries(PAGE_PATHS).map(([key, paths]) => ({ key, paths })),
  ...services.map((service) => ({
    key: `service:${service.slug}`,
    paths: { sr: `/${service.slug}`, en: `/en/${servicesEn[service.slug].slug}` },
  })),
];

// putanja (na bilo kom jeziku) → { sr, en } verzije iste stranice
const ALTERNATES = new Map();
for (const route of ROUTES) {
  for (const lang of LANGS) ALTERNATES.set(route.paths[lang], route.paths);
}

// "/usluge/" → "/usluge", "" → "/"
export const normalizePath = (pathname = '/') => {
  const trimmed = pathname.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
};

export const langFromPath = (pathname = '/') => (/^\/en(\/|$)/.test(pathname) ? 'en' : 'sr');

export const getAlternates = (pathname) => ALTERNATES.get(normalizePath(pathname)) || null;

export const pagePath = (key, lang) => PAGE_PATHS[key][lang];
