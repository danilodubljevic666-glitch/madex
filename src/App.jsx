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
import { services } from './data/services';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />

          {/* Samostalne stranice iz glavne navigacije — svaka sa svojim
              URL-om, meta tagovima i JSON-LD podacima radi SEO-a. */}
          <Route path="usluge" element={<ServicesPage />} />
          <Route path="o-nama" element={<AboutPage />} />
          <Route path="kontakt" element={<ContactPage />} />
          <Route path="porucite" element={<OrderPage />} />

          {services.map((service) => (
            <Route
              key={service.slug}
              path={service.slug}
              element={<ServicePage slug={service.slug} />}
            />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
