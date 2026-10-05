import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { normalizePath } from './i18n/routes';
import './index.css';

const container = document.getElementById('root');
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Prerenderovane stranice (scripts/prerender.mjs) već sadrže gotov HTML, pa ga
// React samo "oživi" (hydrate) umjesto da ga obriše i iscrta ponovo — sadržaj
// se ne trza i animacije se ne pokreću dva puta. Vercel za nepoznate putanje
// vraća HTML početne strane, pa hidriramo samo kada HTML odgovara URL-u.
const prerenderedPath = container.dataset.prerenderedPath;

if (prerenderedPath && prerenderedPath === normalizePath(window.location.pathname)) {
  ReactDOM.hydrateRoot(container, app);
} else {
  container.textContent = '';
  ReactDOM.createRoot(container).render(app);
}
