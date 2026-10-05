import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Navigation, Ruler, Zap, Truck, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/useLanguage';
import {
  ADDRESS,
  COUNTRY_NAME,
  EMAIL,
  MAP_EMBED_SRC,
  MAP_LINK,
  PHONE_PRIMARY_DISPLAY,
  PHONE_PRIMARY_TEL,
  PHONE_SECONDARY_DISPLAY,
  PHONE_SECONDARY_TEL,
  WORKING_HOURS,
} from '../data/site';
import { CropMarks, GridLines, Halftone } from './Decor';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const PERK_ICONS = [Ruler, Zap, Truck];

const InfoRow = ({ icon: Icon, title, children }) => (
  <div className="group flex items-start gap-4 md:gap-5">
    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white md:h-14 md:w-14">
      <Icon className="h-6 w-6" aria-hidden="true" />
    </div>
    <div className="min-w-0">
      <h3 className="mb-1 text-lg font-semibold text-gray-900">{title}</h3>
      <div className="text-base text-gray-600 md:text-lg">{children}</div>
    </div>
  </div>
);

const LocationSection = () => {
  const { lang, t, to } = useLanguage();
  const l = t.location;
  const linkClass = 'block hover:text-blue-600 transition-colors';

  return (
    <section id="location" className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20 md:py-28">
      <GridLines className="text-gray-900/[0.04]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading icon={MapPin} badge={l.badge} titleTop={l.titleTop} titleAccent={l.titleAccent} lead={l.lead} />

        <div className="grid gap-8 md:gap-10 lg:grid-cols-5">
          <Reveal variant="left" className="lg:col-span-2">
            <div className="h-full rounded-3xl bg-white p-7 shadow-xl shadow-gray-900/5 ring-1 ring-gray-100 md:p-9">
              <h3 className="mb-8 text-2xl font-bold text-gray-900">{l.infoTitle}</h3>
              <div className="space-y-7">
                <InfoRow icon={MapPin} title={l.address}>
                  <address className="not-italic">
                    {ADDRESS.street}
                    <br />
                    {ADDRESS.postalCode} {ADDRESS.city}, {COUNTRY_NAME[lang]}
                  </address>
                </InfoRow>
                <InfoRow icon={Phone} title={l.phone}>
                  <a href={PHONE_PRIMARY_TEL} className={linkClass}>{PHONE_PRIMARY_DISPLAY}</a>
                  <a href={PHONE_SECONDARY_TEL} className={linkClass}>{PHONE_SECONDARY_DISPLAY}</a>
                </InfoRow>
                <InfoRow icon={Mail} title={l.email}>
                  <a href={`mailto:${EMAIL}`} className={`${linkClass} break-all`}>{EMAIL}</a>
                </InfoRow>
                <InfoRow icon={Clock} title={l.hours}>
                  <p>{WORKING_HOURS[lang]}</p>
                </InfoRow>
              </div>

              <a
                href={MAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine mt-9 flex items-center justify-center gap-2 rounded-full bg-gray-900 px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600"
              >
                <Navigation className="h-5 w-5" aria-hidden="true" />
                {l.directions}
              </a>
              <Link
                to={to('contact')}
                className="group mt-4 flex items-center justify-center gap-2 font-semibold text-blue-600 hover:text-blue-700"
              >
                {l.contactPage}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          <Reveal variant="right" className="lg:col-span-3">
            <div className="relative h-full">
              <div className="relative h-80 overflow-hidden rounded-3xl shadow-xl shadow-gray-900/10 ring-1 ring-gray-200 sm:h-96 lg:h-full lg:min-h-[28rem]">
                <iframe
                  src={MAP_EMBED_SRC}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={l.mapTitle}
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <CropMarks className="hidden text-gray-400 md:block" />
            </div>
          </Reveal>
        </div>

        <Reveal className="relative mt-12 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 px-6 py-10 text-white shadow-2xl shadow-blue-900/20 md:mt-16 md:px-10">
          <Halftone className="-right-10 -top-10 h-64 w-64 text-white/15" />
          <div className="relative grid gap-8 md:grid-cols-3">
            {l.perks.map((perk, idx) => {
              const Icon = PERK_ICONS[idx];
              return (
                <div key={perk.title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/20">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold md:text-2xl">{perk.title}</h3>
                    <p className="mt-1 text-blue-100">{perk.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default LocationSection;
