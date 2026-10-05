import {
  Users, Phone, Target, Eye, Award, Clock, HeartHandshake, MapPin, Quote, BookOpen, Sparkles,
} from 'lucide-react';
import SEOTags from '../components/SEOTags';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import CountUp from '../components/CountUp';
import { GridLines, Halftone, RegistrationMark } from '../components/Decor';
import { useLanguage } from '../i18n/useLanguage';
import { PAGE_PATHS } from '../i18n/routes';
import {
  SITE_URL,
  PHONE_PRIMARY_DISPLAY,
  PHONE_PRIMARY_TEL,
  ADDRESS,
  WORKING_HOURS,
  ORGANIZATION_SCHEMA,
} from '../data/site';

const VALUE_ICONS = [Award, Clock, HeartHandshake, Users];
const DOT_COLORS = ['bg-ink-cyan', 'bg-ink-magenta', 'bg-ink-yellow', 'bg-blue-600'];

const CONTENT = {
  sr: {
    meta: {
      title: 'O nama — porodična štamparija od 2005. | Štamparija MADEX',
      description:
        'Štamparija MADEX je porodična štamparija iz Nikšića osnovana 2005. godine. Upoznajte našu priču, način rada i ljude koji stoje iza svakog otiska — od offset štampe do brendiranja vozila.',
      keywords:
        'štamparija MADEX, o nama štamparija Nikšić, porodična štamparija Crna Gora, Mladen Dubljević štamparija, najbolja štamparija Nikšić, iskustvo štampa Nikšić',
    },
    crumb: 'O nama',
    title: 'O nama',
    titleAccent: 'Porodična štamparija iz Nikšića od 2005.',
    lead:
      'Štampariju MADEX osnovao je Mladen Dubljević, a i danas je vodi ista porodica. Za dvadeset godina prešli smo put od male radionice do štamparije koja pokriva sve — od vizit kartica do brendiranja voznih parkova — ali način rada se nije promijenio: dogovor na riječ, rok koji se poštuje i otisak na koji stavljamo svoje ime.',
    call: 'Pozovite',
    viewServices: 'Pogledajte usluge',
    stats: [
      { value: 20, suffix: '+', label: 'godina rada', description: 'Od 2005. godine bez prekida u Nikšiću.' },
      { value: 1000, suffix: '+', label: 'završenih projekata', description: 'Od jedne majice do brendiranja voznog parka.' },
      { value: 99, suffix: '%', label: 'zadovoljnih klijenata', description: 'Najveći broj poslova dolazi preko preporuke.' },
    ],
    storyBadge: 'OD 2005.',
    storyTop: 'Naša',
    storyAccent: 'priča',
    story: [
      'MADEX je počeo 2005. godine kao mala štamparija u Nikšiću, sa osnovnom opremom i sa klijentima koji su uglavnom dolazili iz komšiluka — lokalne radnje, zanatlije i firme kojima je trebalo nekoliko stotina memoranduma ili blok računa. Posao se širio onako kako se širi u malom gradu: preko zadovoljnih ljudi koji su nas preporučili dalje.',
      'Sa svakom novom mašinom mijenjala se i ponuda. Uz štampu na papiru došla je štampa na folijama, pa brendiranje izloga i poslovnih prostora, a zatim i kompletno oblijepljivanje vozila vinil folijama. Danas u istoj kući radimo pripremu, dizajn, štampu i montažu, što znači da klijent nema posla sa tri različite firme i tri različita roka.',
      'Ono što se nije promijenilo je odnos prema poslu. I dalje se svaki tiraž pogleda prije nego što izađe iz štamparije, i dalje se javljamo na telefon i van radnog vremena kada nekome gori rok, i dalje radimo i posao od dvadeset eura i posao od nekoliko hiljada sa istom pažnjom. Firma nosi porodično ime, pa je svaki loš otisak lična stvar.',
    ],
    milestones: [
      {
        year: '2005.',
        title: 'Početak rada',
        text: 'Mladen Dubljević otvara malu štampariju u Nikšiću sa osnovnom opremom i prvim lokalnim klijentima.',
      },
      {
        year: '2010.',
        title: 'Širenje ponude',
        text: 'Uz klasičnu štampu na papiru uvodimo štampu na folijama i prve poslove brendiranja izloga i poslovnih prostora.',
      },
      {
        year: '2015.',
        title: 'Brendiranje vozila',
        text: 'Nabavkom opreme za rad sa vinil folijama počinjemo da radimo kompletno oblijepljivanje vozila — od dostavnih kombija do voznih parkova firmi.',
      },
      {
        year: 'Danas',
        title: 'Kompletna štamparija',
        text: 'Offset i digitalna štampa, sito štampa, grafički dizajn, baneri, ambalaža i brendiranje — sve pod jednim krovom, za klijente iz cijele Crne Gore.',
      },
    ],
    valuesBadge: 'NAŠA PRAVILA',
    valuesTop: 'Zašto klijenti',
    valuesAccent: 'ostaju sa nama',
    valuesLead: 'Nemamo tajnu formulu — imamo četiri pravila kojih se držimo od prvog dana.',
    values: [
      {
        title: 'Kvalitet prije količine',
        text: 'Radije ćemo odbiti nerealan rok nego isporučiti otisak kojim se ne možemo pohvaliti. Svaki tiraž prolazi kroz kontrolu prije nego što napusti štampariju.',
      },
      {
        title: 'Rok koji se poštuje',
        text: 'Rok dogovaramo na početku i držimo ga se. Ako se nešto usput zakomplikuje, saznaćete od nas prvi, a ne na dan preuzimanja.',
      },
      {
        title: 'Direktan odnos',
        text: 'Razgovarate sa ljudima koji rade na vašem poslu, bez posrednika i bez šalter komunikacije. Zato se dogovor često završi u jednom pozivu.',
      },
      {
        title: 'Porodična tradicija',
        text: 'Firma je porodična i to se vidi u načinu rada — ime firme je i naše prezime, pa je svaki posao stvar ličnog obraza.',
      },
    ],
    missionTitle: 'Naša misija',
    missionText:
      'Da svaki klijent iz Nikšića i Crne Gore, bez obzira da li naručuje deset vizit kartica ili brendiranje deset vozila, dobije isti nivo pažnje, jasnu cijenu unaprijed i otisak koji izgleda tačno onako kako je odobrio.',
    visionTitle: 'Naša vizija',
    visionText:
      'Da ostanemo štamparija kojoj se ljudi vraćaju — da rastemo kroz nove tehnike i opremu, ali da zadržimo brzinu i direktnu komunikaciju male, porodične firme kakvu veliki sistemi ne mogu ponuditi.',
    founderName: 'Mladen Dubljević',
    founderRole: 'Osnivač i vlasnik',
    founderQuote:
      '„Dvadeset godina radim isti posao i još uvijek svaki tiraž pogledam prije nego što izađe iz štamparije. Ako nešto ne valja, vratiće se — a nama je lakše da to uhvatimo ovdje nego da klijent to otkrije na svom štandu.“',
    where: 'Gdje smo',
    hours: 'Radno vrijeme',
    contactUs: 'Kontaktirajte nas',
    orderPrint: 'Poručite štampu',
    schemaName: 'O nama — Štamparija MADEX Nikšić',
    schemaDescription:
      'Priča o Štampariji MADEX iz Nikšića — porodičnoj štampariji osnovanoj 2005. godine koja se bavi offset i digitalnom štampom, sito štampom i brendiranjem vozila i objekata.',
  },
  en: {
    meta: {
      title: 'About Us — Family Print Shop Since 2005 | MADEX Print Shop',
      description:
        'MADEX is a family-run print shop from Nikšić, Montenegro, founded in 2005. Get to know our story, the way we work and the people behind every print — from offset printing to vehicle wrapping.',
      keywords:
        'MADEX print shop, about MADEX Nikšić, family print shop Montenegro, Mladen Dubljević, best print shop Nikšić, printing experience Montenegro',
    },
    crumb: 'About us',
    title: 'About us',
    titleAccent: 'A family print shop in Nikšić since 2005',
    lead:
      'MADEX print shop was founded by Mladen Dubljević and is still run by the same family. In twenty years we have grown from a small workshop into a print shop that covers everything — from business cards to branding entire fleets — but the way we work has not changed: our word is our bond, deadlines are kept, and every print carries our name.',
    call: 'Call',
    viewServices: 'View our services',
    stats: [
      { value: 20, suffix: '+', label: 'years in business', description: 'Working in Nikšić without a break since 2005.' },
      { value: 1000, suffix: '+', label: 'completed projects', description: 'From a single T-shirt to branding an entire fleet.' },
      { value: 99, suffix: '%', label: 'satisfied clients', description: 'Most of our work comes through recommendations.' },
    ],
    storyBadge: 'SINCE 2005',
    storyTop: 'Our',
    storyAccent: 'story',
    story: [
      'MADEX started in 2005 as a small print shop in Nikšić, with basic equipment and clients who mostly came from the neighbourhood — local shops, craftsmen and companies that needed a few hundred letterheads or receipt books. The business grew the way it does in a small town: through happy people who recommended us to others.',
      'With every new machine, our range grew too. Printing on paper was followed by printing on vinyl, then branding shop windows and business premises, and then full vehicle wraps with vinyl film. Today we handle prepress, design, printing and installation under one roof, so clients don’t have to deal with three different companies and three different deadlines.',
      'What hasn’t changed is our attitude to the work. We still check every run before it leaves the print shop, we still answer the phone after hours when someone’s deadline is burning, and we still give a twenty-euro job the same care as one worth several thousand. The company carries our family name, so every bad print is personal.',
    ],
    milestones: [
      {
        year: '2005',
        title: 'The beginning',
        text: 'Mladen Dubljević opens a small print shop in Nikšić with basic equipment and its first local clients.',
      },
      {
        year: '2010',
        title: 'A wider range',
        text: 'Alongside classic printing on paper, we introduce vinyl printing and our first shop window and business premises branding jobs.',
      },
      {
        year: '2015',
        title: 'Vehicle wrapping',
        text: 'With new equipment for vinyl work, we start doing full vehicle wraps — from delivery vans to company fleets.',
      },
      {
        year: 'Today',
        title: 'A complete print shop',
        text: 'Offset and digital printing, screen printing, graphic design, banners, packaging and branding — all under one roof, for clients across Montenegro.',
      },
    ],
    valuesBadge: 'OUR RULES',
    valuesTop: 'Why clients',
    valuesAccent: 'stay with us',
    valuesLead: 'There is no secret formula — just four rules we have followed since day one.',
    values: [
      {
        title: 'Quality over quantity',
        text: 'We would rather turn down an unrealistic deadline than deliver a print we can’t be proud of. Every run is checked before it leaves the print shop.',
      },
      {
        title: 'Deadlines we keep',
        text: 'We agree on the deadline at the start and stick to it. If something gets complicated along the way, you will hear it from us first — not on pick-up day.',
      },
      {
        title: 'A direct relationship',
        text: 'You talk to the people who actually work on your job, with no middlemen and no call-centre runaround. That is why most deals are done in a single call.',
      },
      {
        title: 'Family tradition',
        text: 'This is a family business and it shows in how we work — the company name is our name, so every job is a matter of personal pride.',
      },
    ],
    missionTitle: 'Our mission',
    missionText:
      'To make sure every client from Nikšić and Montenegro — whether ordering ten business cards or branding ten vehicles — gets the same level of attention, a clear price up front and a print that looks exactly as approved.',
    visionTitle: 'Our vision',
    visionText:
      'To remain the print shop people keep coming back to — growing through new techniques and equipment while keeping the speed and direct communication of a small family business that large companies cannot offer.',
    founderName: 'Mladen Dubljević',
    founderRole: 'Founder and owner',
    founderQuote:
      '“I have been doing the same job for twenty years and I still check every run before it leaves the shop. If something is wrong, it will come back — and it is much easier for us to catch it here than for the client to discover it at their stand.”',
    where: 'Where we are',
    hours: 'Opening hours',
    contactUs: 'Contact us',
    orderPrint: 'Order printing',
    schemaName: 'About us — MADEX Print Shop Nikšić',
    schemaDescription:
      'The story of MADEX print shop from Nikšić, Montenegro — a family business founded in 2005 offering offset and digital printing, screen printing, and vehicle and storefront branding.',
  },
};

