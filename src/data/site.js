// Centralni NAP (Name-Address-Phone) podaci firme.
// Moraju biti IDENTIČNI podacima na Google Business profilu na svakoj stranici.
// Naziv firme ("Štamparija MADEX") se NE prevodi ni na engleskoj verziji —
// Google mora da vidi isti naziv svuda.

export const SITE_URL = 'https://www.stamparijamadex.com';
export const BUSINESS_NAME = 'Štamparija MADEX';

export const PHONE_PRIMARY_DISPLAY = '+382 68 048 655';
export const PHONE_PRIMARY_TEL = 'tel:+38268048655';
export const PHONE_SECONDARY_DISPLAY = '+382 69 048 009';
export const PHONE_SECONDARY_TEL = 'tel:+38269048009';

export const EMAIL = 'stamparijamadex@gmail.com';

export const ADDRESS = {
  street: 'Bulevar 13. jul 234',
  city: 'Nikšić',
  postalCode: '81400',
  country: 'ME',
};

export const COUNTRY_NAME = { sr: 'Crna Gora', en: 'Montenegro' };

export const WORKING_HOURS = {
  sr: 'Svaki dan: 08:00 - 21:00',
  en: 'Every day: 08:00 – 21:00',
};

// Tačna lokacija štamparije (ista tačka kao na Google mapi ispod).
export const GEO = { latitude: 42.7468, longitude: 18.9585 };

export const MAP_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d572.2209393418041!2d18.958520923395515!3d42.74680048834642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134da90015048615%3A0xaa047c3d8cb0cfc7!2sMADEX%20%C5%A0TAMPARIJA!5e1!3m2!1ssr!2s!4v1768776676777!5m2!1ssr!2s';

// Direktan link na Google Business profil (CID iz embed linka iznad).
export const MAP_LINK = 'https://maps.google.com/?cid=12251053490149838791';

export const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=100063073638062';
export const INSTAGRAM_URL = 'https://www.instagram.com/madexstamparija/';
export const SOCIAL_LINKS = [FACEBOOK_URL, INSTAGRAM_URL];

const LOCAL_BUSINESS_ID = `${SITE_URL}/#localbusiness`;
const ORGANIZATION_ID = `${SITE_URL}/#organization`;

const POSTAL_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: ADDRESS.street,
  addressLocality: ADDRESS.city,
  addressRegion: ADDRESS.city,
  postalCode: ADDRESS.postalCode,
  addressCountry: ADDRESS.country,
};

// Provider blok koji se ponavlja u JSON-LD schema podacima (Service, ItemList...).
// Referenca preko @id povezuje ga sa punim LocalBusiness čvorom.
export const LOCAL_BUSINESS_PROVIDER = {
  '@type': 'LocalBusiness',
  '@id': LOCAL_BUSINESS_ID,
  name: BUSINESS_NAME,
  telephone: PHONE_PRIMARY_DISPLAY,
  url: SITE_URL,
  address: POSTAL_ADDRESS,
};

const buildLocalBusiness = (lang) => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': LOCAL_BUSINESS_ID,
  name: BUSINESS_NAME,
  alternateName: lang === 'en' ? 'MADEX Print Shop Nikšić' : 'MADEX Nikšić',
  description:
    lang === 'en'
      ? 'Family-run print shop in Nikšić, Montenegro, since 2005 — offset and digital printing, screen printing, business cards, banners, packaging, graphic design and vehicle and storefront branding.'
      : 'Porodična štamparija iz Nikšića od 2005. godine — offset i digitalna štampa, sito štampa, vizit kartice, baneri, ambalaža, grafički dizajn i brendiranje vozila i objekata.',
  url: lang === 'en' ? `${SITE_URL}/en` : SITE_URL,
  image: `${SITE_URL}/og-image.jpg`,
  logo: `${SITE_URL}/logo-madex.png`,
  telephone: PHONE_PRIMARY_DISPLAY,
  email: EMAIL,
  priceRange: '$$',
  currenciesAccepted: 'EUR',
  paymentAccepted: lang === 'en' ? 'Cash, Bank transfer' : 'Gotovina, Virman',
  address: POSTAL_ADDRESS,
  geo: { '@type': 'GeoCoordinates', ...GEO },
  hasMap: MAP_LINK,
  areaServed: { '@type': 'Country', name: COUNTRY_NAME[lang] },
  knowsLanguage: ['sr', 'en'],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '21:00',
    },
  ],
  parentOrganization: { '@id': ORGANIZATION_ID },
  sameAs: SOCIAL_LINKS,
});

// Pun LocalBusiness čvor — ide na svaku stranicu (preko SEOTags).
export const LOCAL_BUSINESS_SCHEMA = {
  sr: buildLocalBusiness('sr'),
  en: buildLocalBusiness('en'),
};

// Opis brenda za Google — povezuje ime firme sa logom i društvenim mrežama.
const buildOrganization = (lang) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORGANIZATION_ID,
  name: BUSINESS_NAME,
  alternateName: 'MADEX Nikšić',
  legalName: BUSINESS_NAME,
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/logo-madex.png`,
    width: 512,
    height: 512,
    caption: BUSINESS_NAME,
  },
  image: `${SITE_URL}/og-image.jpg`,
  description:
    lang === 'en'
      ? 'Family-run print shop from Nikšić, Montenegro, founded in 2005 — offset and digital printing, screen printing, business cards, banners, packaging, graphic design and vehicle and storefront branding.'
      : 'Porodična štamparija iz Nikšića osnovana 2005. godine — offset i digitalna štampa, sito štampa, vizit kartice, baneri, ambalaža, grafički dizajn i brendiranje vozila i objekata.',
  email: EMAIL,
  telephone: PHONE_PRIMARY_DISPLAY,
  foundingDate: '2005',
  founder: {
    '@type': 'Person',
    name: 'Mladen Dubljević',
    jobTitle: lang === 'en' ? 'Founder and owner' : 'Osnivač i vlasnik',
  },
  address: POSTAL_ADDRESS,
  areaServed: { '@type': 'Country', name: COUNTRY_NAME[lang] },
  sameAs: SOCIAL_LINKS,
});

export const ORGANIZATION_SCHEMA = {
  sr: buildOrganization('sr'),
  en: buildOrganization('en'),
};

// WebSite čvor (samo na početnoj) — Google iz njega čita naziv sajta.
const buildWebsite = (lang) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: BUSINESS_NAME,
  alternateName: ['MADEX', 'Štamparija MADEX Nikšić'],
  url: `${SITE_URL}/`,
  inLanguage: lang === 'en' ? 'en' : 'sr-ME',
  publisher: { '@id': ORGANIZATION_ID },
});

export const WEBSITE_SCHEMA = {
  sr: buildWebsite('sr'),
  en: buildWebsite('en'),
};
