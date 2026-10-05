import { Link } from 'react-router-dom';
import { Facebook, Instagram, Phone, Mail, MapPin, Clock, ArrowRight, ChevronRight } from 'lucide-react';
import { useLanguage } from '../i18n/useLanguage';
import { getServices } from '../data/services';
import {
  ADDRESS,
  EMAIL,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  PHONE_PRIMARY_DISPLAY,
  PHONE_PRIMARY_TEL,
  PHONE_SECONDARY_DISPLAY,
  PHONE_SECONDARY_TEL,
  WORKING_HOURS,
  COUNTRY_NAME,
} from '../data/site';
import { CmykBar, GridLines, Halftone, RegistrationMark } from './Decor';
import LanguageSwitcher from './LanguageSwitcher';
import Reveal from './Reveal';

const QUICK_LINKS = ['home', 'services', 'about', 'contact', 'order'];

const headingClass = 'font-display text-sm font-bold uppercase tracking-[0.18em] text-white mb-5';
const linkClass = 'text-gray-400 hover:text-white transition-colors duration-300';

const Footer = () => {
  const { lang, t, to } = useLanguage();
  const services = getServices(lang);

  return (
    <footer className="relative overflow-hidden bg-gray-950 text-white">
      <CmykBar className="h-1 w-full rounded-none" k="bg-gray-500" />

      {/* Pozadinski vektori */}
      <GridLines className="text-white/[0.035]" />
      <Halftone className="-top-10 -right-10 h-80 w-80 text-ink-cyan/25" />
      <RegistrationMark
        size={360}
        strokeWidth={0.4}
        className="hidden lg:block absolute -bottom-32 -left-24 text-white/[0.06] animate-spin-slow"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA */}
        <Reveal className="py-12 md:py-16 border-b border-white/10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="font-display text-2xl md:text-4xl font-extrabold leading-tight">{t.footer.ctaTitle}</p>
              <p className="mt-3 text-gray-400 text-base md:text-lg">{t.footer.ctaText}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={PHONE_PRIMARY_TEL}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 font-semibold hover:bg-white/10 transition-colors"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                {PHONE_PRIMARY_DISPLAY}
              </a>
              <Link
                to={to('order')}
                className="btn-shine group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3.5 font-semibold shadow-lg shadow-blue-600/30 hover:-translate-y-0.5 transition-all"
              >
                {t.nav.order}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 py-12 md:py-16">
          {/* Logo i opis */}
          <div className="lg:col-span-4">
            <Link to={to('home')} className="inline-flex items-center gap-3">
              <img src="/logo-madex.webp" alt="Štamparija MADEX" width="56" height="56" loading="lazy" className="h-14 w-14" />
              <span>
                <span className="block font-display text-2xl font-extrabold tracking-tight">MADEX</span>
                <span className="block text-xs font-semibold uppercase tracking-[0.25em] text-ink-cyan">
                  {lang === 'en' ? 'Print shop' : 'Štamparija'}
                </span>
              </span>
            </Link>
            <p className="mt-5 text-gray-400 leading-relaxed max-w-sm">{t.footer.about}</p>
            <div className="mt-6 flex gap-3">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-[#1877f2] hover:ring-transparent transition-all hover:-translate-y-0.5"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-gradient-to-br hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#8134af] hover:ring-transparent transition-all hover:-translate-y-0.5"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={PHONE_PRIMARY_TEL}
                aria-label={t.footer.phone}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-green-600 hover:ring-transparent transition-all hover:-translate-y-0.5"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Brzi linkovi */}
          <nav className="lg:col-span-2" aria-label={t.footer.quickLinks}>
            <h2 className={headingClass}>{t.footer.quickLinks}</h2>
            <ul className="space-y-3">
              {QUICK_LINKS.map((key) => (
                <li key={key}>
                  <Link to={to(key)} className={`group inline-flex items-center gap-2 ${linkClass}`}>
                    <ChevronRight className="h-3.5 w-3.5 text-ink-cyan transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    {t.nav[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Usluge */}
          <nav className="lg:col-span-3" aria-label={t.footer.services}>
            <h2 className={headingClass}>{t.footer.services}</h2>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link to={service.path} className={`group inline-flex items-center gap-2 ${linkClass}`}>
                    <ChevronRight className="h-3.5 w-3.5 text-ink-magenta transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    {service.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Kontakt */}
          <div className="lg:col-span-3">
            <h2 className={headingClass}>{t.footer.contactInfo}</h2>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-ink-cyan" aria-hidden="true" />
                <address className="not-italic">
                  {ADDRESS.street}
                  <br />
                  {ADDRESS.postalCode} {ADDRESS.city}, {COUNTRY_NAME[lang]}
                </address>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-ink-cyan" aria-hidden="true" />
                <span className="flex flex-col">
                  <a href={PHONE_PRIMARY_TEL} className={linkClass}>{PHONE_PRIMARY_DISPLAY}</a>
                  <a href={PHONE_SECONDARY_TEL} className={linkClass}>{PHONE_SECONDARY_DISPLAY}</a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-ink-cyan" aria-hidden="true" />
                <a href={`mailto:${EMAIL}`} className={`${linkClass} break-all`}>{EMAIL}</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-ink-cyan" aria-hidden="true" />
                <span>
                  <span className="block font-medium text-gray-300">{t.footer.hours}</span>
                  {WORKING_HOURS[lang]}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Donja traka */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 py-8 text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Štamparija MADEX. {t.footer.rights}
          </p>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">{t.footer.location}</span>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
