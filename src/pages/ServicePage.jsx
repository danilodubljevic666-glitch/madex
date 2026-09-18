import { Link } from 'react-router-dom';
import { Shirt, Printer, Layers, Car, Building, Image, Palette, Package, Grid, CreditCard, Phone, CheckCircle, ChevronRight } from 'lucide-react';
import SEOTags from '../components/SEOTags';
import { getServiceBySlug } from '../data/services';

const ICONS = { Shirt, Printer, Layers, Car, Building, Image, Palette, Package, Grid, CreditCard };

const PHONE_DISPLAY = '+382 68 048 655';
const PHONE_TEL = 'tel:+38268048655';

const ServicePage = ({ slug }) => {
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <p className="text-gray-600">Stranica nije pronađena.</p>
      </div>
    );
  }

  const Icon = ICONS[service.icon] || Printer;
  const pageUrl = `https://www.stamparijamadex.com/${service.slug}`;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.navLabel,
    name: service.h1,
    description: service.metaDescription,
    url: pageUrl,
    areaServed: [
      {
        '@type': 'City',
        name: 'Nikšić',
      },
      {
        '@type': 'Country',
        name: 'Crna Gora',
      },
    ],
    provider: {
      '@type': 'LocalBusiness',
      name: 'Štamparija MADEX',
      telephone: '+382 68 048 655',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Bulevar 13. jul 234',
        addressLocality: 'Nikšić',
        postalCode: '81400',
        addressCountry: 'ME',
      },
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  const relatedServices = (service.related || [])
    .map((relSlug) => getServiceBySlug(relSlug))
    .filter(Boolean);

  return (
    <>
      <SEOTags
        title={service.metaTitle}
        description={service.metaDescription}
        keywords={service.keywords}
        currentPage={`/${service.slug}`}
        pageName={service.navLabel}
        extraSchema={[serviceSchema, faqSchema]}
      />

      {/* Hero */}
      <section className="bg-gray-900 pt-28 pb-16 md:pt-36 md:pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-400">
            <ol className="flex items-center flex-wrap gap-1">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">Početna</Link>
              </li>
              <li className="flex items-center gap-1">
                <ChevronRight className="w-4 h-4" />
                <span className="text-gray-200">{service.navLabel}</span>
              </li>
            </ol>
          </nav>

          <span className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-blue-600/20 text-blue-400 font-semibold text-xs md:text-sm mb-6">
            <Icon className="w-4 h-4 mr-2" />
            {service.badge}
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl">
            {service.h1}
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-8">
            {service.heroLead}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={PHONE_TEL}
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Pozovite {PHONE_DISPLAY}
            </a>
            <Link
              to="/kontakt"
              className="inline-flex items-center justify-center bg-transparent text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-semibold border-2 border-white/40 hover:bg-white/10 transition-all duration-300"
            >
              Pošaljite upit
            </Link>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 md:gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10 md:space-y-12">
              {service.sections.map((section, idx) => (
                <div key={idx}>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                      {p}
                    </p>
                  ))}
                </div>
              ))}

              {/* Images */}
              {service.images.length > 0 && (
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Primjeri radova
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                    {service.images.map((img, idx) => (
                      <div key={idx} className="rounded-xl overflow-hidden shadow-lg aspect-square bg-gray-100">
                        <img
                          src={img.src}
                          alt={img.alt}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQ */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Najčešća pitanja
                </h2>
                <div className="space-y-4">
                  {service.faq.map((item, idx) => (
                    <details key={idx} className="bg-gray-50 rounded-xl p-5 group" open={idx === 0}>
                      <summary className="font-semibold text-gray-900 cursor-pointer text-base md:text-lg list-none flex items-center justify-between">
                        {item.q}
                        <ChevronRight className="w-5 h-5 text-blue-600 transition-transform group-open:rotate-90 flex-shrink-0 ml-3" />
                      </summary>
                      <p className="text-gray-600 mt-3 leading-relaxed">{item.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6 md:space-y-8">
              <div className="bg-blue-50 rounded-2xl p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Šta uključuje</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Za koga je idealno</h3>
                <ul className="space-y-3">
                  {service.forWho.map((who, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{who}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 md:p-8 text-white">
                <h3 className="text-lg md:text-xl font-bold mb-3">Zainteresovani ste?</h3>
                <p className="text-blue-100 mb-5 text-sm md:text-base">
                  Pozovite nas ili nam pošaljite upit — dajemo besplatnu procjenu i ponudu bez obaveze.
                </p>
                <a
                  href={PHONE_TEL}
                  className="flex items-center justify-center gap-2 bg-white text-blue-700 px-5 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 mb-3"
                >
                  <Phone className="w-4 h-4" />
                  {PHONE_DISPLAY}
                </a>
                <Link
                  to="/kontakt"
                  className="flex items-center justify-center gap-2 bg-blue-800/40 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-800/60 transition-colors duration-300 border border-white/20"
                >
                  Pošaljite upit
                </Link>
              </div>
            </div>
          </div>

          {/* Related services */}
          {relatedServices.length > 0 && (
            <div className="mt-16 md:mt-20 pt-10 md:pt-12 border-t border-gray-100">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
                Pogledajte i ostale usluge
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                {relatedServices.map((rel) => {
                  const RelIcon = ICONS[rel.icon] || Printer;
                  return (
                    <Link
                      key={rel.slug}
                      to={`/${rel.slug}`}
                      className="group bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:border-blue-200 transition-all duration-300 flex items-center"
                    >
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                        <RelIcon className="w-6 h-6 text-blue-600" />
                      </div>
                      <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {rel.navLabel}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ServicePage;
