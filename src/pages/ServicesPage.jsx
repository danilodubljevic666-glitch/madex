import { Printer, Phone, ArrowRight, FileSearch, PenTool, Eye, Truck, HelpCircle, Route } from 'lucide-react';
import SEOTags from '../components/SEOTags';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import ServicesGrid from '../components/ServicesGrid';
import ProcessSteps from '../components/ProcessSteps';
import FaqList from '../components/FaqList';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import { GridLines, Halftone, RegistrationMark } from '../components/Decor';
import { useLanguage } from '../i18n/useLanguage';
import { PAGE_PATHS } from '../i18n/routes';
import { getServices } from '../data/services';
import { SITE_URL, PHONE_PRIMARY_DISPLAY, PHONE_PRIMARY_TEL, LOCAL_BUSINESS_PROVIDER } from '../data/site';

const STEP_ICONS = [FileSearch, PenTool, Eye, Truck];

const CONTENT = {
  sr: {
    meta: {
      title: 'Usluge štampe i brendiranja u Nikšiću | Štamparija MADEX',
      description:
        'Sve usluge Štamparije MADEX Nikšić na jednom mjestu — offset i digitalna štampa, vizit kartice, štampa na majicama, sito štampa, brendiranje vozila i objekata, baneri, PVC folija i grafički dizajn.',
      keywords:
        'usluge štampe Nikšić, štamparija Nikšić usluge, digitalna štampa Nikšić, ofset štampa Nikšić, sito štampa Nikšić, brendiranje vozila Nikšić, brendiranje objekata Nikšić, vizit kartice Nikšić, grafički dizajn Nikšić, štampa Crna Gora',
    },
    crumb: 'Usluge',
    badge: 'NAŠE USLUGE',
    title: 'Usluge štampe',
    titleAccent: 'i brendiranja u Nikšiću',
    lead:
      'Štamparija MADEX pokriva cijeli put od ideje do gotovog otiska — pripremu i dizajn, offset i digitalnu štampu, sito štampu, izradu banera i brendiranje vozila i objekata. Sve radimo u svojoj kući, pa su rokovi kraći, a kvalitet ostaje pod našom kontrolom.',
    call: 'Pozovite',
    orderOnline: 'Poručite online',
    offerTop: 'Kompletna ponuda',
    offerAccent: 'štamparskih usluga',
    offerLead:
      'Svaka usluga ima svoju stranicu sa detaljima — materijalima, rokovima, primjerima radova i odgovorima na najčešća pitanja. Kliknite na uslugu koja vas zanima ili nas pozovite pa ćemo zajedno odabrati tehniku koja najbolje odgovara vašem poslu i budžetu.',
    learnMore: 'Saznajte više o usluzi',
    processBadge: 'KAKO RADIMO',
    processTop: 'Kako izgleda',
    processAccent: 'saradnja sa nama',
    processLead:
      'Ista četiri koraka važe za sve usluge — od jednog kompleta vizit kartica do brendiranja cijelog voznog parka.',
    process: [
      {
        title: 'Upit i ponuda',
        text: 'Javite nam se telefonom, mejlom ili preko forme i opišite šta vam treba — materijal, tiraž i rok. Ponudu i procjenu dajemo besplatno, najčešće isti dan.',
      },
      {
        title: 'Priprema za štampu',
        text: 'Ako imate gotov fajl, provjeravamo da li je spreman za štampu. Ako nemate, naš grafički dizajner priprema rješenje po vašoj ideji.',
      },
      {
        title: 'Probni izgled',
        text: 'Prije nego što pustimo mašinu, šaljemo vam prikaz na odobrenje. Ništa se ne štampa dok ne potvrdite boje, tekst i dimenzije.',
      },
      {
        title: 'Štampa i isporuka',
        text: 'Većinu poslova završavamo za 3 do 5 radnih dana. Robu preuzimate u štampariji u Nikšiću ili je šaljemo na vašu adresu u Crnoj Gori.',
      },
    ],
    faqBadge: 'PITANJA',
    faqTop: 'Najčešća pitanja',
    faqAccent: 'o našim uslugama',
    faq: [
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
    ],
    ctaTitle: 'Niste sigurni koja tehnika vam treba?',
    ctaText:
      'Opišite nam posao — predložićemo tehniku, materijal i tiraž koji daju najbolji odnos cijene i kvaliteta. Procjena je besplatna i ne obavezuje vas ni na šta.',
    ctaInquiry: 'Pošaljite upit',
    schemaName: 'Usluge Štamparije MADEX Nikšić',
    schemaDescription:
      'Pregled svih usluga štampe, brendiranja i grafičkog dizajna koje nudi Štamparija MADEX u Nikšiću.',
    collectionName: 'Usluge — Štamparija MADEX Nikšić',
  },
  en: {
    meta: {
      title: 'Services — Printing & Branding in Nikšić | MADEX Print Shop',
      description:
        'All MADEX print shop services in one place — offset and digital printing, business cards, T-shirt and screen printing, vehicle and storefront branding, banners, PVC vinyl and graphic design in Nikšić, Montenegro.',
      keywords:
        'printing services Nikšić, print shop services Montenegro, digital printing Nikšić, offset printing Montenegro, screen printing Nikšić, vehicle wrapping Montenegro, business cards Nikšić, graphic design Montenegro',
    },
    crumb: 'Services',
    badge: 'OUR SERVICES',
    title: 'Services',
    titleAccent: 'Printing and branding in Nikšić',
    lead:
      'MADEX print shop covers the whole journey from idea to finished print — prepress and design, offset and digital printing, screen printing, banners, and vehicle and storefront branding. We do everything in-house, so turnaround is shorter and quality stays under our control.',
    call: 'Call',
    orderOnline: 'Order online',
    offerTop: 'The complete range',
    offerAccent: 'of printing services',
    offerLead:
      'Each service has its own page with details — materials, turnaround times, examples of our work and answers to common questions. Click the service you are interested in, or call us and we will choose together the technique that best fits your job and budget.',
    learnMore: 'Learn more about this service',
    processBadge: 'HOW WE WORK',
    processTop: 'How working',
    processAccent: 'with us works',
    processLead:
      'The same four steps apply to every service — from a single set of business cards to branding an entire fleet.',
    process: [
      {
        title: 'Inquiry and quote',
        text: 'Contact us by phone, email or the form and tell us what you need — material, quantity and deadline. Quotes and estimates are free, usually the same day.',
      },
      {
        title: 'Print preparation',
        text: 'If you have a finished file, we check that it is print-ready. If you don’t, our graphic designer prepares a design based on your idea.',
      },
      {
        title: 'Proof for approval',
        text: 'Before we start the press, we send you a proof for approval. Nothing is printed until you confirm the colours, text and dimensions.',
      },
      {
        title: 'Printing and delivery',
        text: 'We finish most jobs in 3 to 5 working days. Pick up your order at our print shop in Nikšić or we ship it to your address in Montenegro.',
      },
    ],
    faqBadge: 'QUESTIONS',
    faqTop: 'Frequently asked',
    faqAccent: 'questions about our services',
    faq: [
      {
        q: 'Which printing services do you offer in Nikšić?',
        a: 'Under one roof we do offset and digital printing, screen printing, business cards, T-shirt and cardboard box printing, banners and PVC vinyl, vehicle and storefront branding, as well as graphic design and prepress.',
      },
      {
        q: 'Do you work with clients outside Nikšić?',
        a: 'Yes. We have clients all over Montenegro — Podgorica, Budva, Herceg Novi, Bar, Cetinje, Bijelo Polje and other towns. We agree on the job and receive files by email, and ship the finished material by courier.',
      },
      {
        q: 'How much does printing cost?',
        a: 'The price depends on quantity, material and finishing, so we calculate it for each job. Send us a description of the job and you will get an exact, no-obligation quote.',
      },
      {
        q: 'How far in advance should I order?',
        a: 'For standard jobs, 3 to 5 working days is enough. For larger runs or vehicle and storefront branding, contact us earlier so we can schedule installation.',
      },
    ],
    ctaTitle: 'Not sure which technique you need?',
    ctaText:
      'Describe the job — we will recommend the technique, material and quantity that give the best value for money. The estimate is free and carries no obligation.',
    ctaInquiry: 'Send an inquiry',
    schemaName: 'MADEX Print Shop Nikšić — services',
    schemaDescription:
      'Overview of all printing, branding and graphic design services offered by MADEX print shop in Nikšić, Montenegro.',
    collectionName: 'Services — MADEX Print Shop Nikšić',
  },
};

