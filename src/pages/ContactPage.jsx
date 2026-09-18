import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Car, Navigation } from 'lucide-react';
import SEOTags from '../components/SEOTags';
import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';
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
  LOCAL_BUSINESS_PROVIDER,
} from '../data/site';

const PAGE_PATH = '/kontakt';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const FAQ = [
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
];

// Statične schema definicije — van komponente da se ne prave ponovo pri svakom renderu.
const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Kontakt — Štamparija MADEX Nikšić',
  url: PAGE_URL,
  inLanguage: 'sr-ME',
  description:
    'Kontakt podaci Štamparije MADEX u Nikšiću — telefon, email, adresa, radno vrijeme i lokacija na mapi.',
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
        availableLanguage: ['sr', 'me'],
      },
      {
        '@type': 'ContactPoint',
        telephone: PHONE_SECONDARY_DISPLAY,
        contactType: 'sales',
        areaServed: 'ME',
        availableLanguage: ['sr', 'me'],
      },
    ],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

const EXTRA_SCHEMA = [contactSchema, faqSchema];

const ContactPage = () => (
  <>
    <SEOTags
      title="Kontakt — Štamparija MADEX Nikšić | telefon, adresa, radno vrijeme"
      description="Kontaktirajte Štampariju MADEX u Nikšiću — Bulevar 13. jul 234. Telefon +382 68 048 655, email, mapa i radno vrijeme svaki dan od 08 do 21h. Besplatna procjena za svaki posao."
      keywords="kontakt štamparija Nikšić, štamparija MADEX kontakt, adresa štamparije Nikšić, telefon štamparija Nikšić, radno vrijeme štamparija Nikšić, štamparija blizu mene"
      currentPage={PAGE_PATH}
      pageName="Kontakt"
      extraSchema={EXTRA_SCHEMA}
    />

    <PageHero
      icon={Phone}
      badge="KONTAKT"
      crumb="Kontakt"
      wide
      title="Kontaktirajte Štampariju MADEX u Nikšiću"
      lead="Za ponudu, procjenu ili samo savjet oko pripreme fajla — javite se. Telefon je najbrži put do odgovora, a ako imate gotov materijal, pošaljite ga mejlom ili preko forme i vratićemo se sa cijenom i rokom."
    >
      <a
        href={PHONE_PRIMARY_TEL}
        className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        <Phone className="w-5 h-5" />
        Pozovite {PHONE_PRIMARY_DISPLAY}
      </a>
      <a
        href={`mailto:${EMAIL}`}
        className="inline-flex items-center justify-center gap-2 bg-transparent text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-semibold border-2 border-white/40 hover:bg-white/10 transition-all duration-300"
      >
        <Mail className="w-5 h-5" />
        Pošaljite email
      </a>
    </PageHero>

    {/* Kontakt podaci + mapa */}
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
              Kontakt podaci
            </h2>

            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 rounded-xl flex items-center justify-center mr-4 md:mr-6 flex-shrink-0">
                  <Phone className="w-6 h-6 md:w-7 md:h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Telefon</h3>
                  <a href={PHONE_PRIMARY_TEL} className="text-gray-600 text-base md:text-lg hover:text-blue-600 transition-colors duration-300 block mb-1">
                    {PHONE_PRIMARY_DISPLAY}
                  </a>
                  <a href={PHONE_SECONDARY_TEL} className="text-gray-600 text-base md:text-lg hover:text-blue-600 transition-colors duration-300 block">
                    {PHONE_SECONDARY_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 rounded-xl flex items-center justify-center mr-4 md:mr-6 flex-shrink-0">
                  <Mail className="w-6 h-6 md:w-7 md:h-7 text-blue-600" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Email</h3>
                  <a href={`mailto:${EMAIL}`} className="text-gray-600 text-base md:text-lg hover:text-blue-600 transition-colors duration-300 block break-all">
                    {EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 rounded-xl flex items-center justify-center mr-4 md:mr-6 flex-shrink-0">
                  <MapPin className="w-6 h-6 md:w-7 md:h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Adresa</h3>
                  <address className="text-gray-600 text-base md:text-lg not-italic">
                    {ADDRESS.street}<br />
                    {ADDRESS.postalCode} {ADDRESS.city}, Crna Gora
                  </address>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 rounded-xl flex items-center justify-center mr-4 md:mr-6 flex-shrink-0">
                  <Clock className="w-6 h-6 md:w-7 md:h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Radno vrijeme</h3>
                  <p className="text-gray-600 text-base md:text-lg">{WORKING_HOURS}</p>
                  <p className="text-gray-500 text-sm md:text-base mt-1">
                    Otvoreni smo i vikendom, uključujući nedjelju.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
              Lokacija u Nikšiću
            </h2>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="h-72 sm:h-96">
                <iframe
                  src={MAP_EMBED_SRC}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokacija Štamparije MADEX u Nikšiću na Google mapi"
                  className="w-full h-full"
                />
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-start">
                <Navigation className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-600 text-base leading-relaxed">
                  Nalazimo se na Bulevaru 13. jul, na potezu prema izlazu iz grada — lako se stiže i iz
                  centra Nikšića i sa magistrale iz pravca Podgorice.
                </p>
              </div>
              <div className="flex items-start">
                <Car className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-600 text-base leading-relaxed">
                  Parking je ispred objekta, pa možete doći i dostavnim vozilom kada preuzimate veći
                  tiraž ili dovozite vozilo na brendiranje.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Forma */}
    <ContactForm
      badge="UPIT I PONUDA"
      heading={
        <>
          Pošaljite nam <span className="text-blue-600">upit</span>
        </>
      }
      intro="Opišite šta vam treba — vrsta posla, tiraž, dimenzije i rok. Odgovaramo u roku od 24 sata radnim danima, a procjena je besplatna i ne obavezuje vas."
    />

    {/* FAQ */}
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
          Često postavljena pitanja
        </h2>

        <div className="space-y-4">
          {FAQ.map((item, idx) => (
            <details key={idx} className="bg-gray-50 rounded-xl p-5 group" open={idx === 0}>
              <summary className="font-semibold text-gray-900 cursor-pointer text-base md:text-lg list-none">
                {item.q}
              </summary>
              <p className="text-gray-600 mt-3 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>

        <p className="text-gray-600 text-base md:text-lg mt-8">
          Zanima vas konkretna usluga?{' '}
          <Link to="/usluge" className="text-blue-600 font-semibold hover:text-blue-700">
            Pogledajte sve usluge štampe i brendiranja
          </Link>{' '}
          ili odmah{' '}
          <Link to="/porucite" className="text-blue-600 font-semibold hover:text-blue-700">
            pošaljite narudžbu
          </Link>
          .
        </p>
      </div>
    </section>
  </>
);

export default ContactPage;
