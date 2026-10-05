// src/components/GoogleAnalytics.jsx
import { useEffect } from 'react';
import { isPrerender } from '../utils/env';

const GA_ID = 'G-2SWV7EFYBL';

// gtag('config') sam šalje prvi page_view, a GA4 "enhanced measurement"
// bilježi i promjene stranice u SPA (history events) — zato ovdje nema
// ručnog page_view događaja koji bi duplirao posjete.
const GoogleAnalytics = () => {
  useEffect(() => {
    // Prerender (headless Chrome pri build-u) ne smije da se broji kao posjeta,
    // niti GA skripta smije završiti u statičkom HTML-u.
    if (isPrerender()) return;
    if (document.querySelector('script[src*="googletagmanager.com"]')) return;

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);
  }, []);

  return null;
};

export default GoogleAnalytics;
