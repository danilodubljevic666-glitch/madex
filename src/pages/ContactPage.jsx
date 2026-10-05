import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Car, Navigation, HelpCircle, ExternalLink } from 'lucide-react';
import SEOTags from '../components/SEOTags';
import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';
import SectionHeading from '../components/SectionHeading';
import FaqList from '../components/FaqList';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import { CropMarks, GridLines } from '../components/Decor';
import { useLanguage } from '../i18n/useLanguage';
import { PAGE_PATHS } from '../i18n/routes';
import {
  SITE_URL,
  PHONE_PRIMARY_DISPLAY,
  PHONE_PRIMARY_TEL,
  PHONE_SECONDARY_DISPLAY,
  PHONE_SECONDARY_TEL,
  EMAIL,
  ADDRESS,
  WORKING_HOURS,
  MAP_EMBED_SRC,
  MAP_LINK,
  COUNTRY_NAME,
  LOCAL_BUSINESS_PROVIDER,
} from '../data/site';

const CONTENT = {
  sr: {
    meta: {
      title: 'Kontakt — adresa i radno vrijeme | Štamparija MADEX',
      description:
        'Kontaktirajte Štampariju MADEX u Nikšiću — Bulevar 13. jul 234. Telefon +382 68 048 655, email, mapa i radno vrijeme svaki dan od 08 do 21h. Besplatna procjena za svaki posao.',
      keywords:
        'kontakt štamparija Nikšić, štamparija MADEX kontakt, adresa štamparije Nikšić, telefon štamparija Nikšić, radno vrijeme štamparija Nikšić, štamparija blizu mene',
    },
    crumb: 'Kontakt',
    title: 'Kontakt',
    titleAccent: 'Štamparija MADEX u Nikšiću',
    lead:
      'Za ponudu, procjenu ili samo savjet oko pripreme fajla — javite se. Telefon je najbrži put do odgovora, a ako imate gotov materijal, pošaljite ga mejlom ili preko forme i vratićemo se sa cijenom i rokom.',
    call: 'Pozovite',
    sendEmail: 'Pošaljite email',
    detailsTitle: 'Kontakt podaci',
    phone: 'Telefon',
    email: 'Email',
    address: 'Adresa',
    hours: 'Radno vrijeme',
    hoursNote: 'Otvoreni smo i vikendom, uključujući nedjelju.',
    locationTitle: 'Lokacija u Nikšiću',
    mapTitle: 'Lokacija Štamparije MADEX u Nikšiću na Google mapi',
    directions: 'Otvori u Google mapama',
    directionsText:
      'Nalazimo se na Bulevaru 13. jul, na potezu prema izlazu iz grada — lako se stiže i iz centra Nikšića i sa magistrale iz pravca Podgorice.',
    parkingText:
      'Parking je ispred objekta, pa možete doći i dostavnim vozilom kada preuzimate veći tiraž ili dovozite vozilo na brendiranje.',
    formBadge: 'UPIT I PONUDA',
    formStart: 'Pošaljite nam',
    formAccent: 'upit',
    formIntro:
      'Opišite šta vam treba — vrsta posla, tiraž, dimenzije i rok. Odgovaramo u roku od 24 sata radnim danima, a procjena je besplatna i ne obavezuje vas.',
    faqBadge: 'PITANJA',
    faqTop: 'Često postavljena',
    faqAccent: 'pitanja',
    faq: [
      {
        q: 'Gdje se nalazi Štamparija MADEX?',
        a: `Nalazimo se na adresi ${ADDRESS.street}, ${ADDRESS.city}, uz glavnu saobraćajnicu, sa parkingom ispred objekta.`,
      },
      {
        q: 'Kada ste otvoreni?',
        a: 'Radimo svaki dan od 08:00 do 21:00, uključujući vikend. Za hitne poslove javite se telefonom i dogovorićemo termin.',
      },
      {
        q: 'Kako najbrže da dobijem ponudu?',
        a: 'Najbrže je telefonom na +382 68 048 655. Ako imate pripremljen fajl ili detaljan opis posla, pošaljite ga mejlom ili preko forme na ovoj stranici i javljamo se sa cijenom.',
      },
    ],
    moreStart: 'Zanima vas konkretna usluga?',
    moreServices: 'Pogledajte sve usluge štampe i brendiranja',
    moreOr: 'ili odmah',
    moreOrder: 'pošaljite narudžbu',
    schemaName: 'Kontakt — Štamparija MADEX Nikšić',
    schemaDescription:
      'Kontakt podaci Štamparije MADEX u Nikšiću — telefon, email, adresa, radno vrijeme i lokacija na mapi.',
  },
  en: {
    meta: {
      title: 'Contact — Address & Opening Hours | MADEX Print Shop',
      description:
        'Contact MADEX print shop in Nikšić, Montenegro — Bulevar 13. jul 234. Phone +382 68 048 655, email, map and opening hours every day from 8 am to 9 pm. Free estimate for every job.',
      keywords:
        'contact print shop Nikšić, MADEX print shop contact, print shop address Nikšić, print shop phone Montenegro, print shop opening hours Nikšić, print shop near me Nikšić',
    },
    crumb: 'Contact',
    title: 'Contact',
    titleAccent: 'MADEX print shop in Nikšić',
    lead:
      'For a quote, an estimate or just advice on preparing your file — get in touch. Phone is the fastest way to an answer, and if you have finished material, send it by email or through the form and we will come back with a price and a deadline.',
    call: 'Call',
    sendEmail: 'Send an email',
    detailsTitle: 'Contact details',
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
    hours: 'Opening hours',
    hoursNote: 'We are open at weekends too, including Sundays.',
    locationTitle: 'Our location in Nikšić',
    mapTitle: 'MADEX print shop location in Nikšić on Google Maps',
    directions: 'Open in Google Maps',
    directionsText:
      'We are on Bulevar 13. jul, on the way out of town — easy to reach from the centre of Nikšić and from the main road coming from Podgorica.',
    parkingText:
      'There is parking right in front, so you can come with a delivery van to pick up a large order or bring a vehicle in for wrapping.',
    formBadge: 'INQUIRY & QUOTE',
    formStart: 'Send us an',
    formAccent: 'inquiry',
    formIntro:
      'Tell us what you need — type of job, quantity, dimensions and deadline. We reply within 24 hours on working days, and the estimate is free and comes with no obligation.',
    faqBadge: 'QUESTIONS',
    faqTop: 'Frequently asked',
    faqAccent: 'questions',
    faq: [
      {
        q: 'Where is MADEX print shop located?',
        a: `We are at ${ADDRESS.street}, ${ADDRESS.city}, Montenegro, on the main road, with parking in front of the building.`,
      },
      {
        q: 'When are you open?',
        a: 'We are open every day from 08:00 to 21:00, including weekends. For urgent jobs, call us and we will arrange a time.',
      },
      {
        q: 'What is the fastest way to get a quote?',
        a: 'The fastest way is to call +382 68 048 655. If you have a prepared file or a detailed job description, send it by email or through the form on this page and we will get back to you with a price.',
      },
    ],
    moreStart: 'Interested in a specific service?',
    moreServices: 'See all our printing and branding services',
    moreOr: 'or',
    moreOrder: 'send your order right away',
    schemaName: 'Contact — MADEX Print Shop Nikšić',
    schemaDescription:
      'Contact details for MADEX print shop in Nikšić, Montenegro — phone, email, address, opening hours and location on the map.',
  },
};

