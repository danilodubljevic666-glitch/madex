import { Link } from 'react-router-dom';
import {
  ShoppingCart, Phone, Mail, MapPin, FileCheck, Palette, Eye, Truck, CheckCircle, FileWarning, ListChecks, HelpCircle, Route, ArrowDown,
} from 'lucide-react';
import SEOTags from '../components/SEOTags';
import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';
import SectionHeading from '../components/SectionHeading';
import ProcessSteps from '../components/ProcessSteps';
import FaqList from '../components/FaqList';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import { GridLines, Halftone, RegistrationMark } from '../components/Decor';
import { useLanguage } from '../i18n/useLanguage';
import { PAGE_PATHS } from '../i18n/routes';
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

const STEP_ICONS = [FileCheck, Palette, Eye, Truck];
const STEP_IDS = ['korak-1', 'korak-2', 'korak-3', 'korak-4'];

const CONTENT = {
  sr: {
    meta: {
      title: 'Poručite štampu online | Štamparija MADEX',
      description:
        'Poručite štampu u Nikšiću u četiri koraka — pošaljite upit, dobijte ponudu, odobrite otisak i preuzmite gotov posao za 3 do 5 radnih dana. Dostava širom Crne Gore.',
      keywords:
        'poručite štampu Nikšić, štampa online Crna Gora, naručivanje štampe Nikšić, priprema fajla za štampu, štamparija Nikšić narudžba, brza štampa Nikšić',
    },
    crumb: 'Poručite',
    title: 'Poručite štampu',
    titleAccent: 'brzo, bez dolaska i bez obaveze',
    lead:
      'Narudžba kod nas ne traži formulare ni registraciju. Pozovite, pišite ili popunite formu — javljamo se sa cijenom i rokom, najčešće isti dan. Procjena je besplatna i ni na šta vas ne obavezuje.',
    call: 'Pozovite',
    fillForm: 'Popunite formu',
    stepsBadge: 'KORACI',
    stepsTop: 'Kako poručiti',
    stepsAccent: 'u četiri koraka',
    stepsLead: 'Isti postupak važi za sve — od jednog kompleta vizit kartica do brendiranja voznog parka.',
    steps: [
      {
        title: 'Pošaljite upit',
        text: 'Pozovite nas ili popunite formu na ovoj stranici. Napišite šta štampate, koliki je tiraž, koje su dimenzije i do kada vam treba.',
      },
      {
        title: 'Priprema i ponuda',
        text: 'Provjeravamo fajl i šaljemo cijenu i rok. Ako nemate pripremljen dizajn, naš grafičar ga izrađuje po vašoj ideji.',
      },
      {
        title: 'Odobrenje otiska',
        text: 'Šaljemo vam prikaz kako će posao izgledati. Štampa kreće tek kada potvrdite boje, tekst i dimenzije — greške se hvataju ovdje, ne poslije.',
      },
      {
        title: 'Izrada i preuzimanje',
        text: 'Većina narudžbi je gotova za 3 do 5 radnih dana. Preuzimate je u štampariji u Nikšiću ili je šaljemo dostavom širom Crne Gore.',
      },
    ],
    neededTitle: 'Šta da nam napišete u upitu',
    neededText: 'Što više podataka pošaljete, to brže dobijate tačnu cijenu. Ako nešto ne znate, samo napišite — predložićemo rješenje.',
    neededInfo: [
      'Šta se štampa (npr. vizit kartice, baner, majice, kutije)',
      'Tiraž — koliko komada vam treba',
      'Dimenzije ili format gotovog proizvoda',
      'Materijal i završna obrada, ako imate preferencu',
      'Rok — do kada posao mora biti gotov',
      'Da li vam treba dostava i u koji grad',
    ],
    filesTitle: 'Kako pripremiti fajl za štampu',
    filesText: 'Dobro pripremljen fajl znači kraći rok i otisak koji izgleda kao na ekranu.',
    fileTips: [
      'Formati koje primamo: PDF, AI, EPS, CDR, PSD, TIFF i JPG u visokoj rezoluciji.',
      'Rezolucija najmanje 300 dpi u stvarnoj veličini otiska — slike skinute sa sajta ili društvenih mreža najčešće nisu dovoljno kvalitetne.',
      'Boje pripremite u CMYK režimu; RGB fajlovi se u štampi mogu odštampati tamnije nego što izgledaju na ekranu.',
      'Ostavite 3 mm napuštanja (bleed) sa svake strane i ne stavljajte važan tekst bliže od 5 mm ivici.',
      'Tekst pretvorite u krive (curves/outlines) ili nam pošaljite fontove koje ste koristili.',
      'Ako fajl nemate — nije problem. Pošaljite skicu, logo i tekst, pa ćemo pripremu odraditi mi.',
    ],
    channelsTop: 'Tri načina',
    channelsAccent: 'da poručite',
    byPhone: 'Telefonom',
    byPhoneText: 'Najbrži način — objasnite posao i odmah dobijate okvirnu cijenu.',
    byEmail: 'Mejlom',
    byEmailText: 'Pošaljite fajl i opis posla, pa vam vraćamo ponudu sa rokom.',
    inPerson: 'Dolaskom u štampariju',
    inPersonText: 'Svratite da vidite materijale i uzorke uživo prije nego što se odlučite.',
    notSure: 'Ne znate koja usluga vam treba?',
    viewAll: 'Pogledajte pregled svih usluga',
    countText: (n) => `— ima ih ${n}, od vizit kartica do brendiranja objekata.`,
    formBadge: 'NARUDŽBA I UPIT',
    formStart: 'Pošaljite',
    formAccent: 'narudžbu',
    formIntro:
      'Popunite formu sa detaljima posla — vrsta štampe, tiraž, dimenzije i rok. Javljamo se sa cijenom u roku od 24 sata radnim danima.',
    faqBadge: 'PITANJA',
    faqTop: 'Pitanja o narudžbi,',
    faqAccent: 'plaćanju i rokovima',
    faq: [
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
    ],
    howToName: 'Kako poručiti štampu u Štampariji MADEX Nikšić',
    howToDescription: 'Četiri koraka od upita do preuzimanja gotovog otiska u Štampariji MADEX u Nikšiću.',
    pageName: 'Poručite štampu — Štamparija MADEX Nikšić',
    actionName: 'Pošaljite narudžbu',
  },
  en: {
    meta: {
      title: 'Order Printing Online | MADEX Print Shop',
      description:
        'Order printing in Nikšić in four steps — send an inquiry, get a quote, approve the proof and pick up the finished job in 3 to 5 working days. Delivery across Montenegro.',
      keywords:
        'order printing Nikšić, online printing Montenegro, print order Nikšić, print-ready file preparation, print shop Nikšić order, fast printing Montenegro',
    },
    crumb: 'Order',
    title: 'Order printing',
    titleAccent: 'fast, remote and with no obligation',
    lead:
      'Ordering from us takes no forms and no registration. Call, write or fill in the form — we get back to you with a price and deadline, usually the same day. The estimate is free and does not commit you to anything.',
    call: 'Call',
    fillForm: 'Fill in the form',
    stepsBadge: 'STEPS',
    stepsTop: 'How to order',
    stepsAccent: 'in four steps',
    stepsLead: 'The same process applies to everything — from one set of business cards to branding a whole fleet.',
    steps: [
      {
        title: 'Send an inquiry',
        text: 'Call us or fill in the form on this page. Tell us what you are printing, the quantity, the dimensions and when you need it.',
      },
      {
        title: 'Preparation and quote',
        text: 'We check your file and send you a price and deadline. If you don’t have a design, our designer creates one based on your idea.',
      },
      {
        title: 'Proof approval',
        text: 'We send you a preview of how the job will look. Printing starts only once you confirm the colours, text and dimensions — mistakes are caught here, not afterwards.',
      },
      {
        title: 'Production and pick-up',
        text: 'Most orders are ready in 3 to 5 working days. Pick yours up at our print shop in Nikšić or we ship it anywhere in Montenegro.',
      },
    ],
    neededTitle: 'What to include in your inquiry',
    neededText: 'The more details you send, the faster you get an exact price. If you are not sure about something, just say so — we will suggest a solution.',
    neededInfo: [
      'What is being printed (e.g. business cards, a banner, T-shirts, boxes)',
      'Quantity — how many pieces you need',
      'Dimensions or format of the finished product',
      'Material and finish, if you have a preference',
      'Deadline — when the job must be finished',
      'Whether you need delivery, and to which town',
    ],
    filesTitle: 'How to prepare your file for print',
    filesText: 'A well-prepared file means a shorter turnaround and a print that looks like it does on screen.',
    fileTips: [
      'Formats we accept: PDF, AI, EPS, CDR, PSD, TIFF and high-resolution JPG.',
      'At least 300 dpi at actual print size — images taken from websites or social media are usually not good enough.',
      'Prepare colours in CMYK; RGB files can print darker than they look on screen.',
      'Leave 3 mm bleed on every side and keep important text at least 5 mm from the edge.',
      'Convert text to curves/outlines or send us the fonts you used.',
      'No file? No problem. Send a sketch, logo and text and we will do the prepress for you.',
    ],
    channelsTop: 'Three ways',
    channelsAccent: 'to order',
    byPhone: 'By phone',
    byPhoneText: 'The fastest way — explain the job and get a ballpark price right away.',
    byEmail: 'By email',
    byEmailText: 'Send your file and a job description and we will reply with a quote and deadline.',
    inPerson: 'At the print shop',
    inPersonText: 'Drop by to see materials and samples in person before you decide.',
    notSure: 'Not sure which service you need?',
    viewAll: 'See the overview of all our services',
    countText: (n) => `— there are ${n}, from business cards to storefront branding.`,
    formBadge: 'ORDER & INQUIRY',
    formStart: 'Send us your',
    formAccent: 'order',
    formIntro:
      'Fill in the form with the job details — type of print, quantity, dimensions and deadline. We get back to you with a price within 24 hours on working days.',
    faqBadge: 'QUESTIONS',
    faqTop: 'Questions about ordering,',
    faqAccent: 'payment and turnaround',
    faq: [
      {
        q: 'How do I pay for my order?',
        a: 'You can pay in cash on pick-up, or companies can pay by bank transfer against a pro forma invoice. For larger runs we agree on an advance payment, with the rest due on delivery.',
      },
      {
        q: 'Can I order without coming to the print shop?',
        a: 'Yes. The whole process — agreement, sending files and approving the proof — can be done by phone and email, and we ship the finished job to your address in Montenegro.',
      },
      {
        q: 'How long does production take?',
        a: 'The standard turnaround is 3 to 5 working days from when you approve the proof. For urgent jobs, call us — we can often speed things up.',
      },
      {
        q: 'Is there a minimum order?',
        a: 'No. We print single pieces as well as large runs — naturally, the price per piece is better for larger quantities.',
      },
      {
        q: 'Do you deliver outside Nikšić?',
        a: 'Yes, we ship to every town in Montenegro. Delivery in Podgorica is free for orders over €50.',
      },
    ],
    howToName: 'How to order printing from MADEX print shop in Nikšić',
    howToDescription: 'Four steps from inquiry to picking up your finished print at MADEX print shop in Nikšić, Montenegro.',
    pageName: 'Order printing — MADEX Print Shop Nikšić',
    actionName: 'Send an order',
  },
};

