// src/components/SEOTags.jsx
// Upisuje <title>, meta tagove, canonical, hreflang i JSON-LD u <head>.
// Putanja i jezik se čitaju iz URL-a, pa ih stranice ne moraju prosljeđivati.
// Prerender skripta (scripts/prerender.mjs) snima rezultat u statički HTML.
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE_URL, BUSINESS_NAME, LOCAL_BUSINESS_SCHEMA, GEO } from '../data/site';
import { LANGS, DEFAULT_LANG, LOCALE, getAlternates, langFromPath, normalizePath, pagePath } from '../i18n/routes';
import { UI } from '../i18n/ui';

const DEFAULTS = {
  sr: {
    title: 'Štamparija MADEX Nikšić — offset i digitalna štampa',
    description:
      'Štamparija MADEX Nikšić — offset i digitalna štampa, brendiranje vozila i objekata, štampa na majicama, sito štampa. Porodična štamparija sa 20+ godina iskustva.',
    keywords:
      'štamparija Nikšić, fotokopirnica Nikšić, štamparija NK, brendiranje vozila Nikšić, kopiranje Nikšić, digitalna štampa Nikšić, ofset štampa Nikšić, grafički dizajn Nikšić, brendiranje objekata Nikšić, sito štampa Nikšić, štampa na majicama Nikšić, PVC folija Nikšić, vizit kartice Nikšić, vizit kartice Crna Gora, štamparija MADEX, štamparija Crna Gora, štampa online Crna Gora, štampa Nikšić',
    image: '/og-image.jpg',
    imageAlt: 'Štamparija MADEX Nikšić — profesionalna štampa i brendiranje',
  },
  en: {
    title: 'MADEX Print Shop Nikšić — Offset & Digital Printing',
    description:
      'MADEX print shop in Nikšić, Montenegro — offset and digital printing, vehicle and storefront branding, T-shirt and screen printing. Family business with 20+ years of experience.',
    keywords:
      'print shop Nikšić, printing Montenegro, print shop Montenegro, digital printing Nikšić, offset printing Montenegro, vehicle wrapping Nikšić, business cards Montenegro, T-shirt printing Montenegro, graphic design Nikšić, MADEX printing',
    image: '/og-image-en.jpg',
    imageAlt: 'MADEX print shop Nikšić — professional printing and branding',
  },
};

const absoluteUrl = (path) => `${SITE_URL}${path}`;

// Stabilne prazne vrijednosti — novi [] pri svakom renderu bi ponovo pokretao efekat.
const NO_CRUMBS = [];
const NO_SCHEMA = [];

// Kreira (ili ažurira) <meta>; content = null briše tag.
const setMeta = (attr, key, content) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (content == null) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const SEOTags = ({
  title,
  description,
  keywords,
  image,
  type = 'website',
  pageName = '',
  // Međukoraci breadcrumb-a između početne i trenutne stranice: [{ name, path }]
  parentCrumbs = NO_CRUMBS,
  extraSchema = NO_SCHEMA,
  noindex = false,
}) => {
  const { pathname } = useLocation();
  const path = normalizePath(pathname);
  const lang = langFromPath(path);
  const defaults = DEFAULTS[lang];

  const pageTitle = title || defaults.title;
  const pageDescription = description || defaults.description;
  const pageKeywords = keywords || defaults.keywords;
  const ogImageUrl = absoluteUrl(image || defaults.image);

  useEffect(() => {
    const alternates = noindex ? null : getAlternates(path);
    const canonicalUrl = absoluteUrl(path);
    const homePath = pagePath('home', lang);
    const isHome = path === homePath;

    document.title = pageTitle;
    document.documentElement.lang = LOCALE[lang].htmlLang;

    const otherLang = LANGS.find((l) => l !== lang);
    const metaTags = [
      ['name', 'description', pageDescription],
      ['name', 'keywords', pageKeywords],
      ['name', 'author', BUSINESS_NAME],
      [
        'name',
        'robots',
        noindex
          ? 'noindex, follow'
          : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      ],

      // Open Graph (Facebook, Viber, WhatsApp, LinkedIn)
      ['property', 'og:title', pageTitle],
      ['property', 'og:description', pageDescription],
      ['property', 'og:image', ogImageUrl],
      ['property', 'og:image:width', '1200'],
      ['property', 'og:image:height', '630'],
      ['property', 'og:image:alt', defaults.imageAlt],
      ['property', 'og:type', type],
      ['property', 'og:url', canonicalUrl],
      ['property', 'og:locale', LOCALE[lang].og],
      ['property', 'og:locale:alternate', LOCALE[otherLang].og],
      ['property', 'og:site_name', BUSINESS_NAME],

      // Twitter / X
      ['name', 'twitter:card', 'summary_large_image'],
      ['name', 'twitter:title', pageTitle],
      ['name', 'twitter:description', pageDescription],
      ['name', 'twitter:image', ogImageUrl],
      ['name', 'twitter:image:alt', defaults.imageAlt],

      // Lokalni SEO
      ['name', 'geo.region', 'ME-12'],
      ['name', 'geo.placename', 'Nikšić'],
      ['name', 'geo.position', `${GEO.latitude};${GEO.longitude}`],
      ['name', 'ICBM', `${GEO.latitude}, ${GEO.longitude}`],
    ];
    metaTags.forEach(([attr, key, content]) => setMeta(attr, key, content));

    // Canonical — 404 i slične stranice ga nemaju
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (noindex) {
      canonical?.remove();
    } else {
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', canonicalUrl);
    }

    // hreflang: svaka jezička verzija pokazuje na sve verzije (i na sebe),
    // x-default vodi na srpsku verziju.
    document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove());
    if (alternates) {
      const hreflangs = [
        ...LANGS.map((l) => [LOCALE[l].hreflang, alternates[l]]),
        ['x-default', alternates[DEFAULT_LANG]],
      ];
      hreflangs.forEach(([hreflang, href]) => {
        const link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', hreflang);
        link.setAttribute('href', absoluteUrl(href));
        document.head.appendChild(link);
      });
    }

    // JSON-LD: LocalBusiness na svakoj stranici + podaci stranice + breadcrumb
    const allStructuredData = [LOCAL_BUSINESS_SCHEMA[lang], ...extraSchema];

    if (!isHome && !noindex) {
      const crumbs = [
        { name: UI[lang].common.home, path: homePath },
        ...parentCrumbs,
        { name: pageName || pageTitle.split('|')[0].trim(), path },
      ];
      allStructuredData.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: crumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: absoluteUrl(crumb.path),
        })),
      });
    }

    const scriptId = 'structured-data-script';
    let script = document.getElementById(scriptId);
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(allStructuredData);

    return () => {
      // Meta tagovi ostaju (sljedeća stranica ih prepisuje), a JSON-LD se
      // uklanja da se podaci dvije stranice ne bi pomiješali.
      script.remove();
    };
  }, [
    path,
    lang,
    pageTitle,
    pageDescription,
    pageKeywords,
    ogImageUrl,
    type,
    pageName,
    parentCrumbs,
    extraSchema,
    noindex,
    defaults.imageAlt,
  ]);

  return null;
};

export default SEOTags;