// Schema podaci se prave jednom po jeziku (stabilna referenca za SEOTags).
const buildSchema = (lang) => {
  const c = CONTENT[lang];
  const pageUrl = `${SITE_URL}${PAGE_PATHS.services[lang]}`;
  const services = getServices(lang);

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: c.collectionName,
      url: pageUrl,
      inLanguage: lang === 'en' ? 'en' : 'sr-ME',
      about: LOCAL_BUSINESS_PROVIDER,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: c.schemaName,
      description: c.schemaDescription,
      url: pageUrl,
      numberOfItems: services.length,
      itemListElement: services.map((service, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: service.navLabel,
        description: service.shortDescription,
        url: `${SITE_URL}${service.path}`,
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

const ServicesPage = () => {
  const { lang, to } = useLanguage();
  const c = CONTENT[lang];
  const steps = c.process.map((step, idx) => ({ ...step, icon: STEP_ICONS[idx] }));

  return (
    <>
      <SEOTags
        title={c.meta.title}
        description={c.meta.description}
        keywords={c.meta.keywords}
        pageName={c.crumb}
        extraSchema={SCHEMA[lang]}
      />

      <PageHero icon={Printer} crumb={c.crumb} title={c.title} titleAccent={c.titleAccent} lead={c.lead}>
        <Button href={PHONE_PRIMARY_TEL} size="lg">
          <Phone className="h-5 w-5" aria-hidden="true" />
          {c.call} {PHONE_PRIMARY_DISPLAY}
        </Button>
        <Button to={to('order')} variant="outline" size="lg">
          {c.orderOnline}
        </Button>
      </PageHero>

      {/* Sve usluge */}
      <section className="relative overflow-hidden bg-gray-50 py-20 md:py-28">
        <GridLines className="text-gray-900/[0.045]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="left"
            icon={Printer}
            badge={c.badge}
            titleTop={c.offerTop}
            titleAccent={c.offerAccent}
            lead={c.offerLead}
          />
          <ServicesGrid learnMore={c.learnMore} />
        </div>
      </section>

      {/* Kako izgleda saradnja */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <Halftone className="-right-16 top-10 h-80 w-80 text-ink-cyan/20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            icon={Route}
            badge={c.processBadge}
            titleTop={c.processTop}
            titleAccent={c.processAccent}
            lead={c.processLead}
          />
          <ProcessSteps steps={steps} />
        </div>
      </section>

      {/* FAQ i CTA */}
      <section className="relative overflow-clip bg-gradient-to-b from-white to-blue-50/60 py-20 md:py-28">
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <SectionHeading
              align="left"
              icon={HelpCircle}
              badge={c.faqBadge}
              titleTop={c.faqTop}
              titleAccent={c.faqAccent}
              className="mb-10"
            />
            <FaqList items={c.faq} />
          </div>

          <div className="lg:col-span-5">
            <Reveal variant="right" className="lg:sticky lg:top-28">
              <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 p-8 text-white shadow-2xl shadow-blue-900/20 md:p-10">
                <Halftone className="-right-10 -top-10 h-56 w-56 text-white/20" />
                <RegistrationMark size={150} strokeWidth={0.6} className="absolute -bottom-12 -left-12 text-white/15 animate-spin-slow" />
                <div className="relative">
                  <h2 className="text-2xl font-bold md:text-3xl">{c.ctaTitle}</h2>
                  <p className="mt-4 text-base leading-relaxed text-blue-100 md:text-lg">{c.ctaText}</p>
                  <div className="mt-8 flex flex-col gap-3">
                    <Button href={PHONE_PRIMARY_TEL} variant="white">
                      <Phone className="h-5 w-5" aria-hidden="true" />
                      {PHONE_PRIMARY_DISPLAY}
                    </Button>
                    <Button to={to('contact')} variant="soft">
                      {c.ctaInquiry}
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
