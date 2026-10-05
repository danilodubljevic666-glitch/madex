import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '../i18n/useLanguage';
import { CmykBar, CmykRosette, GridLines, Halftone, InkBlobs, RegistrationMark } from './Decor';

// Zajednički hero za samostalne stranice (usluge, o nama, kontakt, poručite, pojedinačne usluge).
// Breadcrumb odgovara BreadcrumbList schema podacima iz SEOTags (isti parentCrumbs).
// title + titleAccent: h1 u dva reda. Na stranicama iz menija prvi red je isti naziv
// kao u meniju i breadcrumb-u ("Usluge", "O nama"...) — iz toga Google pravi sitelinkove.
const PageHero = ({ icon: Icon, badge, title, titleAccent, lead, crumb, parentCrumbs = [], children }) => {
  const { t, to } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gray-950 pb-16 pt-28 text-white md:pb-24 md:pt-36">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.35),transparent_55%)]" />
      <GridLines className="text-white/[0.05]" />
      <InkBlobs className="opacity-[0.15]" />
      <Halftone className="-right-10 top-0 h-[70%] w-[45%] text-white/15" drift />
      <RegistrationMark size={64} className="absolute bottom-10 left-[4%] hidden text-white/20 animate-spin-slow md:block" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-8">
          <nav aria-label={t.common.breadcrumb} className="animate-in mb-6 text-sm text-gray-400">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link to={to('home')} className="inline-flex items-center gap-1.5 transition-colors hover:text-white">
                  <Home className="h-3.5 w-3.5" aria-hidden="true" />
                  {t.common.home}
                </Link>
              </li>
              {parentCrumbs.map((parent) => (
                <li key={parent.path} className="flex items-center gap-1.5">
                  <ChevronRight className="h-4 w-4 text-gray-600" aria-hidden="true" />
                  <Link to={parent.path} className="transition-colors hover:text-white">
                    {parent.name}
                  </Link>
                </li>
              ))}
              <li className="flex items-center gap-1.5">
                <ChevronRight className="h-4 w-4 text-gray-600" aria-hidden="true" />
                <span aria-current="page" className="text-gray-200">
                  {crumb}
                </span>
              </li>
            </ol>
          </nav>

          {badge && (
            <p
              className="animate-in mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold tracking-wider text-white ring-1 ring-white/15 backdrop-blur-md md:text-sm"
              style={{ '--d': '80ms' }}
            >
              {Icon && <Icon className="h-4 w-4 text-ink-cyan" aria-hidden="true" />}
              {badge}
            </p>
          )}

          <h1
            className="animate-in max-w-3xl text-3xl font-extrabold leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl"
            style={{ '--d': '160ms' }}
          >
            {title}
            {titleAccent && (
              <>
                {' '}
                <span className="text-gradient-light block pb-1">{titleAccent}</span>
              </>
            )}
          </h1>

          <CmykBar animated delay={500} className="mt-6 h-1.5 w-28" k="bg-white" />

          {lead && (
            <p
              className="animate-in mt-6 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl"
              style={{ '--d': '260ms' }}
            >
              {lead}
            </p>
          )}

          {children && (
            <div className="animate-in mt-9 flex flex-col gap-4 sm:flex-row" style={{ '--d': '360ms' }}>
              {children}
            </div>
          )}
        </div>

        <div className="hidden lg:col-span-4 lg:block">
          <div className="animate-in" style={{ '--d': '300ms' }}>
            <CmykRosette className="mx-auto h-72 w-72 xl:h-80 xl:w-80">
              {Icon && (
                <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gray-950/80 shadow-2xl ring-1 ring-white/20 backdrop-blur-md">
                  <Icon className="h-11 w-11 text-white" strokeWidth={1.5} aria-hidden="true" />
                </div>
              )}
            </CmykRosette>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
