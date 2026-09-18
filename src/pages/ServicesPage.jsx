import { Link } from 'react-router-dom';
import {
  Shirt, Printer, Layers, Car, Building, Image, Palette, Package, Grid, CreditCard,
  Phone, ArrowRight, CheckCircle, FileSearch, PenTool, Eye, Truck,
} from 'lucide-react';
import SEOTags from '../components/SEOTags';
import PageHero from '../components/PageHero';
import { services } from '../data/services';
import {
  SITE_URL,
  PHONE_PRIMARY_DISPLAY,
  PHONE_PRIMARY_TEL,
  LOCAL_BUSINESS_PROVIDER,
} from '../data/site';

const ICONS = { Shirt, Printer, Layers, Car, Building, Image, Palette, Package, Grid, CreditCard };

const PAGE_PATH = '/usluge';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

// Kako izgleda saradnja od prvog poziva do preuzimanja
const PROCESS = [
  {
    icon: FileSearch,
    title: '1. Upit i ponuda',
    text: 'Javite nam se telefonom, mejlom ili preko forme i opišite šta vam treba — materijal, tiraž i rok. Ponudu i procjenu dajemo besplatno, najčešće isti dan.',
  },
  {
    icon: PenTool,
    title: '2. Priprema za štampu',
    text: 'Ako imate gotov fajl, provjeravamo da li je spreman za štampu. Ako nemate, naš grafički dizajner priprema rješenje po vašoj ideji.',
  },
  {
    icon: Eye,
    title: '3. Probni izgled',
    text: 'Prije nego što pustimo mašinu, šaljemo vam prikaz na odobrenje. Ništa se ne štampa dok ne potvrdite boje, tekst i dimenzije.',
  },
  {
    icon: Truck,
    title: '4. Štampa i isporuka',
    text: 'Većinu poslova završavamo za 3 do 5 radnih dana. Robu preuzimate u štampariji u Nikšiću ili je šaljemo na vašu adresu u Crnoj Gori.',
  },
];

const FAQ = [
  {
    q: 'Koje usluge štampe radite u Nikšiću?',
    a: 'U jednoj kući radimo offset i digitalnu štampu, sito štampu, vizit kartice, štampu na majicama i kartonskim kutijama, banere i PVC folije, brendiranje vozila i poslovnih objekata, kao i grafički dizajn i pripremu za štampu.',
  },
  {
    q: 'Da li radite i za klijente izvan Nikšića?',
    a: 'Da. Klijente imamo u cijeloj Crnoj Gori — Podgorica, Budva, Herceg Novi, Bar, Cetinje, Bijelo Polje i ostali gradovi. Dogovor i slanje fajlova idu mejlom, a gotov materijal šaljemo dostavom.',
  },
  {
    q: 'Koliko košta usluga štampe?',
    a: 'Cijena zavisi od tiraža, materijala i završne obrade, pa je računamo za svaki posao posebno. Pošaljite nam opis posla i dobićete konkretnu ponudu bez obaveze.',
  },
  {
    q: 'Koliko unaprijed treba naručiti?',
    a: 'Za standardne poslove dovoljno je 3 do 5 radnih dana. Za veće tiraže, brendiranje vozila ili objekata javite nam se ranije kako bismo uskladili termin montaže.',
  },
];

// Statične schema definicije — van komponente da se ne prave ponovo pri svakom renderu.
const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Usluge Štamparije MADEX Nikšić',
  description:
    'Pregled svih usluga štampe, brendiranja i grafičkog dizajna koje nudi Štamparija MADEX u Nikšiću.',
  url: PAGE_URL,
  numberOfItems: services.length,
  itemListElement: services.map((service, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: service.navLabel,
    description: service.shortDescription,
    url: `${SITE_URL}/${service.slug}`,
  })),
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

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Usluge — Štamparija MADEX Nikšić',
  url: PAGE_URL,
  inLanguage: 'sr-ME',
  about: LOCAL_BUSINESS_PROVIDER,
};

const EXTRA_SCHEMA = [collectionSchema, itemListSchema, faqSchema];

