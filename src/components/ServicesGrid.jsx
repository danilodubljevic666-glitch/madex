import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { useLanguage } from '../i18n/useLanguage';
import { getServices } from '../data/services';
import { SERVICE_ICONS } from '../data/serviceIcons';
import { Halftone } from './Decor';
import Reveal from './Reveal';

// Raspored za mrežu od 3 kolone (lg): dvije istaknute kartice (šire, sa fotografijom)
// popunjavaju redove tako da nijedna kartica ne ostane sama u zadnjem redu.
// Na 2 kolone sve kartice su iste širine (10 = 5 redova po 2).
const DISPLAY_ORDER = [
  'stampa-majica-niksic',
  'digitalna-stampa-niksic',
  'vizit-kartice-niksic',
  'ofset-stampa-niksic',
  'sito-stampa-niksic',
  'brendiranje-objekata-niksic',
  'brendiranje-vozila-niksic',
  'baneri-pvc-folija-niksic',
  'graficki-dizajn-niksic',
  'stampa-kutije-niksic',
];
const FEATURED = new Set(['stampa-majica-niksic', 'brendiranje-vozila-niksic']);

const ServiceCard = ({ service, index, featured, learnMore }) => {
  const Icon = SERVICE_ICONS[service.icon];
  const image = featured ? service.images[0] : null;

  return (
    <article
      className={`card-glow group relative flex h-full overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-200/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/10 hover:ring-transparent ${
        image ? 'flex-col-reverse lg:flex-row' : 'flex-col'
      }`}
    >
      <div className="relative flex flex-1 flex-col p-7 md:p-8">
        <Halftone className="-top-8 -right-8 h-44 w-44 text-blue-500/0 transition-colors duration-700 group-hover:text-blue-500/25" />
        <span
          aria-hidden="true"
          className="absolute right-7 top-6 font-display text-5xl font-extrabold text-gray-100 transition-colors duration-500 group-hover:text-blue-100"
        >
          {String(index + 1).padStart(2, '0')}
        </span>

        <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-600/30 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
          <Icon className="h-7 w-7" aria-hidden="true" />
        </div>

        <h3 className="relative mb-3 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-700 md:text-2xl">
          {/* Cijela kartica je klikabilna preko ::after ovog linka */}
          <Link to={service.path} className="after:absolute after:inset-0 after:content-[''] focus:outline-none">
            {service.navLabel}
          </Link>
        </h3>

        <p className="relative mb-6 flex-grow text-base leading-relaxed text-gray-600">{service.shortDescription}</p>

        <ul className="relative mb-6 space-y-2">
          {service.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
              </span>
              {feature}
            </li>
          ))}
        </ul>

        <span className="relative mt-auto inline-flex items-center font-semibold text-blue-600" aria-hidden="true">
          {learnMore}
          <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
        </span>
      </div>

      {image && (
        <div className="relative h-56 overflow-hidden sm:h-64 lg:h-auto lg:w-[46%]">
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            width="600"
            height="600"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 to-transparent lg:bg-gradient-to-r lg:from-white/30" />
        </div>
      )}
    </article>
  );
};

const ServicesGrid = ({ learnMore }) => {
  const { lang, t } = useLanguage();
  const services = getServices(lang);
  const ordered = DISPLAY_ORDER.map((id) => services.find((s) => s.id === id)).filter(Boolean);
  // Usluge dodate kasnije u services.js a nisu u DISPLAY_ORDER idu na kraj
  services.forEach((s) => {
    if (!DISPLAY_ORDER.includes(s.id)) ordered.push(s);
  });

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-7 lg:grid-cols-3">
      {ordered.map((service, idx) => {
        const featured = FEATURED.has(service.id);
        return (
          <Reveal key={service.id} delay={(idx % 3) * 90} className={featured ? 'lg:col-span-2' : ''}>
            <ServiceCard
              service={service}
              index={idx}
              featured={featured}
              learnMore={learnMore || t.homeServices.learnMore}
            />
          </Reveal>
        );
      })}
    </div>
  );
};

export default ServicesGrid;
