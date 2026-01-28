// src/components/GoogleAnalytics.jsx
import { useEffect } from 'react';

const GoogleAnalytics = () => {
  useEffect(() => {
    // Dodaj gtag script ako ne postoji
    if (!document.querySelector('script[src*="googletagmanager.com"]')) {
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-2SWV7EFYBL';
      document.head.appendChild(script1);
      
      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-2SWV7EFYBL');
      `;
      document.head.appendChild(script2);
    }
    
    // Track pageview
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
    }
  }, []);
  
  return null;
};

export default GoogleAnalytics;