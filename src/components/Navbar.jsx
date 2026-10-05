import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone, ArrowRight, Mail, Clock, Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '../i18n/useLanguage';
import {
  EMAIL,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  PHONE_PRIMARY_DISPLAY,
  PHONE_PRIMARY_TEL,
  WORKING_HOURS,
} from '../data/site';
import { CmykBar, GridLines, Halftone, InkBlobs, RegistrationMark } from './Decor';
import LanguageSwitcher from './LanguageSwitcher';

// Svaka stavka navigacije je zasebna stranica sa svojim URL-om na oba jezika.
const NAV_KEYS = ['home', 'services', 'about', 'contact'];
const NUMBER_COLORS = ['text-ink-cyan', 'text-ink-magenta', 'text-ink-yellow', 'text-gray-400'];

// Mobilni meni se "razlije" iz hamburger dugmeta (centar kruga = pozicija dugmeta)
const MENU_ORIGIN = 'calc(100% - 2.25rem) 2rem';

const Navbar = () => {
  const { lang, t, to } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progressRef = useRef(null);

  const closeMenu = () => setIsOpen(false);

  // Pozadina navbara i traka napretka čitanja prate skrol (throttle preko rAF)
  useEffect(() => {
    let frame = null;

    const update = () => {
      frame = null;
      const y = window.scrollY;
      setScrolled(y > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
      }
    };

    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  // Dok je mobilni meni otvoren: stranica ispod se ne skroluje, Escape ga zatvara,
  // a ako ekran postane širok (rotacija tableta) meni se sam zatvori.
  useEffect(() => {
    if (!isOpen) return undefined;

    const onKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    const desktop = window.matchMedia('(min-width: 768px)');
    const onDesktop = (e) => {
      if (e.matches) setIsOpen(false);
    };
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    desktop.addEventListener('change', onDesktop);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
      desktop.removeEventListener('change', onDesktop);
    };
  }, [isOpen]);

  // Animacija stavki menija: ulaze jedna za drugom kada se meni otvori
  const stagger = (idx) => ({
    transitionDelay: isOpen ? `${250 + idx * 70}ms` : '0ms',
  });
  const itemClass = `transition-all duration-500 ease-out ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-gray-900 focus:shadow-lg"
      >
        {t.nav.skipToContent}
      </a>

      {/* Mobilni meni preko cijelog ekrana. Namjerno je van <nav>: backdrop-blur na
          nav-u bi "zarobio" fixed element u visini navbara. */}
      <div
        id="mobile-menu"
        inert={!isOpen}
        className={`fixed inset-0 z-0 bg-gray-950 text-white transition-[clip-path] duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] md:hidden ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        style={{ clipPath: `circle(${isOpen ? '150%' : '0%'} at ${MENU_ORIGIN})` }}
      >
        <GridLines className="text-white/[0.05]" />
        <InkBlobs className="opacity-20" />
        <Halftone className="-right-10 top-10 h-72 w-72 text-white/15" drift />
        <RegistrationMark
          size={260}
          strokeWidth={0.4}
          className="absolute -bottom-24 -right-24 text-white/10 animate-spin-slow"
        />

        <div className="relative flex h-full flex-col overflow-y-auto px-6 pb-8 pt-24">
          <ul className="flex-1">
            {NAV_KEYS.map((key, idx) => (
              <li key={key} className={itemClass} style={stagger(idx)}>
                <NavLink
                  to={to(key)}
                  end={key === 'home'}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `group flex items-center gap-4 border-b border-white/10 py-5 transition-colors ${
                      isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className={`font-display text-sm font-bold tabular-nums ${NUMBER_COLORS[idx]}`}>
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="font-display text-4xl font-extrabold tracking-tight">{t.nav[key]}</span>
                      <ArrowRight
                        className={`ml-auto h-6 w-6 transition-transform group-hover:translate-x-1 ${
                          isActive ? 'text-ink-cyan' : 'text-white/30'
                        }`}
                        aria-hidden="true"
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className={`mt-10 ${itemClass}`} style={stagger(NAV_KEYS.length)}>
            <CmykBar className="mb-6 h-1 w-20" k="bg-white" />
            <div className="grid grid-cols-2 gap-3">
              <a
                href={PHONE_PRIMARY_TEL}
                className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-4 py-3.5 font-semibold transition-colors hover:bg-white/10"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {t.common.call}
              </a>
              <Link
                to={to('order')}
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-3.5 font-semibold uppercase tracking-wide shadow-lg shadow-blue-600/30"
              >
                {t.nav.order}
              </Link>
            </div>

            <ul className="mt-7 space-y-3 text-sm text-gray-400">
              <li>
                <a href={PHONE_PRIMARY_TEL} className="flex items-center gap-3 transition-colors hover:text-white">
                  <Phone className="h-4 w-4 text-ink-cyan" aria-hidden="true" />
                  {PHONE_PRIMARY_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 break-all transition-colors hover:text-white">
                  <Mail className="h-4 w-4 flex-shrink-0 text-ink-magenta" aria-hidden="true" />
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-ink-yellow" aria-hidden="true" />
                {WORKING_HOURS[lang]}
              </li>
            </ul>

            <div className="mt-6 flex gap-3">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition-colors hover:bg-[#1877f2]"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition-colors hover:bg-gradient-to-br hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#8134af]"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav
        aria-label={t.nav.main}
        className={`relative z-10 transition-all duration-500 ${
          isOpen
            ? 'border-b border-transparent bg-transparent'
            : scrolled
              ? 'bg-gray-950/85 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/10'
              : 'bg-gradient-to-b from-gray-950/70 to-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-16' : 'h-16 md:h-20'}`}>
            {/* Logo */}
            <Link to={to('home')} onClick={closeMenu} className="group flex items-center gap-3" aria-label="Štamparija MADEX">
              <img
                src="/logo-madex.webp"
                alt="Štamparija MADEX"
                width="48"
                height="48"
                className={`w-auto transition-all duration-500 group-hover:rotate-[8deg] group-hover:scale-105 ${scrolled ? 'h-10' : 'h-10 md:h-12'}`}
              />
            </Link>

            {/* Desktop meni */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <ul className="flex items-center gap-5 lg:gap-7">
                {NAV_KEYS.map((key) => (
                  <li key={key}>
                    <NavLink
                      to={to(key)}
                      end={key === 'home'}
                      className={({ isActive }) =>
                        `group relative py-2 text-sm lg:text-[15px] font-semibold uppercase tracking-wide transition-colors duration-300 ${
                          isActive ? 'text-white' : 'text-gray-300 hover:text-white'
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          {t.nav[key]}
                          <span
                            aria-hidden="true"
                            className={`absolute -bottom-0.5 left-0 h-0.5 w-full origin-left rounded-full bg-gradient-to-r from-ink-cyan via-blue-500 to-ink-magenta transition-transform duration-300 ${
                              isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                            }`}
                          />
                        </>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <LanguageSwitcher />

              <Link
                to={to('order')}
                className="btn-shine inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-blue-500/50"
              >
                {t.nav.order}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            {/* Mobilni: jezik + dugme za meni */}
            <div className="flex md:hidden items-center gap-3">
              <LanguageSwitcher onNavigate={closeMenu} />
              <button
                type="button"
                onClick={() => setIsOpen((open) => !open)}
                className="relative h-10 w-10 rounded-full text-gray-200 hover:text-white hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                <Menu
                  size={24}
                  aria-hidden="true"
                  className={`absolute transition-all duration-300 ${isOpen ? 'rotate-90 scale-50 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}
                />
                <X
                  size={26}
                  aria-hidden="true"
                  className={`absolute transition-all duration-300 ${isOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-50 opacity-0'}`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Traka napretka čitanja u CMYK bojama */}
      <div
        className={`absolute inset-x-0 bottom-0 z-10 h-0.5 pointer-events-none transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
        aria-hidden="true"
      >
        <div
          ref={progressRef}
          className="h-full origin-left bg-gradient-to-r from-ink-cyan via-ink-magenta to-ink-yellow"
          style={{ transform: 'scaleX(0)' }}
        />
      </div>
    </header>
  );
};

export default Navbar;
