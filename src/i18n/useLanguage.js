import { useLocation } from 'react-router-dom';
import { langFromPath, pagePath } from './routes';
import { UI } from './ui';

// Jezik se čita iz URL-a (/en/... = engleski), pa nije potreban Provider:
// svaka komponenta ispod routera dobija isti jezik kao i stranica.
export const useLanguage = () => {
  const { pathname } = useLocation();
  const lang = langFromPath(pathname);

  return {
    lang,
    t: UI[lang],
    // putanja stranice iz navigacije na trenutnom jeziku, npr. to('contact')
    to: (key) => pagePath(key, lang),
  };
};