const ServicesPage = () => (
  <>
    <SEOTags
      title="Usluge štampe i brendiranja u Nikšiću | Štamparija MADEX"
      description="Sve usluge Štamparije MADEX Nikšić na jednom mjestu — offset i digitalna štampa, vizit kartice, štampa na majicama, sito štampa, brendiranje vozila i objekata, baneri, PVC folija i grafički dizajn."
      keywords="usluge štampe Nikšić, štamparija Nikšić usluge, digitalna štampa Nikšić, ofset štampa Nikšić, sito štampa Nikšić, brendiranje vozila Nikšić, brendiranje objekata Nikšić, vizit kartice Nikšić, grafički dizajn Nikšić, štampa Crna Gora"
      currentPage={PAGE_PATH}
      pageName="Usluge"
      extraSchema={EXTRA_SCHEMA}
    />

    <PageHero
      icon={Printer}
      badge="NAŠE USLUGE"
      crumb="Usluge"
      wide
      title="Usluge štampe i brendiranja u Nikšiću"
      lead="Štamparija MADEX pokriva cijeli put od ideje do gotovog otiska — pripremu i dizajn, offset i digitalnu štampu, sito štampu, izradu banera i brendiranje vozila i objekata. Sve radimo u svojoj kući, pa su rokovi kraći, a kvalitet ostaje pod našom kontrolom."
    >
      <a
        href={PHONE_PRIMARY_TEL}
        className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        <Phone className="w-5 h-5" />
        Pozovite {PHONE_PRIMARY_DISPLAY}
      </a>
      <Link
        to="/porucite"
        className="inline-flex items-center justify-center bg-transparent text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-semibold border-2 border-white/40 hover:bg-white/10 transition-all duration-300"
      >
        Poručite online
      </Link>
    </PageHero>

    {/* Sve usluge */}
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Kompletna ponuda štamparskih usluga
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Svaka usluga ima svoju stranicu sa detaljima — materijalima, rokovima, primjerima radova i
            odgovorima na najčešća pitanja. Kliknite na uslugu koja vas zanima ili nas pozovite pa ćemo
            zajedno odabrati tehniku koja najbolje odgovara vašem poslu i budžetu.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => {
            const Icon = ICONS[service.icon] || Printer;
            return (
              <article
                key={service.slug}
                className="group bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 flex flex-col"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-100 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  <Link to={`/${service.slug}`}>{service.navLabel}</Link>
                </h3>

                <p className="text-gray-600 text-base mb-5 flex-grow">
                  {service.shortDescription}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/${service.slug}`}
                  className="mt-auto inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 group/link"
                >
                  Saznajte više o usluzi
                  <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>

    {/* Kako izgleda saradnja */}
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Kako izgleda saradnja sa nama
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Ista četiri koraka važe za sve usluge — od jednog kompleta vizit kartica do brendiranja
            cijelog voznog parka.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {PROCESS.map((step) => (
            <div key={step.title} className="bg-white rounded-2xl shadow-lg p-6 md:p-8 h-full">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ i CTA */}
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
          Najčešća pitanja o našim uslugama
        </h2>

        <div className="space-y-4">
          {FAQ.map((item, idx) => (
            <details key={idx} className="bg-gray-50 rounded-xl p-5 group" open={idx === 0}>
              <summary className="font-semibold text-gray-900 cursor-pointer text-base md:text-lg list-none flex items-center justify-between">
                {item.q}
                <ArrowRight className="w-5 h-5 text-blue-600 transition-transform group-open:rotate-90 flex-shrink-0 ml-3" />
              </summary>
              <p className="text-gray-600 mt-3 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-12 md:mt-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 md:p-10 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Niste sigurni koja tehnika vam treba?</h2>
          <p className="text-blue-100 mb-6 text-base md:text-lg max-w-2xl">
            Opišite nam posao — predložićemo tehniku, materijal i tiraž koji daju najbolji odnos cijene i
            kvaliteta. Procjena je besplatna i ne obavezuje vas ni na šta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={PHONE_PRIMARY_TEL}
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
            >
              <Phone className="w-5 h-5" />
              {PHONE_PRIMARY_DISPLAY}
            </a>
            <Link
              to="/kontakt"
              className="inline-flex items-center justify-center bg-blue-800/40 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800/60 transition-colors duration-300 border border-white/20"
            >
              Pošaljite upit
            </Link>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default ServicesPage;