const buildSchema = (lang) => {
  const c = CONTENT[lang];
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: c.schemaName,
      url: `${SITE_URL}${PAGE_PATHS.contact[lang]}`,
      inLanguage: lang === 'en' ? 'en' : 'sr-ME',
      description: c.schemaDescription,
      mainEntity: {
        ...LOCAL_BUSINESS_PROVIDER,
        email: EMAIL,
        openingHours: 'Mo-Su 08:00-21:00',
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: PHONE_PRIMARY_DISPLAY,
            contactType: 'customer service',
            areaServed: 'ME',
            availableLanguage: ['sr', 'en'],
          },
          {
            '@type': 'ContactPoint',
            telephone: PHONE_SECONDARY_DISPLAY,
            contactType: 'sales',
            areaServed: 'ME',
            availableLanguage: ['sr', 'en'],
          },
        ],
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: c.faq.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ];
};

const SCHEMA = { sr: buildSchema('sr'), en: buildSchema('en') };

const DetailRow = ({ icon: Icon, title, children }) => (
  <div className="group flex items-start gap-4 md:gap-5">
    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white md:h-14 md:w-14">
      <Icon className="h-6 w-6" aria-hidden="true" />
    </div>
    <div className="min-w-0">
      <h3 className="mb-1 text-lg font-semibold text-gray-900 md:text-xl">{title}</h3>
      <div className="text-base text-gray-600 md:text-lg">{children}</div>
    </div>
  </div>
);

