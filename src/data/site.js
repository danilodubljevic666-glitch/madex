// Centralni NAP (Name-Address-Phone) podaci firme.
// Moraju biti IDENTIČNI podacima na Google Business profilu na svakoj stranici.

export const SITE_URL = 'https://www.stamparijamadex.com';

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

export const WORKING_HOURS = 'Svaki dan: 08:00 - 21:00';

export const MAP_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d572.2209393418041!2d18.958520923395515!3d42.74680048834642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134da90015048615%3A0xaa047c3d8cb0cfc7!2sMADEX%20%C5%A0TAMPARIJA!5e1!3m2!1ssr!2s!4v1768776676777!5m2!1ssr!2s';

export const SOCIAL_LINKS = [
  'https://www.facebook.com/profile.php?id=100063073638062',
  'https://www.instagram.com/madexstamparija/?next=%2F',
];

// Provider blok koji se ponavlja u JSON-LD schema podacima.
export const LOCAL_BUSINESS_PROVIDER = {
  '@type': 'LocalBusiness',
  name: 'Štamparija MADEX',
  telephone: PHONE_PRIMARY_DISPLAY,
  url: SITE_URL,
  address: {
    '@type': 'PostalAddress',
    streetAddress: ADDRESS.street,
    addressLocality: ADDRESS.city,
    postalCode: ADDRESS.postalCode,
    addressCountry: ADDRESS.country,
  },
};

// Opis brenda za Google — povezuje ime firme sa logom i društvenim mrežama.
// Zaseban @id da se ne sudara sa LocalBusiness čvorom iz SEOTags komponente.
export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Štamparija MADEX',
  alternateName: 'MADEX Nikšić',
  legalName: 'Štamparija MADEX',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/logo-madex.png`,
    caption: 'Štamparija MADEX',
  },
  image: `${SITE_URL}/og-image.jpg`,
  description:
    'Porodična štamparija iz Nikšića osnovana 2005. godine — offset i digitalna štampa, sito štampa, vizit kartice, baneri, ambalaža, grafički dizajn i brendiranje vozila i objekata.',
  email: EMAIL,
  telephone: PHONE_PRIMARY_DISPLAY,
  foundingDate: '2005',
  founder: {
    '@type': 'Person',
    name: 'Mladen Dubljević',
    jobTitle: 'Osnivač i vlasnik',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: ADDRESS.street,
    addressLocality: ADDRESS.city,
    postalCode: ADDRESS.postalCode,
    addressCountry: ADDRESS.country,
  },
  areaServed: {
    '@type': 'Country',
    name: 'Crna Gora',
  },
  sameAs: SOCIAL_LINKS,
};
