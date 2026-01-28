// src/components/SEOTags.jsx
import { useEffect } from 'react';

const SEOTags = ({ 
  title = 'Štamparija MADEX Nikšić - Profesionalna štampa i brendiranje | Crna Gora',
  description = 'Štamparija MADEX Nikšić - Vodeća štamparija u Crnoj Gori. Profesionalna štampa, brendiranje vozila i objekata. 20+ godina iskustva.',
  keywords = 'štamparija, štamparija Nikšić, štamparija Crna Gora, štampa, print, brendiranje, vozila, objekti, digitalna štampa, ofset, grafički dizajn',
  image = '/og-image.jpg',
  url = 'https://www.stamparijamadex.com',
  type = 'website',
  currentPage = ''
}) => {
  
  // Kreiramo full URL - korigovano za trailing slash
  const fullUrl = currentPage ? `${url}${currentPage.startsWith('/') ? currentPage : `/${currentPage}`}` : url;
  
  // Uklanjamo title iz breadcrumb-a da ne bi bilo duplikata
  const pageName = title.split('|')[0].trim().replace('Štamparija MADEX Nikšić - ', '');
  
  useEffect(() => {
    // Postavi title
    document.title = title;
    
    // Kreiraj structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Štamparija MADEX",
      "image": `${url}${image}`,
      "@id": url,
      "url": url,
      "telephone": "+382-68-123-456", // PROMENI NA PRAVI BROJ
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Trg Slobode bb",
        "addressLocality": "Nikšić",
        "postalCode": "81400",
        "addressCountry": "ME",
        "addressRegion": "Nikšić"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 42.7731,
        "longitude": 18.9445
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "16:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "13:00"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/stamparijamadexniksic",
        "https://www.instagram.com/stamparijamadex_me"
      ]
    };
    
    // Breadcrumb structured data
    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Početna",
          "item": url
        }
      ]
    };
    
    // Ako ima currentPage, dodajemo i taj element
    if (currentPage) {
      breadcrumbData.itemListElement.push({
        "@type": "ListItem",
        "position": 2,
        "name": pageName,
        "item": fullUrl
      });
    }
    
    // Osnovni meta tagovi
    const metaTags = [
      // Description
      { name: 'description', content: description },
      
      // Keywords
      { name: 'keywords', content: keywords },
      
      // Author
      { name: 'author', content: 'Štamparija MADEX Nikšić' },
      
      // Robots
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'googlebot', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
      
      // Open Graph
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: `${url}${image}` },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:type', content: type },
      { property: 'og:url', content: fullUrl },
      { property: 'og:locale', content: 'sr_ME' },
      { property: 'og:site_name', content: 'Štamparija MADEX' },
      
      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: `${url}${image}` },
      { name: 'twitter:creator', content: '@stamparijamadex' },
      
      // Dodatni SEO tagovi
      { name: 'language', content: 'sr' },
      { name: 'geo.region', content: 'ME-NI' },
      { name: 'geo.placename', content: 'Nikšić' },
      { name: 'geo.position', content: '42.7731;18.9445' },
      { name: 'ICBM', content: '42.7731, 18.9445' },
    ];
    
    // Dodaj sve meta tagove
    metaTags.forEach(tag => {
      const existing = document.querySelector(
        tag.property 
          ? `meta[property="${tag.property}"]` 
          : `meta[name="${tag.name}"]`
      );
      
      if (!existing) {
        const meta = document.createElement('meta');
        if (tag.property) {
          meta.setAttribute('property', tag.property);
        } else {
          meta.setAttribute('name', tag.name);
        }
        meta.setAttribute('content', tag.content);
        document.head.appendChild(meta);
      }
    });
    
    // Dodaj canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);
    
    // Dodaj structured data script
    const scriptId = 'structured-data-script';
    let script = document.getElementById(scriptId);
    
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    
    // Kombinuj structured data
    const allStructuredData = [structuredData, breadcrumbData];
    script.textContent = JSON.stringify(allStructuredData.length > 1 ? allStructuredData : structuredData);
    
    // Cleanup pri unmount
    return () => {
      // Možeš da ukloniš meta tagove ako želiš, ali nije obavezno
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [title, description, keywords, image, url, type, currentPage, fullUrl, pageName]);
  
  // Ova komponenta ne renderuje ništa u DOM
  return null;
};

export default SEOTags;