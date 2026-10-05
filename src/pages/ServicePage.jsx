import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, Users, ArrowRight, Check, Images, HelpCircle } from 'lucide-react';
import SEOTags from '../components/SEOTags';
import PageHero from '../components/PageHero';
import FaqList from '../components/FaqList';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import { CmykBar, Halftone, RegistrationMark } from '../components/Decor';
import { useLanguage } from '../i18n/useLanguage';
import { PAGE_PATHS } from '../i18n/routes';
import { getService } from '../data/services';
import { SERVICE_ICONS } from '../data/serviceIcons';
import { SITE_URL, PHONE_PRIMARY_DISPLAY, PHONE_PRIMARY_TEL, LOCAL_BUSINESS_PROVIDER, COUNTRY_NAME } from '../data/site';
import NotFoundPage from './NotFoundPage';

const ServicePage = ({ id }) => {
  const { lang, t, to } = useLanguage();
  const service = getService(id, lang);

  const parentCrumbs = useMemo(
    () => [{ name: t.nav.services, path: PAGE_PATHS.services[lang] }],
    [t, lang]
  );

  const extraSchema = useMemo(() => {
    if (!service) return [];
    const pageUrl = `${SITE_URL}${service.path}`;
    return [
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: service.navLabel,
        name: service.h1,
        description: service.metaDescription,
        url: pageUrl,
        ...(service.images.length > 0 && { image: service.images.map((img) => `${SITE_URL}${img.src}`) }),
        areaServed: [
          { '@type': 'City', name: 'Nikšić' },
          { '@type': 'Country', name: COUNTRY_NAME[lang] },
        ],
        provider: LOCAL_BUSINESS_PROVIDER,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: service.faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    ];
  }, [service, lang]);

  if (!service) return <NotFoundPage />;

  const Icon = SERVICE_ICONS[service.icon];
  const s = t.service;
  const relatedServices = (service.related || []).map((relId) => getService(relId, lang)).filter(Boolean);

  return (
    <>
      <SEOTags
        title={service.metaTitle}
        description={service.metaDescription}
        keywords={service.keywords}
        pageName={service.navLabel}
        parentCrumbs={parentCrumbs}
        extraSchema={extraSchema}
      />

      <PageHero
        icon={Icon}
        badge={service.badge}
        crumb={service.navLabel}
        parentCrumbs={parentCrumbs}
        title={service.h1}
        lead={service.heroLead}
      >
        <Button href={PHONE_PRIMARY_TEL} size="lg">
          <Phone className="h-5 w-5" aria-hidden="true" />
          {t.common.call} {PHONE_PRIMARY_DISPLAY}
        </Button>
        <Button to={to('contact')} variant="outline" size="lg">
          {t.common.sendInquiry}
        </Button>
      </PageHero>

      <section className="relative overflow-clip bg-white py-16 md:py-24">
        <Halftone className="-left-20 top-40 h-80 w-80 text-blue-200/60" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Glavni sadržaj */}
            <div className="space-y-14 lg:col-span-8">
              {service.sections.map((section, idx) => (
                <Reveal key={section.heading} as="section" className="relative">
                  <div className="mb-4 flex items-center gap-4">
                    <span className="font-display text-sm font-bold tracking-widest text-blue-600">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <CmykBar className="h-1 w-12" />
                  </div>
                  <h2 className="mb-5 text-2xl font-extrabold text-gray-900 md:text-3xl">{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)} className="mb-4 text-base leading-relaxed text-gray-600 md:text-lg">
                      {paragraph}
                    </p>
                  ))}
                </Reveal>
              ))}

              {service.images.length > 0 && (
                <Reveal as="section">
                  <h2 className="mb-6 flex items-center gap-3 text-2xl font-extrabold text-gray-900 md:text-3xl">
                    <Images className="h-7 w-7 text-blue-600" aria-hidden="true" />
                    {s.examples}
                  </h2>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                    {service.images.map((img, idx) => (
                      <figure
                        key={img.src}
                        className={`group relative aspect-square overflow-hidden rounded-2xl bg-gray-100 shadow-lg ${
                          idx === 1 ? 'sm:translate-y-6' : ''
                        }`}
                      >
                        <img
                          src={img.src}
                          alt={img.alt}
                          loading="lazy"
                          width="600"
                          height="600"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-gray-950/90 to-transparent p-4 text-sm text-white transition-transform duration-500 group-hover:translate-y-0">
                          {img.alt}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </Reveal>
              )}

              <section className={service.images.length > 0 ? 'pt-6' : ''}>
                <Reveal>
                  <h2 className="mb-6 flex items-center gap-3 text-2xl font-extrabold text-gray-900 md:text-3xl">
                    <HelpCircle className="h-7 w-7 text-blue-600" aria-hidden="true" />
                    {s.faq}
                  </h2>
                </Reveal>
                <FaqList items={service.faq} />
              </section>
            </div>

            {/* Bočna kolona */}
            <aside className="lg:col-span-4">
              <div className="space-y-6 lg:sticky lg:top-28">
                <Reveal variant="right">
                  <div className="rounded-3xl bg-blue-50/70 p-7 ring-1 ring-blue-100">
                    <h2 className="mb-5 flex items-center gap-2 text-lg font-bold text-gray-900">
                      <CheckCircle className="h-5 w-5 text-blue-600" aria-hidden="true" />
                      {s.includes}
                    </h2>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                            <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                          </span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>

                <Reveal variant="right" delay={80}>
                  <div className="rounded-3xl bg-gray-50 p-7 ring-1 ring-gray-100">
                    <h2 className="mb-5 flex items-center gap-2 text-lg font-bold text-gray-900">
                      <Users className="h-5 w-5 text-ink-magenta" aria-hidden="true" />
                      {s.forWho}
                    </h2>
                    <ul className="space-y-3">
                      {service.forWho.map((who) => (
                        <li key={who} className="flex items-start gap-3 text-gray-700">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ink-magenta" aria-hidden="true" />
                          {who}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>

                <Reveal variant="right" delay={160}>
                  <div className="relative overflow-hidden rounded-3xl bg-gray-950 p-7 text-white shadow-2xl shadow-gray-900/20">
                    <Halftone className="-right-8 -top-8 h-40 w-40 text-ink-cyan/30" />
                    <RegistrationMark size={110} strokeWidth={0.6} className="absolute -bottom-8 -left-8 text-white/10 animate-spin-slow" />
                    <div className="relative">
                      <h2 className="text-xl font-bold">{s.interested}</h2>
                      <p className="mt-2 mb-6 text-sm text-gray-400 md:text-base">{s.interestedText}</p>
                      <div className="flex flex-col gap-3">
                        <Button href={PHONE_PRIMARY_TEL}>
                          <Phone className="h-4 w-4" aria-hidden="true" />
                          {PHONE_PRIMARY_DISPLAY}
                        </Button>
                        <Button to={to('contact')} variant="soft">
                          {t.common.sendInquiry}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </aside>
          </div>

          {/* Povezane usluge */}
          {relatedServices.length > 0 && (
            <div className="mt-20 border-t border-gray-100 pt-14 md:mt-24">
              <Reveal>
                <h2 className="mb-8 text-2xl font-extrabold text-gray-900 md:text-3xl">{s.related}</h2>
              </Reveal>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                {relatedServices.map((rel, idx) => {
                  const RelIcon = SERVICE_ICONS[rel.icon];
                  return (
                    <Reveal key={rel.id} delay={idx * 90}>
                      <Link
                        to={rel.path}
                        className="card-glow group relative flex h-full items-center gap-4 rounded-2xl bg-white p-5 ring-1 ring-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-transparent"
                      >
                        <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-600/30 transition-transform duration-300 group-hover:-rotate-6">
                          <RelIcon className="h-6 w-6" aria-hidden="true" />
                        </span>
                        <span className="flex-1 font-semibold text-gray-900 transition-colors group-hover:text-blue-700">
                          {rel.navLabel}
                        </span>
                        <ArrowRight className="h-5 w-5 text-gray-300 transition-all group-hover:translate-x-1 group-hover:text-blue-600" aria-hidden="true" />
                      </Link>
                    </Reveal>
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
