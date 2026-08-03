import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import GoogleAnalytics from './GoogleAnalytics';

const Layout = () => {
  const location = useLocation();

  // Skroluj na vrh (ili na hash sekciju) pri svakoj promjeni rute
  useEffect(() => {
    if (location.hash) {
      const targetElement = document.getElementById(location.hash.substring(1));
      if (targetElement) {
        window.scrollTo({ top: targetElement.offsetTop - 80, behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen">
      <GoogleAnalytics />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
