import { Link, useLocation } from 'react-router-dom';
import { LANGS, LOCALE, PAGE_PATHS, getAlternates } from '../i18n/routes';
import { useLanguage } from '../i18n/useLanguage';

const LABELS = { sr: 'ME', en: 'EN' };

// Prebacuje na istu stranicu na drugom jeziku (npr. /usluge ↔ /en/services).
// Ako stranica nema prevod (404), vodi na početnu tog jezika.
const LanguageSwitcher = ({ onNavigate, className = '' }) => {
  const { pathname } = useLocation();
  const { lang, t } = useLanguage();
  const alternates = getAlternates(pathname);

  return (
    <div
      role="group"
      aria-label={t.lang.label}
      className={`inline-flex items-center rounded-full bg-white/5 p-1 ring-1 ring-white/15 ${className}`}
    >
      {LANGS.map((l) => {
        const active = l === lang;
        return (
          <Link
            key={l}
            to={alternates?.[l] ?? PAGE_PATHS.home[l]}
            hrefLang={LOCALE[l].hreflang}
            lang={LOCALE[l].hreflang}
            onClick={onNavigate}
            aria-current={active ? 'true' : undefined}
            aria-label={t.lang.names[l]}
            title={t.lang.names[l]}
            className={`px-2.5 py-1 rounded-full text-xs font-bold tracking-wider transition-colors duration-300 ${
              active ? 'bg-white text-gray-900 shadow' : 'text-gray-300 hover:text-white'
            }`}
          >
            {LABELS[l]}
          </Link>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
