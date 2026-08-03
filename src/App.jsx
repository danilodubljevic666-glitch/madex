// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import NotFoundPage from './pages/NotFoundPage';
import { services } from './data/services';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
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