const ContactPage = () => {
  const { lang, to } = useLanguage();
  const c = CONTENT[lang];
  const linkClass = 'block hover:text-blue-600 transition-colors duration-300';

  return (
    <>
      <SEOTags
        title={c.meta.title}
        description={c.meta.description}
        keywords={c.meta.keywords}
        pageName={c.crumb}
        extraSchema={SCHEMA[lang]}
      />

      <PageHero icon={Phone} crumb={c.crumb} title={c.title} titleAccent={c.titleAccent} lead={c.lead}>
        <Button href={PHONE_PRIMARY_TEL} size="lg">
          <Phone className="h-5 w-5" aria-hidden="true" />
          {c.call} {PHONE_PRIMARY_DISPLAY}
        </Button>
        <Button href={`mailto:${EMAIL}`} variant="outline" size="lg">
          <Mail className="h-5 w-5" aria-hidden="true" />
          {c.sendEmail}
        </Button>
      </PageHero>

      {/* Kontakt podaci + mapa */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <GridLines className="text-gray-900/[0.035]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:gap-14 lg:px-8">
          <Reveal variant="left" className="lg:col-span-2">
            <h2 className="mb-8 text-2xl font-extrabold text-gray-900 md:text-3xl">{c.detailsTitle}</h2>
            <div className="space-y-7">
              <DetailRow icon={Phone} title={c.phone}>
                <a href={PHONE_PRIMARY_TEL} className={linkClass}>{PHONE_PRIMARY_DISPLAY}</a>
                <a href={PHONE_SECONDARY_TEL} className={linkClass}>{PHONE_SECONDARY_DISPLAY}</a>
              </DetailRow>
              <DetailRow icon={Mail} title={c.email}>
                <a href={`mailto:${EMAIL}`} className={`${linkClass} break-all`}>{EMAIL}</a>
              </DetailRow>
              <DetailRow icon={MapPin} title={c.address}>
                <address className="not-italic">
                  {ADDRESS.street}
                  <br />
                  {ADDRESS.postalCode} {ADDRESS.city}, {COUNTRY_NAME[lang]}
                </address>
              </DetailRow>
              <DetailRow icon={Clock} title={c.hours}>
                <p>{WORKING_HOURS[lang]}</p>
                <p className="mt-1 text-sm text-gray-500 md:text-base">{c.hoursNote}</p>
              </DetailRow>
            </div>
          </Reveal>

          <Reveal variant="right" className="lg:col-span-3">
            <h2 className="mb-8 text-2xl font-extrabold text-gray-900 md:text-3xl">{c.locationTitle}</h2>
            <div className="relative">
              <div className="relative h-80 overflow-hidden rounded-3xl shadow-xl shadow-gray-900/10 ring-1 ring-gray-200 sm:h-[26rem]">
                <iframe
                  src={MAP_EMBED_SRC}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={c.mapTitle}
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <CropMarks className="hidden text-gray-400 md:block" />
            </div>

            <div className="mt-8 space-y-4">
              <p className="flex items-start gap-3 text-base leading-relaxed text-gray-600">
                <Navigation className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" aria-hidden="true" />
                {c.directionsText}
              </p>
              <p className="flex items-start gap-3 text-base leading-relaxed text-gray-600">
                <Car className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" aria-hidden="true" />
                {c.parkingText}
              </p>
              <a
                href={MAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700"
              >
                {c.directions}
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactForm badge={c.formBadge} headingStart={c.formStart} headingAccent={c.formAccent} intro={c.formIntro} />

      {/* FAQ */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading icon={HelpCircle} badge={c.faqBadge} titleTop={c.faqTop} titleAccent={c.faqAccent} />
          <FaqList items={c.faq} />

          <Reveal as="p" className="mt-10 text-center text-base text-gray-600 md:text-lg">
            {c.moreStart}{' '}
            <Link to={to('services')} className="font-semibold text-blue-600 underline-offset-4 hover:underline">
              {c.moreServices}
            </Link>{' '}
            {c.moreOr}{' '}
            <Link to={to('order')} className="font-semibold text-blue-600 underline-offset-4 hover:underline">
              {c.moreOrder}
            </Link>
            .
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
