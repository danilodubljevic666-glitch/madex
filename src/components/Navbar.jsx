import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/useLanguage';
import { PHONE_PRIMARY_DISPLAY, PHONE_PRIMARY_TEL } from '../data/site';
import LanguageSwitcher from './LanguageSwitcher';

// Svaka stavka navigacije je zasebna stranica sa svojim URL-om na oba jezika.
const NAV_KEYS = ['home', 'services', 'about', 'contact'];

const Navbar = () => {
  const { t, to } = useLanguage();
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

  // Escape zatvara mobilni meni
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  const solid = scrolled || isOpen;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-gray-900 focus:shadow-lg"
      >
        {t.nav.skipToContent}
      </a>

      <nav
        aria-label={t.nav.main}
        className={`transition-all duration-500 ${
          solid
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
                {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobilni meni — visina se animira preko grid-rows */}
        <div
          id="mobile-menu"
          inert={!isOpen}
          className={`md:hidden grid transition-[grid-template-rows] duration-500 ease-out ${
            isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
        >
          <div className="overflow-hidden">
            <div className="px-4 pt-2 pb-6 border-t border-white/10">
              <ul className="space-y-1">
                {NAV_KEYS.map((key, idx) => (
                  <li
                    key={key}
                    className={`transition-all duration-500 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                    style={{ transitionDelay: isOpen ? `${80 + idx * 60}ms` : '0ms' }}
                  >
                    <NavLink
                      to={to(key)}
                      end={key === 'home'}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold uppercase tracking-wide transition-colors ${
                          isActive ? 'bg-white/10 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white'
                        }`
                      }
                    >
                      {t.nav[key]}
                      <ArrowRight className="h-4 w-4 opacity-50" aria-hidden="true" />
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <a
                  href={PHONE_PRIMARY_TEL}
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {t.common.call}
                </a>
                <Link
                  to={to('order')}
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-3 text-sm font-semibold uppercase text-white shadow-lg shadow-blue-600/30"
                >
                  {t.nav.order}
                </Link>
              </div>
              <p className="mt-4 text-center text-sm text-gray-400">{PHONE_PRIMARY_DISPLAY}</p>
            </div>
          </div>
        </div>
      </nav>

      {/* Traka napretka čitanja u CMYK bojama */}
      <div className="absolute inset-x-0 bottom-0 h-0.5 pointer-events-none" aria-hidden="true">
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