const buildSchema = (lang) => {
  const c = CONTENT[lang];
  const pageUrl = `${SITE_URL}${PAGE_PATHS.order[lang]}`;

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: c.pageName,
      url: pageUrl,
      inLanguage: lang === 'en' ? 'en' : 'sr-ME',
      about: LOCAL_BUSINESS_PROVIDER,
      potentialAction: { '@type': 'OrderAction', target: pageUrl, name: c.actionName },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: c.howToName,
      description: c.howToDescription,
      url: pageUrl,
      totalTime: 'P5D',
      step: c.steps.map((step, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: step.title,
        text: step.text,
        url: `${pageUrl}#${STEP_IDS[index]}`,
      })),
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

const OrderPage = () => {
  const { lang, to } = useLanguage();
  const c = CONTENT[lang];
  const steps = c.steps.map((step, idx) => ({ ...step, icon: STEP_ICONS[idx] }));

  return (
    <>
      <SEOTags
        title={c.meta.title}
        description={c.meta.description}
        keywords={c.meta.keywords}
        pageName={c.crumb}
        extraSchema={SCHEMA[lang]}
      />

      <PageHero icon={ShoppingCart} crumb={c.crumb} title={c.title} titleAccent={c.titleAccent} lead={c.lead}>
        <Button href={PHONE_PRIMARY_TEL} size="lg">
          <Phone className="h-5 w-5" aria-hidden="true" />
          {c.call} {PHONE_PRIMARY_DISPLAY}
        </Button>
        <Button href="#narudzba" variant="outline" size="lg">
          {c.fillForm}
          <ArrowDown className="h-5 w-5 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
        </Button>
      </PageHero>

      {/* Koraci */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <Halftone className="-left-16 top-16 h-80 w-80 text-ink-magenta/15" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading icon={Route} badge={c.stepsBadge} titleTop={c.stepsTop} titleAccent={c.stepsAccent} lead={c.stepsLead} />
          <ProcessSteps steps={steps} ids={STEP_IDS} />
        </div>
      </section>

      {/* Šta nam treba + priprema fajlova */}
      <section className="relative overflow-hidden bg-gray-50 py-20 md:py-28">
        <GridLines className="text-gray-900/[0.045]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:gap-10 lg:grid-cols-2 lg:px-8">
          <Reveal variant="left">
            <div className="h-full rounded-3xl bg-white p-7 shadow-xl shadow-gray-900/5 ring-1 ring-gray-100 md:p-10">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-600/30">
                <ListChecks className="h-7 w-7" aria-hidden="true" />
              </div>
              <h2 className="mb-3 text-2xl font-extrabold text-gray-900 md:text-3xl">{c.neededTitle}</h2>
              <p className="mb-7 text-base leading-relaxed text-gray-600 md:text-lg">{c.neededText}</p>
              <ul className="space-y-3.5">
                {c.neededInfo.map((info) => (
                  <li key={info} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" aria-hidden="true" />
                    <span className="text-base text-gray-700">{info}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal variant="right">
            <div className="relative h-full overflow-hidden rounded-3xl bg-gray-950 p-7 text-white shadow-2xl shadow-gray-900/20 md:p-10">
              <Halftone className="-right-10 -top-10 h-56 w-56 text-ink-yellow/25" />
              <RegistrationMark size={150} strokeWidth={0.6} className="absolute -bottom-12 -right-12 text-white/10 animate-spin-slow" />
              <div className="relative">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                  <FileWarning className="h-7 w-7 text-ink-yellow" aria-hidden="true" />
                </div>
                <h2 className="mb-3 text-2xl font-extrabold md:text-3xl">{c.filesTitle}</h2>
                <p className="mb-7 text-base leading-relaxed text-gray-400 md:text-lg">{c.filesText}</p>
                <ol className="space-y-4">
                  {c.fileTips.map((tip, idx) => (
                    <li key={tip} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/10 font-display text-xs font-bold text-ink-cyan ring-1 ring-white/15">
                        {idx + 1}
                      </span>
                      <span className="text-base text-gray-300">{tip}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Kanali za narudžbu */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading icon={ShoppingCart} titleTop={c.channelsTop} titleAccent={c.channelsAccent} />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-7">
            <Reveal>
              <div className="relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 p-8 text-white shadow-2xl shadow-blue-900/20">
                <Halftone className="-right-8 -top-8 h-40 w-40 text-white/20" />
                <div className="relative">
                  <Phone className="mb-5 h-9 w-9" aria-hidden="true" />
                  <h3 className="mb-3 text-xl font-bold">{c.byPhone}</h3>
                  <p className="mb-6 text-base text-blue-100">{c.byPhoneText}</p>
                  <a href={PHONE_PRIMARY_TEL} className="mb-1 block text-lg font-semibold hover:underline">{PHONE_PRIMARY_DISPLAY}</a>
                  <a href={PHONE_SECONDARY_TEL} className="block text-lg font-semibold hover:underline">{PHONE_SECONDARY_DISPLAY}</a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="card-glow h-full rounded-3xl bg-gray-50 p-8 ring-1 ring-gray-100 transition-transform duration-300 hover:-translate-y-1">
                <Mail className="mb-5 h-9 w-9 text-blue-600" aria-hidden="true" />
                <h3 className="mb-3 text-xl font-bold text-gray-900">{c.byEmail}</h3>
                <p className="mb-6 text-base text-gray-600">{c.byEmailText}</p>
                <a href={`mailto:${EMAIL}`} className="break-all text-lg font-semibold text-blue-600 hover:text-blue-700">{EMAIL}</a>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="card-glow h-full rounded-3xl bg-gray-50 p-8 ring-1 ring-gray-100 transition-transform duration-300 hover:-translate-y-1">
                <MapPin className="mb-5 h-9 w-9 text-ink-magenta" aria-hidden="true" />
                <h3 className="mb-3 text-xl font-bold text-gray-900">{c.inPerson}</h3>
                <p className="mb-6 text-base text-gray-600">{c.inPersonText}</p>
                <p className="text-lg font-semibold text-gray-900">{ADDRESS.street}, {ADDRESS.city}</p>
                <p className="mt-1 text-sm text-gray-500">{WORKING_HOURS[lang]}</p>
              </div>
            </Reveal>
          </div>

          <Reveal as="p" className="mt-10 text-center text-base text-gray-600 md:text-lg">
            {c.notSure}{' '}
            <Link to={to('services')} className="font-semibold text-blue-600 underline-offset-4 hover:underline">
              {c.viewAll}
            </Link>{' '}
            {c.countText(services.length)}
          </Reveal>
        </div>
      </section>

      {/* Forma */}
      <div id="narudzba" className="scroll-mt-20">
        <ContactForm badge={c.formBadge} headingStart={c.formStart} headingAccent={c.formAccent} intro={c.formIntro} />
      </div>

      {/* FAQ */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading icon={HelpCircle} badge={c.faqBadge} titleTop={c.faqTop} titleAccent={c.faqAccent} />
          <FaqList items={c.faq} />
        </div>
      </section>
    </>
  );
};

export default OrderPage;
