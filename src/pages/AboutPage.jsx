import { Link } from 'react-router-dom';
import {
  Users, Phone, CheckCircle, Target, Eye, Award, Clock, HeartHandshake, MapPin,
} from 'lucide-react';
import SEOTags from '../components/SEOTags';
import PageHero from '../components/PageHero';
import {
  SITE_URL,
  PHONE_PRIMARY_DISPLAY,
  PHONE_PRIMARY_TEL,
  ADDRESS,
  WORKING_HOURS,
  ORGANIZATION_SCHEMA,
} from '../data/site';

const PAGE_PATH = '/o-nama';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const STATS = [
  { value: '20+', label: 'godina rada', description: 'Od 2005. godine bez prekida u Nikšiću.' },
  { value: '1000+', label: 'završenih projekata', description: 'Od jedne majice do brendiranja voznog parka.' },
  { value: '99%', label: 'zadovoljnih klijenata', description: 'Najveći broj poslova dolazi preko preporuke.' },
];

const VALUES = [
  {
    icon: Award,
    title: 'Kvalitet prije količine',
    text: 'Radije ćemo odbiti nerealan rok nego isporučiti otisak kojim se ne možemo pohvaliti. Svaki tiraž prolazi kroz kontrolu prije nego što napusti štampariju.',
  },
  {
    icon: Clock,
    title: 'Rok koji se poštuje',
    text: 'Rok dogovaramo na početku i držimo ga se. Ako se nešto usput zakomplikuje, saznaćete od nas prvi, a ne na dan preuzimanja.',
  },
  {
    icon: HeartHandshake,
    title: 'Direktan odnos',
    text: 'Razgovarate sa ljudima koji rade na vašem poslu, bez posrednika i bez šalter komunikacije. Zato se dogovor često završi u jednom pozivu.',
  },
  {
    icon: Users,
    title: 'Porodična tradicija',
    text: 'Firma je porodična i to se vidi u načinu rada — ime firme je i naše prezime, pa je svaki posao stvar ličnog obraza.',
  },
];

const MILESTONES = [
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
];

// Statične schema definicije — van komponente da se ne prave ponovo pri svakom renderu.
const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'O nama — Štamparija MADEX Nikšić',
  url: PAGE_URL,
  inLanguage: 'sr-ME',
  description:
    'Priča o Štampariji MADEX iz Nikšića — porodičnoj štampariji osnovanoj 2005. godine koja se bavi offset i digitalnom štampom, sito štampom i brendiranjem vozila i objekata.',
};

const EXTRA_SCHEMA = [aboutSchema, ORGANIZATION_SCHEMA];

