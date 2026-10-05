// true kada stranicu otvara headless Chrome iz scripts/prerender.mjs.
// Tada ne pokrećemo analitiku ni animacije koje mijenjaju HTML, da bi snimljeni
// HTML bio isti kao prvi render u browseru (uslov za hydrateRoot u main.jsx).
export const isPrerender = () => typeof navigator !== 'undefined' && navigator.webdriver === true;
