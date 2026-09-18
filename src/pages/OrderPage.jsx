import { Link } from 'react-router-dom';
import {
  ShoppingCart, Phone, Mail, MapPin, FileCheck, Palette, Eye, Truck, CheckCircle, AlertCircle,
} from 'lucide-react';
import SEOTags from '../components/SEOTags';
import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';
import { services } from '../data/services';
import {
  SITE_URL,
  PHONE_PRIMARY_DISPLAY,
  PHONE_PRIMARY_TEL,
  PHONE_SECONDARY_DISPLAY,
  PHONE_SECONDARY_TEL,
  EMAIL,
  ADDRESS,
  WORKING_HOURS,
  LOCAL_BUSINESS_PROVIDER,
} from '../data/site';

const PAGE_PATH = '/porucite';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const STEPS = [
  {
    icon: FileCheck,
    title: '1. Pošaljite upit',
    text: 'Pozovite nas ili popunite formu na ovoj stranici. Napišite šta štampate, koliki je tiraž, koje su dimenzije i do kada vam treba.',
  },
  {
    icon: Palette,
    title: '2. Priprema i ponuda',
    text: 'Provjeravamo fajl i šaljemo cijenu i rok. Ako nemate pripremljen dizajn, naš grafičar ga izrađuje po vašoj ideji.',
  },
  {
    icon: Eye,
    title: '3. Odobrenje otiska',
    text: 'Šaljemo vam prikaz kako će posao izgledati. Štampa kreće tek kada potvrdite boje, tekst i dimenzije — greške se hvataju ovdje, ne poslije.',
  },
  {
    icon: Truck,
    title: '4. Izrada i preuzimanje',
    text: 'Većina narudžbi je gotova za 3 do 5 radnih dana. Preuzimate je u štampariji u Nikšiću ili je šaljemo dostavom širom Crne Gore.',
  },
];

const FILE_TIPS = [
  'Formati koje primamo: PDF, AI, EPS, CDR, PSD, TIFF i JPG u visokoj rezoluciji.',
  'Rezolucija najmanje 300 dpi u stvarnoj veličini otiska — slike skinute sa sajta ili društvenih mreža najčešće nisu dovoljno kvalitetne.',
  'Boje pripremite u CMYK režimu; RGB fajlovi se u štampi mogu odštampati tamnije nego što izgledaju na ekranu.',
  'Ostavite 3 mm napuštanja (bleed) sa svake strane i ne stavljajte važan tekst bliže od 5 mm ivici.',
  'Tekst pretvorite u krive (curves/outlines) ili nam pošaljite fontove koje ste koristili.',
  'Ako fajl nemate — nije problem. Pošaljite skicu, logo i tekst, pa ćemo pripremu odraditi mi.',
];

const NEEDED_INFO = [
  'Šta se štampa (npr. vizit kartice, baner, majice, kutije)',
  'Tiraž — koliko komada vam treba',
  'Dimenzije ili format gotovog proizvoda',
  'Materijal i završna obrada, ako imate preferencu',
  'Rok — do kada posao mora biti gotov',
  'Da li vam treba dostava i u koji grad',
];

const FAQ = [
  {
    q: 'Kako se plaća narudžba?',
    a: 'Plaćanje je gotovinski prilikom preuzimanja ili virmanski po predračunu za firme. Za veće tiraže dogovaramo avans, a ostatak po isporuci.',
  },
  {
    q: 'Da li mogu poručiti bez dolaska u štampariju?',
    a: 'Možete. Cijeli dogovor, slanje fajlova i odobrenje otiska mogu ići telefonom i mejlom, a gotov posao šaljemo dostavom na vašu adresu u Crnoj Gori.',
  },
  {
    q: 'Koliko traje izrada?',
    a: 'Standardni rok je 3 do 5 radnih dana od trenutka kada odobrite otisak. Za hitne poslove javite se telefonom — često možemo ubrzati izradu.',
  },
  {
    q: 'Postoji li minimalna narudžba?',
    a: 'Ne postoji. Radimo i pojedinačne komade i velike tiraže — cijena po komadu je naravno povoljnija kada je tiraž veći.',
  },
  {
    q: 'Da li dostavljate izvan Nikšića?',
    a: 'Da, šaljemo u sve gradove Crne Gore. Za narudžbe preko 50 eura dostava u Podgorici je besplatna.',
  },
];

// Statične schema definicije — van komponente da se ne prave ponovo pri svakom renderu.
const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Kako poručiti štampu u Štampariji MADEX Nikšić',
  description:
    'Četiri koraka od upita do preuzimanja gotovog otiska u Štampariji MADEX u Nikšiću.',
  url: PAGE_URL,
  totalTime: 'P5D',
  step: STEPS.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.title.replace(/^\d+\.\s*/, ''),
    text: step.text,
    url: `${PAGE_URL}#korak-${index + 1}`,
  })),
};

const orderActionSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Poručite štampu — Štamparija MADEX Nikšić',
  url: PAGE_URL,
  inLanguage: 'sr-ME',
  about: LOCAL_BUSINESS_PROVIDER,
  potentialAction: {
    '@type': 'OrderAction',
    target: PAGE_URL,
    name: 'Pošaljite narudžbu',
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

const EXTRA_SCHEMA = [orderActionSchema, howToSchema, faqSchema];

const OrderPage = () => (
  <>
    <SEOTags
      title="Poručite štampu online — Štamparija MADEX Nikšić"
      description="Poručite štampu u Nikšiću u četiri koraka — pošaljite upit, dobijte ponudu, odobrite otisak i preuzmite gotov posao za 3 do 5 radnih dana. Dostava širom Crne Gore."
      keywords="poručite štampu Nikšić, štampa online Crna Gora, naručivanje štampe Nikšić, priprema fajla za štampu, štamparija Nikšić narudžba, brza štampa Nikšić"
      currentPage={PAGE_PATH}
      pageName="Poručite"
      extraSchema={EXTRA_SCHEMA}
    />

    <PageHero
      icon={ShoppingCart}
      badge="PORUČITE"
      crumb="Poručite"
      wide
      title="Poručite štampu — brzo, bez dolaska i bez obaveze"
      lead="Narudžba kod nas ne traži formulare ni registraciju. Pozovite, pišite ili popunite formu — javljamo se sa cijenom i rokom, najčešće isti dan. Procjena je besplatna i ni na šta vas ne obavezuje."
    >
      <a
        href={PHONE_PRIMARY_TEL}
        className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        <Phone className="w-5 h-5" />
        Pozovite {PHONE_PRIMARY_DISPLAY}
      </a>
      <a
        href="#narudzba"
        className="inline-flex items-center justify-center bg-transparent text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-semibold border-2 border-white/40 hover:bg-white/10 transition-all duration-300"
      >
        Popunite formu
      </a>
    </PageHero>

    {/* Koraci */}
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Kako poručiti u četiri koraka
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Isti postupak važi za sve — od jednog kompleta vizit kartica do brendiranja voznog parka.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {STEPS.map((step, idx) => (
            <div
              key={step.title}
              id={`korak-${idx + 1}`}
              className="bg-gray-50 rounded-2xl p-6 md:p-8 h-full scroll-mt-24"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Šta nam treba + priprema fajlova */}
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Šta da nam napišete u upitu
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
              Što više podataka pošaljete, to brže dobijate tačnu cijenu. Ako nešto ne znate, samo
              napišite — predložićemo rješenje.
            </p>
            <ul className="space-y-3">
              {NEEDED_INFO.map((info, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-base">{info}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Kako pripremiti fajl za štampu
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
              Dobro pripremljen fajl znači kraći rok i otisak koji izgleda kao na ekranu.
            </p>
            <ul className="space-y-3">
              {FILE_TIPS.map((tip, idx) => (
                <li key={idx} className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-base">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Kanali za narudžbu */}
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 md:mb-12">
          Tri načina da poručite
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-6 md:p-8">
            <Phone className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-bold mb-3">Telefonom</h3>
            <p className="text-blue-100 mb-5 text-base">
              Najbrži način — objasnite posao i odmah dobijate okvirnu cijenu.
            </p>
            <a href={PHONE_PRIMARY_TEL} className="block font-semibold hover:underline mb-1">
              {PHONE_PRIMARY_DISPLAY}
            </a>
            <a href={PHONE_SECONDARY_TEL} className="block font-semibold hover:underline">
              {PHONE_SECONDARY_DISPLAY}
            </a>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
            <Mail className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Mejlom</h3>
            <p className="text-gray-600 mb-5 text-base">
              Pošaljite fajl i opis posla, pa vam vraćamo ponudu sa rokom.
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="text-blue-600 font-semibold hover:text-blue-700 break-all"
            >
              {EMAIL}
            </a>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
            <MapPin className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Dolaskom u štampariju</h3>
            <p className="text-gray-600 mb-5 text-base">
              Svratite da vidite materijale i uzorke uživo prije nego što se odlučite.
            </p>
            <p className="text-gray-700 font-semibold">{ADDRESS.street}, {ADDRESS.city}</p>
            <p className="text-gray-500 text-sm mt-1">{WORKING_HOURS}</p>
          </div>
        </div>

        <p className="text-gray-600 text-base md:text-lg mt-8">
          Ne znate koja usluga vam treba?{' '}
          <Link to="/usluge" className="text-blue-600 font-semibold hover:text-blue-700">
            Pogledajte pregled svih usluga
          </Link>{' '}
          — ima ih {services.length}, od vizit kartica do brendiranja objekata.
        </p>
      </div>
    </section>

    {/* Forma */}
    <div id="narudzba" className="scroll-mt-20">
      <ContactForm
        badge="NARUDŽBA I UPIT"
        heading={
          <>
            Pošaljite <span className="text-blue-600">narudžbu</span>
          </>
        }
        intro="Popunite formu sa detaljima posla — vrsta štampe, tiraž, dimenzije i rok. Javljamo se sa cijenom u roku od 24 sata radnim danima."
      />
    </div>

    {/* FAQ */}
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
          Pitanja o narudžbi, plaćanju i rokovima
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
      </div>
    </section>
  </>
);

export default OrderPage;
