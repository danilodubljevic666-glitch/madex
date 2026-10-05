// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import OrderPage from './pages/OrderPage';
import ServicePage from './pages/ServicePage';
import NotFoundPage from './pages/NotFoundPage';
import { getServices } from './data/services';
import { PAGE_PATHS } from './i18n/routes';

const PAGES = {
  services: ServicesPage,
  about: AboutPage,
  contact: ContactPage,
  order: OrderPage,
};

// Iste stranice na oba jezika: srpski na korijenu (/usluge), engleski pod /en
// (/en/services). Jezik se čita iz URL-a (useLanguage), pa stranice ne
// dobijaju nikakav prop za jezik. Putanje su definisane u src/i18n/routes.js.
const localizedRoutes = (lang) => [
  <Route key={`${lang}-home`} path={PAGE_PATHS.home[lang]} element={<HomePage />} />,
  ...Object.entries(PAGES).map(([key, Page]) => (
    <Route key={`${lang}-${key}`} path={PAGE_PATHS[key][lang]} element={<Page />} />
  )),
  ...getServices(lang).map((service) => (
    <Route key={`${lang}-${service.id}`} path={service.path} element={<ServicePage id={service.id} />} />
  )),
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {localizedRoutes('sr')}
          {localizedRoutes('en')}
          <Route path="en/*" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
