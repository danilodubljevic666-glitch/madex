// src/components/SEOTags.jsx
import { useEffect } from 'react';

const SEOTags = ({ 
  title,
  description,
  keywords,
  image = '/og-image.jpg',
  url = 'https://www.stamparijamadex.com',
  type = 'website',
  currentPage = '',
  pageName = ''
}) => {
  
  // Default vrednosti ako nisu prosleđene
  const pageTitle = title || 'Štamparija MADEX Nikšić - Profesionalna štampa i brendiranje | Crna Gora';
  const pageDescription = description || 'Štamparija MADEX Nikšić - Vodeća štamparija u Crnoj Gori. Profesionalna štampa, brendiranje vozila i objekata. 20+ godina iskustva.';
  const pageKeywords = keywords || 'štamparija, štamparija Nikšić, štamparija Crna Gora, štampa, print, brendiranje, vozila, objekti, digitalna štampa, ofset, grafički dizajn';
  const displayPageName = pageName || (currentPage ? pageTitle.split('|')[0].trim() : 'Početna');
  
  // Formiraj punu putanju
  const fullUrl = currentPage ? `${url}${currentPage.startsWith('/') ? currentPage : `/${currentPage}`}` : url;
  const ogImageUrl = `${url}${image}`;
  
  useEffect(() => {
    console.log('SEOTags mounted for:', fullUrl);
    
    // 1. POSTAVI TITLE
    document.title = pageTitle;
    
    // 2. KREIRAJ I DODAJ META TAGOVE
    const metaTags = [
      // Description
      { name: 'description', content: pageDescription },
      
      // Keywords (za Google, Facebook ignoriše)
      { name: 'keywords', content: pageKeywords },
      
      // Author
      { name: 'author', content: 'Štamparija MADEX Nikšić' },
      
      // Robots
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'googlebot', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
      
      // Open Graph - OBAVEZNI za Facebook
      { property: 'og:title', content: pageTitle },
      { property: 'og:description', content: pageDescription },
      { property: 'og:image', content: ogImageUrl },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'Štamparija MADEX Nikšić - Profesionalna štampa i brendiranje' },
      { property: 'og:type', content: type },
      { property: 'og:url', content: fullUrl },
      { property: 'og:locale', content: 'sr_ME' },
      { property: 'og:site_name', content: 'Štamparija MADEX' },
      
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: pageTitle },
      { name: 'twitter:description', content: pageDescription },
      { name: 'twitter:image', content: ogImageUrl },
      { name: 'twitter:image:alt', content: 'Štamparija MADEX Nikšić - Profesionalna štampa i brendiranje' },
      { name: 'twitter:creator', content: '@stamparijamadex' },
      
      // Dodatni SEO tagovi
      { name: 'language', content: 'sr' },
      { name: 'geo.region', content: 'ME-NI' },
      { name: 'geo.placename', content: 'Nikšić' },
      { name: 'geo.position', content: '42.7731;18.9445' },
      { name: 'ICBM', content: '42.7731, 18.9445' },
      
      // Mobile specific
      { name: 'theme-color', content: '#1e40af' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      
      // iOS specific
      { name: 'apple-mobile-web-app-title', content: 'Štamparija MADEX' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
    ];
    
    // DODAJ ILI AŽURIRAJ SVE META TAGOVE
    metaTags.forEach(tag => {
      const selector = tag.property 
        ? `meta[property="${tag.property}"]` 
        : `meta[name="${tag.name}"]`;
      
      let element = document.querySelector(selector);
      
      if (!element) {
        // Kreiraj novi meta tag
        element = document.createElement('meta');
        if (tag.property) {
          element.setAttribute('property', tag.property);
        } else {
          element.setAttribute('name', tag.name);
        }
        document.head.appendChild(element);
      }
      
      // Postavi content (može da ažurira postojeći)
      element.setAttribute('content', tag.content);
    });
    
    // 3. CANONICAL LINK
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);
    
    // 4. FAVICON I OSTALI LINK TAGOVI
    const linkTags = [
      { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon', sizes: 'any' },
      { rel: 'icon', href: '/icon.svg', type: 'image/svg+xml' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
    ];
    
    linkTags.forEach(tag => {
      const existing = document.querySelector(`link[rel="${tag.rel}"]`);
      if (!existing) {
        const link = document.createElement('link');
        Object.keys(tag).forEach(key => {
          link.setAttribute(key, tag[key]);
        });
        document.head.appendChild(link);
      }
    });
    
    // 5. STRUCTURED DATA (JSON-LD)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Štamparija MADEX",
      "image": ogImageUrl,
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
    
    // 6. BREADCRUMB STRUCTURED DATA (samo za podstranice)
    let allStructuredData = [structuredData];
    
    if (currentPage) {
      const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Početna",
            "item": url
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": displayPageName.replace('Štamparija MADEX Nikšić - ', ''),
            "item": fullUrl
          }
        ]
      };
      allStructuredData.push(breadcrumbData);
    }
    
    // 7. DODAJ STRUCTURED DATA SCRIPT
    const scriptId = 'structured-data-script';
    let script = document.getElementById(scriptId);
    
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    
    // Ako ima više structured data objekata, pošalji ih kao array
    script.textContent = JSON.stringify(
      allStructuredData.length > 1 ? allStructuredData : structuredData
    );
    
    // 8. LOG ZA DEBUG (možeš da ukloniš kasnije)
    console.log('SEO tagovi dodati:', {
      title: pageTitle,
      url: fullUrl,
      ogImage: ogImageUrl,
      structuredData: allStructuredData.length
    });
    
    // 9. CLEANUP FUNCTION
    return () => {
      // Ne brišemo meta tagove jer su globalni za celu app
      // Samo uklanjanje structured data script-a ako želiš
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
    
  }, [
    pageTitle, 
    pageDescription, 
    pageKeywords, 
    ogImageUrl, 
    fullUrl, 
    type, 
    currentPage, 
    displayPageName, 
    url
  ]);
  
  // Ova komponenta ne renderuje ništa u DOM
  return null;
};

export default SEOTags;