const buildSchema = (lang) => [
  {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: CONTENT[lang].schemaName,
    url: `${SITE_URL}${PAGE_PATHS.about[lang]}`,
    inLanguage: lang === 'en' ? 'en' : 'sr-ME',
    description: CONTENT[lang].schemaDescription,
  },
  ORGANIZATION_SCHEMA[lang],
];

const SCHEMA = { sr: buildSchema('sr'), en: buildSchema('en') };

const AboutPage = () => {
  const { lang, to } = useLanguage();
  const c = CONTENT[lang];

  return (
    <>
      <SEOTags
        title={c.meta.title}
        description={c.meta.description}
        keywords={c.meta.keywords}
        pageName={c.crumb}
        extraSchema={SCHEMA[lang]}
      />

      <PageHero icon={Users} crumb={c.crumb} title={c.title} titleAccent={c.titleAccent} lead={c.lead}>
        <Button href={PHONE_PRIMARY_TEL} size="lg">
          <Phone className="h-5 w-5" aria-hidden="true" />
          {c.call} {PHONE_PRIMARY_DISPLAY}
        </Button>
        <Button to={to('services')} variant="outline" size="lg">
          {c.viewServices}
        </Button>
      </PageHero>

      {/* Brojke — kartice preklapaju donju ivicu hero sekcije */}
      <section className="relative z-10 -mt-10 md:-mt-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 md:gap-6">
            {c.stats.map((stat, idx) => (
              <Reveal key={stat.label} delay={idx * 100}>
                <div className="card-glow h-full rounded-3xl bg-white p-7 text-center shadow-xl shadow-gray-900/10 ring-1 ring-gray-100 md:p-8">
                  <p className="font-display text-4xl font-extrabold text-gradient-blue md:text-5xl">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-lg font-bold text-gray-900">{stat.label}</p>
                  <p className="mt-1 text-sm text-gray-600 md:text-base">{stat.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Priča + vremenska linija */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <Halftone className="-right-16 top-20 h-96 w-96 text-ink-cyan/20" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div>
            <SectionHeading
              align="left"
              icon={BookOpen}
              badge={c.storyBadge}
              titleTop={c.storyTop}
              titleAccent={c.storyAccent}
              className="mb-8"
            />
            <div className="space-y-5 text-base leading-relaxed text-gray-600 md:text-lg">
              {c.story.map((paragraph, idx) => (
                <Reveal as="p" key={idx} delay={idx * 80}>
                  {paragraph}
                </Reveal>
              ))}
            </div>
          </div>

          <ol className="relative space-y-8 border-l-2 border-dashed border-blue-100 pl-8 md:pl-10 lg:mt-24">
            {c.milestones.map((item, idx) => (
              <Reveal as="li" key={item.year} variant="right" delay={idx * 120} className="relative">
                <span
                  aria-hidden="true"
                  className={`absolute -left-[2.6rem] top-6 h-5 w-5 rounded-full ring-4 ring-white md:-left-[3.1rem] ${DOT_COLORS[idx % 4]}`}
                />
                <div className="rounded-3xl bg-white p-6 shadow-lg shadow-gray-900/5 ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-7">
                  <p className="font-display text-2xl font-extrabold text-blue-600">{item.year}</p>
                  <h3 className="mt-1 text-lg font-bold text-gray-900 md:text-xl">{item.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-gray-600">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Vrijednosti */}
      <section className="relative overflow-hidden bg-gray-50 py-20 md:py-28">
        <GridLines className="text-gray-900/[0.045]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            icon={Sparkles}
            badge={c.valuesBadge}
            titleTop={c.valuesTop}
            titleAccent={c.valuesAccent}
            lead={c.valuesLead}
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-7">
            {c.values.map((value, idx) => {
              const Icon = VALUE_ICONS[idx];
              return (
                <Reveal key={value.title} delay={(idx % 2) * 100}>
                  <div className="card-glow group h-full rounded-3xl bg-white p-7 shadow-sm ring-1 ring-gray-200/80 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-900/10 hover:ring-transparent md:p-9">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-600/30 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">{value.title}</h3>
                    <p className="text-base leading-relaxed text-gray-600">{value.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Misija i vizija */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 md:gap-8 lg:px-8">
          <Reveal variant="left">
            <div className="relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 p-8 text-white shadow-2xl shadow-blue-900/20 md:p-10">
              <Halftone className="-right-10 -top-10 h-64 w-64 text-white/20" />
              <div className="relative">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/20">
                  <Target className="h-7 w-7" aria-hidden="true" />
                </div>
                <h2 className="mb-4 text-2xl font-bold md:text-3xl">{c.missionTitle}</h2>
                <p className="text-base leading-relaxed text-blue-50 md:text-lg">{c.missionText}</p>
              </div>
            </div>
          </Reveal>
          <Reveal variant="right">
            <div className="relative h-full overflow-hidden rounded-3xl bg-gray-950 p-8 text-white shadow-2xl shadow-gray-900/20 md:p-10">
              <GridLines className="text-white/[0.06]" />
              <RegistrationMark size={170} strokeWidth={0.6} className="absolute -bottom-12 -right-12 text-white/10 animate-spin-slow" />
              <div className="relative">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                  <Eye className="h-7 w-7" aria-hidden="true" />
                </div>
                <h2 className="mb-4 text-2xl font-bold md:text-3xl">{c.visionTitle}</h2>
                <p className="text-base leading-relaxed text-gray-300 md:text-lg">{c.visionText}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Osnivač i CTA */}
      <section className="bg-gradient-to-b from-white to-blue-50/60 pb-20 md:pb-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal variant="scale">
            <div className="relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-2xl shadow-blue-900/10 ring-1 ring-gray-100 md:p-12">
              <Quote className="absolute right-8 top-8 h-20 w-20 text-blue-50 md:h-28 md:w-28" aria-hidden="true" />
              <div className="relative flex flex-col items-start gap-6 sm:flex-row">
                <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-800 font-display text-3xl font-bold text-white shadow-xl shadow-blue-600/30">
                  M
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 md:text-2xl">{c.founderName}</h2>
                  <p className="mb-5 font-semibold text-blue-600">{c.founderRole}</p>
                  <blockquote className="text-lg leading-relaxed text-gray-700 md:text-xl">{c.founderQuote}</blockquote>
                </div>
              </div>

              <div className="relative mt-10 grid grid-cols-1 gap-6 border-t border-gray-100 pt-8 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" aria-hidden="true" />
                  <div className="text-gray-700">
                    <p className="font-semibold text-gray-900">{c.where}</p>
                    {ADDRESS.street}, {ADDRESS.city}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" aria-hidden="true" />
                  <div className="text-gray-700">
                    <p className="font-semibold text-gray-900">{c.hours}</p>
                    {WORKING_HOURS[lang]}
                  </div>
                </div>
              </div>

              <div className="relative mt-8 flex flex-col gap-3 sm:flex-row">
                <Button to={to('contact')}>{c.contactUs}</Button>
                <Button to={to('order')} variant="light">
                  {c.orderPrint}
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