const AboutPage = () => (
  <>
    <SEOTags
      title="O nama — porodična štamparija u Nikšiću od 2005. | MADEX"
      description="Štamparija MADEX je porodična štamparija iz Nikšića osnovana 2005. godine. Upoznajte našu priču, način rada i ljude koji stoje iza svakog otiska — od offset štampe do brendiranja vozila."
      keywords="štamparija MADEX, o nama štamparija Nikšić, porodična štamparija Crna Gora, Mladen Dubljević štamparija, najbolja štamparija Nikšić, iskustvo štampa Nikšić"
      currentPage={PAGE_PATH}
      pageName="O nama"
      extraSchema={EXTRA_SCHEMA}
    />

    <PageHero
      icon={Users}
      badge="O NAMA"
      crumb="O nama"
      title="Porodična štamparija iz Nikšića koja radi od 2005. godine"
      lead="Štampariju MADEX osnovao je Mladen Dubljević, a i danas je vodi ista porodica. Za dvadeset godina prešli smo put od male radionice do štamparije koja pokriva sve — od vizit kartica do brendiranja voznih parkova — ali način rada se nije promijenio: dogovor na riječ, rok koji se poštuje i otisak na koji stavljamo svoje ime."
    >
      <a
        href={PHONE_PRIMARY_TEL}
        className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        <Phone className="w-5 h-5" />
        Pozovite {PHONE_PRIMARY_DISPLAY}
      </a>
      <Link
        to="/usluge"
        className="inline-flex items-center justify-center bg-transparent text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-semibold border-2 border-white/40 hover:bg-white/10 transition-all duration-300"
      >
        Pogledajte usluge
      </Link>
    </PageHero>

    {/* Brojke */}
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-gray-50 rounded-2xl p-6 md:p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
              <p className="text-gray-600 text-sm md:text-base">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Naša priča */}
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
          Naša priča
        </h2>

        <div className="space-y-5 text-gray-600 text-base md:text-lg leading-relaxed">
          <p>
            MADEX je počeo 2005. godine kao mala štamparija u Nikšiću, sa osnovnom opremom i sa
            klijentima koji su uglavnom dolazili iz komšiluka — lokalne radnje, zanatlije i firme kojima
            je trebalo nekoliko stotina memoranduma ili blok računa. Posao se širio onako kako se širi u
            malom gradu: preko zadovoljnih ljudi koji su nas preporučili dalje.
          </p>
          <p>
            Sa svakom novom mašinom mijenjala se i ponuda. Uz štampu na papiru došla je štampa na
            folijama, pa brendiranje izloga i poslovnih prostora, a zatim i kompletno oblijepljivanje
            vozila vinil folijama. Danas u istoj kući radimo pripremu, dizajn, štampu i montažu, što
            znači da klijent nema posla sa tri različite firme i tri različita roka.
          </p>
          <p>
            Ono što se nije promijenilo je odnos prema poslu. I dalje se svaki tiraž pogleda prije nego
            što izađe iz štamparije, i dalje se javljamo na telefon i van radnog vremena kada nekome
            gori rok, i dalje radimo i posao od dvadeset eura i posao od nekoliko hiljada sa istom
            pažnjom. Firma nosi porodično ime, pa je svaki loš otisak lična stvar.
          </p>
        </div>

        {/* Vremenska linija */}
        <div className="mt-10 md:mt-14 space-y-6">
          {MILESTONES.map((item) => (
            <div key={item.year} className="bg-white rounded-2xl shadow-lg p-6 md:p-8 flex flex-col sm:flex-row gap-4 sm:gap-8">
              <div className="text-blue-600 font-bold text-xl md:text-2xl sm:w-28 flex-shrink-0">
                {item.year}
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Zašto MADEX */}
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Zašto klijenti ostaju sa nama
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Nemamo tajnu formulu — imamo četiri pravila kojih se držimo od prvog dana.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {VALUES.map((value) => (
            <div key={value.title} className="bg-gray-50 rounded-2xl p-6 md:p-8 h-full">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Misija i vizija */}
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 md:p-10 rounded-2xl shadow-xl">
            <div className="flex items-center mb-4 md:mb-6">
              <Target className="w-7 h-7 md:w-8 md:h-8 mr-3" />
              <h2 className="text-2xl md:text-3xl font-bold">Naša misija</h2>
            </div>
            <p className="text-base md:text-lg leading-relaxed opacity-95">
              Da svaki klijent iz Nikšića i Crne Gore, bez obzira da li naručuje deset vizit kartica ili
              brendiranje deset vozila, dobije isti nivo pažnje, jasnu cijenu unaprijed i otisak koji
              izgleda tačno onako kako je odobrio.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 md:p-10 rounded-2xl shadow-xl">
            <div className="flex items-center mb-4 md:mb-6">
              <Eye className="w-7 h-7 md:w-8 md:h-8 mr-3" />
              <h2 className="text-2xl md:text-3xl font-bold">Naša vizija</h2>
            </div>
            <p className="text-base md:text-lg leading-relaxed opacity-95">
              Da ostanemo štamparija kojoj se ljudi vraćaju — da rastemo kroz nove tehnike i opremu, ali
              da zadržimo brzinu i direktnu komunikaciju male, porodične firme kakvu veliki sistemi ne
              mogu ponuditi.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Osnivač i CTA */}
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-2xl p-6 md:p-10">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
              <span className="text-white font-bold text-2xl md:text-3xl">M</span>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">Mladen Dubljević</h2>
              <p className="text-blue-600 font-semibold mb-4">Osnivač i vlasnik</p>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                „Dvadeset godina radim isti posao i još uvijek svaki tiraž pogledam prije nego što izađe
                iz štamparije. Ako nešto ne valja, vratiće se — a nama je lakše da to uhvatimo ovdje nego
                da klijent to otkrije na svom štandu.“
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
              <div className="text-gray-700">
                <div className="font-semibold text-gray-900">Gdje smo</div>
                {ADDRESS.street}, {ADDRESS.city}
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
              <div className="text-gray-700">
                <div className="font-semibold text-gray-900">Radno vrijeme</div>
                {WORKING_HOURS}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/kontakt"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Kontaktirajte nas
            </Link>
            <Link
              to="/porucite"
              className="inline-flex items-center justify-center bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold border border-blue-200 hover:bg-blue-50 transition-colors duration-300"
            >
              Poručite štampu
            </Link>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default AboutPage;
